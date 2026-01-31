"use client";

import React from "react";

export const IconGitHub = ({ className = "w-5 h-5", stroke = "currentColor" }: { className?: string; stroke?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 3.09 2.05 5.71 4.89 6.63.36.07.49-.16.49-.35 0-.17-.01-.62-.01-1.22-1.99.36-2.41-.88-2.41-.88-.33-.84-.81-1.06-.81-1.06-.66-.45.05-.44.05-.44.73.05 1.12.75 1.12.75.65 1.12 1.7.8 2.11.61.07-.48.25-.8.45-.98-1.59-.18-3.26-.8-3.26-3.55 0-.78.28-1.42.74-1.92-.07-.18-.32-.9.07-1.88 0 0 .6-.19 1.96.73a6.8 6.8 0 011.78-.24c.6 0 1.21.08 1.78.24 1.36-.92 1.96-.73 1.96-.73.39.98.14 1.7.07 1.88.46.5.74 1.14.74 1.92 0 2.76-1.67 3.36-3.26 3.54.26.22.49.65.49 1.31 0 .95-.01 1.72-.01 1.96 0 .19.13.42.5.35A7.01 7.01 0 0019 9c0-3.87-3.13-7-7-7z" fill="currentColor" />
  </svg>
);

export const IconExternal = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M14 3h7v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 14L21 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 21H3V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconMail = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconLinkedIn = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="2" y="2" width="20" height="20" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 11v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M7 9a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M11 17v-4a2 2 0 012-2h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconArrow = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconMenu = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const IconX = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconAward = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 2l2.5 4.5L19 8l-3.5 2L15 14l-3-1.5L9 14l-.5-4L5 8l4.5-1.5L12 2z" stroke="currentColor" strokeWidth="1" fill="currentColor" />
  </svg>
);

export const IconBook = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M3 6v12a1 1 0 001 1h14V6H4a1 1 0 00-1 1z" stroke="currentColor" strokeWidth="1.2" />
    <path d="M21 6v12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export const IconBriefcase = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="3" y="7" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" />
    <path d="M8 7V6a4 4 0 018 0v1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export const IconCode = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M16 18l6-6-6-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 6L2 12l6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconZap = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" />
  </svg>
);

export const IconShield = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 3l7 4v5c0 5-3.58 9.74-7 10-3.42-.26-7-5-7-10V7l7-4z" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export const IconSmartphone = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="6" y="2" width="12" height="20" rx="2" stroke="currentColor" strokeWidth="1.2" />
    <path d="M12 18h.01" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export const IconDatabase = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <ellipse cx="12" cy="5" rx="8" ry="3" stroke="currentColor" strokeWidth="1.2" />
    <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export const IconRocket = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M14 7l3 3-4 4-3-3 4-4z" stroke="currentColor" strokeWidth="1.2" />
    <path d="M2 22s4-2 6-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export default IconGitHub;
