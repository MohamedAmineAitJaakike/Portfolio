"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  languages: string[];
  stargazers_count: number;
  readme?: string;
}

export default function ProjectsClient({ projects }: { projects: Repo[] }) {
  const router = useRouter();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="projects" className="section py-20 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950">
      <motion.div className="container-custom" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <motion.div variants={itemVariants} className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-10 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
            <span className="text-blue-400 font-semibold tracking-widest text-sm">PORTFOLIO</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-100">Featured Projects</h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">A selection of my most impactful work, auto-populated from GitHub. Each project demonstrates modern development practices, clean architecture, and professional craftsmanship.</p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="space-y-6">
          {projects.slice(0, 8).map((project, idx) => (
            <motion.div key={project.id} variants={itemVariants} className="group relative">
              <div
                className="relative p-7 rounded-lg border border-slate-700/40 hover:border-blue-500/50 bg-slate-900/20 hover:bg-slate-900/50 transition-all duration-400 overflow-hidden cursor-pointer"
                onClick={() => router.push(`/projects/${project.name}`)}
              >
                  {/* Subtle animated background glow on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 pointer-events-none"
                    transition={{ duration: 0.4 }}
                  />

                  <div className="relative z-10 space-y-5">
                    {/* Project Title */}
                    <motion.h3
                      className="text-xl font-semibold text-slate-100 group-hover:text-blue-400 transition-colors duration-300 tracking-wide"
                      initial={{ opacity: 0.9 }}
                      whileHover={{ letterSpacing: "0.02em" }}
                    >
                      {project.name}
                    </motion.h3>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 group-hover:text-slate-300 transition-colors duration-300">
                      {project.description || "Innovative project showcasing modern development practices."}
                    </p>

                    {/* README Preview (if available) */}
                    {project.readme && (
                      <p className="text-slate-500 text-xs italic line-clamp-1 group-hover:text-slate-400 transition-colors">
                        {project.readme}...
                      </p>
                    )}

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.languages.slice(0, 4).map((tech, i) => (
                        <motion.span
                          key={i}
                          className="px-3 py-1 text-xs bg-slate-800/60 text-slate-300 rounded-full group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.languages.length > 4 && (
                        <span className="px-3 py-1 text-xs bg-slate-800/40 text-slate-400 rounded-full">
                          +{project.languages.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Star count and link */}
                    <div className="flex items-center justify-between pt-5 border-t border-slate-700/40">
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        {project.stargazers_count > 0 && (
                          <span className="text-slate-400 font-medium">★ {project.stargazers_count}</span>
                        )}
                      </div>
                      <a
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-300 hover:translate-x-1"
                      >
                        View on GitHub →
                      </a>
                    </div>
                  </div>
                </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-16 text-center">
          <p className="text-slate-400 mb-6">Explore more projects and contributions</p>
          <a
            href="https://github.com/MohamedAmineAitJaakike"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group"
          >
            View GitHub Profile
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
