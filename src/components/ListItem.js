import Button from "./Button";
import classes from "../styles/ListItem.module.css";
import { getDatabase, ref, remove, update } from "@firebase/database";
import { useState } from "react";
import TextArea from "./TextArea";

export default function ListItem({ text, id }) {
  const [edit, setEdit] = useState(false);
  const [todo, setTodo] = useState("");
  const db = getDatabase();
  const textInputHandler = (textReceived) => {
    setTodo(textReceived);
  };
  const handleClick = (e) => {
    // Delete  an item from database
    if (e === "delete") {
      remove(ref(db, id));
    }

    if (e === "edit") {
      setEdit(true);
      setTodo(text);
    }
    if (e === "submit") {
      update(ref(db, id), {
        todo,
      });
      setEdit(false);
    }
  };

  return (
    <li className={classes.listItem}>
      {!edit && <p className={classes.listItemText}>{text}</p>}
      <div className={classes.listItemBtns}>
        {!edit && (
          <Button onClick={handleClick} btnType="btnDone" name="done">
            <i class="fa-solid fa-check"></i>
          </Button>
        )}
        {edit ? (
          <div className={classes.editText}>
            <TextArea textInput={textInputHandler} value={todo} />
            <Button onClick={handleClick} btnType="btnEdit" name="submit">
              Submit
            </Button>
          </div>
        ) : (
          <Button onClick={handleClick} btnType="btnEdit" name="edit">
            <i class="fa-solid fa-pen"></i>
          </Button>
        )}

        {!edit && (
          <Button onClick={handleClick} btnType="btnDelete" name="delete">
            <i class="fa-solid fa-trash"></i>
          </Button>
        )}
      </div>
    </li>
  );
}
