import { createContext, useState } from "react";

export const CounterContext = createContext(null);

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(10);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};
