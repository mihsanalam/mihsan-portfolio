"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { experiences } from "@/data/experience";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = experiences[activeIndex];

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-surface/50 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-accent">05. Career</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-2">
            <span className="text-accent mr-3">/</span>experience
          </h2>
          <div className="w-16 h-1 bg-accent/30 rounded-full mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-4 md:gap-0"
        >
          {/* Company tabs — vertical list on desktop, horizontal on mobile */}
          <div
            role="tablist"
            aria-label="Work experience"
            className="flex md:flex-col overflow-x-auto md:overflow-visible flex-shrink-0 md:w-40"
          >
            {experiences.map((exp, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={exp.company}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIndex(index)}
                  className={`relative text-left text-xs sm:text-sm font-medium px-4 py-3 whitespace-nowrap transition-colors duration-200 ${
                    isActive
                      ? "text-accent"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="experience-tab-indicator"
                      className="absolute left-0 top-0 h-full w-0.5 bg-accent rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {exp.company}
                </button>
              );
            })}
          </div>

          {/* Active experience panel */}
          <div className="min-w-0 min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.article
                key={active.company}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="pl-6 md:pl-10 border-l border-border"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-text-primary">
                  {active.role} <span className="text-text-secondary">@</span>{" "}
                  <span className="text-accent">{active.company}</span>
                </h3>
                <p className="text-xs sm:text-sm font-mono uppercase tracking-wide text-text-secondary mt-1.5">
                  {active.dateRange}
                </p>
                <ul className="mt-6 space-y-3.5">
                  {active.highlights.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm sm:text-[15px] text-text-secondary leading-relaxed"
                    >
                      <ChevronRight
                        size={15}
                        aria-hidden="true"
                        className="mt-1 text-accent flex-shrink-0"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
