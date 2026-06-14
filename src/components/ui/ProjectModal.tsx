"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Project } from "@/types";

import "react-photo-view/dist/react-photo-view.css";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !project) return null;

  const isMobileLayout = project.layout === "mobile";

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative z-10 w-full max-w-3xl max-h-[85vh] bg-surface border border-border rounded-2xl overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 border-b border-border flex items-start justify-between">
              <div>
                <h2 className="text-xl font-bold text-text-primary">{project.title}</h2>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono font-medium rounded-md bg-accent/10 text-accent border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-2 rounded-lg bg-surface-2 border border-border text-text-secondary hover:text-text-primary hover:border-accent/40 transition-all flex-shrink-0"
              >
                <X size={16} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto flex-1 p-6 space-y-6">
              {/* Description */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-text-primary">About the Project</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Screenshot Gallery with react-photo-view */}
              {project.images && project.images.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-text-primary">Screenshots ({project.images.length})</h3>
                  <PhotoProvider>
                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-border">
                      {project.images.map((img, index) => (
                        <PhotoView key={img} src={img}>
                          <div className="relative flex-shrink-0 cursor-zoom-in group rounded-xl overflow-hidden border border-border hover:border-accent/40 transition-all duration-300 bg-surface-2">
                            {/* Tall aspect ratio for mobile apps, landscape for web */}
                            <div className={`relative ${isMobileLayout ? "w-24 h-48" : "w-52 h-32"}`}>
                              <Image
                                src={img}
                                alt={`${project.title} screenshot ${index + 1}`}
                                fill
                                sizes={isMobileLayout ? "96px" : "208px"}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white text-[10px] bg-black/60 px-2 py-1 rounded-md backdrop-blur-sm">
                                  Zoom
                                </span>
                              </div>
                            </div>
                          </div>
                        </PhotoView>
                      ))}
                    </div>
                  </PhotoProvider>
                </div>
              )}

              {/* Features */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-text-primary">Key Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <ChevronRight size={14} className="mt-0.5 text-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-2 border border-border text-sm text-text-secondary hover:text-accent hover:border-accent/40 transition-all font-medium"
                  >
                    <FaGithub size={16} />
                    View Source
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-all shadow-lg shadow-accent/20"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
