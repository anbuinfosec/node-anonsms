const sendSms = require('./sendSms');
const getMe = require('./getMe');

class AnonSMS {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async sendSMS(to, message) {
    try {
      const response = await sendSms(this.apiKey, to, message);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getMe() {
    try {
      const userData = await getMe(this.apiKey);
      return userData;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AnonSMS;