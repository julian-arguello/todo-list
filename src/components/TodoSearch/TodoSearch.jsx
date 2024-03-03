import { FaSearch, FaTimes } from "react-icons/fa";
import style from "./todoSearch.module.css";
import { TodoContext } from "../../context/TodoContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

function TodoSearch() {
  const { t } = useTranslation();
  const {
    searchValue,
    setSearchValue,
    tasksTotal,
    setTaskFilterStatus,
    taskFilterStatus,
  } = useContext(TodoContext);

  return (
    <div className={style.searchContainer}>
      <div
        className={`${style.inputContainer} ${
          tasksTotal == 0 && style.disable
        }`}
      >
        <label htmlFor="search" className={"icon " + style.iconSearch}>
          <FaSearch />
        </label>
        <input
          className={style.input}
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          type="text"
          id="search"
          name="search"
          placeholder={t('todoSearch.placeholder')}
          disabled={tasksTotal === 0}
        />
        <FaTimes
          className={"icon " + style.iconClose}
          onClick={() => setSearchValue("")}
        />
      </div>
      <ul
        className={`${style.filterStatus} ${tasksTotal == 0 && style.disable}`}
      >
        <li
          className={taskFilterStatus === "" ? style.active : ""}
          onClick={() => setTaskFilterStatus("")}
        >
          {t('todoSearch.all')}
        </li>

        <li
          className={taskFilterStatus === true ? style.active : ""}
          onClick={() => setTaskFilterStatus(true)}
        >
          {t('todoSearch.solved')}
        </li>

        <li
          className={taskFilterStatus === false ? style.active : ""}
          onClick={() => setTaskFilterStatus(false)}
        >
          {t('todoSearch.pending')}
        </li>
      </ul>
    </div>
  );
}

export { TodoSearch };