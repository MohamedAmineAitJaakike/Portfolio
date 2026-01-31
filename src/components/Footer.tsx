"use client";

import { motion } from "framer-motion";
import { IconGitHub, IconLinkedIn, IconMail, IconExternal } from "./icons/Icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "GitHub", href: "https://github.com/MohamedAmineAitJaakike", icon: IconGitHub },
    { label: "LinkedIn", href: "https://linkedin.com/in/mohamed-amine-ait-jaakike-869bb4294/", icon: IconLinkedIn },
    { label: "Email", href: "mailto:aitjaakikemohamedamine@gmail.com", icon: IconMail },
  ];

  return (
    <footer className="relative border-t border-slate-700 bg-gradient-to-b from-transparent to-primary-900/50">
      <div className="container-custom py-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Left */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">Mohamed Amine Ait Jaakike</h3>
            <p className="text-slate-300 text-sm max-w-sm">
              Full-stack engineer building scalable, elegant web solutions. ENSA Tetouan, Morocco.
            </p>
          </div>

          {/* Center - Links */}
          <div className="flex items-center gap-4">
            {links.map((link, idx) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg glass border border-blue-500/20 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-all"
                  title={link.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>

          {/* Right */}
          <div className="text-center md:text-right">
            <p className="text-slate-300 text-sm">
              © {currentYear} Mohamed Amine Ait Jaakike. All rights reserved.
            </p>
            <a
              href="https://github.com/MohamedAmineAitJaakike"
              className="text-blue-400 hover:text-accent-300 text-sm flex items-center justify-center md:justify-end gap-1 mt-1 group"
            >
              Open source on GitHub
              <IconExternal className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
