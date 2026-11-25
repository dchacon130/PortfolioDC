# Portfolio DC (v2)

Minimalist, editorial personal portfolio for **Diego Chacón — Senior QA Automation Engineer / SDET** (`Playwright · TypeScript · API · Mobile & OTT`).

Built with **Astro 5**, **Tailwind CSS v4**, and **TypeScript** with a data-driven architecture and zero client-side framework runtime.

---

## Quick Editing Guide (Where to Edit Everything)

All site content is intentionally separated from UI layout so you can update text, experience, skills, projects, or colors without digging into page templates:

| What you want to change | File to edit |
| :--- | :--- |
| Name, role, tagline, email, socials, availability badge, metrics, contact form endpoint | [`src/data/profile.ts`](src/data/profile.ts) |
| Work experience, client engagements, dates, early career | [`src/data/experience.ts`](src/data/experience.ts) |
| QA/SDET case studies & web projects | [`src/data/projects.ts`](src/data/projects.ts) |
| Technical skills (7 categories), certifications, education & languages | [`src/data/skills.ts`](src/data/skills.ts) |
| Consulting services & deliverables | [`src/data/services.ts`](src/data/services.ts) |
| Colors (`--color-paper`, `--color-ink`, `--color-accent`, etc.) & fonts | [`src/styles/global.css`](src/styles/global.css) |
| Downloadable Resume PDF | `public/assets/cv/Diego-Chacon-SDET-CV.pdf` *(update `cvPath` in `src/data/profile.ts` if renamed)* |
| Brand logo, favicon & Open Graph banner | `public/assets/brand/logo-dc.png`, `public/favicon.svg`, `public/assets/brand/og-banner.png` ([edit in Canva](https://canva.link/jqsob1lscv5351l)) |
| SEO meta tags, `<title>`, Open Graph, Google Fonts | [`src/layouts/Layout.astro`](src/layouts/Layout.astro) |
| Top navigation bar & mobile drawer | [`src/components/Menu.astro`](src/components/Menu.astro) |
| Footer links & copyright | [`src/components/Footer.astro`](src/components/Footer.astro) |
| Playwright E2E suite & CI pipeline | `tests/e2e/`, `playwright.config.ts`, [`.github/workflows/ci.yml`](.github/workflows/ci.yml) |

---

## Project Structure

```text
PortfolioDC/
├── public/
│   ├── assets/
│   │   ├── brand/logo-dc.png
│   │   ├── cv/Diego-Chacon-SDET-CV.pdf
│   │   └── image/919it-web-background.png
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Footer.astro
│   │   ├── Menu.astro
│   │   └── SectionHeader.astro
│   ├── data/
│   │   ├── experience.ts
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   ├── services.ts
│   │   └── skills.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro       # Home
│   │   ├── portfolio.astro   # Case Studies, Career Timeline & Web Projects
│   │   ├── about.astro       # Bio, 7-Category Tech Matrix & Certifications
│   │   ├── services.astro    # QA & SDET Consulting Offerings
│   │   └── contact.astro     # Direct Channels & Contact Form
│   └── styles/
│       └── global.css        # Design tokens & Tailwind v4 entry
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## Commands

```bash
# Install dependencies
npm install

# Start local dev server (http://localhost:4321)
npm run dev

# Build static production site to dist/
npm run build

# Preview production build locally
npm run preview

# Run Playwright E2E test suite (desktop + mobile)
npm run test:e2e

# Run fast @smoke E2E subset only
npm run test:e2e:smoke

# Open interactive Playwright UI / HTML report
npm run test:e2e:ui
npm run test:e2e:report
```

---

## Contact Form

The `/contact` page is connected to **Formspree** (`contactFormEndpoint` in [`src/data/profile.ts`](src/data/profile.ts)) with honeypot spam protection, async submission states, and graceful fallback guidance. To swap providers or disable it, update `contactFormEndpoint` in [`src/data/profile.ts`](src/data/profile.ts).

---

## Roadmap & Task Tracking

Active tasks and backlog items are tracked in [GitHub Project #5 — Portfolio DC](https://github.com/users/dchacon130/projects/5) and [GitHub Issues](https://github.com/dchacon130/PortfolioDC/issues).

---

## Contact

- **Diego Chacón** — Senior QA Automation Engineer / SDET
- Email: [dchacon130@gmail.com](mailto:dchacon130@gmail.com)
- LinkedIn: [linkedin.com/in/dchacon130](https://www.linkedin.com/in/dchacon130/)
- GitHub: [github.com/dchacon130](https://github.com/dchacon130)
