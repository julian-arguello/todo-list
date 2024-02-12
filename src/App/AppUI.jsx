import { TodoCounter } from "../components/TodoCounter/TodoCounter.jsx";
import { TodoSerch } from "../components/TodoSerch/TodoSerch.jsx";
import { TodoList } from "../components/TodoList/TodoList.jsx";
import { TodoCreateDesktop } from "../components/TodoCreate/TodoCreateDesktop/TodoCreateDesktop.jsx";
import { TodoCreateMobileButton } from "../components/TodoCreate/TodoCreateMobileButton/TodoCreateMobileButton.jsx";
import { TodoCreateMobile } from "../components/TodoCreate/TodoCreateMobile/TodoCreateMobile.jsx";
import { TodoDelete } from "../components//TodoDelete/TodoDelete.jsx";
import { TodoEdit } from "../components/TodoEdit/TodoEdit.jsx";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext.jsx";

import { Nav } from "../components/Nav/Nav.jsx";

import { Notification } from "../components/Notification/Notification.jsx";

function AppUI({ appHeight }) {
  const { showModalCreate, showModalDelete, showModalEdit, notification } =
    useContext(TodoContext);

  console.log(appHeight);

  return (
    <div className="app" style={{ height: `${appHeight}px` }}>
      <Nav />
      {notification.show && <Notification />}
      <TodoCreateDesktop />
      <TodoCounter />
      <TodoSerch />
      <TodoList />
      <TodoCreateMobileButton />
      {showModalCreate && <TodoCreateMobile />}
      {showModalDelete && <TodoDelete />}
      {showModalEdit && <TodoEdit />}
    </div>
  );
}

export { AppUI };
