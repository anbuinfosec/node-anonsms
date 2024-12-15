# node-anonsms

<p align="center">
    <img width="200" src="https://github.com/anbuinfosec/node-anonsms/raw/main/assets/logo.png" alt="Logo">
</p>


**`node-anonsms`** is a Node.js module for sending anonymous SMS messages and managing your SMS account with ease, powered by the [AnbuInfoSec SMS API](https://sms.anbuinfosec.xyz/). Whether you need to send SMS messages anonymously or check your account details, this module makes it easy to interact with the SMS service securely and efficiently.

---

## Features

- 🌍 **Send Anonymous SMS**: Easily send anonymous SMS messages to any number globally.
- 📊 **Account Management**: Fetch your account details, including balance and user information.
- 💳 **Real-Time Balance Updates**: Get your balance updated with each SMS sent.
- 🔒 **Secure API Integration**: Robust authentication and fast response times ensure a secure experience.

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Send SMS](#send-sms)
  - [Fetch User Details](#fetch-user-details)
- [Response Formats](#response-formats)
  - [Success Response](#success-response)
  - [Error Response](#error-response)
- [Example](#example)
- [License](#license)

---

## Installation

To get started, you can install `node-anonsms` via npm:

```bash
npm install node-anonsms
```

---

## Usage

### 1. **Send SMS**

You can send an anonymous SMS message using the `sendSMS` method:

```javascript
const AnonSMS = require('node-anonsms');

// Initialize the AnonSMS service with your API key
const smsService = new AnonSMS('YOUR_API_KEY');

// Send an anonymous SMS
smsService.sendSMS('01XXXXXXXXX', 'ANON SMS PANEL')
  .then(response => {
    console.log('SMS sent successfully:', response);
  })
  .catch(error => {
    console.error('Error sending SMS:', error.message);
  });
```

### 2. **Fetch User Details**

You can fetch user information (such as balance and account status) using the `getMe` method:

```javascript
const AnonSMS = require('node-anonsms');

// Initialize the AnonSMS service with your API key
const smsService = new AnonSMS('YOUR_API_KEY');

// Fetch user details
smsService.getMe()
  .then(user => {
    console.log('User data:', user);
  })
  .catch(error => {
    console.error('Error fetching user data:', error.message);
  });
```

---

## Response Formats

### Success Response

When an SMS is successfully sent, the API returns the following response:

```json
{
    "success": true,
    "message": "Message sent successfully.",
    "mobile": "01XXXXXXXXX",
    "msg": "ANON SMS PANEL",
    "newBalance": 796,
    "ip": "XXX.XXX.XX.XXX"
}
```

- **success**: `true` – Indicates the SMS was successfully sent.
- **message**: The confirmation message (e.g., `"Message sent successfully."`).
- **mobile**: The recipient's mobile number.
- **msg**: The content of the SMS.
- **newBalance**: Updated account balance after sending the SMS.
- **ip**: The IP address from which the request was made.

### Error Response

If there is an error, the API will return an error response:

```json
{
    "success": false,
    "error": "Invalid API Key."
}
```

#### Common Error Messages

| **Error Message**            | **Description**                                                  |
|------------------------------|------------------------------------------------------------------|
| **Invalid API Key**           | The provided API key is invalid.                                |
| **Mobile number is required** | No mobile number provided in the request.                       |
| **Message is required**       | No message provided in the request.                             |
| **Insufficient balance**      | Your account balance is insufficient.                           |
| **Invalid mobile number**     | The provided mobile number is invalid.                          |

---

## Example

Here's a complete example to send an SMS and fetch user details:

```javascript
const AnonSMS = require('node-anonsms');

// Initialize the AnonSMS service with your API key
const smsService = new AnonSMS('YOUR_API_KEY');

// Send an anonymous SMS
smsService.sendSMS('01XXXXXXXXX', 'Test message')
  .then(response => {
    console.log('SMS sent:', response);
  })
  .catch(error => {
    console.error('Error sending SMS:', error.message);
  });

// Fetch user details
smsService.getMe()
  .then(user => {
    console.log('User data:', user);
  })
  .catch(error => {
    console.error('Error fetching user data:', error.message);
  });
```

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.