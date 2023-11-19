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
      actionClose={() => setShowModalCreate(false)}
      titleButtonSuccess={"Create"}
      actionSuccess={() => addTask()}
      actionSuccessButtonDisabled={!addTaskButtonState}
    >
      <textarea
        className={style.textarea}
        value={newTaskValue}
        onChange={(e) => setNewTaskValue(e.target.value)}
      ></textarea>
    </Modal>
  );
}

export { TodoCreateMobile };
