import { TodoItem } from "../TodoItem/TodoItem.jsx";
import style from "./todoList.module.css";

function TodoList({ tasks, onComplete, onUndo, onDelete }) {
  return (
    <ul className={style.todoList}>
      {tasks.map(({ title, id, completed }) => (
        <TodoItem
          key={id}
          id={id}
          title={title}
          completed={completed}
          onComplete={onComplete}
          onUndo={onUndo}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export { TodoList };
