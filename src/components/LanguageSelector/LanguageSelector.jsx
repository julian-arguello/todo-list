import style from "./LanguageSelector.module.css";
import { useContext, useEffect } from "react";
import { TodoContext } from "../../context/TodoContext";
import { useTranslation } from "react-i18next";

function LanguageSelector() {
  const { i18n } = useTranslation();
  const { lenguage, setLenguage, darkMode } = useContext(TodoContext);

  const toggleLanguage = () => {
    const newLanguage = lenguage === "en" ? "es" : "en";
    setLenguage(newLanguage);
  };

  useEffect(() => {
    i18n.changeLanguage(lenguage);
  }, [lenguage, i18n]);

  return (
    <div onClick={toggleLanguage}>
      {lenguage == "en" ? (
        <span 
        className={`icon ${style.icon} ${darkMode && style.darkMode}`} 
        onClick={() => setLenguage("es")}>
          Es
        </span>
      ) : (
        <span className={`icon ${style.icon} ${darkMode && style.darkMode}`} 
        onClick={() => setLenguage("en")}>
          En
        </span>
      )}
    </div>
  );
}

export { LanguageSelector };
