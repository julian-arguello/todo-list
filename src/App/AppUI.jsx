import { TodoCounter } from "../components/TodoCounter/TodoCounter.jsx";
import { TodoSerch } from "../components/TodoSerch/TodoSerch.jsx";
import { TodoList } from "../components/TodoList/TodoList.jsx";
import { TodoCreate } from "../components/TodoCreate/TodoCreateContainer/TodoCreateContainer.jsx";

function AppUI({appHeight}) {
  return (
    <div className="app" style={{ height: `${appHeight}px` }}>

      <TodoCreate />
      <TodoCounter />
      <TodoSerch />
      <TodoList />
    </div>
  );
}

export { AppUI };
