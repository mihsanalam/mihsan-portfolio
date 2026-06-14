"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenModal: (project: Project) => void;
}

export default function ProjectCard({ project, index, onOpenModal }: ProjectCardProps) {
  const hasImage = project.images && project.images.length > 0;
  const isMobileLayout = project.layout === "mobile";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl bg-surface border border-border overflow-hidden cursor-pointer hover:border-accent/40 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(123,111,232,0.12)] flex flex-col"
      onClick={() => onOpenModal(project)}
    >
      {/* Project Thumbnail Area */}
      <div className="relative h-48 overflow-hidden bg-surface-2 flex items-center justify-center">
        {hasImage ? (
          isMobileLayout ? (
            <>
              {/* Blurred background preview */}
              <Image
                src={project.images[0]}
                alt=""
                aria-hidden="true"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="absolute inset-0 w-full h-full object-cover blur-md scale-110 opacity-30 pointer-events-none"
              />
              {/* Centered mobile device screenshot */}
              <div className="relative z-10 h-[92%] aspect-[9/19] rounded-lg shadow-lg border border-border/20 overflow-hidden transition-transform duration-500 group-hover:scale-[1.03] group-hover:-translate-y-1">
                <Image
                  src={project.images[0]}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 768px) 150px, 120px"
                  className="object-cover"
                />
              </div>
            </>
          ) : (
            /* Standard landscape image for web projects */
            <Image
              src={project.images[0]}
              alt={`${project.title} preview`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )
        ) : (
          /* Placeholder gradient if no screenshot is present */
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent-2/10 to-transparent" />
            <span className="text-4xl font-bold text-accent/20 font-mono">
              {project.title.charAt(0)}
            </span>
          </>
        )}

        {/* Hover zoom/view details overlay */}
        <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-20">
          <span className="text-xs text-text-primary font-medium bg-surface/90 backdrop-blur-sm px-4.5 py-2.2 rounded-xl border border-border shadow-md">
            View Case Study →
          </span>
        </div>

        {/* Featured Tag */}
        {project.featured && (
          <div className="absolute top-3 right-3 px-2.5 py-1 bg-accent text-white text-xs font-semibold rounded-md z-25">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-text-secondary line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="space-y-3 pt-2">
          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[10px] font-mono font-medium rounded-md bg-surface-2 text-text-secondary border border-border"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="px-2 py-0.5 text-[10px] font-mono font-medium rounded-md bg-surface-2 text-text-secondary border border-border">
                +{project.stack.length - 4}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 pt-3.5 border-t border-border/60">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent transition-colors"
              >
                <FaGithub size={14} />
                <span>Source Code</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent transition-colors"
              >
                <ExternalLink size={14} />
                <span>Live Site</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
