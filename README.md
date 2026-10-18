# Kuruzu portfolio

A responsive portfolio for Cheryl Anne Cruz, based on the existing Kuruzu cat logo. Includes home, work, about, contact, and a portfolio concept walkthrough.

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
- The Kuruzu walkthrough is labelled as a personal portfolio concept. Replace or supplement it with verified project case studies.
- The contact email comes from the GitHub profile. Update it in `app/contact/page.tsx` and `app/layout.tsx` if needed.
- Colours and responsive styles live in `app/globals.css`; the existing logo is `public/logo.jpg`.

## Validation

Production build and TypeScript checks pass. Exported internal links and asset paths were checked. Desktop browser navigation was verified. Mobile styles are included; mobile browser testing remains outstanding.
