import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("gray");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="flex flex-wrap justify-center  rounded-xl fixed  bottom-12 inset-x-0 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            {/* <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red", fontWeight: 500 }}
            >
              Red
            </button>
             */}
            <Button colorName="red" setColor={setColor} />
            <Button colorName="green" setColor={setColor} />
            <Button colorName="blue" setColor={setColor} />
            <Button colorName="olive" setColor={setColor} />
            <Button colorName="gray" setColor={setColor} />
            <Button colorName="gold" setColor={setColor} fontBlack="black" />
            <Button colorName="pink" setColor={setColor} fontBlack="black" />
            <Button colorName="purple" setColor={setColor} />
            <Button
              colorName="lavender"
              setColor={setColor}
              fontBlack="black"
            />
            <Button colorName="white" setColor={setColor} fontBlack="black" />
            <Button colorName="black" setColor={setColor} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
