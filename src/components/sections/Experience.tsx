"use client";

import { motion } from "framer-motion";
import TimelineItem from "@/components/ui/TimelineItem";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-surface/50 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-accent">06. Career</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-2">Experience</h2>
          <div className="w-16 h-1 bg-accent/30 rounded-full mt-4" />
        </motion.div>
        <div className="max-w-2xl mx-auto">
          {experiences.map((exp, index) => (
            <TimelineItem key={exp.company} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
