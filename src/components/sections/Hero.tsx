"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
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
            className="space-y-4"
          >
            <div className="space-y-3">
              <p className="text-lg sm:text-xl font-medium text-accent font-mono">
                Hi, Mihsan here.
              </p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-accent leading-tight">
                Full Stack Engineer
                <span className="mx-2 font-medium">|</span>
                Open Source Contributor
              </h1>
              <p className="text-base text-text-secondary leading-relaxed max-w-lg">
                Architecting{" "}
                <span className="text-text-primary font-medium">scalable custom applications</span>{" "}
                &{" "}
                <span className="text-text-primary font-medium">high-performance web ecosystems</span>{" "}
                &mdash; 17-year-old self-taught developer based in Dhaka, building real software for real businesses.
              </p>
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
                  src="/images/hero.webp"
                  alt="Mihsan Alam - Full Stack Developer based in Dhaka"
                  fill
                  sizes="(max-width: 640px) 256px, 320px"
                  priority
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  style={{ objectPosition: "0% 0%", marginLeft: "-10px" }}
                />
              </div>
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
