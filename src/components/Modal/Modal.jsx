import ReactDOM from "react-dom";
import style from "./modal.module.css";
import { FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";

function Modal({
  children,
  title,
  titleButtonCancel,
  actionClose,
  titleButtonSuccess,
  actionSuccess,
  actionSuccessButtonDisabled,
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const closeModal = () => {
    setShow(false);
    setTimeout(() => {
      actionClose();
    }, 300);
  };

  return ReactDOM.createPortal(
    <div className={`${style.cover} ${show && style.coverShow}`}>
      <div className={`${style.card} ${show && style.cardShow}`}>
        <h2 className={style.title}>{title}</h2>
        {children}
        <div className={style.buttonContainer}>
          <button
            className={`${style.buttonCancel} ${style.button}`}
            onClick={closeModal}
          >
            {titleButtonCancel}
          </button>
          <button
            className={`${style.buttonAdd} ${style.button}`}
            onClick={() => {
              actionSuccess();
              closeModal();
            }}
            disabled={actionSuccessButtonDisabled}
          >
            {titleButtonSuccess}
          </button>
        </div>
        <span className={style.buttonClose} onClick={() => closeModal()}>
          <FaTimes />
        </span>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export { Modal };
