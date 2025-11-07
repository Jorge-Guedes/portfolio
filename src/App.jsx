import { motion } from "framer-motion";

function App() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-900">
      <div className="lg:bg-gray-800 flex flex-col justify-center items-center w-full lg:w-1/3 min-h-screen lg:h-screen lg:fixed left-0 top-0 z-10 p-4 lg:p-8 border-r border-gray-700">
        <motion.div
          className="w-48 h-48 lg:w-56 lg:h-56 bg-gray-700 flex flex-col items-center justify-center text-gray-200 font-bold rounded-lg text-center p-4 lg:p-6 shadow-xl border border-gray-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-lg lg:text-xl">foto y datos</span>
          <span className="text-lg lg:text-xl">personales</span>
        </motion.div>

        <motion.div
          className="mt-6 lg:mt-8 text-center text-gray-300 lg:text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-xl lg:text-2xl font-bold mb-2 text-white">
            Nombre
          </h2>
          <p className="text-sm lg:text-base text-gray-400">
            Desarrollador Frontend
          </p>
          <p className="text-xs lg:text-sm mt-2 text-gray-500">
            React · JavaScript · Tailwind
          </p>
        </motion.div>
      </div>

      <div className="w-full lg:w-2/3 lg:ml-auto bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800">
        <section className="min-h-screen flex items-center justify-center p-4 lg:p-8">
          <motion.div
            className="w-full max-w-2xl h-64 bg-gray-700 flex flex-col items-center justify-center text-gray-200 font-bold rounded-2xl text-center p-6 shadow-2xl border border-gray-600"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-50px" }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <span className="text-2xl lg:text-3xl mb-4 text-white">
              EXPERIENCIA LABORAL
            </span>
          </motion.div>
        </section>

        <section className="min-h-screen flex items-center justify-center p-4 lg:p-8">
          <motion.div
            className="w-full max-w-2xl h-64 bg-gray-600 flex flex-col items-center justify-center text-gray-200 font-bold rounded-2xl text-center p-6 shadow-2xl border border-gray-500"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ margin: "-50px" }}
            transition={{ duration: 0.7, type: "spring" }}
          >
            <span className="text-2xl lg:text-3xl mb-4 text-white">
              HABILIDADES TÉCNICAS
            </span>
          </motion.div>
        </section>

        <section className="min-h-screen flex items-center justify-center p-4 lg:p-8">
          <motion.div
            className="w-full max-w-2xl h-64 bg-gray-600 flex flex-col items-center justify-center text-gray-200 font-bold rounded-2xl text-center p-6 shadow-2xl border border-gray-500"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-50px" }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <span className="text-2xl lg:text-3xl mb-4 text-white">
              🎓 EDUCACIÓN
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
    </div>
  );
}

export default App;
