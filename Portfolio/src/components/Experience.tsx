"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience, type ExperienceItem } from "@/data/portfolio";
import { Briefcase, GraduationCap, Clock } from "lucide-react";

function TimelineEntry({
  item,
  index,
  isLast,
}: {
  item: ExperienceItem;
  index: number;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative flex gap-6 pb-12"
    >
      {/* Timeline line & dot */}
      <div className="flex flex-col items-center">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10
            glass border transition-all duration-500 ${
              isInView
                ? item.type === "work"
                  ? "border-accent-violet/40 glow-violet"
                  : "border-accent-cyan/40 glow-cyan"
                : "border-white/[0.06]"
            }`}
        >
          {item.type === "work" ? (
            <Briefcase size={16} className="text-accent-violet" />
          ) : (
            <GraduationCap size={16} className="text-accent-cyan" />
          )}
        </div>
        {!isLast && (
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-px bg-gradient-to-b from-accent-violet/30 to-transparent flex-1"
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pt-1">
        <div className="glass rounded-xl p-6 border border-white/[0.04] card-hover">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className="font-semibold text-white">{item.title}</h3>
          </div>
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="text-sm text-accent-cyan font-medium">
              {item.company}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-500">
              <Clock size={12} />
              {item.date}
            </span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed mb-3">
            {item.description}
          </p>
          {item.tech && (
            <div className="flex flex-wrap gap-2">
              {item.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-500 
                    bg-white/[0.02] border border-white/[0.04]"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="orb-cyan top-40 -left-20 opacity-30" />

      <div ref={sectionRef} className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg glass border border-accent-cyan/20">
              <Briefcase size={18} className="text-accent-cyan" />
            </div>
            <span className="text-sm font-mono text-accent-cyan">04.</span>
            <span className="text-sm text-slate-500 font-mono">experience</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-slate-400 max-w-xl">
            My journey through internships, research, and education.
          </p>
        </motion.div>

        {/* Timeline */}
        <div>
          {experience.map((item, i) => (
            <TimelineEntry
              key={`${item.title}-${item.company}`}
              item={item}
              index={i}
              isLast={i === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
