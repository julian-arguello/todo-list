import { useContext, useState } from "react";
import { Modal } from "../Modal/Modal";
import { TodoContext } from "../../context/TodoContext";
import style from "./todoEdit.module.css";
import { useTranslation } from "react-i18next";

function TodoEdit() {
  const { t } = useTranslation();
  const { setShowModalEdit, editTask, taskDataEdit, validate } =
    useContext(TodoContext);

  const [title, setTitle] = useState(taskDataEdit.title);

  return (
    <Modal
      title={t("todoEdit.title")}
      titleButtonCancel={t("cancel")}
      actionClose={() => setShowModalEdit(false)}
      titleButtonSuccess={t("save")}
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
