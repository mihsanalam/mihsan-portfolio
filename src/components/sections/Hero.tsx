"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Download } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/mihsanalam", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://linkedin.com/in/mihsanalam", label: "LinkedIn" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-2/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(123,111,232,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(123,111,232,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                Available for work
              </span>
            </motion.div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary">
                Hi, I&apos;m{" "}
                <span className="text-accent relative">
                  Mihsan Alam
                  <svg
                     className="absolute -bottom-2 left-0 w-full"
                     viewBox="0 0 200 8"
                     fill="none"
                     aria-hidden="true"
                   >
                     <path
                       d="M1 5.5C40 2 80 2 100 4C120 6 160 6 199 3"
                       stroke="currentColor"
                       strokeWidth="2"
                       strokeLinecap="round"
                       className="text-accent/40"
                     />
                   </svg>
                 </span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-text-secondary">
                Full Stack Engineer
              </h2>
            </div>

            {/* Typing animation */}
            <div className="h-8 flex items-center">
              <span className="text-accent font-mono text-sm mr-2">{">"}</span>
              {mounted ? (
                <TypeAnimation
                  sequence={[
                    "Building Real-World Web Apps",
                    2000,
                    "React Native Mobile Developer",
                    2000,
                    "MERN Stack Engineer",
                    2000,
                    "Turning Ideas Into Products",
                    2000,
                  ]}
                  wrapper="span"
                  speed={40}
                  repeat={Infinity}
                  className="text-sm sm:text-base text-text-secondary font-mono"
                />
              ) : (
                <span className="text-sm sm:text-base text-text-secondary font-mono">
                  Building Real-World Web Apps
                </span>
              )}
            </div>

            <p className="text-text-secondary leading-relaxed max-w-lg">
              I build production-grade web and mobile applications for real businesses.
              Passionate about clean architecture, great user experiences, and shipping products that make an impact.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-accent rounded-xl hover:bg-accent/90 transition-all duration-300 shadow-[0_0_20px_rgba(123,111,232,0.25)] hover:shadow-[0_0_30px_rgba(123,111,232,0.4)]"
              >
                View My Work
                <ArrowDown size={16} aria-hidden="true" />
              </a>
              <a
                href="/Mihsan_Resume.pdf"
                download="Mihsan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-text-primary bg-surface border border-border rounded-xl hover:border-accent/40 hover:bg-surface-2 transition-all duration-300"
              >
                <Download size={16} aria-hidden="true" />
                Download Resume
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-surface border border-border text-text-secondary hover:text-accent hover:border-accent/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(123,111,232,0.1)]"
                  aria-label={social.label}
                >
                  <social.icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column — Profile Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-accent/20 via-accent-2/10 to-transparent blur-2xl animate-pulse" />

              {/* Profile photo */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-2 border-border overflow-hidden shadow-xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Mihsan Alam"
                  fill
                  sizes="(max-width: 640px) 256px, 320px"
                  priority
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Floating tech badges */}
              {[
                { label: "React", x: "-15%", y: "10%", delay: 0 },
                { label: "Next.js", x: "85%", y: "15%", delay: 0.3 },
                { label: "React Native", x: "-25%", y: "42%", delay: 0.6 },
                { label: "Node.js", x: "88%", y: "45%", delay: 0.9 },
                { label: "TypeScript", x: "-10%", y: "75%", delay: 1.2 },
                { label: "Supabase", x: "80%", y: "75%", delay: 1.5 },
              ].map((badge) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + badge.delay * 0.3 }}
                  className="absolute px-2.5 py-1 bg-surface/90 backdrop-blur-sm border border-border rounded-lg text-[11px] font-mono text-text-secondary shadow-lg"
                  style={{ left: badge.x, top: badge.y }}
                >
                  {badge.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 border-2 border-border rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
