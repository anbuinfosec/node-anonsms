# node-anonsms

![Logo](/assets/logo.png)

Welcome to **`node-anonsms`**, the ultimate Node.js module for sending anonymous SMS messages and managing your SMS account with ease! This package leverages the powerful [ANBUINFOSEC SMS API](https://sms.anbuinfosec.xyz/) to let you send SMS messages securely and retrieve important account data, all with a simple and clean API.

## Features

- 🌍 **Send Anonymous SMS**: Send SMS messages anonymously to any phone number globally.
- 📊 **Account Management**: Easily fetch your account details, such as balance and subscription status.
- 💳 **Real-Time Balance Update**: Automatically get your balance updates with each message sent.
- 🔒 **Secure and Fast**: API integration with robust authentication and fast response times.

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

You can easily install `node-anonsms` using npm:

```bash
npm install node-anonsms
```

---

## Usage

### 1. **Send SMS**

Sending an anonymous SMS is straightforward using the `sendSMS` method:

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

You can retrieve your user details (such as balance and account status) with the `getMe` method:

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

When the SMS is sent successfully, the API will return a JSON response like this:

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
- **mobile**: The mobile number that received the SMS.
- **msg**: The SMS message that was sent.
- **newBalance**: The updated account balance after sending the SMS.
- **ip**: The IP address used for the request.

### Error Response

If there is an error in processing the request, the API will return an error response:

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

Here’s a complete example to send an SMS and fetch your user details:

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

This project is licensed under the MIT License.