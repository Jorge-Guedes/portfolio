import { motion } from "framer-motion";
import { Experience } from "./Experience";

export const Content = () => {
  return (
    <div className="w-full lg:w-2/3 lg:ml-auto bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800">
      <Experience />

      <section className="min-h-screen flex items-center justify-center p-4 lg:p-8">
        <motion.div
          className="w-full max-w-2xl h-64 bg-gray-600 flex flex-col items-center justify-center text-gray-200 font-bold rounded-2xl text-center p-6 shadow-2xl border border-gray-500"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <span className="text-2xl lg:text-3xl mb-4 text-white">
            EDUCACIÓN
          </span>
        </motion.div>
      </section>

      <section className="min-h-screen flex items-center justify-center p-4 lg:p-8">
        <motion.div
          className="w-full max-w-2xl h-64 bg-gray-700 flex flex-col items-center justify-center text-gray-200 font-bold rounded-2xl text-center p-6 shadow-2xl border border-gray-600"
          initial={{ opacity: 0, rotateX: 90 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          viewport={{ margin: "-50px" }}
          transition={{ duration: 1, type: "spring" }}
        >
          <span className="text-2xl lg:text-3xl mb-4 text-white">
            PROYECTOS PERSONALES
          </span>
        </motion.div>
      </section>
    </div>
  );
};
