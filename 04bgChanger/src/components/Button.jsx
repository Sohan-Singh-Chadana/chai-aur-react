import React from "react";

function Button({ colorName, setColor, fontBlack }) {
  return (
    <div>
      <button
        onClick={() => setColor(colorName)}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg capitalize font-medium"
        style={{
          backgroundColor: colorName,
          color: fontBlack,
        }}
      >
        {colorName}
      </button>
    </div>
  );
}

export default Button;
