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
  const [taskList, setTaskList] = useState([]);

  const saveTask = (newTasks) => {
    setTaskList(newTasks);
    localStorage.setItem("taskList_v1", JSON.stringify(newTasks));
  };

  useEffect(() => {
    let taskList_v1 = localStorage.getItem("taskList_v1");
    setTaskList(taskList_v1 ? JSON.parse(taskList_v1) : []);
  }, []);
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
    saveTask(newTasks);
  };
  //Marcar como incompleta
  const UndoTaskCompleted = (id) => {
    const newTasks = [...taskList];
    const taskIndex = newTasks.findIndex((task) => task.id == id);
    newTasks[taskIndex].completed = false;
    saveTask(newTasks);
  };
  //Eliminar tarea
  const deleteTask = (id) => {
    const newTasks = [...taskList];
    const taskIndex = newTasks.findIndex((task) => task.id == id);
    newTasks.splice(taskIndex, 1);
    saveTask(newTasks);
  };

  //Nueva tarea
  const [newTaskValue, setNewTaskValue] = useState("");
  const validate = () => newTaskValue != "" && newTaskValue.length < 70;
  const addTaskButtonState = validate();
  const addTask = () => {
    if (!validate()) return;
    const newTasks = [...taskList];
    let newId = 1;
    newTasks.length > 0 &&
      (newId = parseInt(newTasks[newTasks.length - 1].id) + 1);
    const newTask = {
      id: newId,
      title: newTaskValue,
      completed: false,
    };
    newTasks.push(newTask);
    saveTask(newTasks);
    setNewTaskValue("");
  };

  return (
    <div className="app" style={{ height: `${appHeightm}px` }}>
      <TodoCreate
        newTaskValue={newTaskValue}
        setNewTaskValue={setNewTaskValue}
        addTask={addTask}
        addTaskButtonState={addTaskButtonState}
      />
      <TodoCounter tasksCompleted={tasksCompleted} tasksTotal={tasksTotal} />
      <TodoSerch searcValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList
        tasks={taskFilter}
        onComplete={taskCompleted}
        onUndo={UndoTaskCompleted}
        onDelete={deleteTask}
      />
    </div>
  );
}

export default App;
