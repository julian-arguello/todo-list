import {  BiRocket } from "react-icons/bi";

function TodoItemEmpty() {
  return (
    <li>
      <BiRocket className={"icon iconInfo"} />
      <p>Create your first task</p>
    </li>
  );
}

export { TodoItemEmpty };
