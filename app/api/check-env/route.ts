import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const envCheck = {
    BIGMODEL_API_KEY: process.env.BIGMODEL_API_KEY ? 'Configured' : 'Not configured',
    APIFY_API_TOKEN: process.env.APIFY_API_TOKEN ? 'Configured' : 'Not configured',
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'Not configured',
    NEXT_PUBLIC_PAYPAL_CLIENT_ID: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ? 'Configured' : 'Not configured',
    PAYPAL_SECRET: process.env.PAYPAL_SECRET ? 'Configured' : 'Not configured',
    PAYPAL_MODE: process.env.PAYPAL_MODE || 'Not configured'
  }

  return NextResponse.json({
    environment: envCheck,
    message: 'Environment variables check'
  })
} 