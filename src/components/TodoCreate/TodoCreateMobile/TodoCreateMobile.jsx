import { FaPlus } from "react-icons/fa";
import style from "./TodoCreateMobile.module.css";
import { TodoModalCard } from "../../TodoModalCard/TodoModalCard";
import { useState, useContext } from "react";
import { TodoContext } from "../../../context/TodoContext";

function TodoCreateMobile() {
  const { newTaskValue, setNewTaskValue, addTask, addTaskButtonState } = useContext(TodoContext);
  const [showModal, SetShowModal] = useState(false);

  return (
    <>
      <button className={style.button} onClick={() => SetShowModal(true)}>
        <FaPlus />
      </button>

      {showModal && (
        <TodoModalCard
          newTaskValue={newTaskValue}
          setNewTaskValue={setNewTaskValue}
          addTask={addTask}
          addTaskButtonState={addTaskButtonState}
          SetShowModal={SetShowModal}
        />
      )}
    </>
  );
}
export { TodoCreateMobile };
