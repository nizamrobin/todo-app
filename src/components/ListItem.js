import Button from "./Button";
import classes from "../styles/ListItem.module.css";

export default function ListItem({ text }) {
  return (
    <li className={classes.listItem}>
      <p class={classes.listItemText}>{text}</p>
      <div class={classes.listItemBtns}>
        <Button
          onClick="handleClick"
          btnType="btnDone"
          fontAwesome="fa-solid fa-check"
        />
        <Button
          onClick="handleClick"
          btnType="btnEdit"
          fontAwesome="fa-solid fa-pen"
        />
        <Button
          onClick="handleClick"
          btnType="btnDelete"
          fontAwesome="fa-solid fa-trash"
        />
      </div>
    </li>
  );
}
