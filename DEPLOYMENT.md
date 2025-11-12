# Deployment Guide for Cloudflare Pages

This guide will help you deploy the Atal Trade Effort website to Cloudflare Pages.

## Prerequisites

- A Cloudflare account (free tier is sufficient)
- Git repository (GitHub, GitLab, or Bitbucket)
- Node.js 18.17 or later installed locally

## Method 1: Deploy via Git Integration (Recommended)

### Step 1: Push to Git Repository

1. Initialize git repository (if not already done):
```bash
cd atal-trade-website
git init
git add .
git commit -m "Initial commit"
```

2. Create a new repository on GitHub/GitLab
3. Push your code:
```bash
git remote add origin <your-repository-url>
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Pages** in the left sidebar
3. Click **Create a project**
4. Click **Connect to Git**
5. Select your Git provider (GitHub/GitLab)
6. Authorize Cloudflare to access your repositories
7. Select the `atal-trade-website` repository

### Step 3: Configure Build Settings

Use the following settings:

- **Production branch**: `main` (or `master`)
- **Framework preset**: Next.js (Static HTML Export)
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Root directory**: `/` (leave empty if project is at root)

### Step 4: Environment Variables (Optional)

If you need any environment variables, add them in the **Environment variables** section.

### Step 5: Deploy

1. Click **Save and Deploy**
2. Wait for the build to complete (usually 2-5 minutes)
3. Your site will be live at `https://<project-name>.pages.dev`

## Method 2: Direct Upload

If you prefer not to use Git integration:

### Step 1: Build Locally

```bash
cd atal-trade-website
npm install
npm run build
```

This creates an `out` directory with your static site.

### Step 2: Upload to Cloudflare Pages

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Pages**
3. Click **Create a project**
4. Click **Upload assets**
5. Give your project a name
6. Drag and drop the `out` folder or click to browse
7. Click **Deploy site**

## Custom Domain Setup

After deployment, you can add a custom domain:

1. Go to your Pages project
2. Click on **Custom domains**
3. Click **Set up a custom domain**
4. Enter your domain name
5. Follow the DNS configuration instructions

## Automatic Deployments

With Git integration, Cloudflare Pages will automatically:
- Deploy on every push to your production branch
- Create preview deployments for pull requests
- Show deployment status in your Git provider

## Troubleshooting

### Build Fails

If the build fails, check:
- Node version is set correctly (18.17.0 or later)
- All dependencies are in `package.json`
- Build command is correct: `npm run build`
- Output directory is set to `out`

### Images Not Loading

Make sure `images.unoptimized: true` is set in `next.config.ts` for static export.

### Routing Issues

- Ensure `trailingSlash: true` is set in `next.config.ts`
- Check that all links use proper anchor tags for same-page navigation

## Build Configuration

The project is configured for static export with these settings in `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};
```

## Support

For issues with:
- **Cloudflare Pages**: Check [Cloudflare Pages docs](https://developers.cloudflare.com/pages/)
- **Next.js**: Check [Next.js static export docs](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- **This project**: Contact Atal Trade Effort at 7719100300 / 7719100400

## Performance Tips

After deployment:
1. Enable Cloudflare's CDN features
2. Use Cloudflare's image optimization (if available)
3. Enable HTTP/3 and Brotli compression
4. Set up proper caching rules

Your website should now be live and accessible worldwide with Cloudflare's global CDN! 🎉

