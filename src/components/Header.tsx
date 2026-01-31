"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { IconMenu, IconX } from "./icons/Icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-900/88 backdrop-blur-md border-b border-slate-800" : "bg-transparent"
      }`}
    >
      <nav className="container-custom py-4 md:py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Logo className="w-10 h-10" />
          <span className="font-semibold text-lg tracking-wide text-slate-100">MedAmine Dev</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-5 py-2.5 text-slate-300 hover:text-blue-400 transition-colors duration-200 text-sm font-medium tracking-wide"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#contact" className="btn-primary">
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-slate-800/30 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <IconX className="w-6 h-6 text-slate-100" />
          ) : (
            <IconMenu className="w-6 h-6 text-slate-100" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden border-t border-slate-700 glass-md"
        >
          <div className="container-custom py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-slate-300 hover:text-blue-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a href="#contact" className="btn-primary w-full text-center" onClick={() => setIsOpen(false)}>
              Hire Me
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
