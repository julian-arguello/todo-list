import { FaSearch } from "react-icons/fa";
import style from "./todoSerch.module.css";
import { useState } from "react";

function TodoSerch({searcValue, setSearchValue}) {
 
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
      </div>
    </div>
  );
}

export { TodoSerch };
