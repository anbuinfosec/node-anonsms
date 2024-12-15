const axios = require('axios');
async function sendSms(apiKey, to, message) {
  const url = `https://sms.anbuinfosec.xyz/api/sms?apikey=${apiKey}&mobile=${to}&msg=${encodeURIComponent(message)}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}

module.exports = sendSms;
