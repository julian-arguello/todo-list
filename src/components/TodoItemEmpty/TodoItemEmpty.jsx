import { BiRocket } from "react-icons/bi";
import { FaSearchMinus } from "react-icons/fa";

function TodoItemEmpty(filter = false) {
  return (
    <li>
      {!filter ? 
      <>
        <BiRocket className={"icon iconInfo"} />
        <p>Create your first task</p>
      </>
      :
      <>
      <FaSearchMinus  className={"icon"} />
      <p>Sin resultados de busqueda</p>
      </>

      }
    </li>
  );
}

export { TodoItemEmpty };
