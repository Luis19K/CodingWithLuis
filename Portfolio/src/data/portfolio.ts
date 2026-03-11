export const personalInfo = {
  name: "Luis Vargas",
  title: "Computer Science Student",
  subtitle: "Software Engineer",
  tagline: "Building the future, one line of code at a time.",
  bio: `I'm a passionate Computer Science student with a deep love for building 
elegant solutions to complex problems. From crafting pixel-perfect UIs to 
architecting scalable backends, I thrive at the intersection of creativity 
and technology. Currently exploring the frontiers of AI/ML and distributed 
systems while pursuing my degree.`,
  email: "vargasluis0619@gmail.com",
  github: "https://github.com/Luis19K",
  linkedin: "https://linkedin.com/in/luisvargas",
  resume: "https://github.com/Luis19K",
  location: "Hazleton, PA",
};

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "DevOps" | "Languages" | "AI/ML";
  level: number;
  color: string;
}

export const skills: Skill[] = [
  { name: "React", category: "Frontend", level: 92, color: "#61DAFB" },
  { name: "Next.js", category: "Frontend", level: 88, color: "#ffffff" },
  { name: "TypeScript", category: "Languages", level: 90, color: "#3178C6" },
  { name: "Tailwind CSS", category: "Frontend", level: 95, color: "#06B6D4" },
  { name: "Three.js", category: "Frontend", level: 70, color: "#049EF4" },
  { name: "Node.js", category: "Backend", level: 85, color: "#339933" },
  { name: "Python", category: "Languages", level: 90, color: "#3776AB" },
  { name: "Go", category: "Languages", level: 65, color: "#00ADD8" },
  { name: "PostgreSQL", category: "Backend", level: 80, color: "#4169E1" },
  { name: "GraphQL", category: "Backend", level: 75, color: "#E10098" },
  { name: "Docker", category: "DevOps", level: 78, color: "#2496ED" },
  { name: "AWS", category: "DevOps", level: 72, color: "#FF9900" },
  { name: "Kubernetes", category: "DevOps", level: 60, color: "#326CE5" },
  { name: "Git", category: "DevOps", level: 92, color: "#F05032" },
  { name: "TensorFlow", category: "AI/ML", level: 68, color: "#FF6F00" },
  { name: "PyTorch", category: "AI/ML", level: 72, color: "#EE4C2C" },
  { name: "Rust", category: "Languages", level: 55, color: "#CE422B" },
  { name: "Redis", category: "Backend", level: 70, color: "#DC382D" },
];

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  demo: string;
  category: "Full Stack" | "Frontend" | "Backend" | "AI/ML" | "DevOps";
  featured: boolean;
  gradient: string;
}

export const projects: Project[] = [
  {
    title: "Business Manager Pro",
    description:
      "A comprehensive business management solution with automatic insights for business understanding.",
    longDescription:
      "Designed with interactive dashboards displaying key business metrics and financial trends. It also includes database management with SQL and JSON to export/import capabilities for data portability..",
    tech: ["Python", "PostgreSQL", "JSON"],
    github: personalInfo.github,
    demo: personalInfo.github,
    category: "Full Stack",
    featured: true,
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "Car Dyno",
    description:
      "A car dynamometer system for capturing and analyzing motor telemetry.",
    longDescription:
      "Engineered a Car dynamometer system that captures motor telemetry from an Arduino sensor and presents it in a browser dashboard for calibration, live monitoring, and post-run analysis.",
    tech: ["Arduino", "React", "Node.js"],
    github: personalInfo.github,
    demo: personalInfo.github,
    category: "Full Stack",
    featured: true,
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "TimingApp",
    description:
      "A time tracking and management application for professionals.",
    longDescription:
      "Python desktop app with accounts system that tracks employees clock-ins/outs, compute pay-period totals, and manages session records with an embedded SQLite database.",
    tech: ["Python", "SQLite", "Tkinter"],
    github: personalInfo.github,
    demo: personalInfo.github,
    category: "Frontend",
    featured: true,
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    title: "Topobot",
    description:
      "A full-stack robotics project integrating hardware, embedded firmware, Linux services, Python backend, and a cross‑platform mobile app.",
    longDescription:
      "Full-stack robotics project integrating hardware, embedded firmware, Linux services, Python backend, and a cross‑platform mobile app. The system runs on a Raspberry Pi (camera, Bluetooth/Wi‑Fi) and two Arduinos (motor control + sensor/head control). It supports teleoperation via Bluetooth/Wi‑Fi, live camera streaming, obstacle detection (multiple HC‑SR04 sensors), encoder‑based motor feedback, ESC motor control, servo‑driven sensor mounts, and a mobile UI for driving and diagnostics.",
    tech: ["Arduino", "C++", "Linux", "React Native", "TypeScript"],
    github: personalInfo.github,
    demo: personalInfo.github,
    category: "DevOps",
    featured: false,
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "TimeTrack",
    description:
      "Real-time social media sentiment analysis dashboard with ML-powered trend prediction.",
    longDescription:
      "Designed and implemented a PyQt5 desktop application for RC Race Timing, integrating real-time Arduino serial input and live display.",
    tech: ["Python", "JSON", "C++"],
    github: personalInfo.github,
    demo: personalInfo.github,
    category: "AI/ML",
    featured: false,
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
];

export interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  description: string;
  type: "work" | "education";
  tech?: string[];
}

