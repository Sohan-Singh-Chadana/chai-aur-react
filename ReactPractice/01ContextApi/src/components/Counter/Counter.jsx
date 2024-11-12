import React, { useContext } from "react";
import { CounterContext } from "../../context/Countercontex";

const Counter = () => {
  const { count, setCount } = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>&nbsp;
      <button onClick={() => (count === 0 ? null : setCount(count - 1))}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
