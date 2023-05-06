import BtnTodoAd from "./components/BtnTodoAdd";
import Button from "./components/Button";
import ListItem from "./components/ListItem";
import ListItemInfo from "./components/ListItemInfo";
import TextArea from "./components/TextArea";
import Notification from "./components/Notification";
import "./styles/global.css";

export default function App() {
  return (
    <>
      <Button />
      <BtnTodoAd />
      <TextArea />
      <ListItem text="Here text from input field textarea will be shown" />
      <ListItemInfo />
      <Notification notification_msg="your new todo has been added!" />
    </>
  );
}
