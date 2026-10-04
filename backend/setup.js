const fs = require('fs');
const path = require('path');

// Create .env file if it doesn't exist
const envPath = path.join(__dirname, '.env');
const envExamplePath = path.join(__dirname, '.env.example');

if (!fs.existsSync(envPath) && fs.existsSync(envExamplePath)) {
  console.log('📋 Creating .env file from template...');
  fs.copyFileSync(envExamplePath, envPath);
  console.log('✅ .env file created! Please add your GEMINI_API_KEY.');
  console.log('');
  console.log('🔑 Get your API key from: https://makersuite.google.com/app/apikey');
  console.log('');
  console.log('Then edit .env file and replace "your_gemini_api_key_here" with your actual key.');
  console.log('');
} else if (fs.existsSync(envPath)) {
  console.log('✅ .env file already exists');
  
  // Check if API key is set
  const envContent = fs.readFileSync(envPath, 'utf8');
  if (envContent.includes('your_gemini_api_key_here')) {
    console.log('⚠️  Warning: Please set your GEMINI_API_KEY in .env file');
    console.log('🔑 Get your API key from: https://makersuite.google.com/app/apikey');
  } else {
    console.log('✅ GEMINI_API_KEY appears to be configured');
  }
} else {
  console.log('❌ .env.example file not found');
}
