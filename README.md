# Instant Social Media Post

This project allows you to quickly post a pre-written message or image to your social media accounts at the press of a button. This is perfect for situations where you need to send out time-sensitive content, like flash sales, event reminders, or real-time updates.

## How It Works

- **Button Press as Trigger**: Use a physical IoT button like Flic or a virtual button in an app that integrates with Zapier. Pressing this button initiates the Zap.
- **Post Creation**: When triggered, the Zap automatically posts a pre-defined message or image to your chosen social media platforms (such as Twitter, Facebook, Instagram, or LinkedIn).
- **Customization Options**: You can set up multiple buttons for different types of posts or have a single button where the message or image changes periodically.
- **Confirmation Notification**: Optionally, once the post is live, the Zap can send a confirmation notification to your email or a messaging app like Slack.

## Setup

### Set Up the Button

1. Choose a compatible IoT button that works with Zapier or select a virtual button app.
2. Configure the button according to the manufacturer’s or app’s instructions.

### Create the Zap

1. In Zapier, select the button as your trigger.
2. Choose your social media platform(s) as the action for posting content.
3. Configure the content details – you can use text, images, or both.

### Add Confirmation Action (Optional)

1. Set up an additional action to send a confirmation to your preferred communication channel.

### Test Your Zap

Make sure to test the Zap thoroughly to ensure that the button press successfully posts the content to your social media accounts.

## Configuration

The `config.json` file is used to configure the button, social media platforms, content, and confirmation settings. Replace the placeholders with your actual values.

```json
{
  "button": {
    "type": "Flic",
    "id": "your_button_id"
  },
  "socialMediaPlatforms": [
    {
      "name": "Twitter",
      "credentials": {
        "apiKey": "your_twitter_api_key",
        "apiSecretKey": "your_twitter_api_secret_key",
        "accessToken": "your_twitter_access_token",
        "accessTokenSecret": "your_twitter_access_token_secret"
      }
    },
    {
      "name": "Facebook",
      "credentials": {
        "appId": "your_facebook_app_id",
        "appSecret": "your_facebook_app_secret",
        "userAccessToken": "your_facebook_user_access_token"
      }
    }
    // Add more platforms as needed
  ],
  "content": {
    "message": "Your pre-defined message",
    "image": "URL or path to your image"
  },
  "confirmation": {
    "email": "your_email@example.com",
    "slack": "your_slack_webhook_url"
  }
}
```

## Running the Project

Open `index.html` in your web browser and press the "Post Now" button to post the pre-defined message or image to your chosen social media platforms.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.
