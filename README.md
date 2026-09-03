# Adore via Décor — Website

A premium, production-ready Next.js 15 website for **Adore via Décor by Suhani** — a handcrafted decor, gifting, and DIY brand based in Mumbai.

---

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** — scroll animations, reveal effects, micro-interactions
- **Lucide React** — icons

---

## Features

- ✅ Full hero section with parallax scroll & animated stats
- ✅ 6-grid featured collections with hover effects
- ✅ Product catalogue with category filter (24 products)
- ✅ Product detail modal with WhatsApp deep link
- ✅ Customisation process interactive timeline
- ✅ Workshop booking section → WhatsApp CTA
- ✅ Bulk & Corporate Gifting section → WhatsApp CTA
- ✅ Instagram showcase grid
- ✅ Testimonial carousel (8 reviews)
- ✅ FAQ accordion with category filter
- ✅ Contact section with click-to-call, WhatsApp, Instagram
- ✅ Floating WhatsApp button with tooltip
- ✅ Full SEO: metadata, Open Graph, JSON-LD structured data, sitemap, robots
- ✅ Responsive (mobile-first)
- ✅ Accessible (ARIA labels, keyboard navigation, focus styles)
- ✅ Google Fonts: Cormorant Garamond + DM Sans + Playfair Display

---

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Tailwind + Google Fonts + custom CSS
│   ├── layout.tsx           # Root layout, metadata, JSON-LD
│   ├── page.tsx             # Home page (all sections assembled)
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Sticky navbar with mobile menu
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── FeaturedCollections.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── ProductCatalogue.tsx
│   │   ├── CustomisationProcess.tsx
│   │   ├── Workshops.tsx
│   │   ├── CorporateOrders.tsx
│   │   ├── InstagramShowcase.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── ProductCard.tsx
│       ├── ProductModal.tsx
│       └── FloatingWhatsApp.tsx
├── data/
│   ├── products.ts          # 24 products across 8 categories
│   └── content.ts           # Testimonials, workshops, FAQs
├── lib/
│   └── whatsapp.ts          # WhatsApp URL helpers
└── types/
    └── index.ts             # TypeScript types
```

---

## Local Development

### Prerequisites

- Node.js 18.17+ (required for Next.js 15)
- npm or yarn

### Install & Run

```bash
# 1. Navigate to the project folder
cd adore-via-decor

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

---

## Build for Production

```bash
npm run build
npm start
```

---

## Deploy to Vercel (Recommended)

### Option A — Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# From project root:
vercel

# Follow prompts:
# - Link to your Vercel account
# - Select project name
# - Framework: Next.js (auto-detected)
# - Deploy!

# For production deployment:
vercel --prod
```

### Option B — Vercel Dashboard (easier)

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repository
4. Framework will be **auto-detected as Next.js**
5. Click **Deploy** — done!

Vercel handles:
- Automatic HTTPS
- CDN edge delivery
- Preview deployments on every push
- Zero-config Next.js optimisation

---

## Custom Domain Setup (Vercel)

1. In your Vercel project → **Settings → Domains**
2. Add your domain (e.g. `adoreviadecor.com`)
3. Update your DNS with the provided records
4. Update `metadataBase` in `src/app/layout.tsx` to your real domain:

```tsx
metadataBase: new URL("https://adoreviadecor.com"),
```

Also update `sitemap.ts`:
```ts
url: "https://adoreviadecor.com",
```

---

## Customisation Guide

### Update WhatsApp Number

Edit `src/lib/whatsapp.ts`:
```ts
const WHATSAPP_NUMBER = "917977726749"; // country code + number, no +
```

### Add / Edit Products

Edit `src/data/products.ts` — add a new object to the `products` array following the `Product` type from `src/types/index.ts`.

### Update Instagram URL

Search and replace `https://instagram.com/adore.viadecor` across the codebase.

### Replace Placeholder Images

Replace `images.unsplash.com` URLs in `src/data/products.ts` with your own product photography. Host on Cloudinary, Vercel Blob, or any CDN.

To use your own images with Next.js `<Image>`:
1. Add the domain to `next.config.mjs` under `images.remotePatterns`
2. Replace `<img>` tags with Next.js `<Image>` for automatic optimisation

### Add Real Instagram Feed

Replace the static image grid in `InstagramShowcase.tsx` with the Instagram Basic Display API or a service like [LightWidget](https://lightwidget.com) for a live feed.

---

## Brand Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `ivory` | `#F8F5EF` | Page background |
| `teal` | `#79C5C8` | Primary accent, CTAs |
| `coral` | `#E8B0A8` | Secondary accent, highlights |
| `sage` | `#8EA89A` | Tertiary accent, labels |
| `charcoal` | `#222222` | Body text, dark sections |
| `offwhite` | `#FDFAF6` | Card backgrounds |

---

## Performance Notes

- All section images use `loading="lazy"` (except hero which is `eager`)
- Framer Motion animations respect `prefers-reduced-motion` via `useReducedMotion`
- Fonts are loaded via Google Fonts with `display=swap`
- Next.js 15 automatically code-splits every page and component

---

## License

Private project — all rights reserved by Adore via Décor by Suhani.
