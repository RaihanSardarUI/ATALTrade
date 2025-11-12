# Atal Trade Effort - Trading Course Showcase Website

A modern, beautiful website showcasing trading courses built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and responsive design
- 📱 Mobile-first approach
- ⚡ Fast performance with Next.js
- 🎯 Comprehensive course information (Level 1 & Level 2)
- 👨‍🏫 Expert trainer profiles
- 💰 Flexible pricing packages
- 📞 Easy contact options
- 🚀 Optimized for Cloudflare Pages deployment

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

To create a production build:

```bash
npm run build
```

This will generate a static export in the `out` directory, ready for deployment.

## Deployment to Cloudflare Pages

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy

1. Push your code to GitHub/GitLab
2. Connect your repository to Cloudflare Pages
3. Set build command: `npm run build`
4. Set output directory: `out`
5. Deploy!

## Project Structure

```
atal-trade-website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles & utilities
├── components/
│   ├── Navbar.tsx          # Navigation bar with smooth scroll
│   ├── Hero.tsx            # Hero section with CTA
│   ├── CourseOverview.tsx  # Course features overview
│   ├── Level1Course.tsx    # Level 1 (Basic) course details
│   ├── Level2Course.tsx    # Level 2 (Advanced) course details
│   ├── Trainers.tsx        # Trainer profiles
│   ├── Timeline.tsx        # Day-by-day course timeline
│   ├── Pricing.tsx         # Pricing packages
│   ├── Contact.tsx         # Contact section
│   └── Footer.tsx          # Footer with links
├── public/                 # Static assets
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── DEPLOYMENT.md           # Deployment guide
```

## Customization

### Colors

The website uses a gradient color scheme. Customize in `app/globals.css`:

```css
.gradient-text {
  @apply bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent;
}
```

### Content

All content is defined within component files. Update the data arrays in each component to modify:

- Course modules and topics (Level1Course.tsx, Level2Course.tsx)
- Trainer information (Trainers.tsx)
- Pricing packages (Pricing.tsx)
- Contact details (Contact.tsx, Footer.tsx)
- Timeline (Timeline.tsx)

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component-specific styles: Inline Tailwind classes

## Course Information

### Level 1 - Basic Course (7 Days)
- Basic Derivatives
- Basic Options
- Option Values
- Option Greeks
- Option Build-up
- Market Volatility

### Level 2 - Advanced Course (10 Days)
- Technical Analysis Introduction
- Candlestick PowerPack
- Support & Resistance
- Indicators
- Market Trends
- Option Scalping
- Selling Strategy
- Position Sizing

## Contact

**Atal Trade Effort**

- **Phone**: 7719100300 / 7719100400
- **Website**: https://ataltradeeffort.com/
- **Address**: ANO 402, 4th Floor, North Block, Astra Tower, Action Area IIC, New Town, Kolkata 700135

## License

© 2024 Atal Trade Effort. All rights reserved.
