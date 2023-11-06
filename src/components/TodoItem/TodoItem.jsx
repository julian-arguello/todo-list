import { FaCheck, FaUndo, FaTimes } from "react-icons/fa";
import style from "./todoItem.module.css";

function TodoItem({ id, title, completed, onComplete, onUndo, onDelete }) {
  return (
    <li className={`${style.li} ${completed ? style.complete : ""}`}>
      {completed ? (
        <FaUndo
          className={"icon " + style.iconUndo}
          onClick={() => onUndo(id)}
        />
      ) : (
        <FaCheck
          className={"icon " + style.iconCheck}
          onClick={() => onComplete(id)}
        />
      )}
      <span className={style.contentItem}>{title}</span>
      <FaTimes
        className={"icon " + style.iconClose}
        onClick={() => onDelete(id)}
      />
    </li>
  );
}

export { TodoItem };
