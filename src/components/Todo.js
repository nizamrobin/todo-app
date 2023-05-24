import TodoList from "./TodoList";
import Notification from "./Notification";
import classes from "../styles/Todo.module.css";
import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import { app } from "../firebase";
import { getDatabase, onValue, ref } from "firebase/database";
import TodoNew from "./TodoNew";

export default function Todo() {
  const db = getDatabase(app);
  // console.log(db);
  const [todos, setTodos] = useState([]);
  const [notification, setNotification] = useState("");

  const notificationHandler = (notificationReceive) => {
    setNotification(notificationReceive);
  };

  // Read data from database(here: firebase)
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
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
      <TodoNew
        placeholder={"What you'r planning to do?"}
        classes={"todoNewMain"}
        notificationHandler={notificationHandler}
        name="todoNewMain"
      />
      {todos.length > 0 && (
        <TodoList>
          {todos.map((item) => (
            <ListItem
              key={item.id}
              text={item.todo}
              id={item.id}
              notificationHandler={notificationHandler}
            ></ListItem>
          ))}
        </TodoList>
      )}

      {notification && <Notification notification_msg={notification} />}
    </article>
  );
}
