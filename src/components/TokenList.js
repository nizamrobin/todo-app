import classes from "../styles/TokenList.module.css";

export default function TokenList({ children }) {
  return <ul className={classes.tokenList}>{children}</ul>;
}
