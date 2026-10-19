# Kuruzu portfolio

A responsive portfolio for Cheryl Anne Cruz, based on the existing Kuruzu cat logo. Includes home, work, about, contact, and seven case studies adapted from the original Gridsome portfolio.

## Run locally

Requires Node.js 20.9 or later.

    npm ci
    npm run dev

Visit http://localhost:3000.

## Production

    npm run build

The complete static website is generated in `out/`. It can be hosted on a static host. Contact links open the visitor’s email application; there is no form backend or message storage.

## Content

- Update personal copy in `app/page.tsx` and `app/about/page.tsx`.
- Add real projects in `app/work/` and update `app/components/project.tsx`.
- Case-study copy and captions live in `app/content/projects.json`. Project pages are generated from that content.
- The legacy `/work/kuruzu/` concept URL is retained for existing links.
- Original screenshots, GIFs, logos, and illustrations in `public/work/` are copied unchanged; `app/content/original-assets.json` records their SHA-256 checksums.
- Earlier employment milestones cover 2008–2020. Update the bio when newer confirmed details are available.
- The contact email comes from the GitHub profile. Update it in `app/contact/page.tsx` and `app/layout.tsx` if needed.
- Colours and responsive styles live in `app/globals.css`; the existing logo is `public/logo.jpg`.

## Validation

Production build and TypeScript checks pass. Exported internal links and asset paths were checked. Desktop/tablet browser navigation was verified. Original asset checksums and exported links were checked. Narrow mobile browser testing remains outstanding.
