# Kennek Profile — Portfolio Website

Personal portfolio website for **Nguyễn Hữu Huân**, Fullstack Developer.

Built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New Project** → import your repository.
4. Vercel auto-detects Next.js — keep default settings.
5. Click **Deploy**.

Or use Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Customize Content

All CV data lives in `data/profile.ts`. Edit that file to update:

- Personal info, contact, social links
- About summary
- Skills, experience, projects
- Awards and education

## Assets

- Replace `public/avatar.svg` with your photo (`public/avatar.jpg`)
- Add your CV PDF to `public/cv/nguyen-huu-huan-cv.pdf`

## Project Structure

```
app/
  layout.tsx      # SEO metadata & fonts
  page.tsx        # Main page
  globals.css     # Global styles
components/
  Navbar.tsx
  Hero.tsx
  About.tsx
  Skills.tsx
  Experience.tsx
  Projects.tsx
  Award.tsx
  Education.tsx
  Contact.tsx
  Footer.tsx
data/
  profile.ts      # All CV content
```
