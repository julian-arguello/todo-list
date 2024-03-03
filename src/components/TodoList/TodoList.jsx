import { TodoItem } from "../TodoItem/TodoItem.jsx";
import { TodoItemError } from "../TodoItemError/TodoItemError.jsx";
import { TodoItemLoading } from "../TodoItemLoading/TodoItemLoading.jsx";
import { TodoItemEmpty } from "../TodoItemEmpty/TodoItemEmpty.jsx";
import style from "./todoList.module.css";
import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext.jsx";

function TodoList() {
  const {
    taskList,
    taskFilter,
    loading,
    error,
    searchValue,
    taskFilterStatus,
  } = useContext(TodoContext);

  return (
    <ul className={style.todoList}>
      {error && taskList.length === 0 && <TodoItemError />}

      {loading && <TodoItemLoading />}

      {!loading && !error && taskList.length === 0 && <TodoItemEmpty />}

      {!loading &&
        !error &&
        taskFilter.length === 0 &&
        (searchValue != "" || taskFilterStatus !== "") && (
          <TodoItemEmpty filter={true} />
        )}

      {!loading && taskFilter.length >= 1 && (
        <>
          {taskFilter.reverse().map(({ title, id, completed }) => (
            <TodoItem key={id} id={id} title={title} completed={completed} />
          ))}
        </>
      )}
    </ul>
  );
}

export { TodoList };
