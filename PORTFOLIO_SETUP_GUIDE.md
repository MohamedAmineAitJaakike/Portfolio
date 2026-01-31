# Professional Portfolio - Complete Setup Guide

> Built with Next.js 16, Tailwind CSS 4, and Framer Motion. Production-ready portfolio for Mohamed Amine Ait Jaakike.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture & Design](#architecture--design)
3. [Tech Stack](#tech-stack)
4. [Installation & Setup](#installation--setup)
5. [GitHub Integration](#github-integration)
6. [Customization Guide](#customization-guide)
7. [Performance & SEO](#performance--seo)
8. [Deployment](#deployment)
9. [Future Enhancements](#future-enhancements)

---

## Project Overview

This is a **high-end, professional portfolio website** designed to showcase Mohamed Amine Ait Jaakike's work as a full-stack engineer and web developer.

### Key Features
✅ **Modern Design** - Clean, professional UI with premium typography  
✅ **Smooth Animations** - Framer Motion for polished interactions  
✅ **Real GitHub Integration** - Automatically displays your projects  
✅ **Responsive Design** - Perfect on mobile, tablet, and desktop  
✅ **SEO Optimized** - Meta tags, structured data, performance scores  
✅ **Production Ready** - Deployed on Vercel with Zero-Config setup  
✅ **Component-Based** - Modular architecture for easy customization  

---

## Architecture & Design

### Color Palette (Dark Mode)
```
Primary Background:   #0f172a (Slate-950)
Secondary:            #1e293b (Slate-800)
Accent (Blue):        #3b82f6 (Blue-500)
Accent (Cyan):        #06b6d4 (Cyan-500)
Text Primary:         #f1f5f9 (Slate-100)
Text Secondary:       #cbd5e1 (Slate-300)
```

### Typography
- **Headings**: Inter Bold (32-56px)
- **Body**: Inter Regular (16-18px)
- **Code**: Fira Code (14px)

### Layout Structure
```
src/
├── app/
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Main page (all sections)
│   └── globals.css        # Global styles
├── components/
│   ├── Header.tsx         # Navigation + Logo
│   ├── Hero.tsx           # Hero section with CTA
│   ├── About.tsx          # About & education
│   ├── Skills.tsx         # Tech skills & proficiency
│   ├── Projects.tsx       # GitHub projects showcase
│   ├── Services.tsx       # Service offerings
│   ├── Experience.tsx     # Experience & certifications
│   ├── Contact.tsx        # Contact form + links
│   ├── Footer.tsx         # Footer with social links
│   ├── Logo.tsx           # Animated SVG logo
│   └── ProjectCard.tsx    # Project card component
└── public/
    └── ma_photo.jpg       # Your profile photo (add this!)
```

---

## Tech Stack

### Frontend Framework
- **Next.js 16.1.6** - React framework with SSR, SSG, API routes
- **React 19.2.3** - UI library
- **TypeScript 5** - Type safety

### Styling & Animation
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion 12.29.2** - Professional animations
- **Tailwind CSS Forms 0.5.11** - Form components

### Icons & Utilities
- **Lucide React 0.563.0** - Beautiful icon set
- **Axios 1.13.4** - HTTP client for GitHub API

### Developer Tools
- **ESLint 9** - Code quality
- **PostCSS** - CSS processing

---

## Installation & Setup

### Prerequisites
- Node.js 18+ (recommended: Node 20+)
- npm or yarn
- Git

### Quick Start

```bash
# 1. Navigate to project
cd c:\Users\ASUS\Desktop\potofolio

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open in browser
# Visit http://localhost:3000
```

### Build for Production

```bash
# Build optimized version
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

---

## GitHub Integration

### How It Works
The Projects section automatically fetches your GitHub repositories using the public GitHub API. No authentication token required for public repos!

### Manual Project List (Recommended for Control)
The Projects component includes hardcoded project data for better control over presentation:

```typescript
// src/components/Projects.tsx
const projects = [
  {
    id: 1,
    title: "ZEN-BEAUTY",
    description: "...",
    technologies: ["CSS", "HTML", "Responsive"],
    github: "https://github.com/MohamedAmineAitJaakike/ZEN-BEAUTY",
    featured: true,
  },
  // ... more projects
];
```

### To Add/Update Projects
1. Open `src/components/Projects.tsx`
2. Edit the `projects` array
3. Add new projects or modify existing ones
4. Set `featured: true` for featured projects (top 3)

### Real-Time GitHub Sync (Optional)
To fetch repositories dynamically:

```typescript
const fetchRepos = async () => {
  const response = await fetch(
    "https://api.github.com/users/MohamedAmineAitJaakike/repos?sort=stars&per_page=20"
  );
  const repos = await response.json();
  // Process and display
};
```

---

## Customization Guide

### 1. Update Personal Information

#### Hero Section
**File**: `src/components/Hero.tsx`
```typescript
- Change name from "Mohamed Amine" to your name
- Update tagline
- Modify hero section CTA links
```

#### About Section
**File**: `src/components/About.tsx`
```typescript
- Update bio and professional description
- Modify core values list
- Adjust statistics
```

#### Contact Info
**Files**: `src/components/Contact.tsx`, `src/components/Footer.tsx`
```typescript
// Update email
aitjaakikemohamedamine@gmail.com

// Update LinkedIn
https://linkedin.com/in/yourprofile

// Update GitHub
https://github.com/yourusername
```

### 2. Add Your Profile Photo

1. Place your photo as `public/ma_photo.jpg`
2. The Hero section will automatically use it
3. Fallback shows gradient placeholder if not found

### 3. Customize Colors

**File**: `tailwind.config.js`
```javascript
theme: {
  colors: {
    // Change blue to your brand color
    primary: {
      500: '#your-color-here',
      600: '#darker-shade',
    }
  }
}
```

### 4. Modify Skills

**File**: `src/components/Skills.tsx`
```typescript
const skillCategories = [
  {
    title: "Your Category",
    skills: ["Skill1", "Skill2", "Skill3"],
    icon: "🎨",
  }
];
```

### 5. Update Services

**File**: `src/components/Services.tsx`
```typescript
const services = [
  {
    title: "Service Name",
    description: "Your description",
    icon: <IconComponent />,
    features: ["Feature1", "Feature2"],
  }
];
```

### 6. Customize Logo

**File**: `src/components/Logo.tsx`

The SVG logo rotates 360° on hover. Modify the SVG path to change the design:
```typescript
<path d="YOUR_SVG_PATH" stroke="url(#logoGradient)" />
```

---

## Performance & SEO

### SEO Optimization

#### Meta Tags (next.js layout.tsx)
```typescript
export const metadata = {
  title: "Mohamed Amine Ait Jaakike | Full-Stack Engineer",
  description: "Professional portfolio of a full-stack engineer...",
  keywords: ["web developer", "engineer", "full-stack"],
  authors: [{ name: "Mohamed Amine Ait Jaakike" }],
  openGraph: {
    type: "website",
    url: "https://yourdomain.com",
    title: "Your Name | Full-Stack Engineer",
    description: "Your description",
    images: [{
      url: "https://yourdomain.com/og-image.jpg",
      width: 1200,
      height: 630,
    }],
  },
};
```

### Performance Metrics

**Target Scores**:
- **Lighthouse Performance**: 90+
- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1

**Optimization Techniques**:
✅ Image optimization with Next.js Image component  
✅ Code splitting with dynamic imports  
✅ Lazy loading for below-the-fold content  
✅ CSS-in-JS minification  
✅ Font optimization with next/font  

### Analyze Bundle

```bash
npm install -D @next/bundle-analyzer

# Add to next.config.ts
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

# Run analysis
ANALYZE=true npm run build
```

---

## Deployment

### Option 1: Vercel (Recommended - One-Click Deploy)

**Advantages**:
- Zero-config deployment
- Automatic HTTPS
- Global CDN
- Built-in analytics
- Free tier available

**Steps**:

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial portfolio setup"
git push origin main
```

2. **Deploy to Vercel**
```bash
npm install -g vercel
vercel
```
   - Login with GitHub
   - Select your repository
   - Vercel auto-detects Next.js
   - Deploy!

3. **Custom Domain** (Optional)
   - In Vercel dashboard: Settings → Domains
   - Add your domain (yourdomain.com)
   - Update DNS records

### Option 2: Netlify

1. Build the project
```bash
npm run build
```

2. Connect GitHub repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Deploy!

### Option 3: Self-Hosted (VPS)

```bash
# On your server
git clone <your-repo>
cd potofolio
npm install
npm run build

# Use PM2 for process management
npm install -g pm2
pm2 start "npm start" --name "portfolio"
pm2 startup
pm2 save

# Use Nginx as reverse proxy
# Configure SSL with Let's Encrypt
```

### Environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_GITHUB_USERNAME=MohamedAmineAitJaakike
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## GitHub Workflow

### Initial Setup
```bash
git clone <your-portfolio-repo>
cd potofolio
npm install
npm run dev
```

### Making Changes
```bash
# Create feature branch
git checkout -b feature/update-projects

# Make your changes
# Test: npm run dev

# Commit and push
git add .
git commit -m "feat: update projects section"
git push origin feature/update-projects

# Create PR on GitHub
# Merge to main → auto-deploys to Vercel
```

---

## Maintenance & Updates

### Regular Tasks
- [ ] Update projects quarterly
- [ ] Review and fix broken links monthly
- [ ] Check lighthouse scores
- [ ] Update dependencies: `npm audit fix`
- [ ] Monitor analytics

### Version Updates
```bash
# Check outdated packages
npm outdated

# Update all packages
npm update

# Update major versions (be careful!)
npm install next@latest framer-motion@latest
```

---

## Future Enhancements

### Phase 2 (Nice to Have)
- [ ] Blog section with MDX
- [ ] Dark/Light theme toggle
- [ ] Contact form backend integration (EmailJS/Formspree)
- [ ] Project case studies with images
- [ ] Testimonials section
- [ ] Newsletter signup

### Phase 3 (Advanced)
- [ ] Personal dashboard (private)
- [ ] Blog with search functionality
- [ ] Comments system
- [ ] Analytics dashboard
- [ ] CMS integration (Contentful/Sanity)
- [ ] Multiple language support (i18n)

### Phase 4 (Enterprise)
- [ ] E-commerce integration
- [ ] Client booking system
- [ ] Portfolio management dashboard
- [ ] AI-powered content suggestions
- [ ] Advanced analytics

---

## Troubleshooting

### Port 3000 Already in Use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :3000
kill -9 <PID>
```

### Build Errors
```bash
# Clear cache
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Images Not Loading
- Verify `public/ma_photo.jpg` exists
- Check file path is correct
- Ensure image is < 5MB
- Supported formats: JPG, PNG, WebP

### GitHub API Rate Limit
- Public API: 60 requests/hour per IP
- Authenticated: 5,000 requests/hour
- Add GitHub token in `.env.local` for higher limits

---

## Resources & Documentation

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **GitHub API**: https://docs.github.com/en/rest
- **Vercel Docs**: https://vercel.com/docs

---

## Support & Questions

For issues or questions:
1. Check existing GitHub issues
2. Review documentation above
3. Create a new GitHub issue with details
4. Contact: aitjaakikemohamedamine@gmail.com

---

**Last Updated**: January 31, 2026  
**Version**: 1.0.0  
**Status**: Production Ready ✅
