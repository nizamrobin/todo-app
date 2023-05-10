import ListItem from "./ListItem";
import ListItemInfo from "./ListItemInfo";
import classes from "../styles/TodoList.module.css";
import { app } from "../firebase";
import { getDatabase, ref, set } from "firebase/database";

export default function TodoList({ text }) {
  const db = getDatabase(app);
  console.log(text);
  set(ref(db), {
    todo_text: "text",
  });

  return (
    <ul class={classes.todoList}>
      <ListItem text="item 1" />
      <ListItem text="item 2" />
      <ListItemInfo />
      <ListItem text="item 4" />
    </ul>
  );
}
