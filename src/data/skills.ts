import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "Next.js", icon: "nextjs", category: "Frontend" },
      { name: "React", icon: "react", category: "Frontend" },
      { name: "TypeScript", icon: "typescript", category: "Frontend" },
      { name: "JavaScript", icon: "javascript", category: "Frontend" },
      { name: "HTML5", icon: "html", category: "Frontend" },
      { name: "CSS3", icon: "css", category: "Frontend" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: "nodejs", category: "Backend" },
      { name: "Express.js", icon: "express", category: "Backend" },
      { name: "Gemini AI", icon: "gemini", category: "Backend" },
      { name: "Google OAuth", icon: "google", category: "Backend" },
    ],
  },
  {
    name: "Mobile",
    skills: [
      { name: "React Native", icon: "react", category: "Mobile" },
      { name: "Expo", icon: "expo", category: "Mobile" },
      { name: "Expo Router", icon: "expo", category: "Mobile" },
      { name: "EAS Build", icon: "expo", category: "Mobile" },
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
      { name: "InsForge", icon: "inforge", category: "Database" },
      { name: "WatermelonDB", icon: "watermelon", category: "Database" },
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
      { name: "Zustand", icon: "zustand", category: "Libraries" },
      { name: "Cloudinary", icon: "cloudinary", category: "Libraries" },
      { name: "React Context API", icon: "react", category: "Libraries" },
      { name: "Victory Charts", icon: "victory", category: "Libraries" },
      { name: "Sanity CMS", icon: "sanity", category: "Libraries" },
      { name: "Web Speech API", icon: "speech", category: "Libraries" },
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
      { name: "Gluestack UI", icon: "gluestack", category: "UI Frameworks" },
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
      { name: "Jest", icon: "jest", category: "Tools" },
      { name: "GitHub Actions", icon: "githubactions", category: "Tools" },
    ],
  },
];
