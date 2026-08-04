# Matharams Engineering - SEO-First Next.js Web Application

An SEO-optimized, mobile-first, highly accessible, production-ready website built for **Matharams Engineering** (Precision Machining & Heavy Engineering).

## Tech Stack & Architecture

- **Framework**: Next.js 14+ (App Router, Server Components by default)
- **Language**: TypeScript (Strict mode enabled)
- **Styling**: Tailwind CSS (Custom dark industrial theme & glassmorphism design tokens)
- **Icons**: Lucide React
- **SEO & Structured Data**: Built-in JSON-LD schemas (Organization, Product, Breadcrumbs), OpenGraph metadata, dynamic `sitemap.xml`, and `robots.txt`

## Routes Included

- `/` - **Home Page**: Hero showcase, company highlights, core capabilities, featured products grid, ISO quality badge, and RFQ CTA banner.
- `/about` - **About Us**: 25+ years company profile, plant overview, mission, vision, and manufacturing infrastructure.
- `/products` - **Products Catalogue**: Full technical product grid with category filters.
- `/products/[slug]` - **Product Details**: Dynamic static page (SSG) with Product JSON-LD, specs table, features, target applications, gallery, and RFQ callouts.
- `/contact` - **Contact Us**: Address details, operating hours, and interactive Client Component Contact/RFQ form with validation.

## Getting Started & Local Development

### Installation

```bash
npm install
```

### Run Local Development Server

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

### Build Production Bundle

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

## Folder Structure

```
src/
├── app/                  # App Router pages & metadata endpoints
│   ├── about/            # About Us page
│   ├── contact/          # Contact Us page
│   ├── products/         # Products catalogue & dynamic [slug] details
│   ├── error.tsx         # Error boundary handler
│   ├── globals.css       # Tailwind directives & CSS design tokens
│   ├── layout.tsx        # Root layout with Organization JSON-LD & Navigation
│   ├── not-found.tsx     # Custom 404 page
│   ├── page.tsx          # Home page
│   ├── robots.ts         # Dynamic robots.txt
│   └── sitemap.ts        # Dynamic sitemap.xml
├── components/
│   ├── layout/           # Sticky Header & SEO-rich Footer
│   ├── sections/         # Hero section & Client ContactForm
│   └── ui/               # Reusable Button, Breadcrumb, ProductCard
├── lib/
│   ├── data.ts           # Product dataset & company information
│   ├── seo.ts            # Metadata builder & JSON-LD generators
│   └── utils.ts          # Tailwind merge & slug helper utilities
└── types/
    └── index.ts          # TypeScript interfaces for products, categories, forms
```
