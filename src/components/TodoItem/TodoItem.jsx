import { FaCheck, FaUndo, FaTimes } from "react-icons/fa";
import style from "./todoItem.module.css";
import { TodoContext } from "../../context/TodoContext";
import { useContext, useEffect, useState } from "react";

function TodoItem({ id, title, completed }) {
  const {
    taskCompleted,
    UndoTaskCompleted,
    setShowModalDelete,
    setTaskDataDelete,
    setShowModalEdit,
    setTaskDataEdit,
  } = useContext(TodoContext);

  const [showItem, setShowItem] = useState(false)

  useEffect(() => {
    setShowItem(true)
  }, [])

  return (
    <li className={`${style.li} ${showItem && style.show} ${completed ? style.completed : ""}`}>
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
          title="press the text to edit"
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
        // onClick={() => deleteTask(id)}
        onClick={() => {
          setTaskDataDelete({ id: id, title: title });
          setShowModalDelete(true);
        }}
      />
    </li>
  );
}

export { TodoItem };
