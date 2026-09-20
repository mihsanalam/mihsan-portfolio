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
      { name: "Tailwind CSS", icon: "tailwind", category: "Frontend" },
      { name: "Framer Motion", icon: "framer", category: "Frontend" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: "nodejs", category: "Backend" },
      { name: "Express.js", icon: "express", category: "Backend" },
      { name: "Socket.io", icon: "socketio", category: "Backend" },
      { name: "Google OAuth", icon: "google", category: "Backend" },
      { name: "API Integration", icon: "api", category: "Backend" },
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
      { name: "MySQL", icon: "mysql", category: "Database" },
      { name: "Firebase", icon: "firebase", category: "Database" },
      { name: "Supabase", icon: "supabase", category: "Database" },
      { name: "WatermelonDB", icon: "watermelon", category: "Database" },
    ],
  },
  {
    name: "Libraries & Tools",
    skills: [
      { name: "Redux Toolkit", icon: "redux", category: "Libraries & Tools" },
      { name: "Zustand", icon: "zustand", category: "Libraries & Tools" },
      { name: "React Context API", icon: "react", category: "Libraries & Tools" },
      { name: "Axios", icon: "axios", category: "Libraries & Tools" },
      { name: "Clerk", icon: "clerk", category: "Libraries & Tools" },
      { name: "Sanity CMS", icon: "sanity", category: "Libraries & Tools" },
      { name: "Git", icon: "git", category: "Libraries & Tools" },
      { name: "GitHub", icon: "github", category: "Libraries & Tools" },
      { name: "Vite", icon: "vite", category: "Libraries & Tools" },
      { name: "Vercel", icon: "vercel", category: "Libraries & Tools" },
      { name: "Figma", icon: "figma", category: "Libraries & Tools" },
      { name: "Jest", icon: "jest", category: "Libraries & Tools" },
      { name: "GitHub Actions", icon: "githubactions", category: "Libraries & Tools" },
    ],
  },
];
