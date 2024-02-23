/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./components/button";
import Counter from "./components/counter";

function App() {
  const [number, setNumber] = useState(0);

  function kurang() {
    if (number >= 0) {
      setNumber(number - 1);
    }
  }
  function tambah() {
    if (number <= 10) {
      setNumber(number + 1);
    }
  }
  function reset() {
    setNumber(0);
  }

  return (
    <>
      <div>
        <Button func={kurang} text="-" number={number} />
        <Counter number={number} />
        <Button func={tambah} text="+" number={number} />
      </div>
      <div>
        <Button func={reset} text="Reset!" />
      </div>
    </>
  );
}

export default App;
