"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { personalInfo } from "@/data/portfolio";
import { ArrowDown, ExternalLink } from "lucide-react";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-32 h-32 rounded-full border border-accent-violet/20 animate-glow-pulse" />
    </div>
  ),
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <HeroScene />

      {/* Gradient orbs */}
      <div className="orb-violet -top-40 -left-40 animate-float" />
      <div className="orb-cyan -bottom-40 -right-40 animate-float" style={{ animationDelay: "3s" }} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Top tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/[0.06] mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-slate-400">
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-4 tracking-tight"
        >
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-6"
        >
          <span className="text-lg sm:text-xl text-slate-300 font-medium">
            {personalInfo.title}
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-lg sm:text-xl text-slate-300 font-medium">
            {personalInfo.subtitle}
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative px-8 py-3.5 rounded-xl font-medium text-white overflow-hidden
              bg-gradient-to-r from-accent-violet to-accent-cyan
              hover:shadow-lg hover:shadow-accent-violet/25 transition-shadow duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <ExternalLink
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </span>
          </a>

          <a
            href="#contact"
            className="group px-8 py-3.5 rounded-xl font-medium text-slate-300 
              glass border border-white/[0.08] hover:border-white/[0.15] 
              hover:text-white transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              Contact Me
              <ArrowDown
                size={16}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </span>
          </a>
        </motion.div>

        {/* Tech stack preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-16 flex items-center justify-center gap-4 text-xs text-slate-500 font-mono"
        >
          <span>React</span>
          <span className="text-accent-violet">•</span>
          <span>TypeScript</span>
          <span className="text-accent-cyan">•</span>
          <span>Python</span>
          <span className="text-accent-violet">•</span>
          <span>Go</span>
          <span className="text-accent-cyan">•</span>
          <span>AI/ML</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-slate-600 flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-slate-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
