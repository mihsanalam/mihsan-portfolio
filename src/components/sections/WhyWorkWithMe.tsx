"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, Zap, TrendingUp, Smartphone, HeartHandshake, ArrowRight } from "lucide-react";

const advantages = [
  {
    icon: MonitorSmartphone,
    title: "Responsive Design",
    description: "Every site is optimized to render beautifully across all screen sizes, from mobile screens to large desktop monitors.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Performance is prioritized with optimized assets, clean code, and fast page speeds for a frictionless client experience.",
  },
  {
    icon: TrendingUp,
    title: "SEO-Friendly Development",
    description: "Best SEO practices are built directly into the site's structure, headings, and metadata to help your business get found on Google.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Approach",
    description: "Mobile traffic represents over 50% of the web. I build layouts starting from mobile to ensure flawless phone experiences.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support",
    description: "I don't just ship and disappear. I provide support post-launch to keep your site updated, secure, and running smoothly.",
  },
];

export default function WhyWorkWithMe() {
  return (
    <section id="why-me" className="py-24 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column — Intro */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-mono text-accent">05. Why Me?</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-2">
                Why Work With Me?
              </h2>
              <div className="w-16 h-1 bg-accent/30 rounded-full mt-4" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-text-secondary leading-relaxed max-w-md"
            >
              I bridge the gap between complex software engineering and professional design. My focus is on creating web solutions that are not just beautiful, but also performant and designed to convert visitors into loyal clients.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 p-5 rounded-2xl bg-surface border border-border shadow-md max-w-sm"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent font-bold text-lg">
                100%
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm font-semibold text-text-primary">Reliable Delivery</h4>
                <p className="text-xs text-text-secondary">
                  Client-focused execution & clear communication.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column — Advantages Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {advantages.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl bg-surface/50 backdrop-blur-sm border border-border hover:border-accent/40 hover:bg-surface transition-all duration-300 group flex flex-col justify-between hover:shadow-[0_15px_30px_rgba(123,111,232,0.1)]"
                >
                  <div className="space-y-4">
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm">
                      <IconComp size={20} aria-hidden="true" />
                    </div>
                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-text-primary group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Slot 6 — Custom CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-accent/10 via-accent-2/5 to-transparent border border-accent/20 hover:border-accent/40 transition-all duration-300 group flex flex-col justify-between hover:shadow-[0_15px_30px_rgba(123,111,232,0.15)]"
            >
              <div className="space-y-4 h-full flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-text-primary group-hover:text-accent transition-colors">
                    Ready to grow your business?
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Let&apos;s collaborate to build a premium web application custom-tailored for your company.
                  </p>
                </div>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-2 transition-colors mt-4 self-start"
                >
                  Let&apos;s Get Started <ArrowRight size={16} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
