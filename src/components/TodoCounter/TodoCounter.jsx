import style from "./todoCounter.module.css";

function TodoCounter({ tasksCompleted, tasksTotal }) {
  return (
    <h1 className={style.todoCounter}>
      You have completed
      <b>{tasksCompleted}</b> of <b>{tasksTotal}</b> tasks
    </h1>
  );
}

export { TodoCounter };
