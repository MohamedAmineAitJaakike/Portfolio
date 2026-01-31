"use client";

import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML/CSS", "Responsive Design"],
    },
    {
      title: "Backend & APIs",
      skills: ["Node.js", "PHP", "Python", "REST APIs", "PostgreSQL", "MongoDB", "MySQL"],
    },
    {
      title: "Systems Programming",
      skills: ["C", "Java", "Concurrency", "Threading", "Semaphores", "Sockets", "Algorithms"],
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "GitHub", "Docker", "Vercel", "Netlify", "CI/CD", "Linux", "Web Scraping"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="skills" className="section">
      <motion.div
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
            A comprehensive toolkit for building modern web applications and solving complex engineering challenges
          </p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative p-7 rounded-xl border border-slate-700/40 hover:border-blue-500/40 bg-slate-900/20 hover:bg-slate-900/40 transition-all duration-400 group"
            >
              <motion.h3
                className="text-lg font-semibold mb-8 text-slate-100 group-hover:text-blue-400 transition-colors duration-300 tracking-wide"
                animate={{ opacity: 1 }}
                initial={{ opacity: 0.8 }}
              >
                {category.title}
              </motion.h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIdx) => (
                  <motion.li
                    key={skillIdx}
                    className="flex items-center gap-3 text-slate-300 group-hover:text-slate-100 transition-colors duration-200 text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIdx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <motion.span
                      className="w-1 h-1 rounded-full bg-blue-400"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity, delay: idx * 0.1 }}
                    />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency Bars */}
        <motion.div
          variants={itemVariants}
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-8">Technical Proficiency</h3>
          <div className="space-y-6 max-w-2xl">
            {[
              { name: "Full-Stack Web Development", level: 88 },
              { name: "Systems Programming & Algorithms", level: 85 },
              { name: "Database Design & Optimization", level: 82 },
              { name: "Software Architecture & Design Patterns", level: 80 },
              { name: "Web Performance & Optimization", level: 85 },
            ].map((prof, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-sm">{prof.name}</span>
                  <span className="text-blue-400 text-sm font-semibold">{prof.level}%</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full accent-gradient"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${prof.level}%` }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
