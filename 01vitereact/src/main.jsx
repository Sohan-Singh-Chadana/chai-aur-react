import React, { createElement, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import { jsx as _jsx } from "react/jsx-runtime.js";

function MyApp() {
  return (
    <div>
      <h1>Custom App | Chai</h1>
    </div>
  );
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "click me to visit google",
// };

const anotherElement = (
  <a href="https://google.com" target="_blank">
    visit Google
  </a>
);

const h1 = <h1 className="soans">Sohan</h1>;
console.log(h1);

const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "click me to visit google",
  anotherElement
);

console.log(reactElement);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  // <MyApp />
  // </StrictMode>
  // anotherElement
  reactElement
  // MyApp()
  // <App/>
);
