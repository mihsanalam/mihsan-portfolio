"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-mono text-accent">05. Feedback</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-2">
            What People Say
          </h2>
          <div className="w-16 h-1 bg-accent/30 rounded-full mt-4 mx-auto" />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-2xl bg-surface/40 backdrop-blur-md border border-border hover:border-accent/40 transition-all duration-500 flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(123,111,232,0.1)] overflow-hidden"
            >
              {/* Background gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Quote Icon & Stars */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={13}
                        aria-hidden="true"
                        className="fill-amber-400 stroke-amber-400"
                      />
                    ))}
                  </div>
                  <div className="text-accent/20 group-hover:text-accent/30 transition-colors duration-300">
                    <Quote size={28} aria-hidden="true" className="transform rotate-180" />
                  </div>
                </div>

                {/* Quote text */}
                <p className="text-sm text-text-secondary leading-relaxed mb-6 italic relative z-10">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-5 border-t border-border/50">
                {/* Glowing Initial Avatar */}
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-accent/20 to-accent-2/10 border border-accent/30 flex items-center justify-center flex-shrink-0 shadow-sm shadow-accent/5">
                  <span className="text-xs font-bold font-mono tracking-wider text-accent uppercase">
                    {item.author === "CEO" 
                      ? "IC"
                      : item.author === "Sales Manager" 
                      ? "JC"
                      : item.author
                          .split(" ")
                          .map((word) => word[0])
                          .join("")}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors duration-300">
                    {item.author}
                  </h3>
                  <p className="text-xs text-text-secondary mt-0.5">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
