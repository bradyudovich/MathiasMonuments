# Mathias Monuments - Heritage Luxury Since 1906

A modern Next.js website for Mathias Monuments featuring the 2026 'Heritage Luxury' design system.

## 🌐 Live Website

Once GitHub Pages is enabled, the website will be available at: `https://bradyudovich.github.io/MathiasMonuments/`

## ✨ Features

### Brand Identity
- **Typography**: Cormorant Garamond (headlines) and Montserrat (body) with display swap
- **Color Palette**: Deep Onyx (#0F172A), Slate-50 (#F8FAFC), Burnished Gold (#C5A059)
- **Historical Heritage**: Celebrating 120 years since 1906

### Interactive Components
- **Split Hero**: Parallax-scrolling monument imagery with typographic content
- **Bento Legacy Grid**: Three-tile layout showcasing history, inventory map, and expertise
- **Dynamic Inventory**: Filterable monument collection (Upright, Slant, Flush Marker, Bench)
- **Framer Motion Animations**: Reveal-on-scroll effects throughout

### Technical Stack
- **Framework**: Next.js 14 with App Router
- **Animations**: Framer Motion
- **Static Export**: Pre-rendered for optimal performance
- **Responsive Design**: Mobile-first approach with breakpoints

## 🚀 Enabling GitHub Pages

1. Go to repository settings: `https://github.com/bradyudovich/MathiasMonuments/settings`
2. Navigate to "Pages" section in the left sidebar
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
4. The workflow will automatically deploy when you merge to the `main` branch
5. Site will be available at: `https://bradyudovich.github.io/MathiasMonuments/`

## 📁 Project Structure

```
MathiasMonuments/
├── app/
│   ├── layout.tsx          # Root layout with metadata and fonts
│   └── page.tsx            # Landing page composition
├── components/
│   ├── InteractiveHero.tsx # Split hero with parallax effect
│   ├── BentoLegacyGrid.tsx # Bento-style grid layout
│   └── DynamicInventory.tsx # Filterable inventory component
├── styles/
│   └── globals.css         # Design system and responsive styles
├── public/
│   └── images/             # Monument images and assets
├── next.config.js          # Next.js configuration with static export
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment workflow
└── README.md               # This file
```

## 📸 Generating Screenshots

You can capture screenshots of key UI sections using the built-in Playwright script.

### Prerequisites

Install Playwright browser binaries (one-time setup):
```bash
npx playwright install chromium
```

### Steps

1. Start the development server in one terminal:
   ```bash
   npm run dev
   ```

2. In another terminal, run:
   ```bash
   npm run screenshots
   ```

Screenshots are saved to `public/screenshots/`:
- `header-Logo 1 Words Only Trasnparent.png` — Header with the site logo
- `credit-claim.png` — CreditClaim section (opened)
- `credit-above-bento.png` — CreditClaim positioned above the BentoLegacyGrid
- `our-work-gallery.png` — Our Work horizontal gallery

> **Note:** `public/screenshots/` is listed in `.gitignore` and won't be committed.

## 🛠️ Local Development

### Prerequisites
- Node.js 20.x or later
- npm or yarn

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/bradyudovich/MathiasMonuments.git
   cd MathiasMonuments
   ```

2. Install dependencies:
   ```bash
   npm ci
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Build and Export

To create a production build:
```bash
npm run build
```

This will generate a static export in the `out/` directory, ready for deployment.

## 📝 Website Sections

1. **Interactive Hero**: Split-screen design with parallax imagery and CTA "Request a Design Guide"
2. **Legacy Intro**: Historical narrative featuring Joseph L. Mathias and 120-year legacy
3. **Bento Grid**: 
   - 120 Years of History
   - Live Inventory Map (placeholder for integration)
   - Cemetery Bylaw Expertise
4. **Dynamic Inventory**: Filterable monument collection with animations
5. **Footer**: Contact information, address (175 E. Main Street, Westminster, MD), and service areas

## 🎨 Design System

### Colors
- **Deep Onyx**: `#0F172A` - Primary dark color
- **Slate-50**: `#F8FAFC` - Background and light text
- **Burnished Gold**: `#C5A059` - Accent color for CTAs and highlights

### Typography
- **Headlines**: Cormorant Garamond (serif, 400/600/700 weights)
- **Body**: Montserrat (sans-serif, 400/500/600/700 weights)

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 968px
- Desktop: > 968px

## 📸 Images

Place high-resolution monument images in `public/images/`:
- `monument-hero.jpg` - Hero section (1920x1080px recommended)
- `upright-1.jpg`, `upright-2.jpg` - Upright monuments
- `slant-1.jpg`, `slant-2.jpg` - Slant markers
- `flush-1.jpg` - Flush marker
- `bench-1.jpg` - Memorial bench

See `public/images/README.md` for detailed image specifications.

## 🚢 Deployment

The site is configured for automatic deployment via GitHub Actions:
- Triggers on push to `main` branch
- Builds Next.js static export
- Deploys to GitHub Pages

## 📄 License

© 2026 Mathias Monuments. All rights reserved.
