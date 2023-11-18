import style from "./TodoCreateDesktop.module.css";
import todoSvg from "./../../../assets/svg/todoSvg.svg";
import { useContext } from "react";
import { TodoContext } from "../../../context/TodoContext";

function TodoCreateDesktop() {
  const { newTaskValue, setNewTaskValue, addTask, addTaskButtonState } =
    useContext(TodoContext);

  const actionClick = () => {
    addTaskButtonState ? addTask() : document.getElementById("addTask").focus();
  };

  return (
    <div className={style.container}>
      <h2 className={style.title}>Create new task</h2>
      <input
        id="addTask"
        className={style.input}
        type="text"
        placeholder="New task"
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
        Add task
      </button>
      <div className={style.todoContainerSvg}>
        <img className={style.todoSvg} src={todoSvg} alt="todoSvg" />
      </div>
    </div>
  );
}

export { TodoCreateDesktop };
