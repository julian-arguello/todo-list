import style from "./TodoItemLoading.module.css";

function TodoItemLoading() {
  return (
    <>
      <li className={style.skeleton}></li>
      <li className={style.skeleton}></li>
      <li className={style.skeleton}></li>
    </>
  );
}

export { TodoItemLoading };
