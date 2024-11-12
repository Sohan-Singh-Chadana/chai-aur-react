import React, { useContext } from "react";
import { CounterContext, CounterProvider } from "../../context/Countercontex";
import Counter from "../Counter/Counter";

function Example1() {
  const { count } = useContext(CounterContext);
  return (
    <div className="example1">
      <h1>Count is {count}</h1>
      <Counter />
      &nbsp;
      <Counter />
      &nbsp;
      <Counter />
      &nbsp;
      <Counter />
    </div>
  );
}

export default Example1;
