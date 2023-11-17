import { FaSearch, FaTimes } from "react-icons/fa";
import style from "./todoSerch.module.css";
import { TodoContext } from "../../context/TodoContext";
import { useContext } from "react";

function TodoSerch() {
  const { searcValue, setSearchValue } = useContext(TodoContext);

  const searchCleaner = () => {
    setSearchValue("");
    document.getElementById("search").value = "";
  };

  return (
    <div className={style.searchContainer}>
      <div className={style.inputContainer}>
        <label htmlFor="search" className={"icon " + style.iconSerch}>
          <FaSearch />
        </label>
        <input
          className={style.input}
          onChange={(e) => setSearchValue(e.target.value)}
          value={searcValue}
          type="text"
          id="search"
          name="search"
          placeholder="Search task"
        />
        <FaTimes
          className={"icon " + style.iconClose}
          onClick={() => searchCleaner()}
        />
      </div>
    </div>
  );
}

export { TodoSerch };
