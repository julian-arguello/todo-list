import { ImSpinner2 } from "react-icons/im";
import style from './TodoItemLoading.module.css';

function TodoItemLoading() {

  return (
    <>
      <li className={style.skeleton}>
        <ImSpinner2 icon="spinner" className={"spinner icon iconInfo"} />
      </li>
      <li className={style.skeleton}>
        <ImSpinner2 icon="spinner" className={"spinner icon iconInfo"} />
      </li>
      <li className={style.skeleton}>
        <ImSpinner2 icon="spinner" className={"spinner icon iconInfo"} />
      </li>

    </>
  );
}

export { TodoItemLoading };
