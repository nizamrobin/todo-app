import classes from "../styles/Button.module.css";

export default function Button(props) {
  const handleClick = (e) => {
    // e.preventDefault();
    // console.log(e.currentTarget.name);
    props.onClick(e.currentTarget.name);
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      name={props.name}
      className={`${classes.button} ${classes[props.btnType]}`}
    >
      {props.children}
    </button>
  );
}
