"use client";

import { motion } from "framer-motion";
import SkillBadge from "@/components/ui/SkillBadge";
import { skillCategories } from "@/data/skills";

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
          <span className="text-sm font-mono text-accent">02. Skills</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-2">
            Tech Stack
          </h2>
          <div className="w-16 h-1 bg-accent/30 rounded-full mt-4" />
        </motion.div>

        {/* Skill Categories */}
        <div className="space-y-10">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIndex * 0.1 }}
            >
              <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBadge
                    key={skill.name}
                    skill={skill}
                    index={catIndex * 5 + skillIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
