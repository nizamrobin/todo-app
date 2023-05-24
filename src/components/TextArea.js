import classes from "../styles/TextArea.module.css";

export default function TextArea(props) {
  // Sending back data by props.callingVariable from where it is being called
  const handleInputChange = (e) => {
    props.textInput(e.target.value);
  };
  return (
    <textarea
      name={props.name}
      id="todoInput"
      className={classes.textArea}
      cols="50"
      value={props.value}
      placeholder={props.placeholder}
      onChange={handleInputChange}
    ></textarea>
  );
}
