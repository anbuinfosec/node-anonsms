const axios = require('axios');

async function getMe(apiKey) {
  const url = `https://sms.anbuinfosec.xyz/api/user?apikey=${apiKey}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user data');
  }
}

module.exports = getMe;
