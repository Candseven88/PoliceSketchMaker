'use client'

import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import { useEffect } from 'react'

export default function PayPalProvider({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  // Clean up client ID if needed
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || '';
  
  useEffect(() => {
    // Log PayPal initialization
    console.log('Initializing PayPal with client ID:', 
      clientId ? `${clientId.substring(0, 5)}...${clientId.substring(clientId.length - 5)}` : 'Missing Client ID');
  }, [clientId]);

  return (
    <PayPalScriptProvider options={{
      clientId: clientId,
      currency: 'USD',
      intent: 'capture',
      components: 'buttons',
      debug: process.env.NODE_ENV === 'development',
    }}>
      {children}
    </PayPalScriptProvider>
  )
} 