import { FaPlus } from "react-icons/fa";
import style from "./TodoCreateMobileButton.module.css";
import { useContext } from "react";
import { TodoContext } from "../../../context/TodoContext";

function TodoCreateMobileButton() {
  const { setShowModalCreate } = useContext(TodoContext);

  return (
    <button className={style.button} onClick={() => setShowModalCreate(true)}>
      <FaPlus />
    </button>
  );
}
export { TodoCreateMobileButton };
