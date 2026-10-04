const http = require('http');

async function testAPI() {
  console.log('🧪 Testing Kavach Backend API...\n');

  // Test health endpoint
  console.log('1. Testing health endpoint...');
  try {
    const health = await makeRequest('GET', 'http://localhost:3000/health');
    console.log('✅ Health check passed:', health.status);
  } catch (error) {
    console.log('❌ Health check failed:', error.message);
    console.log('💡 Make sure to run "npm run dev" first');
    return;
  }

  // Test privacy policy analysis
  console.log('\n2. Testing privacy policy analysis...');
  try {
    const analysis = await makeRequest('POST', 'http://localhost:3000/api/privacy-policy/analyze', {
      url: 'https://www.google.com'
    });
    
    if (analysis.success) {
      console.log('✅ Privacy analysis successful!');
      console.log(`   Score: ${analysis.data.score}/100`);
      console.log(`   Risks found: ${analysis.data.risks.length}`);
      console.log(`   Summary: ${analysis.data.summary.substring(0, 100)}...`);
    } else {
      console.log('❌ Privacy analysis failed:', analysis.error);
    }
  } catch (error) {
    console.log('❌ Privacy analysis request failed:', error.message);
    if (error.message.includes('GEMINI_API_KEY')) {
      console.log('💡 Please set your GEMINI_API_KEY in the .env file');
      console.log('🔑 Get your API key from: https://makersuite.google.com/app/apikey');
    }
  }

  console.log('\n✨ Testing complete!');
}

function makeRequest(method, url, data = null) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port,
      path: urlObj.pathname + urlObj.search,
      method: method,
      headers: {
        'Content-Type': 'application/json',
      }
    };

    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          resolve(parsed);
        } catch (e) {
          resolve({ body });
        }
      });
    });

    req.on('error', reject);

    if (data) {
      req.write(JSON.stringify(data));
    }
    
    req.end();
  });
}

// Run the test
testAPI().catch(console.error);
