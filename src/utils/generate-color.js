// src/utils/generate-color.js

import { React, useRef } from "react";

const hexacolor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  console.log(color);
  return "#" + color;
};

const hexaStyle = {
  fontFamily: "Montserrat",
  color: "white",
  textAlign: "center",
  alignItems: "center",
  width: "160px",
  height: "160px",
  padding: "30px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  boxSizing: "border-box",
  fontWeight: 100,
};

const Hexacolor = () => {
  let styleColor = hexacolor();

  const ref = useRef(null);
  const onClick = () => {
    let content = ref.current.textContent;
  };
  return (
    <div
      style={{
        backgroundColor: `${styleColor}`,
        width: "160px",
        height: "160px",
        margin: "2px 2px 2px 2px",
        maxHeight: "200px",
        maxWidth: "200px",
        alignItems: "center",
        borderRadius: "5px",
      }}
    >
      <div style={hexaStyle}>
        <div>
          <p ref={ref}>{hexacolor()}</p>
          <br />
          <button
            style={{
              cursor: "pointer",
              border: "none",
              backgroundColor: `${styleColor}`,
              fontSize: "25px",
              borderRadius: "15px",
            }}
            alt="Copy"
            onClick={onClick}
          >
            📋
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hexacolor;