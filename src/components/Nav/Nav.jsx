import style from "./Nav.module.css";
import { DarkMode } from "../DarkMode/DarkMode";
import { LuGithub } from "react-icons/lu";
import { RiLinkedinLine } from "react-icons/ri";
import { LanguageSelector } from "../LanguageSelector/LanguageSelector";
import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

function Nav() {
  const { darkMode } = useContext(TodoContext);

  return (
    <nav className={style.container}>
      <ul className={style.info}>
        <li className={style.li}>
          <a
            className={`${style.a} ${darkMode && style.darkMode}`}
            href="https://github.com/julian-arguello"
            target="_blank"
            rel="noreferrer"
          >
            <LuGithub className={`icon iconInfo ${style.icon}`} />
          </a>
        </li>

        <li className={style.li}>
          <a
            className={`${style.a} ${darkMode && style.darkMode}`}
            href="https://www.linkedin.com/in/juli%C3%A1n-andr%C3%A9s-arg%C3%BCello-92555a161/"
            target="_blank"
            rel="noreferrer"
          >
            <RiLinkedinLine className={`icon iconInfo ${style.icon}`} />
          </a>
        </li>
      </ul>

      <div className={style.action}>
        <LanguageSelector />
        <DarkMode />
      </div>
    </nav>
  );
}

export { Nav };
