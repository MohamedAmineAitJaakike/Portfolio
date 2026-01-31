"use client";

import { motion } from "framer-motion";
import { IconAward, IconBook, IconBriefcase } from "./icons/Icons";

const Experience = () => {
  const education = [
    {
      school: "ENSA Tetouan",
      degree: "State Engineering Degree (MEng equivalent)",
      duration: "2021 - 2025 (In Progress)",
      details: "4th-year student specializing in Computer Science and Software Engineering",
      location: "Tetouan, Morocco",
      icon: <IconBook className="w-5 h-5" />,
    },
  ];

  const certifications = [
    {
      name: "Full-Stack Web Development",
      issuer: "Professional Experience",
      date: "2024",
      icon: <IconAward className="w-5 h-5" />,
    },
    {
      name: "Systems Programming & Algorithms",
      issuer: "Academic Excellence",
      date: "2024",
      icon: <IconAward className="w-5 h-5" />,
    },
    {
      name: "Web Technologies & Frameworks",
      issuer: "Continuous Learning",
      date: "2024",
      icon: <IconAward className="w-5 h-5" />,
    },
  ];

  const experience = [
    {
      title: "Web Developer & Engineer",
      company: "Upwork / Freelance",
      duration: "2023 - Present",
      description: "Building scalable web applications for international clients. Focus on clean architecture, performance optimization, and professional delivery.",
      icon: <IconBriefcase className="w-5 h-5" />,
    },
    {
      title: "Full-Stack Developer",
      company: "Personal Projects",
      duration: "2022 - Present",
      description: "Developed 15+ portfolio projects spanning web development, system programming, and data engineering across multiple technologies.",
      icon: <IconBriefcase className="w-5 h-5" />,
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

  const TimelineItem = ({
    title,
    subtitle,
    duration,
    description,
    icon,
  }: {
    title: string;
    subtitle: string;
    duration: string;
    description: string;
    icon: React.ReactNode;
  }) => (
    <motion.div variants={itemVariants} className="relative">
      <div className="flex gap-4">
        {/* Timeline dot */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full glass border border-blue-500/30 flex items-center justify-center text-blue-400 flex-shrink-0">
            {icon}
          </div>
          <div className="w-0.5 h-16 bg-gradient-to-b from-accent-500/20 to-transparent mt-2" />
        </div>

        {/* Content */}
        <div className="pb-8 flex-1">
          <h4 className="text-xl font-semibold text-text mb-1">{title}</h4>
          <p className="text-blue-400 text-sm font-medium">{subtitle}</p>
          <p className="text-slate-500 text-sm mb-2">{duration}</p>
          <p className="text-slate-300 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="experience" className="section">
      <motion.div
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience & Education</h2>
          <p className="text-slate-400 max-w-3xl text-lg leading-relaxed">
            My journey in engineering and professional development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Experience */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-slate-100 tracking-wide">Professional Experience</h3>
            <div className="space-y-2">
              {experience.map((item, idx) => (
                <TimelineItem
                  key={idx}
                  title={item.title}
                  subtitle={item.company}
                  duration={item.duration}
                  description={item.description}
                  icon={item.icon}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Column - Education & Certifications */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-slate-100 tracking-wide">Education</h3>
              <div className="space-y-2">
                {education.map((item, idx) => (
                  <TimelineItem
                    key={idx}
                    title={item.degree}
                    subtitle={item.school}
                    duration={item.duration}
                    description={item.details}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-8 text-slate-100 tracking-wide">Certifications & Achievements</h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 gap-4"
              >
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="glass p-4 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg glass border border-blue-500/30 flex items-center justify-center text-blue-400 flex-shrink-0">
                        {cert.icon}
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-slate-100">{cert.name}</h4>
                        <p className="text-slate-500 text-sm">{cert.issuer} • {cert.date}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
