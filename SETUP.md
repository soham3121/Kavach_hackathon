# 🚀 Kavach Privacy Guardian - AI-Powered Backend Setup

## Quick Start Guide

### 1. **Get Your Gemini API Key**
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Sign in with your Google account
   - Click "Create API Key"
   - Copy your API key

### 2. **Local Development Setup**
   ```bash
   cd backend
   cp .env.example .env
   ```

   Edit `.env` file and add your API key:
   ```env
   GEMINI_API_KEY=your_actual_api_key_here
   PORT=3000
   NODE_ENV=development
   ```

### 3. **Start Development Server**
   ```bash
   npm run dev
   ```

   The server will run on `http://localhost:3000`

### 4. **Test the API**
   Open `http://localhost:3000/health` in your browser. You should see:
   ```json
   {
     "status": "healthy",
     "timestamp": "2024-01-01T00:00:00.000Z",
     "version": "1.0.0"
   }
   ```

### 5. **Test Privacy Analysis**
   Use a tool like Postman or curl:
   ```bash
   curl -X POST http://localhost:3000/api/privacy-policy/analyze \
     -H "Content-Type: application/json" \
     -d '{"url": "https://www.google.com"}'
   ```

## 🌐 Deploy to Render (Free Tier)

### 1. **Prepare for Deployment**
   - Push your code to GitHub
   - Sign up for [Render](https://render.com)

### 2. **Create New Web Service**
   - Connect your GitHub repository
   - Choose "backend" as the root directory
   - Set these configurations:

   **Build Command:** `npm run build`
   **Start Command:** `npm start`

### 3. **Environment Variables on Render**
   Add these in Render dashboard:
   ```env
   GEMINI_API_KEY=your_actual_api_key_here
   NODE_ENV=production
   ALLOWED_ORIGINS=chrome-extension://,moz-extension://
   ```

### 4. **Update Chrome Extension**
   After deployment, your API is now live at: **https://kavach-hackolution.onrender.com**
   
   The extension is already configured to use this endpoint!

## 🧪 Testing Your Integration

1. **Start your backend** (locally or deployed)
2. **Build your Chrome extension**: `npm run build`
3. **Load the extension** in Chrome
4. **Test on a website** - the extension should now use real AI analysis!

## 💡 Features You Get

- ✅ **Real AI Analysis**: Powered by Google Gemini
- ✅ **Automatic Policy Detection**: Finds privacy policies automatically
- ✅ **Comprehensive Scoring**: 0-100 privacy score
- ✅ **Risk Assessment**: Specific privacy risks identified
- ✅ **Compliance Checking**: GDPR, CCPA, COPPA compliance
- ✅ **Recommendations**: Actionable privacy recommendations

## 🔧 Troubleshooting

### Common Issues:

**"Failed to analyze privacy policy"**
- Check your Gemini API key is correct
- Ensure the website has a privacy policy
- Check server logs for detailed errors

**"CORS Error"** 
- Make sure ALLOWED_ORIGINS includes chrome-extension://
- Verify your extension ID matches the CORS settings

**"Request timeout"**
- Some websites are slow to scrape
- Consider implementing caching for frequently analyzed sites

**"API key not found"**
- Ensure GEMINI_API_KEY is set in environment variables
- Check the API key is valid in Google AI Studio

## 📊 Cost Estimation

**Render Free Tier:**
- 750 hours/month (enough for continuous deployment)
- Automatically sleeps after 15 minutes of inactivity
- Wakes up on first request (may take 30 seconds)

**Gemini API:**
- Free tier: 15 requests per minute
- Paid tier: $0.00025 per 1K characters
- Average privacy policy: ~10K characters = $0.0025 per analysis

## 🚀 Going Production

For production use, consider:

1. **Redis Caching**: Cache analyses for frequently visited sites
2. **Database**: Store analysis results and user preferences  
3. **Rate Limiting**: Implement per-user rate limiting
4. **Monitoring**: Add error tracking and analytics
5. **CDN**: Use a CDN for faster global access

---

**Need Help?** Check the logs in Render dashboard or run `npm run dev` locally to see detailed error messages.
