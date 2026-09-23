"use client";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

interface FollowItem {
  label: string;
  count?: string;
  href: string;
  icon: React.ComponentType<any>;
}

const items: FollowItem[] = [
  { label: "GitHub", count: "1.2k", href: "https://github.com/mihsanalam", icon: FaGithub },
  { label: "LinkedIn", count: "4.3k", href: "https://linkedin.com/in/mihsanalam", icon: FaLinkedinIn },
  { label: "Instagram", count: "8.6k", href: "https://www.instagram.com/mihsanalam/", icon: FaInstagram },
];

export default function FollowBlock() {
  return (
    <div className="mt-4 flex items-center gap-3">
      {items.map((it) => {
        const Icon = it.icon;
        return (
          <a
            key={it.label}
            href={it.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-11 w-11 items-center justify-center overflow-hidden border-2 border-border bg-surface-2 text-text-primary shadow-[4px_4px_0_0_rgba(255,86,86,0.25)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:translate-x-[-1px] hover:border-accent hover:shadow-[6px_6px_0_0_rgba(255,86,86,0.45)]"
            aria-label={`Follow on ${it.label}`}
            title={it.label}
            style={{ borderRadius: 0 }}
          >
            <span className="absolute -left-1 -top-1 h-1.5 w-1.5 bg-accent" aria-hidden="true" />
            <span className="absolute -bottom-1 -right-1 h-1.5 w-1.5 bg-accent/80" aria-hidden="true" />
            <Icon size={15} aria-hidden="true" className="relative z-10 transition-transform duration-200 group-hover:scale-110" />
            <span className="sr-only">{it.label}</span>
          </a>
        );
      })}
    </div>
  );
}
