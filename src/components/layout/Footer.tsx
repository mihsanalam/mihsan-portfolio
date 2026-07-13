"use client";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/mihsanalam", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://linkedin.com/in/mihsanalam", label: "LinkedIn" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-surface/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg border border-accent/20 bg-surface-2 p-0.5 flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/mihsan_logo.png"
                  alt="Mihsan Alam"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold text-text-primary">
                Mihsan Alam
              </span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              Full Stack Engineer building real-world web and mobile applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-sm font-semibold text-text-primary">Quick Links</div>
            <div className="flex flex-col gap-1.5">
              {footerLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-sm text-text-secondary hover:text-accent transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="space-y-3">
            <div className="text-sm font-semibold text-text-primary">Connect</div>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-surface-2 border border-border text-text-secondary hover:text-accent hover:border-accent/40 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="space-y-1">
            <p className="text-xs text-text-secondary">
              &copy; {new Date().getFullYear()} Mihsan Alam.
            </p>
            <p className="text-[11px] text-text-secondary">
              Powered by <span className="font-semibold text-text-primary">Obxidix</span>
            </p>
            <p className="text-[10px] text-text-secondary/70 font-mono">
              Moving You Toward Your Potential
            </p>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent transition-colors group"
          >
            <span>Back to top</span>
            <ArrowUp size={14} aria-hidden="true" className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
