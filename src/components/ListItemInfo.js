import Button from "./Button";
import classes from "../styles/ListItemInfo.module.css";

export default function ListItemInfo(props) {
  const handleClick = (e) => {
    props.onClick(e);
  };
  return (
    <div className={classes.listItemInfo}>
      <p>Delete mistakenly? Press Undo fast!</p>
      <Button btnType="btnUndo" name="undo" onClick={handleClick}>
        Undo
      </Button>
    </div>
  );
}
