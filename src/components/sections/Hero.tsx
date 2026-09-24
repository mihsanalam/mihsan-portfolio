"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import PixelParticleImage from "@/components/ui/PixelParticleImage";
import FollowBlock from "@/components/ui/FollowBlock";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column — Profile Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="relative w-full h-64 sm:h-80 overflow-hidden bg-transparent flex items-center justify-center">
              <PixelParticleImage src="/images/image.png" alt="Mihsan Alam portrait" className="h-full w-full" />
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
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary leading-tight">
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
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg border border-border bg-surface text-text-primary font-semibold hover:bg-surface-2 transition-all duration-300"
              >
                <Mail size={18} aria-hidden="true" />
                Say hi!
              </a>
              <FollowBlock />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
