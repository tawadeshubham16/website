# Neesh Enterprise Strategies Website

Marketing site for contract-led full-stack engineering in Ireland and the EU. Built with the Next.js App Router, TypeScript, and Tailwind CSS v4 using inline theming.

## Quick start

```bash
npm install      # install dependencies
npm run dev      # start local dev server on http://localhost:3000
npm run lint     # optional: static checks
npm run build    # production build
npm run start    # serve the production build
```

## Structure

- `app/layout.tsx` — global fonts (Geist), metadata, and page shell.
- `app/globals.css` — Tailwind v4 `@import` plus global tokens (background, foreground, navbar height).
- `app/page.tsx` — page composition: `Navbar`, `Banner`, `Services`, `Expertise`, `About`, `Contact`, `Footer`.
- `app/components/*` — section components; `assets/` holds the logo and hero image.

## Content notes

- Contact email lives at the top of `app/components/Contact.tsx`; the form posts to `/api/contact` and is Turnstile-protected.
- Navigation labels/anchors are defined in `app/components/Navbar.tsx` and mirrored in the footer.
- Hero expertise cards (`Banner`), services list (`Services`), and expertise tiles (`Expertise`) are driven by local arrays inside each component.
- Compliance badges and company details are in `app/components/About.tsx` and `app/components/Footer.tsx`.

## Environment

Set these for the contact form to work:

- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` — Cloudflare Turnstile site key (public).
- `TURNSTILE_SECRET_KEY` — Turnstile secret key for backend verification.
- `RESEND_API_KEY` — Resend API key used to send the email.
- `CONTACT_FROM_EMAIL` — Verified sender address for Resend (required).
- `CONTACT_TO_EMAIL` — Destination inbox; defaults to `hello@neesh.ie` if omitted.
- `NEXT_PUBLIC_CAL_LINK` — Cal.com booking URL used by the “Book intro call” buttons (defaults to the 15-minute event link if unset).

## Deployment

Run `npm run build` and host the `.next` output with `npm run start`, or deploy to any Next.js-compatible platform (Vercel, Netlify, etc.). Set `NODE_ENV=production` for production runs.
