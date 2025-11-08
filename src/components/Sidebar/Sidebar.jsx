import { motion } from "framer-motion";

export const Sidebar = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full lg:w-1/3 min-h-screen lg:h-screen lg:fixed left-0 top-0 z-10 p-4 lg:p-8">
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
  );
};
