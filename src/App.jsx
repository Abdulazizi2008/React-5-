import { useState } from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";
import Myinput from "./components/Myinput";
import Input from "./components/Input";
import Container from "./components/Container";

function App() {
  const [text, setText] = useState("");
  const [color, setColor] = useState("");

  return (
    <>
      <h1>Task1</h1>
      <ComponentA />
      <h1>Task2</h1>
      <h2>Text: {text}</h2>
      <Myinput change={(event) => setText(event.target.value)} />
      <h1>Task3 </h1>
      <Input setColor={setColor} />
      <Container color={color} />
    </>
  );
}

export default App;
