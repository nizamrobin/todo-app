import classes from "../styles/TodoList.module.css";

export default function TodoList({ children }) {
  // console.log({ text });

  return <ul class={classes.todoList}>{children}</ul>;
}
