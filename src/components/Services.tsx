"use client";

import { motion } from "framer-motion";
import { IconCode, IconZap, IconShield, IconSmartphone, IconDatabase, IconRocket } from "./icons/Icons";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Full-featured websites and web applications with modern technologies, responsive design, and optimized performance.",
      icon: <IconCode className="w-6 h-6" />,
      features: ["Responsive Design", "Performance Optimized", "SEO Ready"],
    },
    {
      title: "Web Applications",
      description: "Scalable web apps with robust backends, real-time features, cloud deployment, and seamless API integration.",
      icon: <IconRocket className="w-6 h-6" />,
      features: ["Real-time Updates", "Cloud Deployment", "API Integration"],
    },
    {
      title: "Performance Optimization",
      description: "Improve application speed, reduce bundle sizes, enhance UX with advanced caching and optimization techniques.",
      icon: <IconZap className="w-6 h-6" />,
      features: ["Code Splitting", "Caching Strategy", "Image Optimization"],
    },
    {
      title: "Database Architecture",
      description: "Design and optimize databases for scalability, performance, security, and efficient data management.",
      icon: <IconDatabase className="w-6 h-6" />,
      features: ["Schema Design", "Query Optimization", "Data Security"],
    },
    {
      title: "Responsive & Mobile",
      description: "Ensure seamless functionality across all devices with touch-optimized interfaces and fast loading.",
      icon: <IconSmartphone className="w-6 h-6" />,
      features: ["Responsive Layout", "Touch Optimized", "Fast Loading"],
    },
    {
      title: "Security & Deployment",
      description: "Security audits, bug fixes, testing, quality assurance, and reliable cloud deployment solutions.",
      icon: <IconShield className="w-6 h-6" />,
      features: ["Security Audit", "Bug Fixes", "Testing & QA"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
    <section id="services" className="section bg-gradient-to-b from-transparent via-primary-900/50 to-transparent">
      <motion.div
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
          <p className="text-slate-400 max-w-3xl text-lg leading-relaxed">
            Comprehensive solutions tailored to your needs and goals
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group h-full"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-500/20 transition-colors">
                {service.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500 group-hover:scale-150 transition-transform" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Need a Custom Solution?</h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            I'm open to discussing your project requirements and creating tailored solutions that exceed expectations.
          </p>
          <a href="#contact" className="btn-primary">
            Get in Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
