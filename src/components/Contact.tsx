"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IconMail, IconLinkedIn, IconGitHub, IconExternal } from "./icons/Icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate form submission (replace with actual backend/email service)
    try {
      // In a real application, you'd send this to your backend or email service (e.g., EmailJS, Formspree)
      console.log("Form submitted:", formData);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

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

  const contactMethods = [
    {
      title: "Email",
      value: "aitjaakikemohamedamine@gmail.com",
      icon: <IconMail className="w-6 h-6" />,
      href: "mailto:aitjaakikemohamedamine@gmail.com",
      color: "from-blue-500 to-blue-400",
    },
    {
      title: "LinkedIn",
      value: "Connect with me",
      icon: <IconLinkedIn className="w-6 h-6" />,
      href: "https://linkedin.com/in/mohamed-amine-ait-jaakike-869bb4294/",
      color: "from-blue-600 to-blue-500",
    },
    {
      title: "GitHub",
      value: "View my code",
      icon: <IconGitHub className="w-6 h-6" />,
      href: "https://github.com/MohamedAmineAitJaakike",
      color: "from-gray-700 to-gray-600",
    },
  ];

  return (
    <section id="contact" className="section">
      <motion.div
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-slate-400 max-w-3xl text-lg leading-relaxed mx-auto">
            Ready to bring your ideas to life? I'm just a message away. Let's discuss how I can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Methods */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-semibold mb-8 text-slate-100 tracking-wide">Get in Touch</h3>
            <div className="space-y-4">
              {contactMethods.map((method, idx) => (
                <motion.a
                  key={idx}
                  variants={itemVariants}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="glass p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 hover:bg-white/10 transition-all duration-300 group block"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${method.color} flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform`}>
                    {method.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-text mb-1">{method.title}</h4>
                  <p className="text-slate-300 text-sm">{method.value}</p>
                  <div className="mt-3 flex items-center text-blue-400 group-hover:gap-2 gap-0 transition-all text-sm">
                    Reach out <IconExternal className="w-4 h-4 ml-1" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="glass p-8 rounded-2xl border border-blue-500/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-text mb-2 text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-text placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-accent-500 transition-all"
                    placeholder="Ahmed"
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-text mb-2 text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-text placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-accent-500 transition-all"
                    placeholder="your@email.com"
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-text mb-2 text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-text placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-accent-500 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </motion.div>

                {/* Status Messages */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm"
                  >
                    Message sent successfully. I will reply shortly.
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm"
                  >
                    An error occurred. Please try again later.
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  variants={itemVariants}
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>Send Message</>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
