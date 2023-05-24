import classes from "../styles/TokenList.module.css";
import Button from "./Button";

export default function TokenList() {
  const handleClick = () => {};
  return (
    <ul className={classes.tokenList}>
      <li className={classes.token}>
        first <span>&nbsp;&nbsp;&nbsp;</span>
        <Button
          type="submit"
          onClick={handleClick}
          btnType="btnTodoAdd"
          name="add"
        >
          <i class="fa-solid fa-check"></i>
        </Button>
        <Button onClick={handleClick} btnType="btnTodoCancel" name="cancel">
          <i class="fa-solid fa-xmark"></i>
        </Button>
      </li>
      <li className={classes.token}>second</li>
    </ul>
  );
}
