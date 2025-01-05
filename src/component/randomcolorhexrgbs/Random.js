import React, { useEffect, useState } from "react";

function Random() {
  const [typeofColor, setTypeColor] = useState("hex");
  const [ccolor, setColor] = useState("#000000");

  function randomhexcolor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexclr = "#";

    for (let i = 0; i < 6; i++) {
      hexclr = hexclr + hex[randnumber(hex.length)];
    }

    console.log(hexclr);
    setColor(hexclr);
  }

  function randnumber(length) {
    return Math.floor(Math.random() * length);
  }

  function randomrgbcolor() {
    const r = randnumber(256); // Red (0–255)
    const g = randnumber(256); // Green (0–255)
    const b = randnumber(256); // Blue (0–255)

    setColor(`rgba(${r}, ${g}, ${b})`);
  }

  useEffect(() => {
    if (typeofColor === "rgb") randomrgbcolor(); 
    else randomhexcolor();
  }, typeofColor);

  return (
    <>
      <div
        style={{
          width: "100vh",
          height: "50vh",
          background: ccolor,
          color: "white",
          margin: "auto",
        }}
      >
        <button onClick={() => setTypeColor("hex")}>Hex Color</button>
        <button onClick={() => setTypeColor("rgb")}>RGB Color</button>
        <button
          onClick={typeofColor === "hex" ? randomhexcolor : randomrgbcolor}
        >
          Generate Random Color
        </button>
      </div>
      <div>
        <h1>{typeofColor === "rgb" ? "RGB color" : "HEX color"}</h1>
        <h3>{ccolor}</h3>
      </div>
    </>
  );
}

export default Random;
