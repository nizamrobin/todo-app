import classes from "../styles/Button.module.css";

export default function Button(props) {
  return (
    <button
      type="button"
      onClick={props.handleClick}
      className={`${classes.button} ${classes[props.btnType]}`}
    >
      {props.children}
    </button>
  );
}
