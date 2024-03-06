import style from "./todoCounter.module.css";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

function TodoCounter() {
  const { t } = useTranslation();
  const { tasksCompleted, tasksTotal, darkMode } = useContext(TodoContext);

  const isAllTasksCompleted = tasksTotal === tasksCompleted && tasksTotal > 0;
  const completedTasksMessage = isAllTasksCompleted
    ? t("todoCounter.completed")
    : tasksTotal !== 1
    ? t("todoCounter.someTasks", {
        completedCount: tasksCompleted,
        totalCount: tasksTotal,
      })
    : t("todoCounter.oneTask", {
        completedCount: tasksCompleted,
      });

  return (
    <h1 className={`${style.todoCounter} ${darkMode && style.darkMode}`}>
      {isAllTasksCompleted ? (
        <>
          <span>{t("todoCounter.completed")}</span>
          <span className={style.span}> {t("todoCounter.allTasks")}</span>
        </>
      ) : (
        <span dangerouslySetInnerHTML={{ __html: completedTasksMessage }} />
      )}
    </h1>
  );
}

export { TodoCounter };
