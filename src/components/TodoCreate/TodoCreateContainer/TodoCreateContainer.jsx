import { TodoCreateMobile } from "../TodoCreateMobile/TodoCreateMobile.jsx";
import { TodoCreateDesktop } from "../TodoCreateDesktop/TodoCreateDesktop.jsx";

function TodoCreate() {
  return (
    <>
      <TodoCreateDesktop />
      <TodoCreateMobile />
    </>
  );
}

export { TodoCreate };
