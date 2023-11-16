import style from "./TodoCreateDesktop.module.css";
import todoSvg from "./../../../assets/svg/todoSvg.svg";
import { useContext } from "react";
import { TodoContext } from "../../../context/TodoContext";

function TodoCreateDesktop() {
  const { newTaskValue, setNewTaskValue, addTask, addTaskButtonState } = useContext(TodoContext);

  return (
    <div className={style.container}>
      <h2 className={style.title}>Create new task</h2>
      <input
        className={style.input}
        type="text"
        placeholder="New task"
        value={newTaskValue}
        onChange={(e) => setNewTaskValue(e.target.value)}
        onKeyUp={(e) => {(e.key === "Enter" && addTaskButtonState) && addTask()}}
      />
      <button
        className={style.button}
        onClick={() => addTask()}
        disabled={!addTaskButtonState}
      >
        Add task
      </button>
      <div className={style.todoContainerSvg}>
        <img className={style.todoSvg} src={todoSvg} alt="todoSvg" />
      </div>
    </div>
  );
}

export { TodoCreateDesktop };
