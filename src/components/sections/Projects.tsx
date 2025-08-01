import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Building, User, Calendar, ChevronRight } from 'lucide-react';
import { projects, getFeaturedProjects, getCompanyProjects, getPersonalProjects } from '../../data/projects';
import type { Project } from '../../data/projects';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'featured' | 'company' | 'personal'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    inactive: { opacity: 0, y: 20 },
    active: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]},
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]},
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    },
  };

  const getFilteredProjects = () => {
    switch (activeFilter) {
      case 'featured':
        return getFeaturedProjects();
      case 'company':
        return getCompanyProjects();
      case 'personal':
        return getPersonalProjects();
      default:
        return projects;
    }
  };

  const filters = [
    { key: 'all', label: 'All Projects', count: projects.length },
    { key: 'featured', label: 'Featured', count: getFeaturedProjects().length },
    { key: 'company', label: 'Bandesoft Ltd', count: getCompanyProjects().length },
    { key: 'personal', label: 'Personal', count: getPersonalProjects().length },
  ];

  const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
      className="group bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-gray-700 overflow-hidden transition-all duration-300"
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={() => setSelectedProject(project)}
    >
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl font-bold text-white/20">
          
          {project.image == ""?project.title.charAt(0):<img src={project.image}  />}
            {/* {project.title.charAt(0)} */}
          </div>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          {project.category === 'company' ? (
            <div className="flex items-center bg-purple-600/90 text-white px-3 py-1 rounded-full text-sm font-medium">
              <Building size={14} className="mr-1" />
              {project.company}
            </div>
          ) : (
            <div className="flex items-center bg-green-600/90 text-white px-3 py-1 rounded-full text-sm font-medium">
              <User size={14} className="mr-1" />
              Personal Project
            </div>
          )}
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 bg-yellow-500/90 text-black px-3 py-1 rounded-full text-sm font-bold">
            ⭐ Featured
          </div>
        )}

        {/* Year */}
        <div className="absolute bottom-4 right-4 flex items-center text-white/80 text-sm">
          <Calendar size={14} className="mr-1" />
          {project.year}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-gray-500 text-xs">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={18} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={18} />
              </a>
            )}
          </div>
          
          <button className="flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
            View Details
            <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="section-padding bg-gray-900">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-yellow-500">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of my work spanning web development, mobile apps, and blockchain solutions
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key as any)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/25'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {filter.label}
                <span className="ml-2 text-sm opacity-75">({filter.count})</span>
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {getFilteredProjects().map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gray-900 rounded-2xl border border-gray-800 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Modal Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {selectedProject.title}
                    </h3>
                    <div className="flex items-center gap-4">
                      {selectedProject.category === 'company' ? (
                        <div className="flex items-center text-purple-400">
                          <Building size={16} className="mr-1" />
                          {selectedProject.company}
                        </div>
                      ) : (
                        <div className="flex items-center text-green-400">
                          <User size={16} className="mr-1" />
                          Personal Project
                        </div>
                      )}
                      <div className="flex items-center text-gray-400">
                        <Calendar size={16} className="mr-1" />
                        {selectedProject.year}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white text-2xl"
                  >
                    ×
                  </button>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-white mb-3">Key Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <span className="text-blue-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenges */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-white mb-3">Challenges Overcome</h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {selectedProject.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <span className="text-orange-400 mr-2 mt-1">▸</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      View Live
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-gray-800 hover:bg-yellow-500 hover:text-black text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      <Github size={18} className="mr-2" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;