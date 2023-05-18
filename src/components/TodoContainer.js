import Todo from "./Todo";
import classes from "../styles/TodoContainer.module.css";

export default function TodoContainer() {
  return (
    <div className={classes.todo_container}>
      <Todo />
      <h5 className={classes.developer}>Build with love by nizamrobin</h5>
    </div>
  );
}
