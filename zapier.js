// Import the necessary modules
const request = require('request');

// Define the Zapier object
const zapier = {};

// Define the postContent function
zapier.postContent = function(platform, content, callback) {
    // Define the URL for the Zapier webhook
    const url = 'https://hooks.zapier.com/hooks/catch/' + platform.credentials.apiKey + '/abcdef/';

    // Define the payload for the POST request
    const payload = {
        platform: platform.name,
        message: content.message,
        image: content.image
    };

    // Send the POST request
    request.post(url, { json: payload }, function(error, response, body) {
        if (error) {
            // If there was an error, pass it to the callback
            callback(error);
        } else if (response.statusCode !== 200) {
            // If the response status code is not 200, create a new error and pass it to the callback
            callback(new Error('Response status code was ' + response.statusCode));
        } else {
            // If there were no errors and the response status code was 200, pass null to the callback
            callback(null);
        }
    });
};

// Define the sendConfirmation function
zapier.sendConfirmation = function(confirmation, callback) {
    // Define the URL for the Zapier webhook
    const url = 'https://hooks.zapier.com/hooks/catch/' + confirmation.email + '/abcdef/';

    // Define the payload for the POST request
    const payload = {
        email: confirmation.email,
        slack: confirmation.slack
    };

    // Send the POST request
    request.post(url, { json: payload }, function(error, response, body) {
        if (error) {
            // If there was an error, pass it to the callback
            callback(error);
        } else if (response.statusCode !== 200) {
            // If the response status code is not 200, create a new error and pass it to the callback
            callback(new Error('Response status code was ' + response.statusCode));
        } else {
            // If there were no errors and the response status code was 200, pass null to the callback
            callback(null);
        }
    });
};

// Export the Zapier object
module.exports = zapier;
