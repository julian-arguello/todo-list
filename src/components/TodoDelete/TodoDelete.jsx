import { useContext } from "react";
import { Modal } from "../Modal/Modal";
import { TodoContext } from "../../context/TodoContext";
import style from "./todoDelete.module.css";
import { useTranslation } from "react-i18next";

function TodoDelete() {
  const { t } = useTranslation();
  const { setShowModalDelete, deleteTask, taskDataDelete } =
    useContext(TodoContext);

  return (
    <Modal
      title={t('todoDelete.title')}
      titleButtonCancel={t('cancel')}
      actionClose={() => setShowModalDelete(false)}
      titleButtonSuccess={t('delete')}
      actionSuccess={() => deleteTask(taskDataDelete.id)}
      actionSuccessButtonDisabled={false}
    >
      <p className={style.p}>{taskDataDelete.title}</p>
    </Modal>
  );
}

export { TodoDelete };
