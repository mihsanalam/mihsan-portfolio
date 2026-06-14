import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: "react", category: "Frontend" },
      { name: "Next.js", icon: "nextjs", category: "Frontend" },
      { name: "TypeScript", icon: "typescript", category: "Frontend" },
      { name: "Redux", icon: "redux", category: "Frontend" },
      { name: "Tailwind CSS", icon: "tailwind", category: "Frontend" },
      { name: "HTML5", icon: "html", category: "Frontend" },
      { name: "CSS3", icon: "css", category: "Frontend" },
      { name: "JavaScript", icon: "javascript", category: "Frontend" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: "nodejs", category: "Backend" },
      { name: "Express.js", icon: "express", category: "Backend" },
    ],
  },
  {
    name: "Mobile",
    skills: [
      { name: "React Native", icon: "react", category: "Mobile" },
      { name: "Expo", icon: "expo", category: "Mobile" },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "MongoDB", icon: "mongodb", category: "Database" },
      { name: "PostgreSQL", icon: "postgresql", category: "Database" },
      { name: "MySQL", icon: "mysql", category: "Database" },
      { name: "Firebase", icon: "firebase", category: "Database" },
      { name: "Supabase", icon: "supabase", category: "Database" },
    ],
  },
  {
    name: "Libraries",
    skills: [
      { name: "Redux Toolkit", icon: "redux", category: "Libraries" },
      { name: "React Router", icon: "reactrouter", category: "Libraries" },
      { name: "Axios", icon: "axios", category: "Libraries" },
      { name: "Socket.io", icon: "socketio", category: "Libraries" },
      { name: "Clerk", icon: "clerk", category: "Libraries" },
    ],
  },
  {
    name: "UI Frameworks",
    skills: [
      { name: "Tailwind CSS", icon: "tailwind", category: "UI Frameworks" },
      { name: "Shadcn/UI", icon: "shadcn", category: "UI Frameworks" },
      { name: "NativeWind", icon: "nativewind", category: "UI Frameworks" },
      { name: "Radix UI", icon: "radix", category: "UI Frameworks" },
      { name: "Framer Motion", icon: "framer", category: "UI Frameworks" },
      { name: "Bootstrap", icon: "bootstrap", category: "UI Frameworks" },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", icon: "git", category: "Tools" },
      { name: "GitHub", icon: "github", category: "Tools" },
      { name: "Vite", icon: "vite", category: "Tools" },
      { name: "Vercel", icon: "vercel", category: "Tools" },
      { name: "VS Code", icon: "vscode", category: "Tools" },
      { name: "Figma", icon: "figma", category: "Tools" },
    ],
  },
];
