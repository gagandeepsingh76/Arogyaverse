# Email Setup Guide

## Gmail Configuration

To enable the contact form email functionality, you need to set up Gmail App Password:

### 1. Enable 2-Step Verification
- Go to your Google Account settings
- Navigate to Security > 2-Step Verification
- Enable 2-Step Verification if not already enabled

### 2. Create App Password
- Go to Google Account Settings > Security > 2-Step Verification
- Scroll down to "App passwords"
- Select "Mail" and "Other (Custom name)"
- Name it "Arogyaverse Contact Form"
- Copy the generated 16-character password

### 3. Create .env File
Create a `.env` file in the root directory with the following content:

```
# Gmail Configuration
GMAIL_PASSWORD=your_16_character_app_password_here

# Server Configuration
PORT=4000
NODE_ENV=development

# CORS Configuration
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000
```

### 4. Replace the placeholder
Replace `your_16_character_app_password_here` with the actual app password you generated.

## How it works

When a user fills out the contact form and clicks "Send Inquiry", the system will:

1. Collect all form data (firstName, lastName, email, phone, topic, message)
2. Send a formatted HTML email to kushbairwa765@gmail.com
3. Include all the user's information in a professional email template
4. Show success/error messages to the user

## Email Template

The email will include:
- Contact information (name, email, phone, topic)
- The user's message
- Timestamp of submission
- Professional formatting with Arogyaverse branding

## Security Notes

- The Gmail password is stored as an environment variable
- Form validation ensures required fields are filled
- Rate limiting is applied to prevent spam
- CORS is configured for security

