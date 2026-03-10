"use client";

import { personalInfo } from "@/data/portfolio";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-lg font-bold gradient-text-static">
              {"<LV />"}
            </span>
            <p className="text-xs text-slate-600">
              &copy; {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          </div>

          {/* Made with */}
          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <span>Built with</span>
            <Heart size={12} className="text-accent-violet" />
            <span>using Next.js, Three.js & Framer Motion</span>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-600 hover:text-white hover:bg-white/[0.04] transition-all"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-600 hover:text-white hover:bg-white/[0.04] transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg text-slate-600 hover:text-white hover:bg-white/[0.04] transition-all"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
