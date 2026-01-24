// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/tea-recommendation', async (req, res) => {
  const { answers } = req.body;
  const API_KEY = process.env.VITE_PERPLEXITY_API_KEY;

  console.log('');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('📡 NEW REQUEST RECEIVED');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('📝 User Answers:');
  console.log('   Time of day:', answers.timeOfDay);
  console.log('   Caffeine:', answers.caffeinePreference);
  console.log('   Flavor:', answers.flavorProfile);
  console.log('   Tea type:', answers.teaType);
  console.log('   Purpose:', answers.purpose);
  console.log('');
  console.log('🔑 API Key Check:');
  console.log('   Exists:', !!API_KEY);
  console.log('   Length:', API_KEY ? API_KEY.length : 0);
  console.log(
    '   Prefix:',
    API_KEY ? API_KEY.substring(0, 15) + '...' : 'NOT FOUND',
  );
  console.log('');

  if (!API_KEY) {
    console.error('❌ FATAL ERROR: API key not configured in .env file');
    console.error('   Please check your .env file contains:');
    console.error('   VITE_PERPLEXITY_API_KEY=your_key_here');
    return res.status(500).json({ error: 'API key not configured' });
  }

  const prompt = `Based on the following tea preferences, recommend ONE specific perfect tea:

- Time of day: ${answers.timeOfDay}
- Caffeine preference: ${answers.caffeinePreference}
- Flavor profile: ${answers.flavorProfile}
- Tea type interest: ${answers.teaType}
- Purpose: ${answers.purpose}

Please provide ONLY a JSON response in this exact format with NO additional text:
{
  "name": "Specific tea name",
  "type": "Tea type (green, black, white, oolong, or herbal)",
  "description": "2-3 sentence description explaining why this tea matches their preferences",
  "flavorNotes": ["note1", "note2", "note3", "note4"],
  "caffeineLevel": "high/medium/low/none",
  "brewingInstructions": {
    "temperature": "XX-XX°C",
    "time": "X-X minutes"
  },
  "benefits": ["benefit1", "benefit2", "benefit3"],
  "bestFor": ["use case 1", "use case 2", "use case 3"]
}`;

  const requestBody = {
    model: 'sonar',
    messages: [
      {
        role: 'system',
        content:
          'You are a tea expert. Respond ONLY with valid JSON, no additional text or formatting.',
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    max_tokens: 1000,
    temperature: 0.7,
  };

  try {
    console.log('📤 CALLING PERPLEXITY API...');
    console.log('   Model:', requestBody.model);
    console.log('   Max tokens:', requestBody.max_tokens);
    console.log('   Temperature:', requestBody.temperature);
    console.log('');

    const response = await fetch('https://api.perplexity.ai/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    console.log('📥 RESPONSE RECEIVED');
    console.log('   Status:', response.status, response.statusText);
    console.log('   Headers:', Object.fromEntries(response.headers.entries()));
    console.log('');

    if (!response.ok) {
      let errorData;
      try {
        errorData = await response.json();
      } catch (e) {
        errorData = { message: await response.text() };
      }

      console.error('❌ PERPLEXITY API ERROR');
      console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.error('Status Code:', response.status);
      console.error('Error Details:', JSON.stringify(errorData, null, 2));
      console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.error('');

      // Specific error messages
      if (response.status === 400) {
        console.error('💡 Possible causes:');
        console.error('   - Invalid request format');
        console.error('   - Model not available');
        console.error('   - Invalid parameters');
      } else if (response.status === 401) {
        console.error('💡 API Key is invalid or expired');
        console.error('   Check: https://www.perplexity.ai/settings/api');
      } else if (response.status === 429) {
        console.error('💡 Rate limit exceeded');
        console.error('   Wait a moment and try again');
      } else if (response.status === 500) {
        console.error('💡 Perplexity server error');
        console.error('   Try again in a few moments');
      }
      console.error('');

      return res.status(response.status).json({
        error: errorData,
        status: response.status,
        message: 'Perplexity API request failed',
      });
    }

    const data = await response.json();
    console.log('✅ SUCCESS: Perplexity response received');
    console.log('   Response ID:', data.id);
    console.log('   Model:', data.model);
    console.log('   Choices:', data.choices?.length);
    console.log('');

    const content = data.choices[0].message.content;
    console.log('📄 RAW CONTENT:');
    console.log(content);
    console.log('');

    // Extract JSON
    let jsonContent = content;
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      jsonContent = jsonMatch[0];
      console.log('🔍 Extracted JSON from response');
    }

    let recommendation;
    try {
      recommendation = JSON.parse(jsonContent);
      console.log('✅ JSON PARSED SUCCESSFULLY');
      console.log('   Tea Name:', recommendation.name);
      console.log('   Tea Type:', recommendation.type);
      console.log('   Caffeine:', recommendation.caffeineLevel);
      console.log('');
    } catch (parseError) {
      console.error('❌ JSON PARSE ERROR');
      console.error('   Error:', parseError.message);
      console.error('   Content:', jsonContent.substring(0, 200));
      throw new Error('Failed to parse AI response as JSON');
    }

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('✅ REQUEST COMPLETED SUCCESSFULLY');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('');

    res.json({ recommendation });
  } catch (error) {
    console.error('');
    console.error('❌ SERVER ERROR');
    console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.error('Error Type:', error.name);
    console.error('Error Message:', error.message);
    console.error('Stack Trace:', error.stack);
    console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.error('');

    res.status(500).json({
      error: 'Internal server error',
      details: error.message,
      type: error.name,
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  const apiKeyStatus = process.env.VITE_PERPLEXITY_API_KEY
    ? 'configured'
    : 'missing';
  res.json({
    status: 'ok',
    message: 'Tea recommendation server is running',
    apiKey: apiKeyStatus,
    timestamp: new Date().toISOString(),
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    service: 'Tea Recommendation API',
    version: '1.0.0',
    endpoints: {
      health: 'GET /health',
      recommendation: 'POST /api/tea-recommendation',
    },
  });
});

app.listen(PORT, () => {
  console.log('');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🍵  TEA QUIZ BACKEND SERVER');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('');
  console.log('📍 Server URL: http://localhost:' + PORT);
  console.log('🏥 Health Check: http://localhost:' + PORT + '/health');
  console.log('');

  const apiKey = process.env.VITE_PERPLEXITY_API_KEY;
  if (apiKey) {
    console.log('🔑 API Key Status: ✅ LOADED');
    console.log('   Length:', apiKey.length, 'characters');
    console.log('   Prefix:', apiKey.substring(0, 15) + '...');
    console.log('   Suffix: ...' + apiKey.substring(apiKey.length - 4));
  } else {
    console.log('🔑 API Key Status: ❌ NOT FOUND');
    console.log('   Please create a .env file with:');
    console.log('   VITE_PERPLEXITY_API_KEY=your_key_here');
  }

  console.log('');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🚀 Server ready! Waiting for requests...');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('');
});
