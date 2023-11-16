import { useContext, useState } from "react";
import { Modal } from "../Modal/Modal";
import { TodoContext } from "../../context/TodoContext";
import style from "./todoEdit.module.css";

function TodoEdit() {
  const { setShowModalEdit, editTask, taskDataEdit, validate } =
    useContext(TodoContext);

  const [title, setTitle] = useState(taskDataEdit.title);

  return (
    <Modal
      title={"Edit task"}
      titleButtonCancel={"Cancel"}
      actionClose={() => setShowModalEdit(false)}
      titleButtonSuccess={"Edit"}
      actionSuccess={() => editTask(taskDataEdit.id, title.trim())}
      actionSuccessButtonDisabled={!validate(title)}
    >
      <textarea
        className={style.textarea}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></textarea>
    </Modal>
  );
}

export { TodoEdit };
