require('dotenv').config();

console.log('🔍 Environment Variable Test');
console.log('GEMINI_API_KEY:', process.env.GEMINI_API_KEY ? 'Set ✅' : 'Not Set ❌');
console.log('API Key length:', process.env.GEMINI_API_KEY?.length || 0);
console.log('First 10 chars:', process.env.GEMINI_API_KEY?.substring(0, 10) || 'N/A');

if (process.env.GEMINI_API_KEY) {
  console.log('✅ API key is properly loaded!');
} else {
  console.log('❌ API key is missing!');
  console.log('💡 Make sure .env file exists and contains GEMINI_API_KEY');
}
