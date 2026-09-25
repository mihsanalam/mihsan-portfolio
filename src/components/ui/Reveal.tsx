"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds to wait before the entrance animation starts. */
  delay?: number;
  /** Entrance offset in px. */
  y?: number;
  x?: number;
  duration?: number;
};

/**
 * Tiny client island that fades/slides its children in on scroll. Keeping this
 * in one small component lets the sections around it stay React Server
 * Components instead of pulling a whole framer-motion tree into the client
 * bundle and hydration work.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 20,
  x = 0,
  duration = 0.5,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
