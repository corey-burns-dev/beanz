# Beanz ☕

Small-batch coffee roasters storefront built with [Astro](https://astro.build) v5 and [Tailwind CSS](https://tailwindcss.com) v4. Designed for near-perfect Lighthouse scores out of the box — zero JS bundles, auto-optimised WebP images, and fully static output.

---

## Stack

| Tool                                       | Why                                       |
| ------------------------------------------ | ----------------------------------------- |
| [Astro v5](https://astro.build)            | Zero-JS-by-default static site generation |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first CSS via Vite plugin         |
| [Bun](https://bun.sh)                      | Fast package manager & runtime            |

---

## Lighthouse highlights

- **Zero JS bundles** — only a ~400 byte inlined mobile menu script
- **Automatic WebP** — Astro's `<Image />` converts and optimises every remote image at build time
- **LCP ready** — hero image has `fetchpriority="high"` + `loading="eager"`; all below-fold images are lazy
- **No CLS** — explicit `width`/`height` on every `<img>` element
- **Font perf** — `preconnect` + `font-display=swap` for Google Fonts
- **Full SEO** — meta description, Open Graph, Twitter Card, canonical URL, `theme-color`
- **Accessible** — skip link, semantic HTML, ARIA labels, logical heading order

---

## Sections

```
/
├── Sticky nav with responsive mobile menu
├── Hero — headline, CTAs, hero image with live roast overlay + SCA score badge
├── Scrolling ticker
├── Featured Beans — 3 single-origin cards (roast, process, altitude, tasting notes)
├── Gallery strip — 4 roastery photos
├── The Beanz Process — sourcing → selection → roasting → shipping
├── Subscriptions — Explorer / Purist / Devotee tier picker
├── About — founder story + photo mosaic
├── Newsletter CTA
└── Footer — nav, address, hours, email
```

---

## Getting started

```bash
bun install
bun run dev      # http://localhost:4321
bun run build    # static output → dist/
bun run preview  # preview dist/ locally
```

---

## Palette

| Token     | Hex       |
| --------- | --------- |
| Espresso  | `#3C2A21` |
| Cream     | `#D5CEA3` |
| Ember     | `#E57C23` |
| Parchment | `#F5F0E8` |

Typography: **Playfair Display** (headings, body) · **JetBrains Mono** (labels, UI)

---

## Project structure

```
beanz/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro      # HTML shell, meta, fonts
│   ├── pages/
│   │   └── index.astro       # Full landing page
│   └── styles/
│       └── global.css        # Tailwind v4 + theme tokens + animations
└── astro.config.mjs
```

---

## Deployment

Pure static — drop `dist/` anywhere:

- **Cloudflare Pages** — build: `bun run build`, output: `dist`
- **Netlify** — build: `bun run build`, publish: `dist`
- **Vercel** — Astro preset, auto-detected

---

## License

MIT
