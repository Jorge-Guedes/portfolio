import { useLanguage } from "../../contexts/LanguageContext";
import { useState, useEffect } from "react";

export const useLanguageData = (fileName) => {
  const { language } = useLanguage();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);

        const module = await import(`../../data/${language}/${fileName}.json`);
        setData(module.default);
      } catch (error) {
        console.error(`Error loading ${fileName} for ${language}:`, error);

        try {
          const fallbackModule = await import(`../../data/es/${fileName}.json`);
          setData(fallbackModule.default);
        } catch (fallbackError) {
          console.error(`Fallback also failed for ${fileName}:`, fallbackError);
        }
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [language, fileName]);

  return { data, loading };
};
