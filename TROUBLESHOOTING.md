# PoliceSketchMaker - Troubleshooting Guide

## Problem: "Failed to generate sketch. Please try again"

### Root Cause Analysis

The error occurs when the application fails to generate police sketches. This can happen due to several reasons:

1. **Missing Environment Variables**
   - `BIGMODEL_API_KEY` not configured
   - `APIFY_API_TOKEN` not configured

2. **API Key Issues**
   - Invalid or expired API keys
   - Incorrect API key format
   - API rate limits exceeded

3. **Network Issues**
   - Connection problems to external APIs
   - Timeout issues

### Solutions

#### 1. Check Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# BigModel API Configuration (for language processing)
BIGMODEL_API_KEY=your_bigmodel_api_key_here

# Apify API Configuration (for image generation)
APIFY_API_TOKEN=your_apify_api_token_here

# Next.js Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

#### 2. Verify API Keys

1. **BigModel API Key**:
   - Get your API key from [BigModel Console](https://www.bigmodel.cn/)
   - Ensure the key has proper permissions
   - Check if the key is valid and not expired

2. **Apify API Token**:
   - Get your API token from [Apify Console](https://console.apify.com/)
   - Ensure you have credits available
   - Check if the token has proper permissions

#### 3. Test API Endpoints

Use the test page at `/test` to verify your setup:

1. Visit `http://localhost:3000/test`
2. Click "Check Environment Variables" to verify configuration
3. Click "Test Process Prompt API" to test the GLM-4-Flash-250414 integration

#### 4. Check Console Logs

The application now includes detailed logging. Check the browser console and server logs for:

- Environment variable status
- API call details
- Error messages with specific details

#### 5. Debug Steps

1. **Check Environment Variables**:
   ```bash
   # Visit the test page
   http://localhost:3000/test
   ```

2. **Test Individual APIs**:
   - Test `/api/process-prompt` with a simple input
   - Test `/api/generate-sketch` with a processed prompt

3. **Check Network Tab**:
   - Open browser developer tools
   - Go to Network tab
   - Try generating a sketch
   - Check for failed requests and error details

### Enhanced Error Handling

The application now provides more detailed error messages:

- **Environment Variable Errors**: Clear messages about missing API keys
- **API Response Errors**: Detailed error information from external APIs
- **Network Errors**: Connection timeout and network issues
- **Processing Errors**: Step-by-step error tracking

### Common Error Messages

1. **"BigModel API key not configured"**
   - Solution: Add `BIGMODEL_API_KEY` to your `.env.local` file

2. **"Apify API token not configured"**
   - Solution: Add `APIFY_API_TOKEN` to your `.env.local` file

3. **"Failed to process prompt with GLM API"**
   - Check your BigModel API key
   - Verify network connection
   - Check API rate limits

4. **"Failed to generate sketch"**
   - Check your Apify API token
   - Verify you have credits available
   - Check network connection

### Testing Your Setup

1. **Environment Check**:
   ```bash
   curl http://localhost:3000/api/check-env
   ```

2. **Test Process Prompt**:
   ```bash
   curl -X POST http://localhost:3000/api/process-prompt \
     -H "Content-Type: application/json" \
     -d '{"userInput": "A 30 year old male with black hair"}'
   ```

3. **Test Generate Sketch**:
   ```bash
   curl -X POST http://localhost:3000/api/generate-sketch \
     -H "Content-Type: application/json" \
     -d '{"prompt": "Police sketch: A 30 year old male with black hair", "width": 512, "height": 512}'
   ```

### Getting Help

If you're still experiencing issues:

1. Check the browser console for detailed error messages
2. Verify your API keys are correct and active
3. Ensure you have sufficient credits for both APIs
4. Check your network connection
5. Try the test page at `/test` to isolate the issue

### API Requirements

- **BigModel GLM-4-Flash-250414**: Requires valid API key with sufficient credits
- **Apify Text-to-Image**: Requires valid API token with sufficient credits
- **Network**: Stable internet connection required for external API calls 