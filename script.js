// Load the configuration file
const config = require('./config.json');

// Get the button element from the DOM
const postButton = document.getElementById('postButton');

// Get the confirmation message element from the DOM
const confirmationMessage = document.getElementById('confirmationMessage');

// Function to post content to social media
function postContent() {
    // Loop through each social media platform in the config
    for (let platform of config.socialMediaPlatforms) {
        // Call the Zapier function to post the content
        // This function is assumed to be defined in zapier.js
        zapier.postContent(platform, config.content, function(err) {
            if (err) {
                // If there was an error, display it in the confirmation message
                confirmationMessage.textContent = 'Error: ' + err.message;
                confirmationMessage.style.color = 'red';
            } else {
                // If the post was successful, display a confirmation message
                confirmationMessage.textContent = 'Post successful!';
                confirmationMessage.style.color = 'green';
            }
        });
    }
}

// Function to send a confirmation notification
function sendConfirmation() {
    // Call the Zapier function to send the confirmation
    // This function is assumed to be defined in zapier.js
    zapier.sendConfirmation(config.confirmation, function(err) {
        if (err) {
            // If there was an error, display it in the confirmation message
            confirmationMessage.textContent = 'Error: ' + err.message;
            confirmationMessage.style.color = 'red';
        } else {
            // If the confirmation was successful, display a confirmation message
            confirmationMessage.textContent = 'Confirmation sent!';
            confirmationMessage.style.color = 'green';
        }
    });
}

// Add an event listener to the post button
postButton.addEventListener('click', function() {
    // When the button is clicked, post the content and send the confirmation
    postContent();
    sendConfirmation();
});
