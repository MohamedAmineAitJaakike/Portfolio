# Deployment Guide - Professional Portfolio

> Complete guide to deploy your professional portfolio to production

---

## Quick Deploy (5 Minutes)

### ⚡ Vercel One-Click Deploy (Recommended)

Vercel is the official Next.js hosting platform with zero-config setup.

**Step 1: Push to GitHub**
```bash
cd c:\Users\ASUS\Desktop\potofolio
git add .
git commit -m "Professional portfolio v1.0"
git push origin main
```

**Step 2: Deploy to Vercel**

Visit: https://vercel.com/new

1. Click "New Project"
2. Select "Import Git Repository"
3. Paste your repo URL or connect GitHub account
4. Select this repository
5. Click "Import"
6. Vercel will auto-detect Next.js
7. Click "Deploy" (no configuration needed!)

**That's it!** Your portfolio is live in seconds.

---

## Setting Up Custom Domain

### On Vercel Dashboard

1. Go to your project → Settings → Domains
2. Add domain (yourdomain.com)
3. Copy DNS records provided
4. Log into your domain registrar (GoDaddy, Namecheap, etc.)
5. Add the DNS records
6. Wait 5-10 minutes for propagation

Example DNS records:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A (if you want bare domain)
Name: @
Value: 76.76.19.165
```

---

## Environment Variables

Create `.env.local` in your project root:

```bash
# GitHub Configuration (Optional)
NEXT_PUBLIC_GITHUB_USERNAME=MohamedAmineAitJaakike

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME="Mohamed Amine Ait Jaakike"

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Add to Vercel

1. Dashboard → Project → Settings → Environment Variables
2. Add each variable (see above)
3. Redeploy

---

## SEO & Meta Tags Setup

### Create Sitemap.xml

Create `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2026-01-31</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Create robots.txt

Create `public/robots.txt`:
```
User-agent: *
Allow: /
Disallow: /admin
Disallow: /_next/

Sitemap: https://yourdomain.com/sitemap.xml
```

### Update Open Graph Image

Place a social sharing image at `public/og-image.jpg`:
- Dimensions: 1200x630px
- Format: JPG or PNG
- File size: < 500KB

Update in `src/app/layout.tsx`:
```typescript
openGraph: {
  images: [{
    url: 'https://yourdomain.com/og-image.jpg',
  }],
}
```

---

## Analytics Setup

### Google Analytics

1. Go to: https://analytics.google.com
2. Create new property for your domain
3. Get your Measurement ID (G-XXXXXXXXXX)
4. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

### Vercel Analytics (Built-in)

Automatically enabled on Vercel! View at:
Dashboard → Project → Analytics

Tracks:
- Core Web Vitals
- Page views
- User behavior
- Performance metrics

---

## Performance Checklist

Before going live, ensure:

- [ ] Build succeeds: `npm run build`
- [ ] No console errors: `npm run dev`
- [ ] Mobile responsive test
- [ ] All links working
- [ ] Images optimized
- [ ] Meta tags set correctly
- [ ] Lighthouse score > 90
- [ ] No broken images/fonts

### Run Lighthouse Audit

```bash
# Install lighthouse CLI
npm install -g lighthouse

# Run audit
lighthouse https://localhost:3000 --view
```

---

## GitHub Actions Workflow (Auto-Deploy)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Install Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        uses: vercel/action@v4
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

Get tokens from Vercel dashboard → Settings → Tokens

---

## SSL/HTTPS

### Vercel
✅ Automatic HTTPS with wildcard SSL
- Renews automatically
- Zero configuration

### Custom VPS
Use Let's Encrypt (free):
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot certonly --nginx -d yourdomain.com
```

Renew automatically:
```bash
sudo certbot renew --quiet
```

---

## Monitoring & Maintenance

### Uptime Monitoring

Use UptimeRobot (free tier):
1. Create account: https://uptimerobot.com
2. Add monitor for your domain
3. Get alerts if site goes down

### Error Tracking

Use Sentry (free tier):
1. Create account: https://sentry.io
2. Get DSN token
3. Add to your Next.js config

