import { TodoCounter } from "./components/TodoCounter/TodoCounter.jsx";
import { TodoSerch } from "./components/TodoSerch/TodoSerch.jsx";
import { TodoList } from "./components/TodoList/TodoList.jsx";
import { TodoCreate } from "./components/TodoCreate/TodoCreateContainer/TodoCreate.jsx";

import { useEffect, useState } from "react";

function App() {
  //aujstar pantalla
  const [appHeightm, setAppHeight] = useState(0);

  useEffect(() => {
    const adjustHeight = () => setAppHeight(window.innerHeight);
    adjustHeight();
    window.addEventListener("resize", adjustHeight);
    return () => window.removeEventListener("resize", adjustHeight);
  }, []);

  //tareas
  const [taskList, setTaskList] = useState([
    { title: "hola como va esta tarde todo bien ??, si todo tranquilo sadadss adsasd", id: 24, completed: false },
    { title: "comó", id: 25, completed: false },
    { title: "estas", id: 26, completed: false },
    { title: "?", id: 27, completed: false },
    { title: "test", id: 28, completed: false },
    { title: "estas", id: 29, completed: false },
    { title: "?", id: 30, completed: false },
    { title: "test", id: 31, completed: false },
    { title: "test", id: 32, completed: false },
    { title: "estas", id: 33, completed: false },
    { title: "?", id: 34, completed: false },
    { title: "test", id: 35, completed: false },
  ]);
  //contador
  /*
    !!task.completed (!!) doble negacion para devolver un valor true o false .
  */
  // ESTADOS DERIVADOS se crean a partir de un usestate
  const tasksCompleted = taskList.filter((task) => !!task.completed).length;
  const tasksTotal = taskList.length;

  //input buscar
  const [searchValue, setSearchValue] = useState("");

  //fintrar
  const taskFilter = taskList.filter((task) => {
    const taskTitle = task.title.toLowerCase();
    const taskSearch = searchValue.toLowerCase();
    return taskTitle.includes(taskSearch);
  });

  //Completar tarea

  const taskCompleted = (id) => {
    const newTasks = [...taskList];
    const taskIndex = newTasks.findIndex((task) => task.id == id);
    newTasks[taskIndex].completed = true;
    setTaskList(newTasks);
  };

  const UndoTaskCompleted = (id) => {
    const newTasks = [...taskList];
    const taskIndex = newTasks.findIndex((task) => task.id == id);
    newTasks[taskIndex].completed = false;
    setTaskList(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = [...taskList];
    const taskIndex = newTasks.findIndex((task) => task.id == id);
    newTasks.splice(taskIndex, 1);
    setTaskList(newTasks);
  }

  return (
    <div className="app" style={{ height: `${appHeightm}px` }}>
      <TodoCreate />
      <TodoCounter tasksCompleted={tasksCompleted} tasksTotal={tasksTotal} />
      <TodoSerch searcValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList tasks={taskFilter} onComplete={taskCompleted} onUndo={UndoTaskCompleted} onDelete={deleteTask} />
    </div>
  );
}

export default App;
