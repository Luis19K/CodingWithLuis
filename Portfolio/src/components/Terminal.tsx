"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { terminalCommands } from "@/data/portfolio";
import { TerminalIcon, Minus, Square, X } from "lucide-react";

interface TerminalLine {
  type: "input" | "output" | "error";
  content: string;
}

export default function Terminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      type: "output",
      content: `Welcome to Luis's Portfolio Terminal v1.0.0
Type 'help' to see available commands. Try 'neofetch' for fun! 🚀
`,
    },
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const processCommand = useCallback(
    (input: string) => {
      const trimmed = input.trim();
      const newLines: TerminalLine[] = [
        ...lines,
        { type: "input", content: trimmed },
      ];

      if (!trimmed) {
        setLines(newLines);
        return;
      }

      // Add to history
      setHistory((prev) => [trimmed, ...prev]);
      setHistoryIndex(-1);

      // Handle clear
      if (trimmed === "clear") {
        setLines([]);
        return;
      }

      // Handle echo
      if (trimmed.startsWith("echo ")) {
        const msg = trimmed.slice(5);
        newLines.push({ type: "output", content: msg });
        setLines(newLines);
        return;
      }

      // Look up command
      const cmd = terminalCommands[trimmed];
      if (cmd) {
        newLines.push({ type: "output", content: cmd.output });
      } else {
        newLines.push({
          type: "error",
          content: `Command not found: ${trimmed}. Type 'help' for available commands.`,
        });
      }

      setLines(newLines);
    },
    [lines]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      processCommand(currentInput);
      setCurrentInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const newIndex = Math.min(historyIndex + 1, history.length - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(history[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(history[newIndex]);
      } else {
        setHistoryIndex(-1);
        setCurrentInput("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      // Simple autocomplete
      const commands = Object.keys(terminalCommands);
      const matches = commands.filter((c) =>
        c.startsWith(currentInput.toLowerCase())
      );
      if (matches.length === 1) {
        setCurrentInput(matches[0]);
      }
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
    }
  };

  return (
    <section id="terminal" className="relative py-32 overflow-hidden">
      <div ref={sectionRef} className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-2 rounded-lg glass border border-accent-cyan/20">
              <TerminalIcon size={18} className="text-accent-cyan" />
            </div>
            <span className="text-sm font-mono text-accent-cyan">~</span>
            <span className="text-sm text-slate-500 font-mono">
              interactive_terminal
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Explore via Terminal</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Prefer the command line? Navigate my portfolio the hacker way.
          </p>
        </motion.div>

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-2xl overflow-hidden border border-white/[0.06] shadow-2xl shadow-black/40"
        >
          {/* Title bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#1a1a2e] border-b border-white/[0.04]">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <button
                  className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors"
                  aria-label="Close"
                />
                <button
                  className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors"
                  aria-label="Minimize"
                />
                <button
                  className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors"
                  aria-label="Maximize"
                />
              </div>
            </div>
            <span className="text-xs font-mono text-slate-500">
              luis@portfolio ~ zsh
            </span>
            <div className="flex items-center gap-1 text-slate-600">
              <Minus size={14} />
              <Square size={12} />
              <X size={14} />
            </div>
          </div>

          {/* Terminal body */}
          <div
            ref={scrollRef}
            onClick={() => inputRef.current?.focus()}
            className="bg-[#0d0d1a] p-5 h-96 overflow-y-auto font-mono text-sm cursor-text"
          >
            {/* Output lines */}
            {lines.map((line, i) => (
              <div key={i} className="mb-1">
                {line.type === "input" ? (
                  <div className="flex items-center gap-2">
                    <span className="text-accent-cyan">❯</span>
                    <span className="text-slate-300">{line.content}</span>
                  </div>
                ) : line.type === "error" ? (
                  <div className="text-red-400/80 whitespace-pre-wrap pl-4">
                    {line.content}
                  </div>
                ) : (
                  <div className="text-slate-400 whitespace-pre-wrap pl-4">
                    {line.content}
                  </div>
                )}
              </div>
            ))}

            {/* Current input line */}
            <div className="flex items-center gap-2">
              <span className="text-accent-cyan">❯</span>
              <div className="relative flex-1">
                <input
                  ref={inputRef}
                  type="text"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full bg-transparent text-slate-300 outline-none caret-accent-cyan font-mono text-sm"
                  spellCheck={false}
                  autoComplete="off"
                  aria-label="Terminal input"
                />
              </div>
            </div>
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between px-4 py-1.5 bg-[#1a1a2e] border-t border-white/[0.04]">
            <span className="text-[10px] font-mono text-slate-600">
              UTF-8 • zsh
            </span>
            <span className="text-[10px] font-mono text-slate-600">
              {lines.filter((l) => l.type === "input").length} commands
            </span>
          </div>
        </motion.div>

        {/* Quick command hints */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-6 flex flex-wrap justify-center gap-2"
        >
          {["help", "projects", "skills", "neofetch"].map((cmd) => (
            <button
              key={cmd}
              onClick={() => {
                setCurrentInput(cmd);
                inputRef.current?.focus();
              }}
              className="px-3 py-1.5 rounded-lg text-xs font-mono text-slate-500 
                glass border border-white/[0.04] hover:border-accent-cyan/20 
                hover:text-accent-cyan transition-all"
            >
              $ {cmd}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
