import Button from "./Button";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((prev) => prev + 1);
  console.log("call an api");
  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={"Continue"} />
      <hr />
      <h2>{counter}</h2>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