export const experience: ExperienceItem[] = [
  {
    title: "Software Development Intern",
    company: "Compass of NEPA",
    date: "Jul 2025 — Present",
    description:
      "Developed internal tools for the infrastructure team, optimizing deployment pipelines and reducing build times by 40%. Built React dashboards consumed by 500+ engineers.",
    type: "work",
    tech: ["React", "Python", "C++", "Arduino", "Linux", "SQLite", "PyQt5", "TypeScript", "React Native", "JSON", "PostgreSQL", "Git", "Docker"],
  },
];

export interface TechItem {
  name: string;
  icon: string;
  color: string;
  category: string;
}

export const techStack: TechItem[] = [
  { name: "React", icon: "⚛️", color: "#61DAFB", category: "Frontend" },
  { name: "Next.js", icon: "▲", color: "#ffffff", category: "Frontend" },
  { name: "TypeScript", icon: "TS", color: "#3178C6", category: "Language" },
  { name: "JavaScript", icon: "JS", color: "#F7DF1E", category: "Language" },
  { name: "Python", icon: "🐍", color: "#3776AB", category: "Language" },
  { name: "Go", icon: "Go", color: "#00ADD8", category: "Language" },
  { name: "Rust", icon: "🦀", color: "#CE422B", category: "Language" },
  { name: "Node.js", icon: "⬡", color: "#339933", category: "Backend" },
  { name: "PostgreSQL", icon: "🐘", color: "#4169E1", category: "Backend" },
  { name: "Redis", icon: "◆", color: "#DC382D", category: "Backend" },
  { name: "GraphQL", icon: "◈", color: "#E10098", category: "Backend" },
  { name: "Docker", icon: "🐳", color: "#2496ED", category: "DevOps" },
  { name: "AWS", icon: "☁️", color: "#FF9900", category: "DevOps" },
  { name: "Kubernetes", icon: "⎈", color: "#326CE5", category: "DevOps" },
  { name: "Git", icon: "⎇", color: "#F05032", category: "DevOps" },
  { name: "TensorFlow", icon: "🧠", color: "#FF6F00", category: "AI/ML" },
  { name: "PyTorch", icon: "🔥", color: "#EE4C2C", category: "AI/ML" },
  { name: "Three.js", icon: "3D", color: "#049EF4", category: "Frontend" },
  { name: "Tailwind", icon: "🎨", color: "#06B6D4", category: "Frontend" },
  { name: "Figma", icon: "🎯", color: "#F24E1E", category: "Design" },
];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#techstack" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const terminalCommands: Record<
  string,
  { output: string; isSpecial?: boolean }
