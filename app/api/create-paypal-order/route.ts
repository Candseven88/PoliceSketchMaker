import { NextResponse } from 'next/server'

export async function POST() {
  try {
    // Clean up PAYPAL_MODE value (remove any comments)
    const paypalMode = (process.env.PAYPAL_MODE || 'sandbox').split('#')[0].trim();
    
    // PayPal API base URL depends on mode (sandbox or live)
    const baseUrl = paypalMode === 'live'
      ? 'https://api-m.paypal.com'
      : 'https://api-m.sandbox.paypal.com'
    
    console.log('Using PayPal API base URL:', baseUrl);
    
    // Get access token
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
      return NextResponse.json({ error: 'Failed to authenticate with PayPal' }, { status: 500 })
    }

    // Create order
    const orderResponse = await fetch(`${baseUrl}/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authData.access_token}`
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: '0.80'
            },
            description: 'Police Sketch Generation'
          }
        ],
        application_context: {
          brand_name: 'PoliceSketchMaker',
          landing_page: 'NO_PREFERENCE',
          user_action: 'PAY_NOW',
          return_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment-success`,
          cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment-cancel`
        }
      })
    })

    const orderData = await orderResponse.json()
    
    if (!orderResponse.ok) {
      console.error('PayPal order creation error:', orderData)
      return NextResponse.json({ error: 'Failed to create PayPal order' }, { status: 500 })
    }

    return NextResponse.json({ id: orderData.id })
  } catch (error) {
    console.error('Error creating PayPal order:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 