# PoliceSketchMaker

AI-powered police sketch generation tool for law enforcement and security professionals.

## Features

### Police Sketch Generation
- **Custom Prompt Input**: Describe suspects in natural language and let AI generate accurate police sketches
- **Input Templates**: Pre-built templates to help users structure their descriptions
- **AI Language Processing**: Uses GLM-4-Flash-250414 model to parse and enhance user descriptions
- **Photo Upload**: Upload suspect photos for feature extraction and sketch generation
- **Standard Output**: Generate sketches in 512x512 resolution

### AI Image Describer (NEW)
- **AI-Powered Image Analysis**: Upload any image and get detailed, accurate descriptions
- **SEO-Friendly Alt Text**: Generate optimized alt text for better website accessibility
- **Keyword Extraction**: Automatically extract relevant keywords from images
- **Multiple Formats**: Supports JPG, PNG, WebP, GIF (up to 10MB)
- **Free Service**: No registration required, unlimited image descriptions

### Content & SEO
- **SEO Optimized Blog**: Comprehensive guides on how to make sketch of face and professional sketch techniques
- **Educational Content**: Learn about police sketch artist careers and salary information
- **Professional Tools**: Resources for law enforcement and security professionals

## New Features (Latest Update)

### 1. Removed Template Form Tab
- Simplified interface by removing the structured template form
- Now focuses on custom prompt input and photo upload

### 2. Enhanced Custom Prompt with Templates
- Added input templates to guide users in describing suspects
- Four template categories:
  - **Basic Description Template**: Simple structure for basic descriptions
  - **Detailed Features Template**: Comprehensive facial feature descriptions
  - **Special Features Template**: For unique characteristics and clothing
  - **Professional Template**: Complete police sketch description with detailed features
- Users can copy templates, use them directly, or view examples

### 3. AI Language Processing with GLM-4-Flash-250414
- Integrated GLM-4-Flash-250414 model for intelligent prompt processing
- Automatically converts user descriptions into standardized facial feature descriptions
- Enhances vague descriptions with reasonable assumptions
- Ensures consistent, detailed prompts for better sketch generation

## How to Use

### Custom Prompt Method
1. Select the "Custom Prompt" tab
2. Choose from available input templates or write your own description
3. Enter detailed suspect description in English
4. Click "Generate Police Sketch" - the system will:
   - Process your description with GLM-4-Flash-250414
   - Generate an enhanced, standardized prompt
   - Create the police sketch using the processed prompt

### Photo Upload Method
1. Select the "Upload Photo" tab
2. Upload a photo of the suspect
3. The system will extract features and generate a sketch

## Input Templates

### Basic Description Template
```
A [age] year old [gender] with [ethnicity] ethnicity, [hair color] hair, [hair style], [eye color] eyes, [face shape] face shape, [skin tone] skin tone.
```

### Detailed Features Template
```
[Age] year old [gender] with [ethnicity] ethnicity, [hair color] [hair style] hair, [eye color] eyes, [face shape] face shape, [nose type] nose, [mouth type] mouth, [skin tone] skin tone, [facial hair], [glasses].
```

### Special Features Template
```
[Basic description], [special features], [clothing description].
```

### Professional Template
```
A police sketch of a male suspect in his 40s with light skin tone and an oval face shape. He has almond-shaped blue eyes, thick slightly arched eyebrows, and a straight, medium-width nose. His lips are full and set in a neutral expression. He is clean-shaven. His hair is short, slightly messy, light brown with hints of gray, and has an even hairline. He has medium-sized ears with attached lobes, a strong jawline, and a rounded chin. He wears a black blazer over a dark shirt and a gold chain necklace. The expression is calm and neutral. The sketch is in realistic pencil-drawn style, suitable for a police report.
```

## Environment Setup

Create a `.env.local` file with the following variables:

```env
# BigModel API Configuration (for language processing)
BIGMODEL_API_KEY=your_bigmodel_api_key_here

# Apify API Configuration (for image generation)
APIFY_API_TOKEN=your_apify_api_token_here

# Next.js Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Installation

```bash
npm install
npm run dev
```

## API Endpoints

### Police Sketch APIs
- `POST /api/process-prompt`: Processes user input with GLM-4-Flash-250414
- `POST /api/generate-sketch`: Generates police sketches using Apify
- `POST /api/extract-features`: Extracts features from uploaded photos

### Image Description APIs
- `POST /api/describe-image`: Analyzes images and generates descriptions, alt text, and keywords

## Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Language Processing**: GLM-4-Flash-250414 (BigModel)
- **Image Generation**: Apify Text-to-Image Actor
- **UI Components**: Lucide React Icons, React Hot Toast

## SEO Content & Blog Features

### Blog Pages
- **Blog Overview**: `/blog` - Comprehensive listing of sketch making tutorials and guides
- **Tutorial Articles**: Detailed guides on how to make sketch of face, photo conversion techniques
- **Career Information**: Professional insights about police sketch artist salaries and career paths
- **Educational Content**: Tips for learning sketch making and digital art techniques

### Key SEO Features
- Optimized metadata and structured data
- Comprehensive keyword coverage for sketch-related searches
- Professional insights into police sketch artist careers
- Tutorial content for beginners and professionals
- Mobile-responsive design with fast loading times

### Search Engine Verification
- **Bing Webmaster Tools**: Meta tag verification implemented
- **Yandex Webmaster**: HTML file verification configured
- **IndexNow Protocol**: Automated submission to Bing, Yandex, and other search engines
- **Google Search Console**: Manual sitemap submission required

### Verification Files
- `yandex_677dba60c0824767.html` - Yandex webmaster verification
- `f0ef1c3f63f3c438d486f003417584218945df9e039dffc49dc6d6a294472ea5.txt` - IndexNow API key

### Advertising & Monetization
- **ADSTERRA Platform**: Professional advertising integration for premium tools and resources
- **Sponsored Content**: Clearly marked advertisements with proper attribution
- **Privacy Compliant**: All advertising follows privacy regulations and user consent requirements

### Featured On
- **Startup Fame**: Featured startup badge displayed in footer for SEO backlink benefits
- **High-Quality Backlink**: Do-follow link from DR 80+ domain to improve search rankings
- **Badge Location**: Footer component displays featured badge on all pages

### Target Keywords
- police sketch maker, how to make sketch of face, make picture sketch
- photo sketch maker online, image sketch maker, make sketches of people
- how much do police sketch artists make, courtroom sketch artist
- crime scene sketch maker, learn to make sketches

## License

This project is licensed under the MIT License. 