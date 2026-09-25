import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiSupabase,
  SiGit,
  SiGithub,
  SiFigma,
  SiExpo,
  SiRedux,
  SiSocketdotio,
  SiFramer,
  SiReactrouter,
  SiAxios,
  SiVite,
  SiVercel,
  SiBootstrap,
  SiClerk,
  SiRadixui,
  SiGooglegemini,
  SiGoogle,
  SiShadcnui,
  SiSqlite,
  SiJest,
  SiGithubactions,
  SiCloudinary,
  SiSanity,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Code, Mic, Plug } from "lucide-react";
import { Skill } from "@/types";

const InsForgeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M26.1184 101.6C23.2939 98.7833 23.2939 94.2166 26.1184 91.4L97.7167 20L200 20L77.26 142.4C74.4355 145.217 69.8562 145.217 67.0317 142.4L26.1184 101.6Z"
      fill="currentColor"
    />
    <path
      d="M155.251 77.375L200 122V224L104.109 128.375L155.251 77.375Z"
      fill="currentColor"
    />
  </svg>
);

// eslint-disable-next-line
const iconMap: Record<string, React.ComponentType<any>> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  html: SiHtml5,
  css: Code,
  javascript: SiJavascript,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  firebase: SiFirebase,
  supabase: SiSupabase,
  git: SiGit,
  github: SiGithub,
  vscode: VscVscode,
  figma: SiFigma,
  expo: SiExpo,
  redux: SiRedux,
  socketio: SiSocketdotio,
  framer: SiFramer,
  reactrouter: SiReactrouter,
  axios: SiAxios,
  vite: SiVite,
  vercel: SiVercel,
  bootstrap: SiBootstrap,
  clerk: SiClerk,
  radix: SiRadixui,
  gemini: SiGooglegemini,
  google: SiGoogle,
  shadcn: SiShadcnui,
  sqlite: SiSqlite,
  jest: SiJest,
  githubactions: SiGithubactions,
  cloudinary: SiCloudinary,
  sanity: SiSanity,
  inforge: InsForgeIcon,
  speech: Mic,
  api: Plug,
};

interface SkillBadgeProps {
  skill: Skill;
  /** Core Stack mode — renders icon + name centered inside the parent card */
  coreMode?: boolean;
  /** Compact mode — smaller, tighter badge for Full Toolkit grid */
  compact?: boolean;
}

export default function SkillBadge({ skill, coreMode, compact }: SkillBadgeProps) {
  const Icon = iconMap[skill.icon];

  // ── Core Stack variant: just icon + name, centered (parent handles the card) ──
  if (coreMode) {
    return (
      <div className="flex flex-col items-center gap-2 w-full">
        {Icon && (
          <Icon className="w-7 h-7 text-accent group-hover:scale-110 transition-transform duration-300" />
        )}
        <span className="text-xs font-semibold text-text-primary text-center leading-tight">
          {skill.name}
        </span>
      </div>
    );
  }

  // ── Compact variant: smaller badge for Full Toolkit ──
  if (compact) {
    return (
      <div className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-surface border border-border hover:border-accent/30 hover:bg-surface-2 hover:scale-[1.03] transition-all duration-200 cursor-default">
        {Icon && (
          <Icon className="w-3.5 h-3.5 text-text-secondary group-hover:text-accent transition-colors duration-200 flex-shrink-0" />
        )}
        <span className="text-xs font-medium text-text-secondary group-hover:text-text-primary transition-colors truncate">
          {skill.name}
        </span>
      </div>
    );
  }

  // ── Default variant ──
  return (
    <div className="group relative flex items-center gap-3 px-4 py-3 rounded-xl bg-surface border border-border hover:border-accent/40 hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300 cursor-default hover:shadow-[0_0_20px_rgba(123,111,232,0.1)]">
      {/* Glow backdrop on hover */}
      <div className="absolute inset-0 rounded-xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 flex items-center gap-3">
        {Icon && (
          <Icon className="w-5 h-5 text-text-secondary group-hover:text-accent transition-colors duration-300" />
        )}
        <span className="text-sm font-medium text-text-primary">{skill.name}</span>
      </div>
    </div>
  );
}
