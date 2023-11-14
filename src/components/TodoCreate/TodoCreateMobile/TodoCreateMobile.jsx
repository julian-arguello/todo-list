import { useContext } from "react";
import { TodoContext } from "./../../../context/TodoContext.jsx";
import style from "./TodoCreateMobile.module.css";

import { Modal } from "../../Modal/Modal.jsx";

function TodoCreateMobile() {
  const {
    newTaskValue,
    setNewTaskValue,
    addTask,
    setShowModalCreate,
    addTaskButtonState,
  } = useContext(TodoContext);

  return (
    <Modal
      title={"Create new task"}
      titleButtonCancel={"Cancel"}
      actionCancel={() => setShowModalCreate(false)}
      titleButtonSuccess={"Add"}
      actionSuccess={() => {addTask(); setShowModalCreate(false) }}
      actionSuccessButtonDisabled={!addTaskButtonState}
    >
      <input
        type="text"
        className={style.input}
        placeholder="New task"
        value={newTaskValue}
        onChange={(e) => setNewTaskValue(e.target.value)}
      />
    </Modal>
  );
}

export { TodoCreateMobile };
