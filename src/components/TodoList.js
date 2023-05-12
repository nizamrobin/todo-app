import classes from "../styles/TodoList.module.css";

export default function TodoList({ children }) {
  return <ul class={classes.todoList}>{children}</ul>;
}
