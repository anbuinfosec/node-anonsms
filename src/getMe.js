const axios = require('axios');

async function getMe(apiKey) {
  const url = `https://sms.anbuinfosec.xyz/api/user?apikey=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (response.data.success) {
      return response.data;
    } else {
      throw new Error(response.data.message || 'Unknown error');
    }
  } catch (error) {
    throw new Error(`Failed to send SMS: ${error.message}`);
  }
}

module.exports = getMe;
