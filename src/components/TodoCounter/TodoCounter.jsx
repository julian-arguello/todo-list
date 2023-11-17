import style from "./todoCounter.module.css";
import { TodoContext } from "../../context/TodoContext";
import { useContext } from "react";

function TodoCounter() {
  const { tasksCompleted, tasksTotal } = useContext(TodoContext);

  return (
    <h1 className={style.todoCounter}>
      You have completed
      {tasksTotal === tasksCompleted ? (
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
