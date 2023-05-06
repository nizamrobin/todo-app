import Button from "./Button";
import classes from "../styles/ListItem.module.css";

export default function ListItem({ text }) {
  return (
    <li className={classes.listItem}>
      <p class={classes.listItemText}>{text}</p>
      <div class={classes.listItemBtns}>
        <Button onClick="handleClick" btnType="btnDone">
          <i class="fa-solid fa-check"></i>
        </Button>
        <Button onClick="handleClick" btnType="btnEdit">
          <i class="fa-solid fa-pen"></i>
        </Button>
        <Button onClick="handleClick" btnType="btnDelete">
          <i class="fa-solid fa-trash"></i>
        </Button>
      </div>
    </li>
  );
}
