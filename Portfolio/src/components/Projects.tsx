"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects, type Project } from "@/data/portfolio";
import { Github, ExternalLink, Layers, ChevronRight } from "lucide-react";

const filterCategories = ["All", "Full Stack", "Frontend", "Backend", "AI/ML", "DevOps"];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Glow border effect */}
      <div
        className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(135deg, #7c3aed40, #06b6d440, #7c3aed40)",
          backgroundSize: "200% 200%",
        }}
      />

      <div
        className={`relative glass rounded-2xl overflow-hidden border border-white/[0.04] 
          group-hover:border-transparent transition-all duration-500 h-full flex flex-col`}
      >
        {/* Gradient header */}
        <div
          className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
        >
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-white/10">
              {project.title.charAt(0)}
            </span>
          </div>
          {project.featured && (
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-mono 
              bg-accent-violet/20 text-accent-violet border border-accent-violet/20">
              Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-semibold text-white group-hover:text-accent-cyan transition-colors">
              {project.title}
            </h3>
            <div className="flex items-center gap-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-white/[0.06] transition-all"
                aria-label={`GitHub link for ${project.title}`}
              >
                <Github size={16} />
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-white/[0.06] transition-all"
                aria-label={`Live demo for ${project.title}`}
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <p className="text-sm text-slate-400 mb-4 flex-1 leading-relaxed">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-400 
                  bg-white/[0.03] border border-white/[0.04] group-hover:border-accent-violet/20 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="orb-cyan bottom-0 left-0 opacity-30" />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg glass border border-accent-cyan/20">
              <Layers size={18} className="text-accent-cyan" />
            </div>
            <span className="text-sm font-mono text-accent-cyan">02.</span>
            <span className="text-sm text-slate-500 font-mono">projects</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-slate-400 max-w-xl">
            A selection of projects I&apos;ve built — from AI platforms to
            distributed systems and 3D editors.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 
                ${
                  filter === cat
                    ? "glass-strong text-white border border-accent-violet/30 glow-violet"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.03] border border-transparent"
                }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/Luis19K"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-slate-400 hover:text-accent-cyan transition-colors"
          >
            View all on GitHub
            <ChevronRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
