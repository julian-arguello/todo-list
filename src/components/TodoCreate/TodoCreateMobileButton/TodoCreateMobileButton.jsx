import style from "./TodoCreateMobileButton.module.css";
import { FaPlus } from "react-icons/fa";
import { useContext } from "react";
import { TodoContext } from "../../../context/TodoContext";

function TodoCreateMobileButton() {
  const { setShowModalCreate } = useContext(TodoContext);

  return (
    <button
      id="createTaskButton"
      className={style.button}
      onClick={() => setShowModalCreate(true)}
    >
      <FaPlus />
    </button>
  );
}
export { TodoCreateMobileButton };
