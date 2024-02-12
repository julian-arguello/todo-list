import style from "./todoCounter.module.css";
import { TodoContext } from "../../context/TodoContext";
import { useContext } from "react";

function TodoCounter() {
  const { tasksCompleted, tasksTotal, darkMode } = useContext(TodoContext);

  return (
    <h1 className={`${style.todoCounter} ${darkMode && style.darkMode}`}>
      You have completed
      {tasksTotal === tasksCompleted && tasksTotal > 0 ? (
        <span className={style.span}>all your tasks </span>
      ) : (
        <>
          <b>{tasksCompleted}</b> of <b>{tasksTotal}</b> tasks
        </>
      )}
    </h1>
  );
}

export { TodoCounter };
