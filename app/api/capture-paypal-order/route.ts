import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { orderId } = await request.json()
    
    if (!orderId) {
      console.error('Missing orderId in request')
      return NextResponse.json({ error: 'Order ID is required', success: false }, { status: 400 })
    }
    
    console.log('Attempting to capture order:', orderId)
    
    // Clean up PAYPAL_MODE value (remove any comments)
    const paypalMode = (process.env.PAYPAL_MODE || 'sandbox').split('#')[0].trim();
    
    // PayPal API base URL depends on mode (sandbox or live)
    const baseUrl = paypalMode === 'live'
      ? 'https://api-m.paypal.com'
      : 'https://api-m.sandbox.paypal.com'
    
    console.log('Using PayPal API base URL for capture:', baseUrl);
    
    // Get access token
    try {
      const authResponse = await fetch(`${baseUrl}/v1/oauth2/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${Buffer.from(`${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET}`).toString('base64')}`
        },
        body: 'grant_type=client_credentials'
      })

      const authData = await authResponse.json()
      
      if (!authResponse.ok) {
        console.error('PayPal auth error:', authData)
        return NextResponse.json({ 
          error: 'Failed to authenticate with PayPal', 
          details: authData,
          success: false 
        }, { status: 500 })
      }

      console.log('Successfully obtained PayPal access token')

      // Capture order
      try {
        const captureResponse = await fetch(`${baseUrl}/v2/checkout/orders/${orderId}/capture`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authData.access_token}`
          }
        })

        const captureData = await captureResponse.json()
        console.log('Capture response status:', captureResponse.status)
        console.log('Capture data:', JSON.stringify(captureData, null, 2))
        
        if (!captureResponse.ok) {
          console.error('PayPal capture error:', captureData)
          
          // For sandbox testing, simulate success if we get specific errors
          if (process.env.NODE_ENV === 'development' && 
              captureData.name === 'UNPROCESSABLE_ENTITY') {
            console.log('Development mode: Simulating successful capture despite PayPal error')
            return NextResponse.json({ 
              success: true,
              orderId: orderId,
              status: 'COMPLETED',
              simulated: true
            })
          }
          
          return NextResponse.json({ 
            error: 'Failed to capture PayPal payment', 
            details: captureData,
            success: false 
          }, { status: 500 })
        }

        // Check if payment was completed
        const paymentStatus = captureData.status
        
        if (paymentStatus === 'COMPLETED') {
          // Here you would typically update your database to record the payment
          console.log('Payment completed successfully!')
          
          return NextResponse.json({ 
            success: true,
            orderId: captureData.id,
            status: paymentStatus
          })
        } else {
          console.log('Payment not completed, status:', paymentStatus)
          return NextResponse.json({ 
            success: false,
            status: paymentStatus,
            message: 'Payment not completed'
          }, { status: 400 })
        }
      } catch (captureError) {
        console.error('Exception during PayPal capture:', captureError)
        
        // For development, simulate success on error
        if (process.env.NODE_ENV === 'development') {
          console.log('Development mode: Simulating successful capture despite exception')
          return NextResponse.json({ 
            success: true,
            orderId: orderId,
            status: 'COMPLETED',
            simulated: true
          })
        }
        
        return NextResponse.json({ 
          error: 'Error during payment capture', 
          success: false 
        }, { status: 500 })
      }
    } catch (authError) {
      console.error('Exception during PayPal authentication:', authError)
      return NextResponse.json({ 
        error: 'Error during PayPal authentication', 
        success: false 
      }, { status: 500 })
    }
  } catch (error) {
    console.error('Error processing capture request:', error)
    return NextResponse.json({ 
      error: 'Internal server error', 
      success: false 
    }, { status: 500 })
  }
} 