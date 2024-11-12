import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { CounterProvider } from "./context/Countercontex";

function App() {
  return (
    <>
      <CounterProvider>
        <Header />
        <Outlet />
      </CounterProvider>
    </>
  );
}

export default App;
