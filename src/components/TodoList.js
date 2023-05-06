import ListItem from "./ListItem";
import ListItemInfo from "./ListItemInfo";
import classes from "../styles/TodoList.module.css";

export default function TodoList() {
  return (
    <ul class={classes.todoList}>
      <ListItem text="item 1" />
      <ListItem text="item 2" />
      <ListItemInfo />
      <ListItem text="item 4" />
    </ul>
  );
}
