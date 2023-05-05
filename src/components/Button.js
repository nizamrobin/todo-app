import classes from "../styles/Button.module.css";

export default function Button(props) {
  return (
    <button className={`${classes.button} ${classes[props.btnType]}`}>
      <i class="fa-solid fa-plus"></i>
    </button>
  );
}
