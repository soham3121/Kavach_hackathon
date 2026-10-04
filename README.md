# Kavach Privacy Guardian - Chrome Extension

An advanced privacy protection Chrome extension built with React and TypeScript that provides real-time tracker blocking, **AI-powered privacy policy analysis**, and data flow visualization.

## ✨ Features

- 🛡️ **Real-time Tracker Blocking**: Detects and blocks third-party trackers as you browse
- 🧠 **AI Privacy Policy Analysis**: **NEW!** Uses Google Gemini to analyze privacy policies and identify risks
- 📊 **Data Trust Score**: Shows a live trust score (0-100) for each website based on privacy practices
- 🌊 **Data Flow Visualization**: Interactive visualization showing how your data flows between domains
- ⚡ **One-Click Opt-out**: GDPR/CCPA compliant opt-out tools for quick privacy protection
- 🔍 **Client-side Tracking Detection**: Monitors canvas fingerprinting and other tracking attempts
- ⚖️ **Compliance Checking**: Automatically checks GDPR, CCPA, and COPPA compliance
- 🎯 **Risk Assessment**: Identifies specific privacy risks and provides actionable recommendations

## 🏗️ Architecture

### Frontend (Chrome Extension)
- **Background Script** (`src/background/index.ts`): Handles web request monitoring, tracker detection, and data storage
- **Content Script** (`src/content/index.ts`): Detects privacy policies and provides opt-out UI
- **Injected Script** (`src/injected/index.ts`): Runs in page context to detect client-side tracking
- **Popup UI** (`src/popup/`): React-based interface showing privacy metrics and controls

### Backend API (NEW!)
- **Express.js Server** (`backend/`): AI-powered privacy policy analysis
- **Google Gemini Integration**: Real AI analysis instead of mock data
- **Policy Scraper**: Automatically finds and extracts privacy policies
- **Production Ready**: Deployed on Render with proper security

### React Components

- `TrustScore`: Displays website trust rating with visual indicators
- `TrackerList`: Shows detected trackers with blocking status
- `PrivacyAnalysis`: **Enhanced!** Now shows real AI analysis results
- `DataFlowVisualization`: Interactive graph of data flows between domains
- `ActionButtons`: Quick controls for blocking and opt-out actions

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/kavach-privacy-guardian.git
cd kavach-privacy-guardian
```

### 2. Setup Backend (Required for AI Analysis)
```bash
cd backend
npm install
npm run setup
```

**Get your Gemini API key:**
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create an API key
3. Add it to `backend/.env`

**Start backend:**
```bash
npm run dev
```

### 3. Setup Frontend
```bash
cd ../  # Back to root directory
npm install
```

### 4. Build Extension
```bash
# Development build with watch mode
npm run dev

# Production build
npm run build
```

### 5. Load Extension in Chrome

1. Build the extension: `npm run build`
2. Open Chrome → `chrome://extensions/`
3. Enable "Developer mode"
4. Click "Load unpacked" → Select `dist` folder
5. 🎉 Start browsing with AI-powered privacy protection!

## 🔧 Configuration

### Development Mode
- Backend: `http://localhost:3000`
- Real-time AI analysis with local Gemini API calls
- Hot reload for both frontend and backend

### Production Mode
- Backend deployed to Render: **https://kavach-hackolution.onrender.com**
- Real AI-powered privacy analysis in production
- Rebuild extension for production use: `npm run build`

## 📚 Documentation

- **[Setup Guide](SETUP.md)**: Detailed setup instructions
- **[Backend Deployment](backend/DEPLOY.md)**: Deploy to Render
- **[Backend README](backend/README.md)**: API documentation

## 🛠️ Chrome Extension APIs Used

- `webRequest`: Monitor and analyze network requests
- `declarativeNetRequest`: Block tracking requests
- `storage`: Persist user preferences and site data
- `tabs`: Track active tabs and website changes
- `scripting`: Inject content scripts

## 🔒 Privacy & Security

This extension prioritizes user privacy by:

- **No data collection**: All analysis happens locally and via your own API
- **Transparent operations**: Open source code for full transparency
- **Your own API**: You control the backend and API keys
- **Secure communication**: HTTPS-only API calls
- **Local storage only**: No external data transmission except for analysis
- **GDPR/CCPA compliance**: Built-in compliance checking tools

## 💡 What's New in v2.0

- ✅ **Real AI Analysis**: Replaced mock data with Google Gemini AI
- ✅ **Automatic Policy Detection**: Finds privacy policies automatically
- ✅ **Comprehensive Risk Assessment**: Detailed privacy risk analysis
- ✅ **Compliance Checking**: GDPR, CCPA, COPPA status checking
- ✅ **Production Ready**: Backend deployable to Render
- ✅ **Better Error Handling**: Graceful fallbacks when AI is unavailable
- ✅ **Cost Effective**: Free tier available for both Render and Gemini

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google Gemini AI for privacy policy analysis
- Render for free backend hosting
- Chrome Extensions API for browser integration
- React ecosystem for modern UI development

## 🆘 Support

- 📖 Check [SETUP.md](SETUP.md) for detailed setup instructions
- 🚀 See [backend/DEPLOY.md](backend/DEPLOY.md) for deployment guide
- 🐛 Report issues on GitHub Issues
- 💬 Discuss features in GitHub Discussions

---

**Built with ❤️ for digital privacy advocates**

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and ensure builds pass
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Roadmap

- [ ] Enhanced AI privacy policy analysis
- [ ] More comprehensive tracker database
- [ ] Custom blocking rules
- [ ] Export privacy reports
- [ ] Integration with popular privacy services
