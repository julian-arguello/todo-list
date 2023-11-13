import { FaCheck, FaUndo, FaTimes } from "react-icons/fa";
import style from "./todoItem.module.css";
import { TodoContext } from "../../context/TodoContext";
import { useContext } from "react";

function TodoItem({ id, title, completed }) {

  const { taskCompleted, UndoTaskCompleted, deleteTask } = useContext(TodoContext);

  return (
    <li className={`${style.li} ${completed ? style.completed : ""}`}>
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
      <p className={style.contentItem}>{title + ' ' + id}</p>
      <FaTimes
        className={"icon " + style.iconClose}
        onClick={() => deleteTask(id)}
      />
    </li>
  );
}

export { TodoItem };
