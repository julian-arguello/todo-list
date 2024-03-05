import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage.js";
import { useTranslation } from "react-i18next";

const TodoContext = createContext();

function TodoProvider({ children }) {
  //translate.
  const { t } = useTranslation();

  // Modals
  /**
   * States for Creating/Deleting and Editing a task.
   */
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);

  /**
   * Information to be displayed in modals about the task to delete or edit.
   */
  const [taskDataDelete, setTaskDataDelete] = useState({});
  const [taskDataEdit, setTaskDataEdit] = useState({});

  /**
   * Notifications.
   */
  const [notification, setNotification] = useState({
    show: false,
    type: "",
    msg: "",
  });

  /**
   * Save the task list to localStorage (Custom Hook).
   */
  const {
    item: taskList,
    saveItem: setTaskList,
    loading,
    error,
  } = useLocalStorage("taskList_v1", []);

  /*
   * Save the darkMode state to localStorage (Custom Hook).
   */
  const {
    item: darkMode,
    saveItem: setDarkMode,
    loading: darkModeLoading,
    error: darkModeError,
  } = useLocalStorage("darkMode_v1", false);

  /**
   * Counters (DERIVED STATES created from a usestate).
   */
  const tasksCompleted = taskList.filter((task) => !!task.completed).length; //(!!) double negation to return a true or false value.
  const tasksTotal = taskList.length;

  /**
   * Search Task and Filter Tasks.
   */
  const [searchValue, setSearchValue] = useState("");
  const [taskFilterStatus, setTaskFilterStatus] = useState("");

  const taskFilter = taskList.filter((task) => {
    let taskTitle = task.title.toLowerCase();
    let taskSearch = searchValue.toLowerCase();
    let taskStatus =
      taskFilterStatus === "" ? true : task.completed == taskFilterStatus;

    return taskTitle.includes(taskSearch) && taskStatus;
  });

  /**
   * Mark task as completed.
   * @param {number|string} id - Task ID.
   */
  const taskCompleted = (id) => {
    const newTasks = [...taskList];
    const taskIndex = newTasks.findIndex((task) => task.id === id);
    newTasks[taskIndex].completed = true;
    setTaskList(newTasks);
  };

  /**
   * Mark task as incomplete.
   * @param {number|string} id - Task ID.
   */
  const UndoTaskCompleted = (id) => {
    const newTasks = [...taskList];
    const taskIndex = newTasks.findIndex((task) => task.id === id);
    newTasks[taskIndex].completed = false;
    setTaskList(newTasks);
  };

   /**
   * Delete task.
   * @param {number|string} id - Task ID.
   */
  const deleteTask = (id) => {
    const newTasks = [...taskList];
    const taskIndex = newTasks.findIndex((task) => task.id === id);
    newTasks.splice(taskIndex, 1);
    setTaskList(newTasks);
    !newTasks.length && setTaskFilterStatus("");
    setNotification({
      show: true,
      type: "success",
      msg: t("notification.deleteTask"),
    });
  };

  /**
   * Validate and sanitize the task string to be created.
   * Limiting the total length to 140 characters.
   * Limiting the length of consecutive words to 22 characters.
   * @param {string} title - The task title to be validated.
   * @returns {boolean} - Returns true if the title is valid, false otherwise.
   */
  const validate = (title) => {
    let titleSanitized = title.trim();
    let titleLength = titleSanitized.length;
    const maxCharacters = 22;
    const wordsArray = titleSanitized.split(" ");
    const allWordsLessThanMax = wordsArray.every(
      (word) => word.length <= maxCharacters
    );

    return (
      title !== "" &&
      titleLength < 140 &&
      titleLength > 0 &&
      allWordsLessThanMax
    );
  };

  /**
   * State for the new task data and add task button.
   */
  const [newTaskValue, setNewTaskValue] = useState(""); 
  const addTaskButtonState = validate(newTaskValue); 

  /**
   * Adds a new task to the list.
   * @returns {void} No return value.
   */
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
   * Edit a task.
   * @param {number|string} id - Task ID.
   * @param {string} title - Task title.
   * @returns {void}
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
      msg: t("notification.editTask"),
    });
  };

  /**
   * Language selector.
   */
  const {
    item: lenguage,
    saveItem: setLenguage,
    loading: lenguageLoading,
    error: lenguageError,
  } = useLocalStorage("lenguage_v1", "en");

  return (
    <TodoContext.Provider
      value={{
        // Task Data
        taskList,
        tasksCompleted,
        tasksTotal,

        // New Task
        newTaskValue,
        setNewTaskValue,
        addTask,
        addTaskButtonState,

        // Search
        searchValue,
        setSearchValue,
        taskFilter,
        taskCompleted,
        UndoTaskCompleted,

        // Task Operations
        deleteTask,
        editTask,

        // Modals
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

        // Validation
        validate,

        // Notification
        notification,
        setNotification,

        // Dark Mode
        darkMode,
        setDarkMode,
        darkModeLoading,
        darkModeError,

        // Task Filter
        taskFilterStatus,
        setTaskFilterStatus,

        // Language
        lenguage,
        setLenguage,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
