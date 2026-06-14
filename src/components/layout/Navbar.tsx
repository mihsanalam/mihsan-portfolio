"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { NavLink } from "@/types";

const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll Spy active section detection
      const sections = navLinks.map((link) => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 160; // Offset for Navbar height and triggers

      let currentSection = "";
      for (const section of sections) {
        if (section) {
          const top = (section as HTMLElement).offsetTop;
          const height = (section as HTMLElement).offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = `#${section.id}`;
          }
        }
      }
      // If we are at the very top of the page, clear active section
      if (window.scrollY < 100) {
        setActiveSection("");
      } else {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial call to set active section on page load
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-background/70 backdrop-blur-xl border-b border-border shadow-[0_1px_30px_rgba(0,0,0,0.1)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                setActiveSection("");
              }}
              className="flex items-center gap-2 group relative"
            >
              <div className="w-8 h-8 rounded-lg border border-accent/20 bg-surface-2 p-0.5 flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/mihsan_logo.png"
                  alt="Mihsan Alam"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-lg font-bold text-text-primary tracking-wide">
                Mihsan<span className="text-accent">.</span>
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <button
                    key={link.href}
                    onClick={() => handleClick(link.href)}
                    className={`px-3 py-2 text-sm transition-all duration-300 rounded-lg ${
                      isActive
                        ? "text-accent font-semibold bg-accent/10 border border-accent/20"
                        : "text-text-secondary hover:text-accent hover:bg-accent/5 border border-transparent"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <ThemeToggle />

              {/* Hire Me CTA */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick("#contact");
                }}
                className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-accent rounded-lg hover:bg-accent/90 transition-all duration-200 shadow-[0_0_20px_rgba(123,111,232,0.2)] hover:shadow-[0_0_25px_rgba(123,111,232,0.35)]"
              >
                Hire Me
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-2 transition-all"
              >
                {mobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-30 md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="p-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <button
                    key={link.href}
                    onClick={() => handleClick(link.href)}
                    className={`w-full text-left px-4 py-3 text-sm rounded-lg transition-all duration-200 ${
                      isActive
                        ? "text-accent font-semibold bg-accent/10 border-l-2 border-accent pl-3.5"
                        : "text-text-secondary hover:text-accent hover:bg-accent/5"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick("#contact");
                }}
                className="block w-full text-center mt-2 px-4 py-3 text-sm font-medium text-white bg-accent rounded-lg"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
