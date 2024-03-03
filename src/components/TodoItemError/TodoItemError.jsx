import { BiErrorAlt } from "react-icons/bi";
import style from "./TodoItemError.module.css";
import { useTranslation } from "react-i18next";

function TodoItemError() {
  const { t } = useTranslation();
  return (
    <li className={style.error}>
      <BiErrorAlt className={" icon iconInfo"} />
      <p>{t('todoItemError.title')}</p>
    </li>
  );
}

export { TodoItemError };
