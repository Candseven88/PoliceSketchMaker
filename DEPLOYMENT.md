# Deployment Guide for PoliceSketchMaker

## Vercel Deployment

### 1. Prepare Your Repository

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

### 2. Connect to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Configure the project settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

### 3. Environment Variables

Add these environment variables in your Vercel project settings:

#### Required Variables:
- `APIFY_API_TOKEN`: Your Apify API token
- `NEXT_PUBLIC_APP_URL`: Your production URL (e.g., `https://your-app.vercel.app`)

#### Optional Variables:
- `BIGMODEL_API_KEY`: Your BigModel API key (for feature extraction)

### 4. Deploy

1. Click "Deploy" in Vercel
2. Wait for the build to complete
3. Your app will be available at the provided URL

## API Setup

### Apify API Configuration

1. Sign up at [Apify Console](https://console.apify.com/)
2. Get your API token from [Apify Account Integrations](https://console.apify.com/account/integrations)
3. The app uses the `datastorm/text-to-image` actor (ID: `GqzQFFeLfhdqXMaQG`)

### BigModel API Configuration (Optional)

1. Sign up at [BigModel](https://www.bigmodel.cn/)
2. Get your API key from the BigModel console
3. Used for extracting facial features from uploaded photos

## Custom Domain (Optional)

1. In your Vercel project settings, go to "Domains"
2. Add your custom domain
3. Update `NEXT_PUBLIC_APP_URL` to your custom domain

## Monitoring

- **Vercel Analytics**: Enable in project settings
- **Error Tracking**: Vercel provides built-in error tracking
- **Performance**: Monitor Core Web Vitals in Vercel dashboard

## Troubleshooting

### Common Issues:

1. **Build Failures**: Check that all dependencies are in `package.json`
2. **API Errors**: Verify environment variables are set correctly
3. **Image Generation Failures**: Ensure Apify API token is valid and has sufficient credits

### Debug Steps:

1. Check Vercel build logs for errors
2. Verify environment variables in Vercel dashboard
3. Test API endpoints locally first
4. Check browser console for client-side errors

## Production Checklist

- [ ] Environment variables configured
- [ ] Custom domain set up (if needed)
- [ ] SSL certificate enabled
- [ ] Analytics configured
- [ ] Error monitoring enabled
- [ ] Performance optimized
- [ ] SEO meta tags verified
- [ ] Payment integration tested
- [ ] API rate limits configured
- [ ] Backup strategy in place

## Security Considerations

1. **API Keys**: Never commit API keys to version control
2. **Rate Limiting**: Implement rate limiting for API endpoints
3. **Input Validation**: Validate all user inputs
4. **CORS**: Configure CORS properly for production
5. **HTTPS**: Ensure all traffic uses HTTPS

## Performance Optimization

1. **Image Optimization**: Use Next.js Image component
2. **Code Splitting**: Leverage Next.js automatic code splitting
3. **Caching**: Implement appropriate caching strategies
4. **CDN**: Vercel provides global CDN by default
5. **Bundle Analysis**: Monitor bundle size with `@next/bundle-analyzer`

## Maintenance

1. **Regular Updates**: Keep dependencies updated
2. **Monitoring**: Set up alerts for errors and performance issues
3. **Backups**: Regular database backups (if applicable)
4. **Security**: Regular security audits
5. **Performance**: Monitor and optimize based on usage patterns 