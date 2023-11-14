import ReactDOM from "react-dom";
import style from "./modal.module.css";
import { FaTimes } from "react-icons/fa";

function Modal({
  children,
  title,
  titleButtonCancel,
  actionCancel,
  titleButtonSuccess,
  actionSuccess,
  actionSuccessButtonDisabled,
}) {

  return ReactDOM.createPortal(

    <div className={style.cover}>
      <div className={style.card}>
        <h2 className={style.title}>{title}</h2>
        {children}
        <div className={style.buttonContainer}>
          <button
            className={`${style.buttonCancel} ${style.button}`}
            onClick={actionCancel}
          >
            {titleButtonCancel}
          </button>
          <button
            className={`${style.buttonAdd} ${style.button}`}
            onClick={actionSuccess}
            disabled={actionSuccessButtonDisabled}
          >
            {titleButtonSuccess}
          </button>
        </div>
        <span className={style.buttonClose} onClick={actionCancel}>
          <FaTimes />
        </span>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export { Modal };
