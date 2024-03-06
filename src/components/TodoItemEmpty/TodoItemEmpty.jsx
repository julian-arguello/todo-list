import style from "./todoItemEmpty.module.css";
import styleBtn from "../TodoCreate/TodoCreateMobileButton/TodoCreateMobileButton.module.css";
import { BiRocket } from "react-icons/bi";
import { FaSearchMinus } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

function TodoItemEmpty({ filter = false }) {
  const { t } = useTranslation();

  const { darkMode } = useContext(TodoContext);

  function addClassAndRemove() {
    let createTaskButton = document.getElementById("createTaskButton");
    createTaskButton.classList.add(styleBtn.focus);

    setTimeout(function () {
      createTaskButton.classList.remove(styleBtn.focus);
    }, 2000);
  }

  return (
    <li className={darkMode ? style.darkMode : ""}>
      {!filter ? (
        <>
          <BiRocket className="icon iconInfo" />
          <p
            onClick={() => {
              document.getElementById("addTask").focus();
              addClassAndRemove();
            }}
          >
            {t("todoItemEmpty.createFirstTask")}
          </p>
        </>
      ) : (
        <>
          <FaSearchMinus className={"icon"} />
          <p>{t("todoItemEmpty.noSearchResults")}</p>
        </>
      )}
    </li>
  );
}

export { TodoItemEmpty };
