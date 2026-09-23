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
    <div className="mt-4 flex items-center gap-4">
      {items.map((it) => {
        const Icon = it.icon;
        return (
          <a
            key={it.label}
            href={it.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-surface-2 border border-border hover:border-accent hover:shadow-[0_6px_20px_var(--accent-glow)] transition-all duration-200"
            aria-label={`Follow on ${it.label}`}
          >
            <div className="w-8 h-8 flex items-center justify-center text-text-primary">
              <Icon size={16} aria-hidden="true" />
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-text-primary">{it.label}</div>
              <div className="text-xs text-text-secondary">{it.count} followers</div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
