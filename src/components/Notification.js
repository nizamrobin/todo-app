import classes from "../styles/Notification.module.css";

export default function Notification({ notification_msg }) {
  return <h3 className={classes.notification}>{notification_msg}</h3>;
}