---

## Scaling & Optimization

### Image Optimization

Use Next.js Image component:
```typescript
import Image from 'next/image'

<Image
  src="/ma_photo.jpg"
  alt="Profile"
  width={300}
  height={400}
  priority
  placeholder="blur"
/>
```

### Code Splitting

```typescript
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./Heavy'), {
  loading: () => <p>Loading...</p>
})
```

### Caching Headers

In `next.config.ts`:
```typescript
async headers() {
  return [
    {
      source: '/img/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable'
        }
      ]
    }
  ]
}
```

---

## Backup & Recovery

### GitHub as Backup
Your code is automatically backed up on GitHub!

### Database Backups (if needed)
- Set up automatic backups
- Store in separate location
- Test recovery monthly

---

## Update & Maintenance Schedule

### Weekly
- [ ] Check analytics
- [ ] Monitor errors in Sentry
- [ ] Review GitHub issues

### Monthly
- [ ] Update dependencies: `npm update`
- [ ] Check Lighthouse score
- [ ] Review error logs
- [ ] Update projects (if changed)

### Quarterly
- [ ] Major version updates
- [ ] Performance optimization
- [ ] Security audit
- [ ] Content refresh

---

## Troubleshooting Deployment

### Build Fails on Vercel

Check build logs in Vercel dashboard:
1. Project → Deployments → Failed
2. Click build and view logs
3. Common issues:
   - Missing environment variables
   - TypeScript errors
   - Missing dependencies

**Fix:**
```bash
# Test locally first
npm run build

# Check TypeScript
npm run lint

# Install any missing packages
npm install
```

### Slow Performance

Use Vercel Analytics:
1. Dashboard → Analytics
2. Check Core Web Vitals
3. Identify slow pages
4. Optimize:
   - Images (use Next.js Image)
   - Fonts (next/font)
   - Code splitting (dynamic imports)

### SSL Certificate Issues

Vercel manages SSL automatically. If issues:
1. Clear browser cache
2. Wait 15-30 minutes for propagation
3. Contact Vercel support

---

## Cost Estimation

### Free Tier (Perfect for Portfolio)

| Service | Cost | Limit |
|---------|------|-------|
| Vercel | Free | 100GB bandwidth/month |
| GitHub | Free | Unlimited repos |
| Domain | $10-15/year | -  |
| Email | Free (Gmail) | - |
| Analytics | Free | Unlimited |

**Total: ~$10-15/year** ✅

### Pro Tier (If Scaling)

| Service | Cost | Benefit |
|---------|------|---------|
| Vercel Pro | $20/month | Priority support, 3000GB bandwidth |
| Custom CMS | $50-100/month | Content management |
| Database | $10-50/month | If needed |

---

## GDPR & Privacy

### Privacy Policy

Create `app/privacy/page.tsx`:
```typescript
export default function Privacy() {
  return (
    <div className="container py-20">
      <h1>Privacy Policy</h1>
      <p>Last updated: January 2026</p>
      
      <h2>Information We Collect</h2>
      <p>We collect minimal data:...</p>
      
      <h2>How We Use Data</h2>
      <p>Analytics only...</p>
      
      <h2>Contact</h2>
      <p>Email: aitjaakikemohamedamine@gmail.com</p>
    </div>
  )
}
```

### Cookie Consent

Consider adding:
- Simple banner for analytics cookies
- "Dismiss" and "Accept" buttons
- Link to privacy policy

---

## What's Next?

After deploying, you can:

✅ **Custom Domain** - Point yourdomain.com  
✅ **Blog** - Add MDX blog posts  
✅ **Contact Form** - Integrate EmailJS  
✅ **Newsletter** - Add Substack signup  
✅ **Portfolio Admin** - Dashboard to manage projects  

---

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **GitHub Issues**: Create issue in your repo
- **Email**: aitjaakikemohamedamine@gmail.com

---

**Deployment Status**: ✅ Ready to Go Live!

Enjoy your professional portfolio online! 🚀
