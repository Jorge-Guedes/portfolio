import { motion } from "framer-motion";

export const Experience = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 lg:p-8">
      <motion.div
        className="w-full max-w-4xl p-6 lg:p-8"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-50px" }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <h2 className="text-2xl lg:text-3xl font-bold text-white text-center mb-8">
          EXPERIENCIA LABORAL
        </h2>

        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">
                DESARROLLADOR DE SOFTWARE
              </h3>
              <p className="text-gray-400">
                CTSI, Canarias Tecnológica y Sistemas de Información
              </p>
            </div>
            <span className="text-amber-500 font-semibold mt-2 lg:mt-0">
              Agosto 2024 - Junio 2025
            </span>
          </div>

          <ul className="space-y-3">
            <li className="text-gray-300 flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              Desarrollé scripts de automatización para la extracción y el
              procesamiento de datos, reduciendo errores manuales y mejorando la
              eficiencia de los flujos de trabajo.
            </li>
            <li className="text-gray-300 flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              Desarrollé una aplicación web full-stack para la gestión y
              visualización de datos, construyendo una API RESTful con Python
              (FastAPI) (documentada con Swagger) y un frontend en React.js para
              crear una interfaz intuitiva y responsive. Desplegué la solución
              en contenedores Docker.
            </li>
            <li className="text-gray-300 flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              Colaboré en la creación de una aplicación móvil con React Native
              (TypeScript) y Expo, integrando servicios de inteligencia
              artificial mediante la API de OpenAI.
            </li>
          </ul>
        </div>

        <div>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">
                DESARROLLADOR FRONTEND
              </h3>
              <p className="text-gray-400">
                Keytrends 2024 (Prácticas de empresa)
              </p>
            </div>
          </div>

          <ul className="space-y-3">
            <li className="text-gray-300 flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              Desarrollé componentes en React con Tailwind CSS para crear
              interfaces modernas y adaptables.
            </li>
            <li className="text-gray-300 flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              Implementé nuevas funcionalidades mediante la integración de datos
              y lógica en componentes.
            </li>
            <li className="text-gray-300 flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              Participé en el mantenimiento y mejora continua del código para
              asegurar su calidad y eficiencia.
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};
