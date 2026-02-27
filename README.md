# Skyview Plumbing — Next.js Site

This is the Next.js (App Router) version of the Skyview Plumbing website, rebuilt from the original Vite/React static site.

## Local Development

```bash
# Install dependencies
npm install

# Run dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
app/                    # Next.js App Router pages
  layout.tsx            # Root layout (loads Vite bundle + CSS)
  page.tsx              # Home page (/)
  about/page.tsx        # /about
  services/page.tsx     # /services
  services/[slug]/      # /services/:slug (e.g. /services/drain-cleaning)
  locations/page.tsx    # /locations
  locations/[slug]/     # /locations/:slug (e.g. /locations/blaine)
  gallery/page.tsx      # /gallery
  blog/page.tsx         # /blog
  blog/[slug]/          # /blog/:slug (e.g. /blog/water-leak-detection-tips)
  terms/page.tsx        # /terms
  api/chat-submit/      # POST /api/chat-submit (Twilio SMS)
public/
  assets/               # Vite-built JS/CSS bundle + helper scripts
  images/               # Site images
  favicon.ico, etc.     # Icons and web manifest
  robots.txt            # SEO
  sitemap.xml           # SEO
SEO/                    # Original SEO source files
```

## Routing

All legacy `.html` URLs (e.g. `/about.html`) are permanently redirected (301) to their clean equivalents (e.g. `/about`). Redirects are configured in `next.config.mjs`.

## Environment Variables

The `/api/chat-submit` endpoint requires Twilio credentials. Create a `.env.local` file:

```env
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_FROM_NUMBER=+1XXXXXXXXXX        # or use TWILIO_MESSAGING_SERVICE_SID
ALERT_TO_PHONE=+1XXXXXXXXXX
```

## Deployment

Deployed on Vercel. The `vercel.json` sets `"framework": "nextjs"` so Vercel auto-detects the Next.js app.
