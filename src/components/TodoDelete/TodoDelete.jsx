import { useContext } from "react";
import { Modal } from "../Modal/Modal";
import { TodoContext } from "../../context/TodoContext";
import style from "./todoDelete.module.css";

function TodoDelete() {
  const { setShowModalDelete, deleteTask, taskDataDelete } =
    useContext(TodoContext);

  return (
    <Modal
      title={"Delete task"}
      titleButtonCancel={"Cancel"}
      actionClose={() => setShowModalDelete(false)}
      titleButtonSuccess={"Delete"}
      actionSuccess={() => deleteTask(taskDataDelete.id)}
      actionSuccessButtonDisabled={false}
    >
      <p className={style.p}>{taskDataDelete.title}</p>
    </Modal>
  );
}

export { TodoDelete };
