"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

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
          {/* Left Column — Profile Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-start order-2 lg:order-1"
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

          {/* Right Column — Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-6 order-1 lg:order-2"
          >
            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary leading-tight">
                Hi, <span className="text-accent">Mihsan</span> here.
              </h1>
              <p className="text-lg text-text-secondary leading-relaxed max-w-lg">
                Full Stack Engineer and Open Source Contributor. I architect{" "}
                <span className="text-text-primary font-medium">scalable custom applications</span>{" "}
                &{" "}
                <span className="text-text-primary font-medium">high-performance web ecosystems</span>.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg border-2 border-accent bg-white text-gray-900 font-semibold hover:shadow-[0_0_25px_var(--accent-glow)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <Mail size={18} aria-hidden="true" />
                Say hi!
              </a>
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
