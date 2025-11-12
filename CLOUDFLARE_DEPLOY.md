# 🚀 Deploy to Cloudflare Pages - Step by Step

Your website is ready to deploy! Follow these simple steps:

## Option 1: Deploy via Git (Recommended) ⭐

### Step 1: Initialize Git Repository

Open your terminal in the project folder and run:

```bash
cd "C:\Users\RHN\Desktop\All Project\Atal Trade"
git init
git add .
git commit -m "Initial commit - Atal Trade Effort website"
```

### Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository named `atal-trade-website`
3. **Don't** initialize with README (we already have files)
4. Click "Create repository"

### Step 3: Push to GitHub

Copy the commands from GitHub and run them:

```bash
git remote add origin https://github.com/YOUR-USERNAME/atal-trade-website.git
git branch -M main
git push -u origin main
```

### Step 4: Deploy on Cloudflare Pages

1. Go to https://dash.cloudflare.com/
2. Click **"Workers & Pages"** in the left sidebar
3. Click **"Create application"**
4. Click **"Pages"** tab
5. Click **"Connect to Git"**

### Step 5: Configure Build Settings

Select your repository and use these settings:

- **Production branch**: `main`
- **Framework preset**: `Next.js (Static HTML Export)`
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Root directory**: `/` (leave empty)

### Step 6: Deploy!

1. Click **"Save and Deploy"**
2. Wait 2-5 minutes for the build
3. Your site will be live at: `https://atal-trade-website.pages.dev`

---

## Option 2: Direct Upload (Quick & Easy) 🎯

### Step 1: Build is Already Done ✅

The `out` folder is ready with your built website!

### Step 2: Upload to Cloudflare

1. Go to https://dash.cloudflare.com/
2. Click **"Workers & Pages"**
3. Click **"Create application"**
4. Click **"Pages"** tab
5. Click **"Upload assets"**
6. Name your project: `atal-trade-website`
7. Drag and drop the **`out`** folder or click to browse
8. Click **"Deploy site"**

### Step 3: Done! 🎉

Your site will be live in 1-2 minutes at:
`https://atal-trade-website.pages.dev`

---

## 🌐 Custom Domain Setup (Optional)

After deployment, add your custom domain:

1. Go to your Cloudflare Pages project
2. Click **"Custom domains"**
3. Click **"Set up a custom domain"**
4. Enter your domain (e.g., `ataltradeeffort.com`)
5. Follow the DNS configuration instructions
6. Wait for DNS propagation (5-30 minutes)

---

## 📁 Project Structure

Your deployment includes:

```
out/
├── index.html          # Homepage
├── _next/              # Next.js assets
│   ├── static/         # CSS, JS, fonts
│   └── ...
├── favicon.ico         # Site icon
└── ...                 # Other static files
```

---

## 🔧 Build Configuration

Your `next.config.ts` is already configured for static export:

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};
```

---

## ✅ What's Included

Your deployed website includes:

- ✨ Modern, professional design
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Glass morphism effects
- 🚀 Animated backgrounds and interactions
- 💎 Premium gradient designs
- ⚡ Optimized for fast loading
- 🔒 Secure HTTPS by default
- 🌍 Global CDN (fast worldwide)

---

## 🎯 Next Steps After Deployment

1. **Test your live site** - Check all sections and links
2. **Share the URL** - Send to your team and clients
3. **Set up custom domain** - Use your own domain name
4. **Monitor analytics** - Track visitors (optional)
5. **Update content** - Push changes via Git for auto-deploy

---

## 🆘 Troubleshooting

### Build Fails?
- Check that Node version is 18.17.0 or later
- Verify all dependencies are in `package.json`
- Make sure `out` directory exists after build

### Site Not Loading?
- Wait 2-5 minutes after deployment
- Clear browser cache (Ctrl + F5)
- Check Cloudflare Pages dashboard for errors

### Images Not Showing?
- Verify `images.unoptimized: true` in `next.config.ts`
- Check that images are in the `public` folder

---

## 📞 Support

Need help? Contact:
- **Phone**: 7719100300 / 7719100400
- **Website**: https://ataltradeeffort.com/

---

**🎉 Congratulations! Your website is ready for the world!**

