import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-dark-light">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap">
            Projects
          </h2>
          <div className="h-px bg-dark-lighter flex-1" />
        </motion.div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group h-full p-6 rounded-xl bg-dark border border-dark-lighter hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-primary text-3xl">📂</div>
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary-light transition-colors"
                      >
                        <FiGithub className="text-lg" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary-light transition-colors"
                      >
                        <FiExternalLink className="text-lg" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & description */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-light transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-gray-400 bg-dark-lighter px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