> = {
  help: {
    output: `Available commands:
  about       — Learn about me
  skills      — View my technical skills
  projects    — Browse my projects
  experience  — View my experience
  contact     — Get my contact info
  whoami      — Display identity
  ls          — List portfolio sections
  date        — Show current date
  clear       — Clear the terminal
  echo <msg>  — Echo a message
  
Easter eggs? Try some commands and find out... 👀`,
  },
  about: {
    output: `╔══════════════════════════════════════════╗
║  Luis Vargas                             ║
║  Computer Science @ Stanford University   ║
║  Software Engineer & AI Enthusiast        ║
╚══════════════════════════════════════════╝

${personalInfo.bio}`,
  },
  skills: {
    output: `┌─ Frontend ────────────────────────┐
│ React ████████████████████░░ 92%  │
│ Next.js ██████████████████░░ 88%  │
│ TypeScript ██████████████████░░ 90% │
│ Tailwind ████████████████████ 95%  │
└───────────────────────────────────┘

┌─ Backend ─────────────────────────┐
│ Node.js █████████████████░░░ 85%  │
│ Python ██████████████████░░ 90%   │
│ PostgreSQL ████████████████░░ 80% │
│ GraphQL ███████████████░░░░ 75%   │
└───────────────────────────────────┘

┌─ DevOps ──────────────────────────┐
│ Docker ████████████████░░░░ 78%   │
│ AWS ██████████████░░░░░░ 72%      │
│ Git ████████████████████░░ 92%    │
└───────────────────────────────────┘`,
  },
  projects: {
    output: `┌──────────────────────────────────────────┐
│  1. NeuralChat                           │
│     Real-time AI chatbot platform        │
│     Tech: React, Python, FastAPI         │
├──────────────────────────────────────────┤
│  2. CloudSync                            │
│     Distributed file sync engine         │
│     Tech: Go, gRPC, AWS S3              │
├──────────────────────────────────────────┤
│  3. PixelForge                           │
│     Browser-based 3D model editor        │
│     Tech: Three.js, React, TypeScript    │
├──────────────────────────────────────────┤
│  4. CodeArena                            │
│     Competitive programming platform     │
│     Tech: Next.js, Rust, Docker          │
└──────────────────────────────────────────┘

Type a project name for more details.`,
  },
  experience: {
    output: `Timeline:
  ┃
  ┣━ 2025 ─ Software Engineering Intern @ Meta
  ┃         Optimized deployment pipelines (-40% build time)
  ┃
  ┣━ 2025 ─ Research Assistant @ Stanford AI Lab
  ┃         Efficient transformer architectures
  ┃
  ┣━ 2025 ─ 🏆 TreeHacks Champion
  ┃         1st place / 200+ teams
  ┃
  ┣━ 2025 ─ Open Source Contributor
  ┃         20+ PRs to Next.js, TensorFlow
  ┃
  ┗━ 2023 ─ B.S. Computer Science @ Stanford
            Dean's List · TA for CS 106B & CS 229`,
  },
  contact: {
    output: `╔══════════════════════════════════════╗
║  📧 vargasluis0619@gmail.com           ║
║  🐙 github.com/Luis19K           ║
║  💼 linkedin.com/in/luisvargas        ║
║  📍 Hazleton, PA               ║
╚══════════════════════════════════════╝

Feel free to reach out!`,
  },
  whoami: {
    output: "luis.vargas — CS Student, Software Engineer, Maker of Things ✨",
  },
  ls: {
    output: `drwxr-xr-x  hero/
drwxr-xr-x  about/
drwxr-xr-x  projects/
drwxr-xr-x  techstack/
drwxr-xr-x  experience/
drwxr-xr-x  contact/
-rw-r--r--  resume.pdf`,
  },
  date: {
    output: new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
  sudo: {
    output: "Nice try! But you don't have admin privileges here 😏",
    isSpecial: true,
  },
  "rm -rf /": {
    output:
      "I appreciate the chaos energy, but let's not destroy my portfolio 💀",
    isSpecial: true,
  },
  vim: {
    output:
      "You've entered vim. Good luck getting out. 😂\n(Just kidding, type 'help' for available commands)",
    isSpecial: true,
  },
  "hire me": {
    output: `Great choice! 🚀
    
Send me an email: vargasluis0619@gmail.com
Or connect on LinkedIn: linkedin.com/in/luisvargas

Let's build something amazing together!`,
    isSpecial: true,
  },
  "42": {
    output: "The answer to life, the universe, and everything. 🌌",
    isSpecial: true,
  },
  exit: {
    output: "Goodbye! Thanks for exploring my portfolio terminal. 👋",
    isSpecial: true,
  },
  neofetch: {
    output: `        ████████████████        luis@portfolio
      ██              ██      ─────────────────
    ██   ██████████   ██      OS: Portfolio.js v1.0
   ██   ██        ██   ██     Host: Vercel Cloud
  ██   ██          ██   ██    Kernel: Next.js 14
  ██   ██  ▓▓  ▓▓  ██  ██    Shell: React 18
  ██   ██          ██   ██    Terminal: xterm-256color
   ██   ██        ██   ██     CPU: TypeScript @ 5.4GHz
    ██   ██████████   ██      GPU: Three.js RTX
      ██              ██      Memory: Unlimited Ideas
        ████████████████      Uptime: ∞`,
    isSpecial: true,
  },
};
