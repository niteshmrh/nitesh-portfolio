# Nitesh Kumar — Full Stack Developer Portfolio

A modern, responsive developer portfolio built with **Next.js, TypeScript, Tailwind/CSS, and React**.

The portfolio focuses on clean UI, interactive themes, project showcases, professional experience, technical skills, certifications, and contact information.

## Live Portfolio

- **Portfolio:** https://niteshmrh-portfolio.vercel.app/
- **DocMind AI:** https://docmind-ai-xi.vercel.app/

---

## ✨ Features

- Modern developer portfolio UI
- Fully responsive design
- Dark / Light theme
- Multiple accent color palettes
- Transparent developer profile image
- Dynamic Hero section
- Professional experience section
- Project showcase
- Technology stack
- Certifications
- Resume download
- GitHub, LinkedIn and LeetCode links
- Multiple email addresses
- Google Analytics integration
- Custom analytics events
- SEO metadata
- Custom favicon
- Static JSON-based portfolio content
- Optimized for Vercel deployment

---

## 🛠️ Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- CSS
- Lucide React

### Styling

- Custom CSS
- CSS Variables
- Responsive Media Queries
- Dark / Light Themes
- Dynamic Color Palettes

### Analytics

- Google Analytics 4
- Custom event tracking

### Deployment

- Vercel

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where to change content

All portfolio content is intentionally kept in JSON files:

- `src/data/profile.json` — name, headline, summary, contact links, stats
- `src/data/experience.json` — companies, roles, dates, descriptions, highlights, technologies
- `src/data/projects.json` — projects, summaries, technologies, links, preview images
- `src/data/tech-stack.json` — technology names and Simple Icons CDN icon names/colors
- `src/data/certifications.json` — certification names and links

## Where to change the UI

- `src/app/globals.css` — the main DocMind-inspired design system, responsive CSS, cards, colors, theme styles
- `src/components/stack.tsx` — technology icon rendering
- `src/components/theme-controls.tsx` — Dark/Light + accent palette controls
- `src/components/hero.tsx` — hero section
- `src/components/experience.tsx` — experience timeline
- `src/components/projects.tsx` — project cards
- `src/components/certifications.tsx` — certification cards

## Technology icons

The technology section uses Simple Icons through the CDN so brand icons render without adding a large icon package. Each icon is configured in `src/data/tech-stack.json`:

```json
{
  "name": "React.js",
  "icon": "react",
  "color": "61DAFB"
}
```

If an icon does not render, check the `icon` slug against Simple Icons and update only that JSON entry.

---

## 📁 Project Structure

```text
nitesh-portfolio/
│
├── public/
│   ├── images/
│   │   ├── myPic/
│   │   └── ...
│   │
│   └── resume/
│       └── Nitesh_Kumar_FullStack_Developer_3Yoe.pdf
│
├── src/
│   │
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── about.tsx
│   │   ├── certifications.tsx
│   │   ├── contact.tsx
│   │   ├── experience.tsx
│   │   ├── footer.tsx
│   │   ├── google-analytics.tsx
│   │   ├── hero.tsx
│   │   ├── navbar.tsx
│   │   ├── projects.tsx
│   │   ├── stats.tsx
│   │   ├── tech-stack.tsx
│   │   ├── theme-controls.tsx
│   │   ├── theme-provider.tsx
│   │   └── tracked-link.tsx
│   │
│   ├── data/
│   │   ├── profile.json
│   │   ├── experience.json
│   │   ├── projects.json
│   │   ├── tech-stack.json
│   │   └── certifications.json
│   │
│   ├── lib/
│   │   └── analytics.ts
│   │
│   └── types/
│       └── gtag.d.ts
│
├── .env.local
├── .gitignore
├── next.config.ts
├── package.json
├── package-lock.json
└── README.md
```
