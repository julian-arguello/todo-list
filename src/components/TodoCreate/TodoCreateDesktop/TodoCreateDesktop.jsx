import style from "./TodoCreateDesktop.module.css";
import todoSvg from "./../../../assets/svg/todoSvg.svg";

function TodoCreateDesktop() {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Create new task</h2>
      <input className={style.input} type="text" placeholder="New task" />
      <button className={style.button} 
      
      onClick={(e) => 
      {
        console.log("add task")
        console.log('event', e.target)
        }
      }>
        Add task
      </button>
      <div className={style.todoContainerSvg}>
        <img className={style.todoSvg} src={todoSvg} alt="todoSvg" />
      </div>
    </div>
  );
}

export { TodoCreateDesktop };
