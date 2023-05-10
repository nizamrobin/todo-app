import TextArea from "./TextArea";
import TodoList from "./TodoList";
import Button from "./Button";
import Notification from "./Notification";
import classes from "../styles/Todo.module.css";

export default function Todo() {
  return (
    <article className={classes.todo}>
      <h1 className={classes.todoTitle}>Your list to do</h1>
      <section className={classes.todoNew}>
        <TextArea />
        <div className={classes.todoInputBtns}>
          <Button onClick="handleClick" btnType="btnTodoAdd">
            <i class="fa-solid fa-plus"></i>
          </Button>
          <Button onClick="handleClick" btnType="btnTodoCancel">
            <i class="fa-solid fa-xmark"></i>
          </Button>
        </div>
      </section>

      <TodoList />

      <Notification />
    </article>
  );
}
