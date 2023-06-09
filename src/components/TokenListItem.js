import classes from "../styles/TokenList.module.css";
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
      if (numberOfItems === 0) {
        notificationHandler("CONGRATS!");
        remove(ref(db, parentId));
      }
    }

    setTimeout(() => {
      notificationHandler("");
    }, 4000);
  };
  return (
    <li className={classes.token} id={id}>
      {text} <span>&nbsp;&nbsp;&nbsp;</span>
      <Button onClick={handleClick} btnType="btnTodoAdd" name="done">
        <i class="fa-solid fa-check"></i>
      </Button>
      <Button onClick={handleClick} btnType="btnTodoCancel" name="delete">
        <i class="fa-solid fa-xmark"></i>
      </Button>
    </li>
  );
}
