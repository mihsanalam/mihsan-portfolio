"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Experience } from "@/types";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export default function TimelineItem({ experience, index }: TimelineItemProps) {
  const isEven = index % 2 === 0;
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative flex items-start gap-6 group"
    >
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="relative">
          <div className={`w-4 h-4 rounded-full border-2 ${experience.current ? "border-accent bg-accent/20" : "border-border bg-surface-2"} transition-colors z-10 relative`}>
            {experience.current && (
              <div className="absolute inset-0 rounded-full bg-accent/40 animate-ping" />
            )}
          </div>
        </div>
        <div className="w-px h-full bg-border min-h-[60px]" />
      </div>

      {/* Content Card */}
      <div className="flex-1 pb-10 group-last:pb-0">
        <div className="relative p-5 rounded-xl bg-surface border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(123,111,232,0.08)]">
          {/* Top Row: Date badge & Company Logo */}
          <div className="flex justify-between items-start gap-4 mb-3">
            <span className="inline-block px-2.5 py-1 text-[11px] font-mono font-medium rounded-md bg-accent/10 text-accent border border-accent/20">
              {experience.dateRange}
            </span>
            {experience.logo && (
              <div className="w-10 h-10 rounded-lg border border-border bg-surface-2 p-1 flex items-center justify-center flex-shrink-0 overflow-hidden select-none">
                {!imageError ? (
                  <Image
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    width={40}
                    height={40}
                    className="w-full h-full object-contain rounded-md"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <span className="text-xs font-bold font-mono text-text-secondary uppercase">
                    {experience.company.slice(0, 2)}
                  </span>
                )}
              </div>
            )}
          </div>

          <h3 className="text-lg font-semibold text-text-primary">{experience.role}</h3>
          <p className="text-sm text-accent mt-0.5">{experience.company}</p>

          <p className="text-sm text-text-secondary mt-3 leading-relaxed">
            {experience.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {experience.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[10px] font-mono font-medium rounded-md bg-surface-2 text-text-secondary border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
