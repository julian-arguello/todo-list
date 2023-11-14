import { TodoCounter } from "../components/TodoCounter/TodoCounter.jsx";
import { TodoSerch } from "../components/TodoSerch/TodoSerch.jsx";
import { TodoList } from "../components/TodoList/TodoList.jsx";
import { TodoCreateDesktop } from "../components/TodoCreate/TodoCreateDesktop/TodoCreateDesktop.jsx";
import { TodoCreateMobileButton } from "../components/TodoCreate/TodoCreateMobileButton/TodoCreateMobileButton.jsx"
import { TodoCreateMobile } from "../components/TodoCreate/TodoCreateMobile/TodoCreateMobile.jsx";
import { TodoDelete } from "../components//TodoDelete/TodoDelete.jsx";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext.jsx";

function AppUI({appHeight}) {

  const { showModalCreate, showModalDelete } = useContext(TodoContext);

  return (
    <div className="app" style={{ height: `${appHeight}px` }}>

      <TodoCreateDesktop />
      <TodoCounter />
      <TodoSerch />
      <TodoList />
      <TodoCreateMobileButton />
      { showModalCreate && <TodoCreateMobile /> }
      { showModalDelete && <TodoDelete /> }
    </div>
  );
}

export { AppUI };
