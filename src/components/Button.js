import classes from "../styles/Button.module.css";

export default function Button(props) {
  const handleClick = (e) => {
    // e.preventDefault();
    // console.log(e.currentTarget);
    props.onClick(e.currentTarget);
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${classes.button} ${classes[props.btnType]}`}
    >
      {props.children}
    </button>
  );
}
