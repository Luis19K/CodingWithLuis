"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/portfolio";
import {
  Menu,
  X,
  Command,
} from "lucide-react";

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export default function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback(
    (href: string) => {
      setIsMobileOpen(false);
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    },
    []
  );

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-strong shadow-lg shadow-black/20" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#hero")}
            className="text-lg font-bold gradient-text-static hover:opacity-80 transition-opacity"
          >
            {"<LV />"}
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-4 py-2 text-sm rounded-lg transition-all duration-200 
                    ${
                      isActive
                        ? "text-white"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-lg bg-white/[0.06] border border-white/[0.08]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}

            {/* Command palette trigger */}
            <button
              onClick={onOpenCommandPalette}
              className="ml-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-slate-400 
                border border-white/[0.06] hover:border-white/[0.12] hover:text-slate-300 transition-all"
            >
              <Command size={12} />
              <span>K</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 z-40 glass-strong p-4 mx-4 rounded-xl border border-white/[0.06] md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-3 text-left text-sm text-slate-300 hover:text-white 
                    hover:bg-white/[0.04] rounded-lg transition-all"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setIsMobileOpen(false);
                  onOpenCommandPalette();
                }}
                className="px-4 py-3 text-left text-sm text-slate-400 hover:text-white 
                  hover:bg-white/[0.04] rounded-lg transition-all flex items-center gap-2"
              >
                <Command size={14} />
                Command Palette
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
