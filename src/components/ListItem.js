import Button from "./Button";
// import Notification from "./Notification";
import classes from "../styles/ListItem.module.css";
import { getDatabase, ref, remove, update } from "@firebase/database";
import { useState } from "react";
import TextArea from "./TextArea";

export default function ListItem({ text, id, notificationHandler }) {
  // console.log(setNotification);
  const [edit, setEdit] = useState(false);
  const [todo, setTodo] = useState("");
  // const [notification, setNotification] = useState(false);
  const db = getDatabase();

  const textInputHandler = (textReceived) => {
    setTodo(textReceived);
  };

  const handleClick = (e) => {
    // Delete  an item from database
    if (e === "delete") {
      notificationHandler("Your todo has been deleted!");
      remove(ref(db, id));
    }
    if (e === "done") {
      remove(ref(db, id));
      notificationHandler("CONGRATS! You have completed your task");
    }

    // Edit an item
    if (e === "edit") {
      setEdit(true);
      setTodo(text);
    }

    // Update an item
    if (e === "submit") {
      notificationHandler("Your todo has been updated!");
      update(ref(db, id), {
        todo,
      });

      setEdit(false);
    }
    setTimeout(() => {
      notificationHandler("");
    }, 2000);
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
      {/* {notification && <Notification notification_msg={notification} />} */}
    </li>
  );
}
