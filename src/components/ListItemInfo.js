import Button from "./Button";
import classes from "../styles/ListItemInfo.module.css";

export default function ListItemInfo() {
  return (
    <li className={classes.listItemInfo}>
      <p>Delete mistakenly? Press Undo fast!</p>
      <Button btnType="btnUndo">Undo</Button>
    </li>
  );
}
