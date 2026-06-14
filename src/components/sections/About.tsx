"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 9, suffix: "+", label: "Projects" },
  { value: 2, suffix: "", label: "Real Clients" },
  { value: 2, suffix: "", label: "Live Projects" },
  { value: 1.5, suffix: "+", label: "Years Experience" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  const isInteger = Number.isInteger(target);
  const displayValue = isInteger ? Math.floor(count) : count.toFixed(1);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

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
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-accent">01. About</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-2">
            About Me
          </h2>
          <div className="w-16 h-1 bg-accent/30 rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left — Stats + Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Profile photo */}
            <div className="relative w-full aspect-[4/5] max-w-xs mx-auto lg:mx-0 rounded-2xl border border-border overflow-hidden shadow-lg bg-surface-2">
              <img
                src="/images/profile.jpg"
                alt="Mihsan Alam"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-4 rounded-xl bg-surface border border-border text-center hover:border-accent/30 transition-all duration-300"
                >
                  <div className="text-2xl font-bold text-accent">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-text-secondary mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 space-y-5"
          >
            <p className="text-text-secondary leading-relaxed">
              I&apos;m Mihsan Alam, a Full Stack Engineer from Dhaka, Bangladesh. I specialize in
              building production-grade web and mobile applications that solve real business
              problems. My approach focuses on clean architecture, intuitive user experiences,
              and writing code that scales.
            </p>

            <p className="text-text-secondary leading-relaxed">
              With hands-on experience across the MERN stack, React Native, and modern tools
              like Next.js and TypeScript, I&apos;ve delivered real-world applications — from
              e-commerce platforms to inventory management systems used by actual businesses
              every day.
            </p>

            <p className="text-text-secondary leading-relaxed">
              What sets me apart is my focus on shipping complete products, not just writing
              code. I handle everything from database design and API development to deploying
              polished frontends and mobile apps. Every project I take on is treated as a
              product I personally own.
            </p>

            {/* Currently Focused */}
            <div className="pt-4">
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
