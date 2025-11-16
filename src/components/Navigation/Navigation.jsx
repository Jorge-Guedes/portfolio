import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { useLanguageData } from "../hooks/useLanguageData";

export const Navigation = () => {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("experience");
  const { data: navigationData, loading } = useLanguageData("navigation");

  const navItems = navigationData
    ? [
        { id: "about", label: navigationData.about },
        { id: "experience", label: navigationData.experience },
        { id: "education", label: navigationData.education },
        { id: "certifications", label: navigationData.certifications },
        { id: "skills", label: navigationData.skills },
        { id: "projects", label: navigationData.projects },
        { id: "contact", label: navigationData.contact },
      ]
    : [];

  const desktopNavItems = navItems.filter((item) => item.id !== "about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      let currentSection = "experience";

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            currentSection = section.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  if (loading || !navigationData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-gray-800/80 backdrop-blur-sm border border-gray-600/40"
        onClick={() => setIsOpen(!isOpen)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
          <motion.span
            className="w-full h-0.5 bg-gray-300 block"
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
          />
          <motion.span
            className="w-full h-0.5 bg-gray-300 block"
            animate={{ opacity: isOpen ? 0 : 1 }}
          />
          <motion.span
            className="w-full h-0.5 bg-gray-300 block"
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
          />
        </div>
      </motion.button>

      <motion.div className="hidden lg:flex fixed top-8 right-8 z-50">
        <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-600/40 p-3">
          <div className="flex space-x-2">
            <button
              className="cursor-pointer"
              onClick={() => changeLanguage("es")}
            >
              🇪🇸
            </button>
            <button
              className="cursor-pointer"
              onClick={() => changeLanguage("en")}
            >
              🇺🇸
            </button>
          </div>
        </div>
      </motion.div>

      {isOpen && (
        <motion.div
          className="lg:hidden fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-sm overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-col items-start justify-start min-h-screen py-20 space-y-8 pl-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                className={`text-2xl font-semibold transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-green-500"
                    : "text-gray-300 hover:text-green-500"
                }`}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
              </motion.button>
            ))}
            <div className="flex space-x-4 mt-8 pb-8">
              <button className="text-2xl" onClick={() => changeLanguage("es")}>
                🇪🇸
              </button>
              <button className="text-2xl" onClick={() => changeLanguage("en")}>
                🇺🇸
              </button>
            </div>
          </div>
        </motion.div>
      )}

      <motion.nav
        className="hidden lg:flex fixed top-8 left-8 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-600/40 p-4">
          <ul className="flex space-x-6">
            {desktopNavItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-all duration-300 relative group cursor-pointer ${
                    activeSection === item.id
                      ? "text-green-500"
                      : "text-gray-300 hover:text-green-500"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                      activeSection === item.id
                        ? "w-full bg-green-500"
                        : "w-0 bg-green-500 group-hover:w-full"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>
    </>
  );
};
