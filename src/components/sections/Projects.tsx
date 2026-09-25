"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import { Project } from "@/types";

/*
 * The modal (plus react-photo-view and its stylesheet) is code-split into its
 * own chunk and only downloaded the first time a card is opened — it used to
 * sit in the initial bundle even though most visitors never open it.
 */
const ProjectModal = dynamic(() => import("@/components/ui/ProjectModal"), { ssr: false });

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-2">
            <span className="text-accent mr-3">/</span>projects
          </h2>
          <div className="w-16 h-1 bg-accent/30 rounded-full mt-4" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenModal={openModal}
            />
          ))}
        </div>
      </div>

      {/*
        Only mounted once a project has been selected. It keeps the exit
        animation working (the project is cleared 300ms after close) while
        making sure the lazy chunk is never fetched up front.
      */}
      {selectedProject && (
        <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
      )}
    </section>
  );
}
