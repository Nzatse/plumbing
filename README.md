# Plumbing Services

A Next.js website for professional plumbing services, built with the App Router.

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install Dependencies

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Shared layout with navigation
│   ├── globals.css       # Global styles
│   ├── page.tsx          # Home (/)
│   ├── about/page.tsx    # About (/about)
│   ├── blog/page.tsx     # Blog (/blog)
│   ├── gallery/page.tsx  # Gallery (/gallery)
│   ├── locations/page.tsx# Locations (/locations)
│   ├── services/page.tsx # Services (/services)
│   └── terms/page.tsx    # Terms (/terms)
├── public/               # Static assets (served at root)
│   ├── assets/           # CSS/JS assets
│   ├── images/           # Image files
│   ├── favicon.ico
│   └── ...
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Static Assets

Static assets are served from the `public/` directory and accessible at the same URL paths:

- `/images/...` → `public/images/...`
- `/assets/...` → `public/assets/...`
- `/favicon.ico` → `public/favicon.ico`

## Deployment

This project is configured for deployment on [Vercel](https://vercel.com). The `vercel.json` sets `framework: "nextjs"` so Vercel auto-detects and builds the project correctly.
