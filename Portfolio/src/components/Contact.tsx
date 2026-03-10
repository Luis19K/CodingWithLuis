"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import {
  Mail,
  Github,
  Linkedin,
  FileText,
  Send,
  MapPin,
  CheckCircle,
} from "lucide-react";

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, connect to an API endpoint (e.g., Formspree, EmailJS)
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  const socials = [
    {
      icon: Github,
      label: "GitHub",
      href: personalInfo.github,
      color: "#ffffff",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: personalInfo.linkedin,
      color: "#0A66C2",
    },
    {
      icon: Mail,
      label: "Email",
      href: `mailto:${personalInfo.email}`,
      color: "#06b6d4",
    },
    {
      icon: FileText,
      label: "Resume",
      href: personalInfo.resume,
      color: "#7c3aed",
    },
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="orb-violet top-0 left-1/2 -translate-x-1/2 opacity-30" />

      <div ref={sectionRef} className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-2 rounded-lg glass border border-accent-violet/20">
              <Mail size={18} className="text-accent-violet" />
            </div>
            <span className="text-sm font-mono text-accent-violet">05.</span>
            <span className="text-sm text-slate-500 font-mono">contact</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Have an idea, a project, or just want to say hello? I&apos;d love to
            hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-mono text-slate-500 mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl glass border border-white/[0.06] 
                    text-white placeholder-slate-600 text-sm
                    focus:outline-none focus:border-accent-violet/40 focus:ring-1 focus:ring-accent-violet/20
                    transition-all duration-300 bg-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-mono text-slate-500 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl glass border border-white/[0.06]
                    text-white placeholder-slate-600 text-sm
                    focus:outline-none focus:border-accent-violet/40 focus:ring-1 focus:ring-accent-violet/20
                    transition-all duration-300 bg-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono text-slate-500 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl glass border border-white/[0.06]
                    text-white placeholder-slate-600 text-sm resize-none
                    focus:outline-none focus:border-accent-violet/40 focus:ring-1 focus:ring-accent-violet/20
                    transition-all duration-300 bg-transparent"
                  placeholder="What's on your mind?"
                />
              </div>

              <button
                type="submit"
                className="group w-full px-6 py-3.5 rounded-xl font-medium text-white
                  bg-gradient-to-r from-accent-violet to-accent-cyan
                  hover:shadow-lg hover:shadow-accent-violet/20
                  transition-all duration-300 flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact info & socials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Info card */}
            <div className="glass rounded-2xl p-8 border border-white/[0.04]">
              <h3 className="text-lg font-semibold text-white mb-4">
                Let&apos;s connect
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-400">
                  <Mail size={16} className="text-accent-cyan shrink-0" />
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <MapPin size={16} className="text-accent-violet shrink-0" />
                  <span className="text-sm">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="grid grid-cols-2 gap-4">
              {socials.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="group glass rounded-xl p-5 border border-white/[0.04] 
                    hover:border-white/[0.1] card-hover flex items-center gap-3"
                >
                  <div
                    className="p-2 rounded-lg transition-all duration-300"
                    style={{
                      background: `${social.color}10`,
                      border: `1px solid ${social.color}20`,
                    }}
                  >
                    <social.icon
                      size={18}
                      style={{ color: social.color }}
                      className="transition-transform group-hover:scale-110"
                    />
                  </div>
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Fun CTA */}
            <div className="glass rounded-2xl p-6 border border-white/[0.04] text-center">
              <p className="text-sm text-slate-500 font-mono">
                // Preferred response time: &lt; 24h ⚡
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
