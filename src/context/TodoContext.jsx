import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

const TodoContext = createContext();

function TodoProvider({ children }) {
  //Modals
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [taskDataDelete, setTaskDataDelete] = useState({});
  const [taskDataEdit, setTaskDataEdit] = useState({});

  //tareas
  //Custom Hook
  const {
    item: taskList,
    saveItem: setTaskList,
    loading,
    error,
  } = useLocalStorage("taskList_v1", []);

  //contador
  // ESTADOS DERIVADOS se crean a partir de un usestate
  const tasksCompleted = taskList.filter((task) => !!task.completed).length; //(!!) doble negacion para devolver un valor true o false
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
    const taskIndex = newTasks.findIndex((task) => task.id === id);
    newTasks[taskIndex].completed = true;
    setTaskList(newTasks);
  };
  //Marcar como incompleta
  const UndoTaskCompleted = (id) => {
    const newTasks = [...taskList];
    const taskIndex = newTasks.findIndex((task) => task.id === id);
    newTasks[taskIndex].completed = false;
    setTaskList(newTasks);
  };
  //Eliminar tarea
  const deleteTask = (id) => {
    const newTasks = [...taskList];
    const taskIndex = newTasks.findIndex((task) => task.id === id);
    newTasks.splice(taskIndex, 1);
    setTaskList(newTasks);
  };

  //validate
  const validate = (title) => title !== "" && title.trim().length < 70 && title.trim().length > 0;

  //Nueva tarea
  const [newTaskValue, setNewTaskValue] = useState("");

  const addTaskButtonState = validate(newTaskValue);

  const addTask = () => {
    if (!validate(newTaskValue)) return;
    const newTasks = [...taskList];
    let newId = 1;
    newTasks.length > 0 &&
      (newId = parseInt(newTasks[newTasks.length - 1].id) + 1);
    const newTask = {
      id: newId,
      title: newTaskValue.trim(),
      completed: false,
    };
    newTasks.push(newTask);
    setTaskList(newTasks);
    setNewTaskValue("");
  };

  //Editar Tarea
  const editTask = (id, title) => {
    if (!validate(title)) return;
    const newTasks = [...taskList];
    const taskIndex = newTasks.findIndex((task) => task.id === id);
    newTasks[taskIndex].title = title;
    setTaskList(newTasks);
  };

  return (
    <TodoContext.Provider
      value={{
        taskList,
        newTaskValue,
        setNewTaskValue,
        addTask,
        addTaskButtonState,
        tasksCompleted,
        tasksTotal,
        searchValue,
        setSearchValue,
        taskFilter,
        taskCompleted,
        UndoTaskCompleted,
        deleteTask,
        loading,
        error,
        showModalCreate,
        setShowModalCreate,
        showModalDelete,
        setShowModalDelete,
        taskDataDelete,
        setTaskDataDelete,
        showModalEdit,
        setShowModalEdit,
        taskDataEdit,
        setTaskDataEdit,
        editTask,
        validate,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
