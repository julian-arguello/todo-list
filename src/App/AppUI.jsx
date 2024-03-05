import { TodoCounter } from "../components/TodoCounter/TodoCounter.jsx";
import { TodoSearch } from "../components/TodoSearch/TodoSearch.jsx";
import { TodoList } from "../components/TodoList/TodoList.jsx";
import { TodoCreateDesktop } from "../components/TodoCreate/TodoCreateDesktop/TodoCreateDesktop.jsx";
import { TodoCreateMobileButton } from "../components/TodoCreate/TodoCreateMobileButton/TodoCreateMobileButton.jsx";
import { TodoCreateMobile } from "../components/TodoCreate/TodoCreateMobile/TodoCreateMobile.jsx";
import { TodoDelete } from "../components//TodoDelete/TodoDelete.jsx";
import { TodoEdit } from "../components/TodoEdit/TodoEdit.jsx";
import { Nav } from "../components/Nav/Nav.jsx";
import { Notification } from "../components/Notification/Notification.jsx";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext.jsx";

function AppUI({ appHeight }) {
  const { showModalCreate, showModalDelete, showModalEdit, notification } =
    useContext(TodoContext);
    
  return (
    <div className="app" style={{ height: `${appHeight}px` }}>
      <Nav />
      {notification.show && <Notification />}
      <TodoCreateDesktop />
      <TodoCounter />
      <TodoSearch />
      <TodoList />
      <TodoCreateMobileButton />
      {showModalCreate && <TodoCreateMobile />}
      {showModalDelete && <TodoDelete />}
      {showModalEdit && <TodoEdit />}
    </div>
  );
}

export { AppUI };
