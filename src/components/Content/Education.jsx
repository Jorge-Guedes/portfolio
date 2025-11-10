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
          {educationES.data.map((educ, index) => (
            <motion.a
              key={educ.id}
              href={educ.site}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-800/40 p-6 rounded-xl border border-gray-600/40 hover:border-green-500/50 transition-all duration-20 cursor-pointer"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 30px -15px rgba(34, 197, 94, 0.3)",
              }}
            >
              <div className="flex items-start gap-4">
                <motion.img
                  src={educ.favicon}
                  alt={`${educ.institution} logo`}
                  className="w-10 h-10 rounded-lg mt-1 bg-gray-200"
                />

                <div className="flex-1">
                  <motion.h3
                    className="text-xl font-bold text-white mb-2"
                    whileHover={{ color: "#22c55e" }}
                    transition={{ duration: 0.1 }}
                  >
                    {educ.title}
                  </motion.h3>

                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                    <p className="text-gray-300 text-lg">{educ.institution}</p>

                    <motion.span
                      className="text-green-500/60 font-semibold mt-2 lg:mt-0 inline-block"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.1 }}
                    >
                      {educ.period}
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
