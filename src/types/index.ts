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
  description: string;
  tags: string[];
  logo: string;
  current?: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
