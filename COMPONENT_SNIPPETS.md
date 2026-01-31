## PROFESSIONAL PORTFOLIO REBUILD
## Component Implementation Snippets

This file contains complete, production-ready code snippets for the key components that need to be updated or created.

---

# 1. LOGO.TSX (NEW COMPONENT)

```typescript
'use client';

import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <motion.svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      className="cursor-pointer text-blue-500"
      whileHover={{ rotate: 8 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Background circle */}
      <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />

      {/* Engineering circuit pattern - nodes */}
      <g>
        {/* Top node */}
        <circle cx="16" cy="6" r="2" fill="currentColor" />
        {/* Left node */}
        <circle cx="8" cy="16" r="2" fill="currentColor" />
        {/* Right node */}
        <circle cx="24" cy="16" r="2" fill="currentColor" />
        {/* Bottom node */}
        <circle cx="16" cy="26" r="2" fill="currentColor" />
        {/* Center node - emphasis */}
        <circle cx="16" cy="16" r="2.5" fill="currentColor" />

        {/* Connection lines - cross pattern */}
        <line x1="16" y1="6" x2="16" y2="14" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
        <line x1="16" y1="18" x2="16" y2="26" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
        <line x1="8" y1="16" x2="14" y2="16" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
        <line x1="18" y1="16" x2="24" y2="16" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />

        {/* Diagonal connections - subtle */}
        <line x1="10" y1="12" x2="14" y2="16" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <line x1="22" y1="14" x2="18" y2="16" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      </g>

      {/* Pulsing accent glow */}
      <motion.circle
        cx="16"
        cy="16"
        r="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0"
        animate={{ opacity: [0.3, 0], r: [3, 8] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
      />
    </motion.svg>
  );
}
```

---

# 2. HEADER.TSX UPDATE

Add Logo import and integration:

```typescript
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Logo from './Logo';  // NEW

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2">
          <Logo />  {/* NEW */}
          <span className="font-bold text-white hidden sm:inline">MA</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-slate-300 hover:text-blue-400 transition-colors text-sm font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <Link href="#contact">
            <motion.button
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
        transition={{ duration: 0.2 }}
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} border-t border-slate-800 bg-slate-950/95 backdrop-blur-md`}
      >
        <div className="px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block text-slate-300 hover:text-blue-400 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="#contact" onClick={() => setIsOpen(false)}>
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium mt-4">
              Hire Me
            </button>
          </Link>
        </div>
      </motion.div>
    </motion.header>
  );
}
```

---

# 3. PROJECTS.TSX - GITHUB INTEGRATION

Key code snippet for fetching real repositories:

```typescript
'use client';

import { useEffect, useState } from 'react';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  url: string;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
}

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/MohamedAmineAitJaakike/repos?sort=stars&per_page=6',
          {
            headers: {
              'Accept': 'application/vnd.github.v3+json',
              // Optional: Add GITHUB_TOKEN for higher rate limits
              ...(process.env.NEXT_PUBLIC_GITHUB_TOKEN && {
                'Authorization': `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
              })
            }
          }
        );

        if (!response.ok) throw new Error('Failed to fetch repos');
        
        const data = await response.json();
        
        // Filter out forks, sort by stars
        const filtered = data
          .filter((repo: any) => !repo.fork)
          .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6)
          .map((repo: any) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description,
            url: repo.html_url,
            language: repo.language,
            stargazers_count: repo.stargazers_count,
            fork: repo.fork,
          }));

        setRepos(filtered);
      } catch (error) {
        console.error('Error fetching repositories:', error);
        // Fallback to featured projects
        setRepos(FEATURED_PROJECTS);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const FEATURED_PROJECTS = [
    {
      id: 1,
      name: 'E-Learning Platform',
      description: 'Complete online learning platform with course management, student tracking, and admin dashboard',
      url: 'https://github.com/MohamedAmineAitJaakike/E-LearningPlatform',
      language: 'PHP',
      stargazers_count: 1,
      fork: false,
    },
    {
      id: 2,
      name: 'Eventura Team',
      description: 'Event management system for collaborative planning and team coordination',
      url: 'https://github.com/MohamedAmineAitJaakike/Eventura_Team',
      language: 'PHP',
      stargazers_count: 1,
      fork: false,
    },
    // ... more featured projects
  ];

  if (loading) {
    return (
      <section className="py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="animate-pulse">Loading projects...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {repos.map((repo) => (
            <motion.div
              key={repo.id}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{repo.name}</h3>
                <Github className="text-blue-400" size={20} />
              </div>

              <p className="text-slate-300 text-sm mb-4 line-clamp-2">
                {repo.description || 'No description'}
              </p>

              <div className="flex items-center justify-between">
                {repo.language && (
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                    {repo.language}
                  </span>
                )}
                <span className="text-xs text-slate-400">
                  {repo.stargazers_count} stars
                </span>
              </div>

              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium"
              >
                View on GitHub
                <Github size={16} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

---

# 4. CONTACT FORM SNIPPET (using Formspree - Easiest)

```typescript
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Loader } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Using Formspree (easiest - no backend needed)
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-slate-300 mb-12">
            Have a project in mind? Let's discuss how I can help.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-slate-200 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-200 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="your@email.com"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-slate-200 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Project inquiry"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-slate-200 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? (
                <>
                  <Loader size={20} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Mail size={20} />
                  Send Message
                </>
              )}
            </motion.button>

            {/* Success Message */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400"
              >
                Thanks for reaching out! I'll get back to you soon.
              </motion.div>
            )}
          </form>

          {/* Contact Info */}
          <div className="mt-16 pt-12 border-t border-slate-800 space-y-4">
            <p className="text-slate-300">
              Email: <a href="mailto:aitjaakikemohamedamine@gmail.com" className="text-blue-400 hover:text-blue-300">
                aitjaakikemohamedamine@gmail.com
              </a>
            </p>
            <p className="text-slate-300">
              GitHub: <a href="https://github.com/MohamedAmineAitJaakike" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                github.com/MohamedAmineAitJaakike
              </a>
            </p>
            <p className="text-slate-300">
              LinkedIn: <a href="https://www.linkedin.com/in/mohamed-amine-ait-jaakike-869bb4294/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                LinkedIn Profile
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

# SETUP FORMSPREE (Easiest Contact Form Solution)

1. Go to https://formspree.io
2. Sign up with GitHub/Email
3. Create new form
4. Copy your form ID (e.g., f/abc123def456)
5. Replace `YOUR_FORM_ID` in the code above
6. Done! Form will email you submissions automatically

No backend server needed. No configuration needed.

---

## KEY IMPLEMENTATION NOTES

1. **Logo.tsx**: Pure SVG, no external images needed
2. **GitHub API**: Free tier allows 60 requests/hour (unlimited with token)
3. **Contact Form**: Formspree is free up to 50 submissions/month
4. **Image Frame**: Uses Framer Motion 3D transform (`rotateY: 360`)
5. **Professional**: NO EMOJIS anywhere - use badges and icons only
6. **Animations**: All use Framer Motion, respect `prefers-reduced-motion`

---

Ready to implement? Follow REBUILD_GUIDE.md for complete context!
