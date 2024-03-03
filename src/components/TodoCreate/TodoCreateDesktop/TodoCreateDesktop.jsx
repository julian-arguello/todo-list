import style from "./TodoCreateDesktop.module.css";
import todoSvg from "./../../../assets/svg/todoSvg.svg";
import { useContext } from "react";
import { TodoContext } from "../../../context/TodoContext";
import { useTranslation } from "react-i18next";

function TodoCreateDesktop() {
  const { t } = useTranslation();
  const {
    newTaskValue,
    setNewTaskValue,
    addTask,
    addTaskButtonState,
    darkMode,
  } = useContext(TodoContext);

  const actionClick = () => {
    addTaskButtonState ? addTask() : document.getElementById("addTask").focus();
  };

  return (
    <div
      className={`${style.container} ${darkMode && style.container_darkMode}`}
    >
      <h2 className={`${style.title} ${darkMode && style.title_darkMode}`}>
        {t("todoCreate.title")}
      </h2>
      <input
        id="addTask"
        className={style.input}
        type="text"
        placeholder={t("todoCreate.placeholder")}
        value={newTaskValue}
        onChange={(e) => setNewTaskValue(e.target.value)}
        onKeyUp={(e) => {
          e.key === "Enter" && addTaskButtonState && addTask();
        }}
      />
      <button
        className={`${style.button} ${!addTaskButtonState && style.disabled}`}
        onClick={actionClick}
      >
        {t("todoCreate.button")}
      </button>
      <div className={style.todoContainerSvg}>
        <img className={style.todoSvg} src={todoSvg} alt="todoSvg" />
      </div>
    </div>
  );
}

export { TodoCreateDesktop };
