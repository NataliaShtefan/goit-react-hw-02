

import s from "./Notification.module.css"

const Notification = ({ message }) => {
    return (
      <div >
        <h2 className={s.title}>{message}</h2>
      </div>
    );
  };
  
  export default Notification;