import style from "./TodoModalCard.module.css";
import { FaTimes } from "react-icons/fa";

function TodoModalCard({
  newTaskValue,
  setNewTaskValue,
  addTask,
  SetShowModal,
  addTaskButtonState,
}) {
  return (
    <div className={style.cover}>
      <div className={style.card}>
        <h2 className={style.title}>Create new task</h2>
        <input
          type="text"
          className={style.input}
          placeholder="New task"
          value={newTaskValue}
          onChange={(e) => setNewTaskValue(e.target.value)}
        />
        <div className={style.buttonContainer}>
          <button
            className={`${style.buttonCancel} ${style.button}`}
            onClick={() => SetShowModal(false)}
          >
            Cancel
          </button>
          <button
            className={`${style.buttonAdd} ${style.button}`}
            onClick={() => {
              addTask();
              addTaskButtonState && SetShowModal(false);
            }}
            disabled={!addTaskButtonState}
          >
            Add
          </button>
        </div>
        <span className={style.buttonClose} onClick={() => SetShowModal(false)}>
          <FaTimes />
        </span>
      </div>
    </div>
  );
}

export { TodoModalCard };
