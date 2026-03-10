"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { techStack } from "@/data/portfolio";
import { Cpu } from "lucide-react";

function TechCard({
  item,
  index,
}: {
  item: (typeof techStack)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 0.4,
        delay: index * 0.04,
        type: "spring",
        stiffness: 200,
      }}
      whileHover={{
        scale: 1.1,
        y: -4,
        transition: { duration: 0.2 },
      }}
      className="group relative"
    >
      <div
        className="relative flex flex-col items-center gap-3 p-5 rounded-xl glass border border-white/[0.04]
          group-hover:border-opacity-40 transition-all duration-300 cursor-default"
        style={{
          ["--glow-color" as string]: item.color,
        }}
      >
        {/* Glow on hover */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at center, ${item.color}10, transparent 70%)`,
          }}
        />

        {/* Icon */}
        <div
          className="relative w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold
            transition-all duration-300 group-hover:scale-110"
          style={{
            background: `${item.color}15`,
            color: item.color,
            border: `1px solid ${item.color}20`,
          }}
        >
          {item.icon}
        </div>

        {/* Name */}
        <span className="relative text-xs font-medium text-slate-400 group-hover:text-slate-200 transition-colors">
          {item.name}
        </span>

        {/* Glow dot */}
        <div
          className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background: item.color,
            boxShadow: `0 0 8px ${item.color}`,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="techstack" className="relative py-32 overflow-hidden">
      <div className="orb-violet bottom-20 right-20 opacity-30" />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-2 rounded-lg glass border border-accent-violet/20">
              <Cpu size={18} className="text-accent-violet" />
            </div>
            <span className="text-sm font-mono text-accent-violet">03.</span>
            <span className="text-sm text-slate-500 font-mono">tech_stack</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Tech grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 max-w-5xl mx-auto">
          {techStack.map((item, i) => (
            <TechCard key={item.name} item={item} index={i} />
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-xs font-mono text-slate-600">
            ...and always learning more
          </p>
        </motion.div>
      </div>
    </section>
  );
}
