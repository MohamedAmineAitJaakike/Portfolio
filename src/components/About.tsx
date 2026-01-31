"use client";

import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const highlights = [
    { number: "4+", label: "Years Learning Engineering" },
    { number: "15+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section id="about" className="section bg-gradient-to-b from-transparent via-primary-900/50 to-transparent">
      <motion.div
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-slate-400 max-w-3xl text-lg leading-relaxed">
            A passionate engineer with a strong foundation in software architecture and problem-solving
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="space-y-8">
            <motion.p variants={itemVariants} className="text-slate-400 leading-relaxed text-lg">
              I'm Mohamed Amine Ait Jaakike, a 4th-year Engineering Student at ENSA (École Nationale des Sciences Appliquées) Tetouan, Morocco. My passion lies in building elegant, scalable web applications and systems that solve real-world problems through clean architecture and innovative thinking.
            </motion.p>

            <motion.p variants={itemVariants} className="text-slate-400 leading-relaxed text-lg">
              With a strong foundation in computer science, systems programming, and full-stack web development, I focus on creating solutions that are performant, maintainable, and user-centric. I'm proficient across frontend, backend, and infrastructure technologies, bringing a comprehensive engineering perspective to every project.
            </motion.p>

            <motion.p variants={itemVariants} className="text-slate-400 leading-relaxed text-lg">
              Beyond code, I'm passionate about software architecture, algorithmic problem-solving, and open-source contributions. I thrive in collaborative environments, love tackling complex technical challenges, and am committed to continuous learning in our rapidly evolving industry.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4 pt-4">
              <h3 className="text-xl font-semibold text-slate-100 tracking-wide">Core Values</h3>
              <ul className="space-y-3">
                {["Quality First", "Continuous Learning", "Client Success", "Clean Code"].map((value, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-400">
                    <motion.span
                      className="w-2 h-2 rounded-full bg-blue-400"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    {value}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="space-y-6">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass p-6 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="text-5xl font-bold accent-gradient bg-clip-text text-transparent mb-2">
                  {item.number}
                </div>
                <p className="text-slate-300">{item.label}</p>
              </motion.div>
            ))}

            <motion.div variants={itemVariants} className="glass p-6 rounded-2xl border border-blue-500/20">
              <h4 className="text-xl font-semibold mb-3">Education</h4>
              <p className="text-slate-300 text-sm mb-1">ENSA Tetouan, Morocco</p>
              <p className="text-blue-400 text-sm font-medium">Engineering Degree (In Progress)</p>
              <p className="text-slate-500 text-sm mt-2">Specializing in Computer Science</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
