import { FaPlus } from 'react-icons/fa';
import style from './TodoCreateMobile.module.css';

function TodoCreateMobile() {

    const addTask = () => {
        console.log('Add task');
    }

    return (
        
        <button className={style.button} onClick={addTask}><FaPlus /></button>

    )

}
export { TodoCreateMobile }