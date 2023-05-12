import Button from "./Button";
import classes from "../styles/ListItem.module.css";
import { getDatabase, ref, remove } from "@firebase/database";

export default function ListItem({ text, id }) {
  const db = getDatabase();
  const handleClick = (e) => {
    // Delete  an item from database
    if (e === "delete") {
      console.log(text);
      remove(ref(db, id));
    }
  };

  return (
    <li className={classes.listItem}>
      <p className={classes.listItemText}>{text}</p>
      <div className={classes.listItemBtns}>
        <Button onClick={handleClick} btnType="btnDone" name="done">
          <i class="fa-solid fa-check"></i>
        </Button>
        <Button onClick={handleClick} btnType="btnEdit" name="edit">
          <i class="fa-solid fa-pen"></i>
        </Button>
        <Button onClick={handleClick} btnType="btnDelete" name="delete">
          <i class="fa-solid fa-trash"></i>
        </Button>
      </div>
    </li>
  );
}
