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
    title: "NeuralChat",
    description:
      "Real-time AI chatbot platform with multi-model support and custom fine-tuning capabilities.",
    longDescription:
      "Built a production-ready AI chat platform supporting GPT-4, Claude, and custom fine-tuned models. Features real-time streaming, conversation branching, and a plugin system.",
    tech: ["React", "Python", "FastAPI", "WebSocket", "PostgreSQL", "Redis"],
    github: personalInfo.github,
    demo: personalInfo.github,
    category: "Full Stack",
    featured: true,
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "CloudSync",
    description:
      "Distributed file synchronization engine with conflict resolution and end-to-end encryption.",
    longDescription:
      "Engineered a peer-to-peer file sync system using CRDTs for conflict resolution. Supports real-time collaboration with E2E encryption.",
    tech: ["Go", "gRPC", "AWS S3", "React", "WebRTC"],
    github: personalInfo.github,
    demo: personalInfo.github,
    category: "Backend",
    featured: true,
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "PixelForge",
    description:
      "Browser-based 3D model editor with real-time collaboration and AI-assisted modeling.",
    longDescription:
      "Created a Three.js-powered 3D editor with multiplayer support via WebSocket. Integrated AI-assisted mesh generation using stable diffusion.",
    tech: ["Three.js", "React", "TypeScript", "Node.js", "Socket.io"],
    github: personalInfo.github,
    demo: personalInfo.github,
    category: "Frontend",
    featured: true,
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    title: "DeployPilot",
    description:
      "One-click deployment platform for containerized applications with auto-scaling and monitoring.",
    longDescription:
      "Built a PaaS solution that automates Docker builds, Kubernetes deployments, and monitoring setup. Features GitHub integration and rollback capabilities.",
    tech: ["Go", "Docker", "Kubernetes", "React", "Prometheus"],
    github: personalInfo.github,
    demo: personalInfo.github,
    category: "DevOps",
    featured: false,
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "SentimentScope",
    description:
      "Real-time social media sentiment analysis dashboard with ML-powered trend prediction.",
    longDescription:
      "Developed a sentiment analysis pipeline processing 10K+ tweets/min using a custom BERT model. Features interactive dashboards and anomaly alerts.",
    tech: ["Python", "PyTorch", "FastAPI", "React", "Apache Kafka"],
    github: personalInfo.github,
    demo: personalInfo.github,
    category: "AI/ML",
    featured: false,
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "CodeArena",
    description:
      "Competitive programming platform with real-time battles, AI-powered hints, and skill tracking.",
    longDescription:
      "Built a competitive coding platform supporting 15+ languages with sandboxed execution. Features ELO ranking, live battles, and AI-generated hints.",
    tech: ["Next.js", "TypeScript", "Rust", "Docker", "PostgreSQL"],
    github: personalInfo.github,
    demo: personalInfo.github,
    category: "Full Stack",
    featured: true,
    gradient: "from-indigo-500/20 to-violet-500/20",
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
    tech: ["React", "Python", "GraphQL"],
  },
  {
    title: "Open Source Contributor",
    company: "Various Projects",
    date: "Jan 2025 — Present",
    description:
      "Active contributor to major open-source projects including Next.js and TensorFlow. Submitted 20+ PRs with features and bug fixes merged into production.",
    type: "work",
    tech: ["TypeScript", "Python", "Go"],
  },
  {
    title: "B.S. Computer Science",
    company: "Stanford University",
    date: "Sep 2023 — Jun 2027",
    description:
      "Focusing on AI/ML and Systems. Dean's List every quarter. Teaching Assistant for CS 106B (Data Structures) and CS 229 (Machine Learning).",
    type: "education",
  },
  {
    title: "Research Assistant",
    company: "Stanford AI Lab",
    date: "Sep 2024 — Present",
    description:
      "Conducting research on efficient transformer architectures for edge deployment. Co-authored a paper on model compression techniques submitted to NeurIPS.",
    type: "work",
    tech: ["Python", "PyTorch", "CUDA"],
  },
  {
    title: "Hackathon Champion",
    company: "TreeHacks 2025",
    date: "Feb 2025",
    description:
      "Won first place out of 200+ teams with NeuralChat, an AI-powered accessibility tool. Built in 36 hours with a team of 4.",
    type: "work",
    tech: ["React", "Python", "GPT-4"],
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
