# PayPal Integration for PoliceSketchMaker

This document explains how to set up and use the PayPal integration for the PoliceSketchMaker application.

## Setup Instructions

1. **Create a PayPal Developer Account**
   - Go to [PayPal Developer Dashboard](https://developer.paypal.com/developer/applications)
   - Sign up or log in to your PayPal account

2. **Create a New Application**
   - In the Developer Dashboard, click on "Create App"
   - Name your application (e.g., "PoliceSketchMaker")
   - Select "Merchant" as the app type
   - Click "Create App"

3. **Get Your API Credentials**
   - After creating the app, you'll see your Client ID and Secret
   - Copy these credentials for the next step

4. **Configure Environment Variables**
   - Create a `.env.local` file in the root of your project (or use existing one)
   - Add the following environment variables:

   ```
   NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id_here
   PAYPAL_SECRET=your_paypal_secret_here
   PAYPAL_MODE=sandbox  # Change to 'live' for production
   ```

5. **Restart Your Application**
   - If your application is running, restart it to load the new environment variables

## Testing the Integration

1. **Sandbox Testing**
   - While in sandbox mode, use PayPal sandbox accounts for testing
   - Create sandbox accounts in the PayPal Developer Dashboard

2. **Test Credentials**
   - For testing, you can use these sandbox accounts:
     - Buyer Email: `sb-buyer@example.com` (create your own in PayPal Developer Dashboard)
     - Password: (set during sandbox account creation)

3. **Test Flow**
   - Enter a description for the police sketch
   - Click "Process Description"
   - Complete payment using the PayPal sandbox account
   - Verify that the sketch is generated after payment

## Going Live

When you're ready to accept real payments:

1. **Update Environment Variables**
   - Change `PAYPAL_MODE` to `live`
   - Update credentials if necessary (Live credentials are different from Sandbox)

2. **Verify Your PayPal Business Account**
   - Ensure your PayPal business account is verified and in good standing

3. **Test with a Small Amount**
   - Make a test purchase with a small amount to verify everything works correctly

## Troubleshooting

- **PayPal Button Not Showing**: Verify your Client ID is correct and the PayPal script is loading
- **Payment Fails**: Check the browser console and server logs for error details
- **Sandbox vs. Live Mode**: Ensure you're using the correct credentials for your environment

## Support

For issues with the PayPal integration:
- Check [PayPal Developer Documentation](https://developer.paypal.com/docs/checkout/)
- Visit the [PayPal Developer Forum](https://www.paypal.com/us/smarthelp/topic/PAYMENTS_AND_SHIPPING) 