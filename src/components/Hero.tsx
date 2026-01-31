"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { IconGitHub, IconLinkedIn, IconMail, IconArrow } from "./icons/Icons";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl opacity-20 animate-float" style={{animationDelay: "1s"}} />

      <motion.div className="container-custom relative z-10" variants={containerVariants} initial="hidden" animate="visible">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-block glass px-4 py-2 rounded-full text-blue-400 text-sm border border-blue-500/30">Engineering & Innovation</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="mb-8 text-6xl sm:text-7xl">
              Mohamed Amine <br />
              <span className="accent-gradient bg-clip-text text-transparent">Ait Jaakike</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-slate-300 mb-10 leading-relaxed max-w-xl">Building scalable web applications and elegant solutions. 4th-year Engineering Student at ENSA Tetouan, Morocco.</motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 mb-10">
              <div className="glass p-5 rounded-lg border border-blue-500/20"><p className="text-3xl font-bold text-blue-400">15+</p><p className="text-slate-300 text-sm mt-1">Projects</p></div>
              <div className="glass p-5 rounded-lg border border-blue-500/20"><p className="text-3xl font-bold text-cyan-400">4</p><p className="text-slate-300 text-sm mt-1">Years</p></div>
              <div className="glass p-5 rounded-lg border border-blue-500/20"><p className="text-3xl font-bold text-blue-400">8+</p><p className="text-slate-300 text-sm mt-1">Tech</p></div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="#projects" className="btn-primary group">View My Work<IconArrow className="w-5 h-5 ml-2" /></Link>
              <a href="#contact" className="btn-secondary">Get in Touch</a>
            </motion.div>

              <motion.div variants={itemVariants} className="flex gap-4">
                <a href="https://github.com/MohamedAmineAitJaakike" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg glass flex items-center justify-center hover:bg-blue-500/10 transition-colors group" title="GitHub">
                  <IconGitHub className="w-5 h-5 text-slate-300 group-hover:text-blue-400 transition-colors" />
                </a>
                <a href="https://www.linkedin.com/in/mohamed-amine-ait-jaakike-869bb4294/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg glass flex items-center justify-center hover:bg-blue-500/10 transition-colors group" title="LinkedIn">
                  <IconLinkedIn className="w-5 h-5 text-slate-300 group-hover:text-blue-400 transition-colors" />
                </a>
                <a href="mailto:aitjaakikemohamedamine@gmail.com" className="w-12 h-12 rounded-lg glass flex items-center justify-center hover:bg-blue-500/10 transition-colors group" title="Email">
                  <IconMail className="w-5 h-5 text-slate-300 group-hover:text-blue-400 transition-colors" />
                </a>
              </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="hidden lg:flex justify-center" initial="hidden" animate="visible">
            <motion.div
              className="relative w-72 h-96 group cursor-pointer"
              style={{ perspective: 1200 }}
              animate={{ rotate: [0, 1, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              {/* Animated frame border */}
              <motion.div
                className="absolute inset-0 rounded-3xl border border-slate-700/30 overflow-hidden"
                animate={{ boxShadow: ["0 6px 30px rgba(2,6,23,0.25)", "0 12px 48px rgba(7,12,34,0.35)", "0 6px 30px rgba(2,6,23,0.25)"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Image container with gradient overlay and 3D hover rotation */}
              <motion.div
                className="absolute inset-1 rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900/30 to-slate-800/20"
                whileHover={{ rotateY: 360 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  src="/ma_photo.jpeg"
                  alt="MedAmine"
                  className="w-full h-full object-cover will-change-transform backface-hidden"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white"><div class="text-center"><div class="text-6xl font-bold mb-4">MA</div><p class="text-sm">MedAmine Dev</p><p class="text-xs text-slate-300">Full-Stack Engineer</p></div></div>';
                  }}
                />
              </motion.div>

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-slate-600 rounded-tl-lg" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-slate-600 rounded-br-lg" />
            </motion.div>
          </motion.div>
        </div>

        {/* Removed decorative scroll indicator for a cleaner premium look */}
      </motion.div>
    </section>
  );
};

export default Hero;
