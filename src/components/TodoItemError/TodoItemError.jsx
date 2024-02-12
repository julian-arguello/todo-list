import { BiErrorAlt } from "react-icons/bi";
import style from "./TodoItemError.module.css";

function TodoItemError() {
  return (
    <li className={style.error}>
      <BiErrorAlt className={" icon iconInfo"} />
      <p>¡Error loading tasks!</p>
    </li>
  );
}

export { TodoItemError };
