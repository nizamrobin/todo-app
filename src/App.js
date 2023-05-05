import BtnTodoAd from "./components/BtnTodoAdd";
import Button from "./components/Button";
import ListItem from "./components/ListItem";
import TextArea from "./components/TextArea";
import "./styles/global.css";

export default function App() {
  return (
    <>
      <Button />
      <BtnTodoAd />
      <TextArea />
      <ListItem text="Here text from input field textarea will be shown" />
    </>
  );
}
