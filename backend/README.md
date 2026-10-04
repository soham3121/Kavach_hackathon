# Kavach Privacy Guardian - Backend API

This is the backend API server for the Kavach Privacy Guardian Chrome extension. It provides AI-powered privacy policy analysis using Google's Gemini API.

## Features

- 🤖 **AI-Powered Analysis**: Uses Google Gemini to analyze privacy policies
- 🔍 **Automatic Policy Detection**: Finds privacy policy URLs automatically
- 📊 **Comprehensive Scoring**: Provides detailed privacy scores and risk assessments
- 🛡️ **Security**: Rate limiting, CORS protection, and input validation
- 🚀 **Production Ready**: Optimized for deployment on Render

## API Endpoints

### POST /api/privacy-policy/analyze
Analyzes a website's privacy policy using AI.

**Request Body:**
```json
{
  "url": "https://example.com",
  "policyUrl": "https://example.com/privacy" // optional
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "score": 75,
    "risks": ["Data may be shared with third parties"],
    "summary": "Privacy policy summary...",
    "dataSharing": ["Google Analytics", "Facebook"],
    "recommendations": ["Enable do-not-track"],
    "complianceStatus": {
      "gdpr": "compliant",
      "ccpa": "unclear",
      "coppa": "non-compliant"
    },
    "policyMetadata": {
      "url": "https://example.com/privacy",
      "title": "Privacy Policy",
      "analyzedAt": "2024-01-01T00:00:00.000Z"
    }
  }
}
```

### GET /api/privacy-policy/find
Finds privacy policy URL for a website.

**Query Parameters:**
- `url`: Website URL to search

## Setup

### Local Development

1. **Clone and install dependencies:**
```bash
cd backend
npm install
```

2. **Environment Setup:**
```bash
cp .env.example .env
```

3. **Configure Environment Variables:**
```env
GEMINI_API_KEY=your_gemini_api_key_here
PORT=3000
NODE_ENV=development
```

4. **Get Gemini API Key:**
   - Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Add it to your `.env` file

5. **Start Development Server:**
```bash
npm run dev
```

The server will run on `http://localhost:3000`

### Production Deployment on Render

1. **Environment Variables:**
   - `GEMINI_API_KEY`: Your Google Gemini API key
   - `NODE_ENV`: `production`
   - `ALLOWED_ORIGINS`: `chrome-extension://,moz-extension://`

2. **Build Command:** `npm run build`
3. **Start Command:** `npm start`

## Usage in Chrome Extension

Update your Chrome extension's privacy analyzer to call this API:

```typescript
// src/utils/privacy.ts
export class PrivacyPolicyAnalyzer {
  private static readonly API_BASE_URL = 'https://your-render-app.onrender.com/api';
  
  static async analyzePolicy(url: string): Promise<any> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/privacy-policy/analyze`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url })
      });
      
      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error);
      }
      
      return result.data;
    } catch (error) {
      console.error('Privacy policy analysis failed:', error);
      // Return fallback data
      return {
        score: 50,
        risks: ['Unable to analyze privacy policy'],
        summary: 'Privacy policy analysis unavailable'
      };
    }
  }
}
```

## Architecture

- **Express.js**: Web framework
- **Google Gemini**: AI analysis engine
- **Puppeteer**: Web scraping for JavaScript-heavy sites
- **Cheerio**: HTML parsing for static content
- **TypeScript**: Type safety and better development experience

## Security Features

- **Rate Limiting**: 100 requests per 15 minutes per IP
- **CORS Protection**: Only allows Chrome extension origins
- **Input Validation**: URL validation and content sanitization
- **Error Handling**: Comprehensive error handling and logging

## Error Handling

The API provides detailed error responses:

- `400`: Bad request (invalid URL, missing parameters)
- `404`: Privacy policy not found
- `408`: Request timeout
- `429`: Rate limit exceeded
- `500`: Internal server error (AI service issues, scraping failures)

## Performance

- **Caching**: Consider implementing Redis for frequently analyzed sites
- **Timeouts**: 30-second timeout for scraping, 15-second for simple requests
- **Optimization**: Text truncation to stay within AI model limits

## Support

For issues related to the Chrome extension, please check the main project repository.
