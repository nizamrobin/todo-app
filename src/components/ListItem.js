import Button from "./Button";
import classes from "../styles/ListItem.module.css";
import { getDatabase, set, ref, remove, update } from "@firebase/database";
import { useState } from "react";
import TextArea from "./TextArea";
import ListItemInfo from "./ListItemInfo";
export default function ListItem({ text, id, notificationHandler }) {
  const [edit, setEdit] = useState(false);
  const [todo, setTodo] = useState("");
  const [undo, setUndo] = useState(false);
  const db = getDatabase();

  // fetch the input of textarea input field of TextArea comp and handle it
  const textInputHandler = (textReceived) => {
    setTodo(textReceived);
  };
  const handleClick = (name) => {
    if (name === "delete") {
      setUndo(true);
      setTodo(text);
      setTimeout(() => {
        remove(ref(db, id));
        notificationHandler("Your todo has been deleted!");
      }, 1000);
    }
    if (name === "undo") {
      // setTodo(text);
      setUndo(false);
      console.log(todo, id);
      setTimeout(() => {
        notificationHandler("Your todo has been restored!");
        todo &&
          set(ref(db, id), {
            todo,
            id,
          });
      }, 2000);
    }

    if (name === "done") {
      remove(ref(db, id));
      notificationHandler("CONGRATS! You have completed your task");
    }

    // Edit an item
    if (name === "edit") {
      setEdit(true);
      setTodo(text);
    }

    // Update an item
    if (name === "submit") {
      notificationHandler("Your todo has been updated!");
      update(ref(db, id), {
        todo,
      });

      setEdit(false);
    }
    setTimeout(() => {
      notificationHandler("");
    }, 4000);
  };

  return (
    <li className={classes.listItem}>
      {!edit && !undo && <p className={classes.listItemText}>{text}</p>}

      <div className={classes.listItemBtns}>
        {!edit && !undo && (
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
        ) : undo ? (
          <ListItemInfo onClick={handleClick} />
        ) : (
          <>
            <Button onClick={handleClick} btnType="btnEdit" name="edit">
              <i class="fa-solid fa-pen"></i>
            </Button>
            <Button onClick={handleClick} btnType="btnDelete" name="delete">
              <i class="fa-solid fa-trash"></i>
            </Button>
          </>
        )}
      </div>
    </li>
  );
}
