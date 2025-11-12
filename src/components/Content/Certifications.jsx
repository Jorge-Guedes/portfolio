import { motion } from "framer-motion";
import certificationsES from "../../data/es/certifications.json";

export const Certifications = () => {
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
          {certificationsES.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsES.data.map((cert, index) => (
            <motion.a
              key={cert.id}
              href={cert.site}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800/40 p-5 rounded-2xl border border-gray-600/40 hover:border-green-500/50 transition-all duration-20 cursor-pointer group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.1,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -10px rgba(34, 197, 94, 0.3)",
              }}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  className="p-3 bg-gray-700/50 rounded-xl group-hover:bg-green-500/20 transition-colors"
                  whileHover={{ rotate: 10 }}
                >
                  <img
                    src={cert.favicon}
                    alt={`${cert.institution} logo`}
                    className="w-8 h-8"
                  />
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {cert.institution}
                  </p>
                  <span className="text-green-500 text-sm font-medium mt-2 block">
                    {cert.period}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
