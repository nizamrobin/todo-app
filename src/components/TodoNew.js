import TextArea from "./TextArea";
import Button from "./Button";
import classes from "../styles/TodoNew.module.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { getDatabase, set, ref } from "firebase/database";
import { firebase } from "firebase/database";
import { app } from "../firebase";

export default function TodoNew(props) {
  const db = getDatabase(app);
  const [todo, setTodo] = useState("");
  // const [subTodo, setSubTodo] = useState("");

  // fetch the input of textarea input field of TextArea comp and handle it
  const textInputHandler = (textReceived) => {
    setTodo(textReceived);
    // setSubTodo(textReceived);
  };

  // add todo to list and clears textarea field when button add is clicked
  const handleClick = (name, e) => {
    // let count;
    if (name === "add") {
      const id = uuidv4().slice(0, 8);
      console.log(id);
      if (props.name === "todoNewMain") {
        todo &&
          set(ref(db, id), {
            id,
            todo,
          });
        props.notificationHandler("Your new todo has been added!");
        setTodo("");
      } else if (props.name === "todoNewSub") {
        // const id = uuidv4().slice(0, 4);
        // console.log(Object.values());
        // ref(db, props.id).push("bal");
        db.ref(props.id).push().set("textt");
        // todo &&
        //   set(ref(db, props.id), {
        //     subTodo: {
        //       id: props.id + id,
        //       todo,
        //     },
        //   });
        // ref(db, props.id)
        //   .push()
        //   .set({
        //     subTodo: {
        //       id: props.id + id,
        //       todo,
        //     },
        //   });
        props.notificationHandler("Task added!");
        setTodo("");
      }

      setTimeout(() => {
        props.notificationHandler("");
      }, 2000);
    }
  };
  return (
    <section className={`${classes.todoNew} ${classes[props.classes]}`}>
      <TextArea
        placeholder={props.placeholder}
        value={todo}
        textInput={textInputHandler}
      />
      <div className={classes.todoInputBtns}>
        <Button
          type="submit"
          onClick={handleClick}
          btnType="btnTodoAdd"
          name="add"
        >
          <i class="fa-solid fa-plus"></i>
        </Button>
        <Button onClick={handleClick} btnType="btnTodoCancel" name="cancel">
          <i class="fa-solid fa-xmark"></i>
        </Button>
      </div>
    </section>
  );
}
