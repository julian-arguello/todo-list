import style from "./todoDelete.module.css";
import { Modal } from "../Modal/Modal";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

function TodoDelete() {
  const { t } = useTranslation();
  const { setShowModalDelete, deleteTask, taskDataDelete } =
    useContext(TodoContext);

  return (
    <Modal
      title={t("todoDelete.title")}
      titleButtonCancel={t("cancel")}
      actionClose={() => setShowModalDelete(false)}
      titleButtonSuccess={t("delete")}
      actionSuccess={() => deleteTask(taskDataDelete.id)}
      actionSuccessButtonDisabled={false}
    >
      <p className={style.p}>{taskDataDelete.title}</p>
    </Modal>
  );
}

export { TodoDelete };
