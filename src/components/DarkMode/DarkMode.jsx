import { useContext, useEffect } from "react";
import style from "./DarkMode.module.css";
import { LuSun } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";
import { TodoContext } from "../../context/TodoContext";

function DarkMode() {
  const { darkMode, setDarkMode } = useContext(TodoContext);

  const switchState = () => {
    darkMode ? setDarkMode(false) : setDarkMode(true);
  };

  useEffect(() => {
    const body = document.body;
    darkMode
      ? body.classList.add("bodyDark")
      : body.classList.remove("bodyDark");
  }, [darkMode]);

  return (
    <div className={style.container} onClick={() => switchState()}>
      {darkMode ? (
        <LuSun className={`icon iconInfo ${style.icon} ${style.sun}`} />
      ) : (
        <LuMoon className={`icon iconInfo ${style.icon}`} />
      )}
    </div>
  );
}

export { DarkMode };
