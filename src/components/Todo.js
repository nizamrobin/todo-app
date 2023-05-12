import TextArea from "./TextArea";
import TodoList from "./TodoList";
import Button from "./Button";
import Notification from "./Notification";
import classes from "../styles/Todo.module.css";
import { useId, useState } from "react";
import ListItem from "./ListItem";
import { app } from "../firebase";
import { getDatabase, ref, set } from "firebase/database";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
  const db = getDatabase(app);
  // const id = useId(); //Generates unique id
  const [todo, setTodo] = useState("");
  const [text, setText] = useState("");

  // fetch the input of textarea input field of TextArea comp and handle it
  const textInputHandler = (textReceived) => {
    setText(textReceived);
    setTodo("");
  };

  // add todo to list and clears textarea field when button add is clicked
  const handleClick = () => {
    const id = uuidv4();
    setTodo(text);
    set(ref(db, id), {
      todo_text: text,
    });
    setText("");
  };

  return (
    <article className={classes.todo}>
      <h1 className={classes.todoTitle}>Your list to do</h1>

      <section className={classes.todoNew}>
        <TextArea textInput={textInputHandler} value={text} />
        <div className={classes.todoInputBtns}>
          <Button onClick={handleClick} btnType="btnTodoAdd">
            <i class="fa-solid fa-plus"></i>
          </Button>
          <Button onClick={handleClick} btnType="btnTodoCancel">
            <i class="fa-solid fa-xmark"></i>
          </Button>
        </div>
      </section>
      {todo && (
        <TodoList>
          <ListItem text={todo} />
        </TodoList>
      )}

      <Notification notification_msg="Your new todo has been added!" />
    </article>
  );
}
