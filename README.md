# Dora: Explore and Play! — Promotional Website

A professional, single-page promotional site for the mobile game **Dora: Explore and Play!**
Built with **Vite + React + TypeScript + Tailwind CSS v4** and **Framer Motion**.

## Features

- Animated hero with a landscape phone mockup showing live gameplay
- Feature grid, gameplay screenshot gallery (in device frames), embedded YouTube trailer
- About section with brand highlights and store download CTAs
- **Privacy Policy** (`/privacy`) and **Terms of Use** (`/terms`) pages
- App Store + Google Play store buttons throughout
- Fully responsive, accessible, English-only

## Project structure

```
public/
  shots/            Game screenshots (1–8.webp)
  favicon.svg
src/
  components/       Navbar, Footer, StoreButtons, PhoneMockup, LegalLayout
  sections/         Hero, Features, Gallery, VideoSection, About, CtaBanner
  pages/            Home, Privacy, Terms
  data/site.ts      <-- Single source of truth: store links, company info, content
  lib/utils.ts
  App.tsx, main.tsx, index.css
```

## Editing content

All store links, company details, contact info and copy live in **`src/data/site.ts`**.
Change the company block there once and the footer + legal pages update automatically.

## Scripts

```bash
npm install      # install dependencies
npm run dev      # local dev server
npm run build    # type-check + production build -> dist/
npm run preview  # preview the production build
```

> On Windows PowerShell with script execution disabled, use `npm.cmd` instead of `npm`.

## Deployment (SPA)

The site uses client-side routing (`/privacy`, `/terms`). When deploying to a static host,
add a catch-all rewrite so deep links resolve to `index.html`:

- **Netlify:** `/*  /index.html  200`
- **Vercel:** rewrite all routes to `/index.html`
- **Nginx:** `try_files $uri /index.html;`

## Notes

- The embedded trailer uses `youtube-nocookie.com` and only loads after the user clicks play.
- Screenshots are landscape gameplay captures, placed inside a horizontal phone frame.
