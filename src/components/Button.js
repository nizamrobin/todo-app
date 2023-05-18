import classes from "../styles/Button.module.css";

export default function Button(props) {
  const handleClick = (e) => {
    props.onClick(e.currentTarget.name, e.currentTarget);
  };
  return (
    <button
      type={props.type}
      onClick={handleClick}
      name={props.name}
      onChange={handleClick}
      className={`${classes.button} ${classes[props.btnType]}`}
    >
      {props.children}
    </button>
  );
}
