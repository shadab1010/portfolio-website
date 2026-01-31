# Modern Portfolio Website

A professional portfolio website built with Next.js 16, TypeScript, and Tailwind CSS, featuring a modern design with dark/light mode toggle, project showcases with image slideshows, and SEO optimization.

## 🚀 Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Theme**: next-themes for dark/light mode
- **Icons**: Custom SVG icons
- **Deployment**: Ready for Vercel/Netlify

## 📁 Project Structure

```
portfolio-website/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main portfolio page
├── components/
│   └── ThemeToggle.tsx      # Dark/light mode toggle
├── public/
│   ├── favicon.png          # Profile image as favicon
│   ├── Resume/              # ResumeAI project images
│   └── DocuFlux/            # DocuFlux project images
└── package.json             # Dependencies and scripts
```

## ✨ Features

- 🎨 **Modern Design**: Clean, professional UI with gradient backgrounds
- 🌙 **Dark/Light Mode**: Seamless theme switching with system preference detection
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- 🖼️ **Project Showcases**: Interactive slideshows with 4 images per project
- ⚡ **Fast Performance**: Optimized with Next.js and Tailwind CSS
- 🔍 **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- 🎯 **Professional Branding**: Custom favicon with profile image

## 📧 Setting Up Contact Form with EmailJS

Your contact form is now functional! To make it send emails to your inbox, follow these steps:

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Verify your email address

### 2. Set Up Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account and give it a name (e.g., "gmail")

### 3. Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

**Subject:**
```
New Contact Form Message from {{from_name}}
```

**HTML Body:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>New Contact Message</title>
</head>
<body>
    <h2>New message from your portfolio website</h2>
    <p><strong>From:</strong> {{from_name}} ({{from_email}})</p>
    <p><strong>Subject:</strong> {{subject}}</p>
    <p><strong>Message:</strong></p>
    <p>{{message}}</p>
    <hr>
    <p><small>This message was sent from your portfolio contact form.</small></p>
</body>
</html>
```

### 4. Get Your IDs
1. **Service ID**: From Email Services section (looks like "service_xxxxx")
2. **Template ID**: From Email Templates section (looks like "template_xxxxx")
3. **Public Key**: From Account section → General (looks like a long string)

### 5. Update Your Code
1. Open `components/ContactForm.tsx`
2. Replace the placeholder values:
   ```typescript
   const serviceId = 'service_hzqeyx9'     // ← Replace with your Service ID
   const templateId = 'template_kpxqbrf'   // ← Replace with your Template ID
   const publicKey = 'URz82o-kkgk-0d8Nn'     // ← Replace with your Public Key
   ```
3. Update the `to_email` if needed (it's already set to your email)

### 6. Test Your Form
1. Run your development server: `npm run dev`
2. Go to the contact section
3. Fill out and submit the form
4. Check your email for the message!

### Troubleshooting
- **Emails not sending**: Double-check your Service ID, Template ID, and Public Key
- **Template not working**: Make sure your template variables match exactly (`{{from_name}}`, `{{from_email}}`, etc.)
- **Gmail issues**: You may need to enable "Less secure app access" or use an App Password

## Updating Your GitHub Repository

After making changes to your code, follow these steps to update your GitHub repository:

### Manual Update Process:

1. **Check what files changed:**
   ```bash
   git status
   ```

2. **Add your changes:**
   ```bash
   git add .
   # or add specific files: git add filename
   ```

3. **Commit your changes:**
   ```bash
   git commit -m "Describe your changes here"
   ```

4. **Push to GitHub:**
   ```bash
   git push
   ```

### Example Workflow:
```bash
# Make your code changes in VS Code
# Then run these commands:

git add    # git add app/page.tsx
git commit -m "Updated portfolio content and fixed styling"
git push #origin master
```

## Automatic Deployment (Recommended)

For automatic updates when you push to GitHub:

### Deploy to Vercel:
1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub account
3. Import your `portfolio-website` repository
4. Every `git push` will automatically deploy your changes

### Deploy to Netlify:
1. Go to [netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Set up automatic deployments
4. Changes push to GitHub will auto-deploy to Netlify

## Features

- Responsive design
- Dark/Light theme toggle
- Sections: Hero, About, Services, Tools, Projects, Contact
- Project slideshows with multiple images
- SEO optimized with meta tags
- Professional favicon

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
cd portfolio-website
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Customization Guide

### Personal Information:
- **Hero Section**: Update name, title, and description in `app/page.tsx`
- **About Section**: Modify the about content and skills
- **Contact**: Update social media links and contact information

### Projects:
- **Images**: Replace images in `public/Resume/` and `public/DocuFlux/` folders
- **Content**: Update project descriptions, technologies, and links in `app/page.tsx`
- **Add Projects**: Copy existing project structure and modify content

### Styling:
- **Colors**: Modify Tailwind classes in `app/globals.css` and `app/page.tsx`
- **Fonts**: Update font settings in `app/layout.tsx`
- **Animations**: Customize CSS animations in `app/globals.css`

### Branding:
- **Favicon**: Replace `public/favicon.png` with your updated profile image
- **Logo**: Update the logo in the header section
- **Colors**: Modify the purple gradient theme colors throughout the site

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
