# Computational Research & Data Engineering Portfolio

A technical portfolio website showcasing computational research expertise, data engineering capabilities, and machine learning infrastructure development. Built with Next.js 16, TypeScript, and Tailwind CSS with an Obsidian-inspired dark mode aesthetic.

## Overview

This portfolio presents a professional narrative focused on:
- **Computational Research**: Dry lab research automation and data orchestration
- **Data Engineering**: Scalable pipeline development and ETL systems
- **Machine Learning Infrastructure**: Production-level ML systems and Computer Vision

The design emphasizes rigor, precision, and technical depth suitable for Data Science, ML Engineering, and Software Engineering roles.

## Key Sections

### Hero
- **Focus**: Computational Research & Data Engineering
- **Credentials**: MS Business Analytics (In Progress) & MS Biomedical Engineering (Completed)
- **Current Work**: Google Capstone Project in Computer Vision (NDA-compliant presentation)

### Professional Experience
1. **Google Capstone (Computer Vision Engineer)**
   - NDA-compliant high-level description
   - Emphasis on: production infrastructure, cross-functional collaboration, engineering best practices
   - Technologies: ML frameworks, data processing pipelines, modular architecture

2. **Dry Lab Research (Research Engineer)**
   - Core technical competency demonstration
   - Focus: automated data orchestration, Python pipelines, reproducibility
   - Highlights: ETL development, quality control, CI/CD integration

### Education
- **MS Business Analytics** (In Progress): ML, predictive modeling, statistical analysis
- **MS Biomedical Engineering** (Completed 2025): computational methods, data pipelines, research infrastructure

### Technical Skills
Organized by function:
- **Engineering**: Python, SQL, TypeScript, Git, Docker, CI/CD
- **Machine Learning**: PyTorch, TensorFlow, Computer Vision, MLOps
- **Data Engineering**: ETL, orchestration, Spark, Airflow, warehousing
- **Analytics**: statistical modeling, predictive analytics, A/B testing

## Design Philosophy

### Obsidian-Style Dark Mode
- Background: `#0d1117` (GitHub dark)
- Borders: `zinc-800` for subtle sectioning
- Accent: Blue (`blue-500/600`) for CTAs and highlights
- Typography: Geist Sans for body, Geist Mono for technical elements
- Spacing: Clean, documentation-style layout

### Technical Tone
- **Objective and precise** language
- **No em dashes**: use colons or periods for sentence breaks
- **Function-first**: emphasize capabilities over personality
- **Strict TypeScript**: no `any` types

## Quick Start

### Development

```bash
npm install
npm run dev
```

Site runs at [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

## Deployment to Vercel

### Method 1: GitHub Integration (Recommended)

```bash
# Push to GitHub
git add .
git commit -m "Deploy computational research portfolio"
git push origin main

# Then on Vercel:
# 1. Import repository
# 2. Framework preset: Next.js (auto-detected)
# 3. Deploy
```

### Method 2: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

## Project Structure

```
personal-website/
├── app/
│   ├── components/
│   │   ├── Header.tsx       # Fixed navigation
│   │   ├── Hero.tsx         # Computational research intro
│   │   ├── Experience.tsx   # Google Capstone + Dry Lab
│   │   ├── Education.tsx    # Dual master's degrees
│   │   ├── Skills.tsx       # Technical capabilities
│   │   ├── Contact.tsx      # Contact form
│   │   └── Footer.tsx       # Minimal footer
│   ├── globals.css          # Tailwind + custom styles
│   ├── layout.tsx           # Root layout with dark mode
│   └── page.tsx             # Main page assembly
├── public/                  # Static assets
├── next.config.ts           # Next.js configuration
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript strict config
└── package.json
```

## Technical Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5 (strict mode)
- **Styling**: Tailwind CSS 4
- **Deployment**: Vercel
- **Fonts**: Geist Sans, Geist Mono

## Performance

- Server-side rendering
- Static generation where possible
- Minimal JavaScript bundle
- Optimized for Core Web Vitals

## SEO Optimization

Update metadata in [layout.tsx](app/layout.tsx):

```tsx
export const metadata: Metadata = {
  title: "Your Name | Computational Research & Data Engineering",
  description: "Your description emphasizing research and engineering capabilities",
  openGraph: {
    title: "Your Name",
    description: "Computational researcher specializing in...",
    url: "https://yoursite.com",
  },
};
```

## Contact Form Integration

The contact form currently shows an alert. To make it functional:

### Option 1: Formspree
```tsx
// In Contact.tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' }
  });
};
```

### Option 2: Resend API
Create `app/api/contact/route.ts` with Resend integration.

## License

MIT License

---

**Built for recruiters seeking computational researchers with strong engineering foundations and ML infrastructure experience.**
