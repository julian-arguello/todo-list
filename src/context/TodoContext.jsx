import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

const TodoContext = createContext();

function TodoProvider({ children }) {
  //Modals
  // Modal para crear nuevo tarea.
  const [showModalCreate, setShowModalCreate] = useState(false);
  // Modal para eliminar un tarea.
  const [showModalDelete, setShowModalDelete] = useState(false);
  // Modal para editar un tarea.
  const [showModalEdit, setShowModalEdit] = useState(false);

  /**
   * Info que se mostrara en los modales sobre la tarea a eliminar o editar.
   */
  const [taskDataDelete, setTaskDataDelete] = useState({});
  const [taskDataEdit, setTaskDataEdit] = useState({});

  /**
   * notificaciones.
   */
  const [notification, setNotification] = useState({
    show: false,
    type: "",
    msg: "",
  });

  /**
   * Guardamos la lista de tareas en localStorage (Custom Hook).
   */
  const {
    item: taskList,
    saveItem: setTaskList,
    loading,
    error,
  } = useLocalStorage("taskList_v1", []);

  /*
   * Guardamos el esatado de darkMode en localStorage (Custom Hook).
   */
  const {
    item: darkMode,
    saveItem: setDarkMode,
    loading: darkModeLoading,
    error: darkModeError,
  } = useLocalStorage("darkMode_v1", false);

  /**
   * Contadores (ESTADOS DERIVADOS se crean a partir de un usestate).
   */
  const tasksCompleted = taskList.filter((task) => !!task.completed).length; //(!!) doble negacion para devolver un valor true o false.
  const tasksTotal = taskList.length;

  /**
   * Buscar Tarea..
   */
  const [searchValue, setSearchValue] = useState(""); // input del buscardor.
  //Filtrar.

  const [taskFilterStatus, setTaskFilterStatus] = useState("");

  const taskFilter = taskList.filter((task) => {
    let taskTitle = task.title.toLowerCase();
    let taskSearch = searchValue.toLowerCase();
    let taskStatus =
      taskFilterStatus === "" ? true : task.completed == taskFilterStatus;

    return taskTitle.includes(taskSearch) && taskStatus;
  });

  /**
   * Marcar tarea como Completa.
   * @param {number|string} id - ID de la tarea.
   */
  const taskCompleted = (id) => {
    const newTasks = [...taskList];
    const taskIndex = newTasks.findIndex((task) => task.id === id);
    newTasks[taskIndex].completed = true;
    setTaskList(newTasks);
  };

  /**
   * Marcar tarea como incompleta
   * @param {number|string} id - ID de la tarea.
   */
  const UndoTaskCompleted = (id) => {
    const newTasks = [...taskList];
    const taskIndex = newTasks.findIndex((task) => task.id === id);
    newTasks[taskIndex].completed = false;
    setTaskList(newTasks);
  };

  /**
   * Eliminar tarea.
   * @param {number|string} id - ID de la tarea.
   */
  const deleteTask = (id) => {
    const newTasks = [...taskList];
    const taskIndex = newTasks.findIndex((task) => task.id === id);
    newTasks.splice(taskIndex, 1);
    setTaskList(newTasks);
    setNotification({
      show: true,
      type: "success",
      msg: "Task Delete Successfully",
    });
  };

  /**
   * Valida y sanitiza el string de la tarea que se quiere crear.
   * limitando el largo a 140 caracteres.
   * limitando el largo de una palabra consecutiva a 20 caracteres.
   * @param {string} title
   * @returns
   */
  const validate = (title) => {
    let titleSanitized = title.trim();
    let titleLength = titleSanitized.length;
    let limiteCaracteresConsecutivos = 20;
    let patron = new RegExp(
      `([^\\s])\\1{${limiteCaracteresConsecutivos - 1},}`
    );
    return (
      title !== "" &&
      titleLength < 140 &&
      titleLength > 0 &&
      !patron.test(title)
    );
  };

  /**
   * Crear nueva tareea.
   */
  const [newTaskValue, setNewTaskValue] = useState(""); // datos de la nueva tarea.
  const addTaskButtonState = validate(newTaskValue); // estado del boton de agregar tarea.

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

  /**
   * Editar Tarea
   * @param {number|string} id - ID de la tarea.
   * @param {string} title - titulo de la tarea.
   * @returns
   */
  const editTask = (id, title) => {
    if (!validate(title)) return;
    const newTasks = [...taskList];
    const taskIndex = newTasks.findIndex((task) => task.id === id);
    newTasks[taskIndex].title = title;
    setTaskList(newTasks);
    setNotification({
      show: true,
      type: "success",
      msg: "Task Edited Successfully",
    });
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
        notification,
        setNotification,
        darkMode,
        setDarkMode,
        darkModeLoading,
        darkModeError,
        taskFilterStatus,
        setTaskFilterStatus,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
