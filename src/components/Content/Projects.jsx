import Atropos from "atropos/react";
import { motion } from "framer-motion";
import projectsES from "../../data/es/projects.json";
import "atropos/css";

export const Projects = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 lg:p-8">
      <motion.div
        className="w-full max-w-7xl p-6 lg:p-8"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ margin: "0px", once: true }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <div className="w-full max-w-6xl p-6 lg:p-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-white text-center mb-8">
            {projectsES.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
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
                  {/* Agregar flex flex-col aquí */}
                  <div className="relative bg-gray-800/40 p-6 rounded-2xl border border-gray-600/40 hover:border-green-500/50 transition-all duration-300 group overflow-hidden h-full flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl" />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10 flex flex-col flex-1">
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

                      <div className="mb-4 flex-1">
                        <h4 className="text-green-400 font-semibold text-sm mb-1">
                          {projectsES.labels.description}
                        </h4>
                        <p className="text-gray-300 text-sm">
                          {project.description}
                        </p>
                      </div>

                      <div className="mb-4 flex-1">
                        <h4 className="text-green-400 font-semibold text-sm mb-1">
                          {projectsES.labels.objective}
                        </h4>
                        <p className="text-gray-300 text-sm">
                          {project.objetive}
                        </p>
                      </div>

                      {project.technologies && (
                        <div className="mb-4 flex-1">
                          <h4 className="text-green-400 font-semibold text-sm mb-2">
                            {projectsES.labels.technologies}
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.map((tech, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-gray-700/60 text-gray-300 text-xs rounded-md border border-gray-600/30"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Quitar el bg-green-400 y esto estará abajo */}
                    <div className="mt-auto pt-4 border-t border-gray-600/40">
                      <div className="flex items-center justify-center text-gray-300 gap-2 text-xs font-medium">
                        <span>{projectsES.labels.wiew_on_github_text}</span>
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </div>
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
