"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo, skills, type Skill } from "@/data/portfolio";
import { User, Sparkles } from "lucide-react";

const categories = ["Frontend", "Backend", "Languages", "DevOps", "AI/ML"] as const;

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative"
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
          {skill.name}
        </span>
        <span className="text-xs text-slate-500 font-mono">{skill.level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/[0.04] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: 0.3 + index * 0.05, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
            boxShadow: `0 0 12px ${skill.color}40`,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="orb-violet top-0 right-0 opacity-50" />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg glass border border-accent-violet/20">
              <User size={18} className="text-accent-violet" />
            </div>
            <span className="text-sm font-mono text-accent-violet">01.</span>
            <span className="text-sm text-slate-500 font-mono">about_me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="gradient-text">About Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 border border-white/[0.04] card-hover">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles size={16} className="text-accent-cyan" />
                <span className="text-xs font-mono text-slate-500">
                  // who_am_i.ts
                </span>
              </div>

              <div className="font-mono text-sm space-y-2 text-slate-400">
                <p>
                  <span className="text-accent-violet">const</span>{" "}
                  <span className="text-accent-cyan">developer</span>{" "}
                  <span className="text-slate-500">=</span> {"{"}
                </p>
                <p className="pl-4">
                  <span className="text-emerald-400">name</span>:{" "}
                  <span className="text-amber-300">&quot;{personalInfo.name}&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-emerald-400">role</span>:{" "}
                  <span className="text-amber-300">&quot;{personalInfo.title}&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-emerald-400">location</span>:{" "}
                  <span className="text-amber-300">&quot;{personalInfo.location}&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-emerald-400">passions</span>: [
                  <span className="text-amber-300">
                    &quot;AI/ML&quot;, &quot;Systems&quot;, &quot;Open Source&quot;
                  </span>
                  ],
                </p>
                <p>{"};"}</p>
              </div>

              <div className="mt-6 pt-6 border-t border-white/[0.04]">
                <p className="text-slate-400 leading-relaxed text-[15px]">
                  {personalInfo.bio}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {categories.map((category) => {
              const categorySkills = skills.filter(
                (s) => s.category === category
              );
              if (categorySkills.length === 0) return null;
              return (
                <div key={category}>
                  <h3 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-4">
                    {category}
                  </h3>
                  <div className="space-y-3">
                    {categorySkills.map((skill, i) => (
                      <SkillBar key={skill.name} skill={skill} index={i} />
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
