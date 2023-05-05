import classes from "../styles/TextArea.module.css";

export default function TextArea() {
  return (
    <textarea
      name="todoInput"
      id="todoInput"
      className={classes.textArea}
      cols="50"
      placeholder="What you'r planning to do?"
    ></textarea>
  );
}
