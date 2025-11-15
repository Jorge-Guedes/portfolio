import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiReact,
  SiVuedotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiPython,
  SiFastapi,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiGit,
  SiDocker,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { useLanguageData } from "../hooks/useLanguageData";

const skillIcons = {
  React: SiReact,
  Vue: SiVuedotjs,
  "React Native": TbBrandReactNative,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  HTML5: SiHtml5,
  CSS3: SiCss3,
  Python: SiPython,
  FastAPI: SiFastapi,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  Java: FaJava,
  PostgreSQL: SiPostgresql,
  Git: SiGit,
  Docker: SiDocker,
};

const skillColors = {
  React: "#61DAFB",
  Vue: "#4FC08D",
  "React Native": "#61DAFB",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  "Tailwind CSS": "#06B6D4",
  HTML5: "#E34F26",
  CSS3: "#1572B6",
  Python: "#3776AB",
  FastAPI: "#009688",
  "Node.js": "#339933",
  Express: "#000000",
  Java: "#ED8B00",
  PostgreSQL: "#336791",
  Git: "#F05032",
  Docker: "#2496ED",
};

const SkillBar = ({ skill, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const IconComponent = skillIcons[skill.name];
  const skillColor = skillColors[skill.name] || "#22c55e";

  return (
    <div ref={ref} className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          {IconComponent && (
            <IconComponent className="text-xl" style={{ color: skillColor }} />
          )}
          <span className="text-gray-300 font-medium">{skill.name}</span>
        </div>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3">
        <motion.div
          className="h-3 rounded-full"
          style={{
            backgroundColor: skillColor,
            background: `linear-gradient(to right, ${skillColor}, ${skillColor})`,
          }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
          transition={{
            duration: 1.5,
            delay: index * 0.1,
            type: "spring",
            stiffness: 50,
          }}
        />
      </div>
    </div>
  );
};

export const Skills = () => {
  const { data: skillsData, loading } = useLanguageData("skills");

  if (loading || !skillsData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div
      id="skills"
      className="min-h-screen flex items-center justify-center p-4 lg:p-8"
    >
      <motion.div
        className="w-full max-w-4xl p-6 lg:p-8"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "0px", once: true }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <h2 className="text-2xl lg:text-3xl font-bold text-white text-center mb-12">
          {skillsData.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              className="bg-gray-800/40 p-6 rounded-xl border border-gray-600/40"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center border-b border-gray-600 pb-3">
                {category.name}
              </h3>
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skill.name} skill={skill} index={skillIndex} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
