import { FaSearch, FaTimes } from "react-icons/fa";
import style from "./todoSerch.module.css";
import { TodoContext } from "../../context/TodoContext";
import { useContext } from "react";

function TodoSerch() {
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
        <label htmlFor="search" className={"icon " + style.iconSerch}>
          <FaSearch />
        </label>
        <input
          className={style.input}
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          type="text"
          id="search"
          name="search"
          placeholder="Search task"
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
          All
        </li>

        <li
          className={taskFilterStatus === true ? style.active : ""}
          onClick={() => setTaskFilterStatus(true)}
        >
          Solved
        </li>

        <li
          className={taskFilterStatus === false ? style.active : ""}
          onClick={() => setTaskFilterStatus(false)}
        >
          Pending
        </li>
      </ul>
    </div>
  );
}

export { TodoSerch };
