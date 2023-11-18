import ReactDOM from "react-dom";
import style from "./Notification.module.css";
import { FiInfo } from "react-icons/fi";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { TodoContext } from "../../context/TodoContext";
import { useContext } from "react";

function Notification() {
  const { notification, setNotification } = useContext(TodoContext);
  const { type, msg } = notification || {};

  const [showEfect, setShowEfect] = useState(false);

  useEffect(() => {
    const closeNotification = {
      show: false,
      type: "",
      msg: "",
    };

    setShowEfect(true);

    setTimeout(() => {
      setShowEfect(false);
      close();
    }, 900);

    const close = () => {
      setTimeout(() => {
        setNotification(closeNotification);
      }, 300);
    };
  }, [setNotification]);

  //typeClass
  const typeClass =
    type === "info"
      ? style.info
      : type === "success"
      ? style.success
      : type === "error"
      ? style.error
      : "";

  //type Icon
  const icon =
    type === "info" ? (
      <FiInfo className={"icon iconInfo"} />
    ) : type === "success" ? (
      <FaCheck className={"icon"} />
    ) : type === "error" ? (
      <FaTimes className={`icon ${style.iconError}`} />
    ) : (
      " "
    );

  return ReactDOM.createPortal(
    <div
      className={`${style.container} ${typeClass} ${showEfect && style.show}`}
    >
      {icon}
      <p className={style.p}>{msg}</p>
    </div>,
    document.getElementById("notification")
  );
}

export { Notification };
