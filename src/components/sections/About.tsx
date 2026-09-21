"use client";
import { motion } from "framer-motion";

const focusAreas = [
  "Full-Stack Development",
  "Next.js Applications",
  "Database Design",
  "Auth Systems",
  "Real-Time Apps",
  "AI-Assisted Development",
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-2">
            <span className="text-accent mr-3">/</span>about
          </h2>
          <div className="w-16 h-1 bg-accent/30 rounded-full mt-4" />
        </motion.div>

        <div className="max-w-3xl">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-text-secondary leading-relaxed">
              Full-Stack Engineer focused on architecting scalable, high-performance web and
              mobile platforms with clean, maintainable system design — working across{" "}
              <span className="text-text-primary font-medium">React, Next.js, Node.js, TypeScript, MongoDB, and Tailwind CSS</span>.
            </p>

            <p className="text-text-secondary leading-relaxed">
              Currently freelancing while engineering a comprehensive enterprise management
              system, and exploring{" "}
              <span className="text-text-primary font-medium">AI, Machine Learning, and Robotics</span>{" "}
              to build intelligent, impactful technology.
            </p>

            {/* Currently Focused */}
            <div className="pt-2">
              <h3 className="text-sm font-semibold text-text-primary mb-3">
                Currently Focused On
              </h3>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-accent/10 text-accent border border-accent/20"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
