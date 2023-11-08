import { TodoCreateMobile } from "./../TodoCreateMobile/TodoCreateMobile.jsx";
import { TodoCreateDesktop } from "./../TodoCreateDesktop/TodoCreateDesktop.jsx";

function TodoCreate({
  newTaskValue,
  setNewTaskValue,
  addTask,
  addTaskButtonState,
}) {
  return (
    <>
      <TodoCreateDesktop
        newTaskValue={newTaskValue}
        setNewTaskValue={setNewTaskValue}
        addTask={addTask}
        addTaskButtonState={addTaskButtonState}
      />
      <TodoCreateMobile
        newTaskValue={newTaskValue}
        setNewTaskValue={setNewTaskValue}
        addTask={addTask}
        addTaskButtonState={addTaskButtonState}
      />
    </>
  );
}

export { TodoCreate };
