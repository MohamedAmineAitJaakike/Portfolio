# 🚀 Ahmed Dev - Professional Portfolio Website

A **world-class** developer portfolio built for freelance success on international platforms (Upwork, LinkedIn, GitHub).

## ✨ Highlights

- **Modern Design**: Dark theme with electric blue accents - premium, professional, trustworthy
- **Fully Responsive**: Mobile-first approach, tested on all devices
- **Production-Ready**: TypeScript, Next.js App Router, Tailwind CSS, Framer Motion
- **SEO Optimized**: Meta tags, Open Graph, structured data, fast Core Web Vitals
- **GitHub Integration**: Auto-fetch repositories, display projects dynamically
- **Contact Form**: Ready for Formspree, EmailJS, or custom backend
- **Performance**: ~90+ Lighthouse score, optimized bundles, lazy loading
- **Deployment Ready**: One-click deploy to Vercel, Netlify, or Docker

---

## 📸 Features Overview

### Sections Included

1. **Header** - Sticky navigation with mobile menu
2. **Hero** - Compelling headline with CTA buttons
3. **About** - Engineering background + key stats
4. **Skills** - Tech stack organized by category + proficiency bars
5. **Projects** - Featured projects with GitHub links + auto-fetch repos
6. **Experience** - Timeline for education, work, certifications
7. **Services** - 6 core services with descriptions
8. **Contact** - Contact form + social media links
9. **Footer** - Quick links and copyright

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 16** | React framework with SSR, SSG, API routes |
| **TypeScript** | Type safety and better DX |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Smooth scroll animations |
| **Lucide React** | Beautiful SVG icons |

---

## 🚀 Quick Start

### Setup

```bash
# Navigate to project
cd "c:\Users\ASUS\Desktop\potofolio"

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open **http://localhost:3000** in your browser!

### Build for Production

```bash
npm run build
npm start
```

---

## 📝 Customization Guide

### 1. Update Your Content

Each component is clearly organized:

- **Hero**: Value proposition → `src/components/Hero.tsx`
- **About**: Bio and achievements → `src/components/About.tsx`
- **Skills**: Your tech stack → `src/components/Skills.tsx`
- **Projects**: Featured work → `src/components/Projects.tsx`
- **Experience**: Education & work → `src/components/Experience.tsx`
- **Services**: What you offer → `src/components/Services.tsx`
- **Contact**: Email & phone → `src/components/Contact.tsx`

### 2. Connect Your GitHub

Replace `YOUR_GITHUB_USERNAME` in `src/components/Projects.tsx`:

```tsx
const response = await fetch(
  "https://api.github.com/users/YOUR_GITHUB_USERNAME/repos?sort=stars&per_page=6"
);
```

### 3. Setup Contact Form

Use **Formspree** (easiest):
1. Go to https://formspree.io
2. Create a form and get your form ID
3. Update in `src/components/Contact.tsx`

### 4. Update Meta Tags

Edit `src/app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: "Your Name - Full-Stack Developer",
  description: "Your unique value proposition...",
  openGraph: {
    url: "https://yourdomain.com",
  },
};
```

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
git push  # Push to GitHub
# Then: vercel.com → New Project → Select repo → Deploy
```

### Netlify

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=.next
```

### Docker

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

---

## 🔧 Commands

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production
npm run lint     # ESLint
```

---

## 📚 Full Documentation

See [PORTFOLIO_GUIDE.md](./PORTFOLIO_GUIDE.md) for detailed customization, GitHub integration, contact forms, and deployment instructions.

---

## 🎨 Design System

- **Colors**: Slate-950 background, Blue-500 accent
- **Typography**: Clean, modern fonts with good hierarchy
- **Responsive**: Mobile-first design, optimized for all devices
- **Animations**: Smooth Framer Motion transitions

---

## 💡 Pro Tips

1. Update content regularly
2. Add real project images
3. Test on mobile devices
4. Deploy to Vercel for instant feedback
5. Use Google Analytics
6. Link from LinkedIn, GitHub, Upwork

---

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion**

See [PORTFOLIO_GUIDE.md](./PORTFOLIO_GUIDE.md) for complete documentation.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
