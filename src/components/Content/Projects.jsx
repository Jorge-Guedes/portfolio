import Atropos from "atropos/react";
import { motion } from "framer-motion";
import projectsES from "../../data/es/projects.json";
import "atropos/css";

export const Projects = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 lg:p-8">
      <motion.div
        className="w-full max-w-4xl p-6 lg:p-8"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ margin: "0px", once: true }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <div className="w-full max-w-6xl p-6 lg:p-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-white text-center mb-8">
            {projectsES.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
            {projectsES.data.map((project) => (
              <a
                key={project.id}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer"
              >
                <Atropos
                  className="project-atropos h-full"
                  rotateXMax={15}
                  rotateYMax={15}
                  rotateTouch={true}
                  shadow={false}
                  shadowScale={1.02}
                  highlight={true}
                  activeOffset={50}
                >
                  <div className="relative bg-gray-800/40 p-6 rounded-2xl border border-gray-600/40 hover:border-green-500/50 transition-all duration-300 group overflow-hidden h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl" />

                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-4">
                        <div>
                          <img
                            src={project.favicon}
                            alt={`${project.title} logo`}
                            className={`${project.logo_sizes} rounded-lg`}
                          />
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300 line-clamp-2">
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      {project.description && (
                        <p className="text-gray-300 text-sm mb-4 line-clamp-5">
                          {project.description}
                        </p>
                      )}

                      {project.technologies && (
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies
                            .slice(0, 8)
                            .map((tech, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-gray-700/60 text-gray-300 text-xs rounded-md border border-gray-600/30"
                              >
                                {tech}
                              </span>
                            ))}
                          {project.technologies.length > 8 && (
                            <span className="px-2 py-1 bg-gray-700/60 text-gray-400 text-xs rounded-md">
                              +{project.technologies.length - 8}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </Atropos>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
