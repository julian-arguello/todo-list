import style from "./TodoCreateMobile.module.css";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { TodoContext } from "./../../../context/TodoContext.jsx";

import { Modal } from "../../Modal/Modal.jsx";

function TodoCreateMobile() {
  const { t } = useTranslation();
  const {
    newTaskValue,
    setNewTaskValue,
    addTask,
    setShowModalCreate,
    addTaskButtonState,
  } = useContext(TodoContext);

  return (
    <Modal
      title={t("todoCreate.title")}
      titleButtonCancel={t("cancel")}
      actionClose={() => setShowModalCreate(false)}
      titleButtonSuccess={t("create")}
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
