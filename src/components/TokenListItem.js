import classes from "../styles/TokenListItem.module.css";
import Button from "./Button";
import { remove, ref, getDatabase } from "firebase/database";

export default function TokenListItem({
  text,
  id,
  notificationHandler,
  parentId,
  numberOfItems,
}) {
  const db = getDatabase();

  const handleClick = (name) => {
    if (name === "delete") {
      notificationHandler("Your todo has been deleted!");
      remove(ref(db, parentId + "/subTodo/" + id));
    }

    if (name === "done") {
      numberOfItems--;
      remove(ref(db, parentId + "/subTodo/" + id));
      notificationHandler("CONGRATS! You have completed one of your tasks.");
      if (numberOfItems === 0) {
        notificationHandler("CONGRATULATIONS!");
        remove(ref(db, parentId));
      }
    }

    setTimeout(() => {
      notificationHandler("");
    }, 4000);
  };
  return (
    <li className={classes.token} id={id}>
      {text} <span>&nbsp;</span>
      <Button onClick={handleClick} btnType="btnSubTodoDone" name="done">
        <i class="fa-solid fa-check fa-2xs"></i>
      </Button>
      <Button onClick={handleClick} btnType="btnSubTodoCancel" name="delete">
        <i class="fa-solid fa-xmark fa-2xs"></i>
      </Button>
    </li>
  );
}
