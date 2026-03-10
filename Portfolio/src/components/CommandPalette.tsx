"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personalInfo } from "@/data/portfolio";
import {
  Search,
  ArrowRight,
  Github,
  Linkedin,
  FileText,
  Mail,
  Terminal,
  Home,
  User,
  Layers,
  Cpu,
  Briefcase,
  X,
} from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandItem {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  action: () => void;
  category: string;
}

const sectionIcons: Record<string, React.ReactNode> = {
  Home: <Home size={16} />,
  About: <User size={16} />,
  Projects: <Layers size={16} />,
  "Tech Stack": <Cpu size={16} />,
  Experience: <Briefcase size={16} />,
  Contact: <Mail size={16} />,
};

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToSection = useCallback(
    (href: string) => {
      onClose();
      setTimeout(() => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    },
    [onClose]
  );

  const openLink = useCallback(
    (url: string) => {
      onClose();
      window.open(url, "_blank", "noopener,noreferrer");
    },
    [onClose]
  );

  const commands: CommandItem[] = [
    // Navigation
    ...navLinks.map((link) => ({
      id: `nav-${link.href}`,
      label: `Go to ${link.label}`,
      description: `Navigate to ${link.label} section`,
      icon: sectionIcons[link.label] || <ArrowRight size={16} />,
      action: () => scrollToSection(link.href),
      category: "Navigation",
    })),
    // Links
    {
      id: "github",
      label: "Open GitHub",
      description: "View my GitHub profile",
      icon: <Github size={16} />,
      action: () => openLink(personalInfo.github),
      category: "Links",
    },
    {
      id: "linkedin",
      label: "Open LinkedIn",
      description: "Connect on LinkedIn",
      icon: <Linkedin size={16} />,
      action: () => openLink(personalInfo.linkedin),
      category: "Links",
    },
    {
      id: "resume",
      label: "Download Resume",
      description: "View or download my resume",
      icon: <FileText size={16} />,
      action: () => openLink(personalInfo.resume),
      category: "Links",
    },
    {
      id: "email",
      label: "Send Email",
      description: `Email ${personalInfo.email}`,
      icon: <Mail size={16} />,
      action: () => {
        onClose();
        window.location.href = `mailto:${personalInfo.email}`;
      },
      category: "Links",
    },
    // Actions
    {
      id: "terminal",
      label: "Open Terminal",
      description: "Navigate to the interactive terminal",
      icon: <Terminal size={16} />,
      action: () => scrollToSection("#terminal"),
      category: "Actions",
    },
  ];

  const filtered = query
    ? commands.filter(
        (cmd) =>
          cmd.label.toLowerCase().includes(query.toLowerCase()) ||
          cmd.description.toLowerCase().includes(query.toLowerCase())
      )
    : commands;

  // Group by category
  const grouped = filtered.reduce<Record<string, CommandItem[]>>((acc, cmd) => {
    if (!acc[cmd.category]) acc[cmd.category] = [];
    acc[cmd.category].push(cmd);
    return acc;
  }, {});

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter" && filtered[selectedIndex]) {
        e.preventDefault();
        filtered[selectedIndex].action();
      } else if (e.key === "Escape") {
        onClose();
      }
    },
    [filtered, selectedIndex, onClose]
  );

  // Global keyboard shortcut
  useEffect(() => {
    const handleGlobalKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
    };
    window.addEventListener("keydown", handleGlobalKey);
    return () => window.removeEventListener("keydown", handleGlobalKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />

          {/* Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="fixed left-1/2 top-[20%] -translate-x-1/2 z-[101] w-full max-w-lg"
          >
            <div className="mx-4 glass-strong rounded-2xl border border-white/[0.08] overflow-hidden shadow-2xl shadow-black/40">
              {/* Search input */}
              <div className="flex items-center gap-3 px-5 border-b border-white/[0.06]">
                <Search size={18} className="text-slate-500 shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a command or search..."
                  className="flex-1 py-4 bg-transparent text-white text-sm 
                    placeholder-slate-500 outline-none"
                />
                <button
                  onClick={onClose}
                  className="p-1 rounded text-slate-500 hover:text-white transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Results */}
              <div className="max-h-80 overflow-y-auto py-2">
                {Object.entries(grouped).length === 0 ? (
                  <div className="px-5 py-8 text-center text-sm text-slate-500">
                    No commands found
                  </div>
                ) : (
                  Object.entries(grouped).map(([category, items]) => (
                    <div key={category}>
                      <div className="px-5 py-1.5 text-[10px] font-mono uppercase tracking-wider text-slate-600">
                        {category}
                      </div>
                      {items.map((cmd) => {
                        const globalIndex = filtered.indexOf(cmd);
                        return (
                          <button
                            key={cmd.id}
                            onClick={cmd.action}
                            onMouseEnter={() => setSelectedIndex(globalIndex)}
                            className={`w-full flex items-center gap-3 px-5 py-2.5 text-left transition-all
                              ${
                                selectedIndex === globalIndex
                                  ? "bg-white/[0.06] text-white"
                                  : "text-slate-400 hover:text-white"
                              }`}
                          >
                            <span
                              className={`shrink-0 ${
                                selectedIndex === globalIndex
                                  ? "text-accent-cyan"
                                  : "text-slate-500"
                              }`}
                            >
                              {cmd.icon}
                            </span>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium truncate">
                                {cmd.label}
                              </p>
                              <p className="text-[11px] text-slate-600 truncate">
                                {cmd.description}
                              </p>
                            </div>
                            {selectedIndex === globalIndex && (
                              <span className="text-[10px] text-slate-600 font-mono">
                                Enter ↵
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  ))
                )}
              </div>

              {/* Footer hint */}
              <div className="px-5 py-2.5 border-t border-white/[0.04] flex items-center gap-4 text-[10px] text-slate-600">
                <span>↑↓ Navigate</span>
                <span>↵ Select</span>
                <span>Esc Close</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
