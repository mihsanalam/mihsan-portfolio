"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectModal from "@/components/ui/ProjectModal";
import { projects } from "@/data/projects";
import { Project } from "@/types";

const filterTabs = [
  { label: "All", value: "All" },
  { label: "Production Mains", value: "Production" },
  { label: "When I Was Learning", value: "Learning" },
  { label: "Web Applications", value: "Web" },
  { label: "Mobile Applications", value: "Mobile" },
  { label: "MERN Stack", value: "MERN" },
  { label: "React Native", value: "React Native" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

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
          <span className="text-sm font-mono text-accent">03. Work</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-2">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-accent/30 rounded-full mt-4" />
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`px-4 py-2 text-sm rounded-lg font-medium transition-all duration-300 ${
                activeFilter === tab.value
                  ? "bg-accent text-white shadow-[0_0_15px_rgba(123,111,232,0.3)]"
                  : "bg-surface border border-border text-text-secondary hover:border-accent/40 hover:text-accent"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filtered.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpenModal={openModal}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="text-center text-text-secondary py-12">
            No projects found in this category.
          </p>
        )}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}
