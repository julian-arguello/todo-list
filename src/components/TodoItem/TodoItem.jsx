import style from "./todoItem.module.css";
import { FaCheck, FaUndo, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../context/TodoContext";

function TodoItem({ id, title, completed }) {
  const { t } = useTranslation();
  const {
    taskCompleted,
    UndoTaskCompleted,
    setShowModalDelete,
    setTaskDataDelete,
    setShowModalEdit,
    setTaskDataEdit,
    darkMode,
  } = useContext(TodoContext);

  const [showItem, setShowItem] = useState(false);

  useEffect(() => {
    setShowItem(true);
  }, []);

  return (
    <li
      className={`${style.li} ${showItem && style.show} ${
        completed ? style.completed : ""
      } ${darkMode && style.darkMode}`}
    >
      {completed ? (
        <FaUndo
          className={"icon " + style.icUndoTaskCompleted}
          onClick={() => UndoTaskCompleted(id)}
        />
      ) : (
        <FaCheck
          className={"icon " + style.iconCheck}
          onClick={() => taskCompleted(id)}
        />
      )}
      <p className={style.contentItem}>
        <span
          className={style.span}
          title={t("todoItem.title")}
          onClick={() => {
            setTaskDataEdit({ id: id, title: title });
            setShowModalEdit(true);
          }}
        >
          {title}
        </span>
      </p>
      <FaTimes
        className={"icon " + style.iconClose}
        onClick={() => {
          setTaskDataDelete({ id: id, title: title });
          setShowModalDelete(true);
        }}
      />
    </li>
  );
}

export { TodoItem };
