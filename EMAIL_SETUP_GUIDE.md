# EmailJS Setup Guide - Contact Form ke liye

## Step 1: EmailJS Account banayein

1. **EmailJS website** par jayein: https://www.emailjs.com/
2. **Sign Up** karein (free account)
3. **Email verification** complete karein

## Step 2: Email Service Add karein

1. EmailJS dashboard mein **"Email Services"** section mein jayein
2. **"Add New Service"** click karein
3. **Gmail** select karein
4. **Gmail account** se connect karein (muneeb762500@gmail.com)
5. **Service ID** copy karein (jaise: service_abc123)

## Step 3: Email Template banayein

1. **"Email Templates"** section mein jayein
2. **"Create New Template"** click karein
3. **Template content** set karein:

```
Subject: New Contact Form Message - {{subject}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from Portfolio Contact Form
```

4. **Template ID** copy karein (jaise: template_xyz789)

## Step 4: Public Key lein

1. **"Account"** section mein jayein
2. **"API Keys"** tab mein jayein
3. **Public Key** copy karein (jaise: user_abcd1234)

## Step 5: Configuration Update karein

**email-config.js** file mein ye values update karein:

```javascript
const EMAIL_CONFIG = {
    serviceId: 'service_abc123',     // Step 2 se mila Service ID
    templateId: 'template_xyz789',   // Step 3 se mila Template ID
    publicKey: 'user_abcd1234'       // Step 4 se mila Public Key
};

// Initialize function mein bhi public key update karein
emailjs.init("user_abcd1234");
```

## Step 6: Test karein

1. Portfolio website open karein
2. Contact form fill karein
3. **"Send Message"** click karein
4. Gmail check karein - message aa jana chahiye

## Important Notes:

- **Free plan** mein 200 emails per month limit hai
- **Gmail** mein spam folder check karein agar message nahi mila
- **Console** mein errors check karein agar koi problem ho
- **HTTPS** required hai production mein

## Troubleshooting:

### Agar email nahi aa raha:
1. **Service ID, Template ID, Public Key** sahi check karein
2. **Gmail spam folder** check karein
3. **Browser console** mein errors dekhen
4. **EmailJS dashboard** mein logs check karein

### Common Errors:
- `Invalid service ID` - Service ID galat hai
- `Invalid template ID` - Template ID galat hai
- `Invalid public key` - Public key galat hai
- `Network error` - Internet connection check karein

## Email Template Variables:

Ye variables automatically replace ho jayenge:
- `{{from_name}}` - Sender ka naam
- `{{from_email}}` - Sender ka email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_email}}` - Aap ka email (muneeb762500@gmail.com)

## Security Tips:

- **Public key** ko hide karne ki zarurat nahi (public hai)
- **Private key** kabhi frontend mein use na karein
- **Rate limiting** enable karein EmailJS dashboard mein

Setup complete hone ke baad contact form se messages directly aap ke Gmail mein aa jayenge!