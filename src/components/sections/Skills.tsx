"use client";

import { motion } from "framer-motion";
import SkillBadge from "@/components/ui/SkillBadge";
import { skillCategories } from "@/data/skills";

const coreStack = [
  { name: "Next.js", icon: "nextjs", category: "Frontend" },
  { name: "React", icon: "react", category: "Frontend" },
  { name: "TypeScript", icon: "typescript", category: "Frontend" },
  { name: "Node.js", icon: "nodejs", category: "Backend" },
  { name: "MongoDB", icon: "mongodb", category: "Database" },
  { name: "Tailwind CSS", icon: "tailwind", category: "UI Frameworks" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-surface/50 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-accent">04. Skills</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-2">
            Tech Stack
          </h2>
          <div className="w-16 h-1 bg-accent/30 rounded-full mt-4" />
        </motion.div>

        {/* ── Core Stack ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">
              Core Stack
            </span>
            <div className="flex-1 h-px bg-accent/20" />
            <span className="text-xs text-text-secondary font-mono">Primary expertise</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {coreStack.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center gap-2.5 p-4 rounded-2xl bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border border-accent/25 hover:border-accent/50 hover:shadow-[0_8px_25px_rgba(123,111,232,0.18)] transition-all duration-300 group cursor-default"
              >
                <SkillBadge skill={skill} index={i} coreMode />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Full Toolkit ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs font-semibold text-text-secondary uppercase tracking-widest">
              Full Toolkit
            </span>
            <div className="flex-1 h-px bg-border/60" />
            <span className="text-xs text-text-secondary font-mono opacity-60">All technologies</span>
          </div>

          <div className="space-y-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: catIndex * 0.07 }}
              >
                <h3 className="text-[11px] font-semibold text-text-secondary/70 uppercase tracking-widest mb-3 pl-1">
                  {category.name}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBadge
                      key={skill.name}
                      skill={skill}
                      index={catIndex * 6 + skillIndex}
                      compact
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
