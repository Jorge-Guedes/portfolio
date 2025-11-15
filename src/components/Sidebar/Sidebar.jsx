import { motion } from "framer-motion";
import profileImage from "../../assets/images/profile-image.jpg";
import { useLanguageData } from "../hooks/useLanguageData";
import { useState } from "react";

export const Sidebar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const { data: aboutData, loading } = useLanguageData("aboutMeInfo");

  if (loading || !aboutData) {
    return (
      <div className="flex flex-col justify-center items-center w-full lg:w-1/3 min-h-screen lg:h-screen lg:fixed left-0 top-0 z-10 p-4 lg:p-8">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  const dockItems = [
    {
      name: "GitHub",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      url: aboutData.links.github,
      color: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      url: aboutData.links.linkedin,
      color: "hover:text-blue-400",
    },
  ];

  return (
    <div
      id="about"
      className="flex flex-col justify-center items-center w-full lg:w-1/3 min-h-screen lg:h-screen lg:fixed left-0 top-0 z-10 p-4 lg:p-8"
    >
      <motion.div
        className="w-48 h-48 lg:w-56 lg:h-56 rounded-full shadow-xl border border-gray-600 overflow-hidden"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={profileImage}
          alt={aboutData.imageAlt}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        className="mt-6 lg:mt-8 text-center text-gray-300 lg:text-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h2 className="text-xl lg:text-2xl font-bold mb-2 text-white">
          {aboutData.name}
        </h2>
        <p className="text-sm lg:text-base text-gray-400">{aboutData.title}</p>
        <p className="text-xs lg:text-sm mt-2 text-gray-500">
          {aboutData.skills}
        </p>
      </motion.div>

      <motion.div
        className="mt-8 lg:mt-12 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-600/40 p-4">
          <div className="flex space-x-6">
            {dockItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl text-gray-500 ${item.color} cursor-pointer`}
                whileHover={{
                  scale: 1.2,
                  y: -5,
                  transition: { duration: 0.08, ease: "easeOut" },
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeIn",
                }}
                whileTap={{ scale: 0.9, transition: { duration: 0.02 } }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>
        <motion.div
          className="mt-2 text-center absolute -bottom-8 left-0 right-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: hoveredItem ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-gray-300 text-sm">{hoveredItem || " "}</span>
        </motion.div>
      </motion.div>
    </div>
  );
};
