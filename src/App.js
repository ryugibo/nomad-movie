import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all the time");
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("I run when 'keyword' changes.", keyword);
    }
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.", counter);
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'keyword', 'counter' changes.", keyword, counter);
  }, [keyword, counter]);
  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={"Continue"} />
      <hr />
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here...."
      />
      <h2>{counter}</h2>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
