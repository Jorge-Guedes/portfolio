import { motion } from "framer-motion";
import educationES from "../../data/es/education.json";

export const Education = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 lg:p-8">
      <motion.div
        className="w-full max-w-4xl p-6 lg:p-8"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "0px", once: true }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <h2 className="text-2xl lg:text-3xl font-bold text-white text-center mb-8">
          {educationES.title}
        </h2>

        <div className="space-y-6">
          {educationES.data.map((edu, index) => (
            <motion.a
              key={edu.id}
              href={edu.site}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-800/30 p-6 rounded-xl border border-gray-600/30 hover:border-amber-500/50 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 30px -15px rgba(245, 158, 11, 0.3)",
              }}
            >
              <div className="flex items-start gap-4">
                <motion.img
                  src={edu.favicon}
                  alt={`${edu.institution} logo`}
                  className="w-10 h-10 rounded-lg mt-1"
                />

                <div className="flex-1">
                  <motion.h3
                    className="text-xl font-bold text-white mb-2"
                    whileHover={{ color: "#f59e0b" }}
                    transition={{ duration: 0.2 }}
                  >
                    {edu.title}
                  </motion.h3>

                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                    <p className="text-gray-300 text-lg">{edu.institution}</p>

                    <motion.span
                      className="text-amber-500/60 font-semibold mt-2 lg:mt-0 inline-block"
                      whileHover={{ scale: 1.1 }}
                    >
                      {edu.period}
                    </motion.span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
