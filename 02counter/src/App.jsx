import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  // let counter = 15;

  const addValue = () => {
    //counter = counter + 1;
    // console.log("clicked", counter);
    if (counter !== 30 && counter !== 31) {
      setCounter(counter + 1);
    }
  };

  function addValue2x() {
    if (counter !== 30 && counter !== 31) {
      setCounter((prevState) => prevState + 1);
      setCounter((prevState) => prevState + 1);
    }
  }

  function removeValue2x() {
    if (counter !== 0 && counter !== -1) {
      setCounter((prevState) => prevState - 1);
      setCounter((prevState) => prevState - 1);
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h1>Counter value: {counter}</h1>
      <button onClick={addValue}>Add value {counter}</button>&nbsp;&nbsp;
      <button onClick={addValue2x}> Add value 2x </button>
      <br />
      <br />
      <button
        onClick={() => {
          counter !== 0 && counter !== -1 ? setCounter(counter - 1) : null;
        }}
      >
        remove value {counter}
      </button>
      &nbsp;&nbsp;
      <button onClick={removeValue2x}>remove value 2x</button>
      <p>footer {counter}</p>
    </>
  );
}

export default App;
