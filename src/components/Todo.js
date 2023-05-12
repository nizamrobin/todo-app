import TextArea from "./TextArea";
import TodoList from "./TodoList";
import Button from "./Button";
import Notification from "./Notification";
import classes from "../styles/Todo.module.css";
import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import { app } from "../firebase";
import { getDatabase, onValue, ref, set } from "firebase/database";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
  const db = getDatabase(app);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // fetch the input of textarea input field of TextArea comp and handle it
  const textInputHandler = (textReceived) => {
    setTodo(textReceived);
  };

  // add todo to list and clears textarea field when button add is clicked
  const handleClick = () => {
    const id = uuidv4().slice(0, 8);
    set(ref(db, id), {
      todo,
    });
    setTodo("");
  };

  // Read data from database(here: firebase)
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      console.log(data);
      if (data !== null) {
        Object.values(data).map((todo) =>
          setTodos((oldArray) => [...oldArray, todo])
        );
      }
    });
  }, [db]);

  return (
    <article className={classes.todo}>
      <h1 className={classes.todoTitle}>Your list to do</h1>

      <section className={classes.todoNew}>
        <TextArea textInput={textInputHandler} value={todo} />
        <div className={classes.todoInputBtns}>
          <Button onClick={handleClick} btnType="btnTodoAdd">
            <i class="fa-solid fa-plus"></i>
          </Button>
          <Button onClick={handleClick} btnType="btnTodoCancel">
            <i class="fa-solid fa-xmark"></i>
          </Button>
        </div>
      </section>
      <TodoList>
        {todos.map((todo) => (
          <ListItem text={todo.todo} />
        ))}
      </TodoList>

      <Notification notification_msg="Your new todo has been added!" />
    </article>
  );
}
