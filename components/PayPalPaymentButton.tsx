'use client'

import { useState } from 'react'
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'
import toast from 'react-hot-toast'

interface PayPalPaymentButtonProps {
  onSuccess: () => void
  disabled?: boolean
}

export default function PayPalPaymentButton({ onSuccess, disabled = false }: PayPalPaymentButtonProps) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [{ isPending, isRejected }] = usePayPalScriptReducer();

  // Create order handler
  const createOrder = async () => {
    try {
      setIsProcessing(true)
      console.log('Creating PayPal order...')
      
      const response = await fetch('/api/create-paypal-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      })

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Failed to create order:', errorData);
        throw new Error(errorData.error || 'Failed to create order');
      }

      const data = await response.json()
      console.log('PayPal order created successfully:', data.id)
      return data.id
    } catch (error) {
      console.error('Error creating PayPal order:', error)
      toast.error('Failed to create order. Please try again.')
      setIsProcessing(false)
      throw error
    }
  }

  // Payment approved handler
  const onApprove = async (data: any) => {
    try {
      console.log('Payment approved, capturing order:', data.orderID)
      // Call your backend to capture the order
      const response = await fetch('/api/capture-paypal-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderId: data.orderID
        })
      })

      const captureData = await response.json()
      
      if (!response.ok || !captureData.success) {
        console.error('Payment capture failed:', captureData)
        throw new Error(captureData.error || 'Payment failed')
      }

      console.log('Payment captured successfully:', captureData)
      // Call the success callback to proceed with sketch generation
      onSuccess()
      toast.success('Payment successful! Generating your sketch...')
    } catch (error) {
      console.error('Error processing PayPal payment:', error)
      toast.error('Payment processing failed. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  // Error handler
  const onError = (err: any) => {
    console.error('PayPal error:', err)
    toast.error('Payment failed. Please try again.')
    setIsProcessing(false)
  }

  // Cancel handler
  const onCancel = () => {
    toast.error('Payment cancelled')
    setIsProcessing(false)
  }

  return (
    <div className={`w-full ${disabled ? 'opacity-50 pointer-events-none' : ''}`}>
      {isProcessing && (
        <div className="mb-3 p-2 bg-blue-900/20 rounded-md text-center">
          <div className="inline-block relative w-5 h-5 mr-2">
            <div className="absolute top-0 left-0 w-full h-full border-2 border-transparent border-t-blue-400 rounded-full animate-spin"></div>
          </div>
          <span className="text-sm text-blue-300">Processing payment...</span>
        </div>
      )}
      
      <div className="bg-slate-800 p-3 rounded-md">
        {isPending ? (
          <div className="text-center p-2">
            <div className="inline-block relative w-5 h-5 mr-2">
              <div className="absolute top-0 left-0 w-full h-full border-2 border-transparent border-t-blue-400 rounded-full animate-spin"></div>
            </div>
            <span className="text-sm text-blue-300">Loading PayPal...</span>
          </div>
        ) : isRejected ? (
          <div className="text-center">
            <p className="text-red-400 mb-2">Failed to load PayPal</p>
            <p className="text-sm text-gray-300">Please refresh the page or try again later.</p>
          </div>
        ) : (
          <PayPalButtons
            style={{ 
              layout: 'horizontal',
              color: 'blue',
              shape: 'rect',
              label: 'pay',
              height: 40
            }}
            disabled={disabled || isProcessing}
            forceReRender={[disabled]}
            createOrder={createOrder}
            onApprove={onApprove}
            onError={onError}
            onCancel={onCancel}
          />
        )}
      </div>
    </div>
  )
} 