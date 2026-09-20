export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  images: string[];
  stack: string[];
  github: string | null;
  liveUrl: string | null;
  features: string[];
  category: string[];
  featured?: boolean;
  layout?: "mobile" | "desktop";
  imageAlt?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Experience {
  company: string;
  role: string;
  dateRange: string;
  highlights: string[];
  logo?: string;
  current?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}
