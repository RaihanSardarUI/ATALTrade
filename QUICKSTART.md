# Quick Start Guide

Get your Atal Trade Effort website up and running in minutes!

## 🚀 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Visit http://localhost:3000 to see your site!

### 3. Make Changes
- Edit components in the `components/` folder
- Modify styles in `app/globals.css`
- Update content directly in component files

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized static site in the `out/` directory.

## 🌐 Deploy to Cloudflare Pages

### Option A: Git Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Cloudflare**
   - Go to https://dash.cloudflare.com/
   - Click **Pages** → **Create a project**
   - Connect your GitHub repository
   - Use these settings:
     - Build command: `npm run build`
     - Build output: `out`
     - Node version: 18.17.0

3. **Deploy!**
   - Click "Save and Deploy"
   - Your site will be live in 2-5 minutes

### Option B: Direct Upload

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Upload to Cloudflare**
   - Go to Cloudflare Pages
   - Click "Upload assets"
   - Upload the `out` folder

## 🎨 Customization Quick Tips

### Change Colors
Edit `app/globals.css`:
```css
.gradient-text {
  @apply bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent;
}
```

### Update Course Content
- **Level 1**: Edit `components/Level1Course.tsx`
- **Level 2**: Edit `components/Level2Course.tsx`

### Update Trainers
Edit the `trainers` array in `components/Trainers.tsx`

### Update Pricing
Edit the `packages` array in `components/Pricing.tsx`

### Update Contact Info
Edit `components/Contact.tsx` and `components/Footer.tsx`

## 📱 Test Responsiveness

The site is mobile-first and responsive. Test on:
- Desktop (1920x1080)
- Tablet (768x1024)
- Mobile (375x667)

Use browser dev tools (F12) to test different screen sizes.

## 🔧 Troubleshooting

### Build Errors
- Delete `node_modules` and `.next` folders
- Run `npm install` again
- Run `npm run build`

### Styling Issues
- Clear browser cache
- Check Tailwind class names
- Verify `globals.css` is imported

### Deployment Issues
- Ensure Node version is 18.17+
- Check build output is set to `out`
- Verify all dependencies are in `package.json`

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Cloudflare Pages](https://developers.cloudflare.com/pages/)
- [Lucide Icons](https://lucide.dev/)

## 🆘 Need Help?

Contact Atal Trade Effort:
- Phone: 7719100300 / 7719100400
- Website: https://ataltradeeffort.com/

---

**Happy Building! 🎉**

