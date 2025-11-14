import { motion } from "framer-motion";
import experienceES from "../../data/es/experience.json";

export const Experience = () => {
  return (
    <div
      id="experience"
      className="min-h-screen flex items-center justify-center p-4 lg:p-8"
    >
      <motion.div
        className="w-full max-w-4xl p-6 lg:p-8"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "0px", once: true }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <h2 className="text-2xl lg:text-3xl font-bold text-white text-center mb-8">
          {experienceES.title}
        </h2>

        {experienceES.data.map((job) => (
          <div key={job.id} className="mb-8">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
              <div className="flex items-center gap-3">
                <img
                  src={job.favicon}
                  alt={`${job.company} logo`}
                  className="w-8 h-8 rounded"
                />
                <div>
                  <a
                    href={job.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-bold text-white hover:text-green-500 transition-colors duration-150"
                  >
                    {job.title}
                  </a>
                  <p className="text-gray-400">{job.company}</p>
                </div>
              </div>

              {job.period && (
                <span className="text-green-500/60 font-semibold mt-2 lg:mt-0">
                  {job.period}
                </span>
              )}
            </div>

            <ul className="space-y-3">
              {job.points.map((point, pointIndex) => (
                <motion.li
                  key={pointIndex}
                  className="text-gray-300 flex items-start"
                  initial={{ opacity: 0, x: 100 * (pointIndex + 1) }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ margin: "0px", once: true }}
                  transition={{ duration: 1.0, type: "spring" }}
                >
                  <span className="text-green-500 mr-2">•</span>
                  {point}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
