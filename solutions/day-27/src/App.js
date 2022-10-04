// useRef lessons

import React, { useRef, useState, useCallback } from "react";
import ReactDOM from "react-dom";
import Hexacolor from "./utils/generate-color";

const buttonStyles = {
  padding: "15px 35px",
  fontSize: 20,
  border: "none",
  borderRadius: "4px",
  outline: "none",
  margin: "30px 5px 5px 10px",
  cursor: "pointer",

  backgroundColor: "#69cdbf",
  color: "white",
  fontFamily: "Aldrich",
};

const generatorRowStyles = {
  width: "80%",
  margin: "auto",
  justifyContent: "space-between",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const Button = ({ text, onClick }) => {
  return (
    <button style={buttonStyles} onClick={onClick}>
      {text}
    </button>
  );
};

const SingleColor = () => {
  return <Hexacolor />;
};

const App = (props) => {
  const ref = useRef(null);
  const [seed, setSeed] = useState(1);

  const generate = () => {
    setSeed(Math.random());
  };

  return (
    <div className="App">
      <div className="Header" style={{ textAlign: "center", margin: "auto" }}>
        <h1>
          <strong>30 Days of React</strong>
        </h1>
        <h2>Hexadecimal Numbers</h2>
      </div>
      <div className="color-generator-row" style={generatorRowStyles}>
        <div
          className="form-group"
          style={{
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <input style={{ width: "100%" }} type="text" placeholder="wow" />
        </div>
        <Button
          className="generate-color-btn"
          onClick={generate}
          text="GENERATE"
        />
      </div>
      <div
        className="colors-wrapper"
        style={{
          width: "80%",
          margin: "auto",
          padding: 0,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <SingleColor />
        <SingleColor />
        <SingleColor />
        <SingleColor />
        <SingleColor />
        <SingleColor />
        <SingleColor />
        <SingleColor />
        <SingleColor />
        <SingleColor />
        <SingleColor />
        <SingleColor />
        <SingleColor />
        <SingleColor />
        <SingleColor />
        <SingleColor />
        <SingleColor />
        <SingleColor />
        <SingleColor />
        <SingleColor />
        <SingleColor />
        <SingleColor />
        <SingleColor />
        <SingleColor />
      </div>
    </div>
  );
};
// Getting info from form using useRef
/*
const App = (props) => {
  const ref = useRef(null)
  const onClick = () => {
    let value = ref.current.value
    alert(value)
  }

  return (
    <div className='App'>
      <h1>How to use data from uncontrolled  input using useRef</h1>
      <input type='text' ref={ref} />
      <br />
      <button onClick={onClick}>Get Input Data</button>
    </div>
  )
}
*/

// shifting focus to input using useRef (onClick)
/*const App = (props) => {

  const ref = useRef(null)
  const onClick = () => {
    ref.current.focus()
  }

  return (
    <div className='App'>
      <h1>How to focus on input element useRef</h1>
      <input type='text' ref={ref} />
      <br />
      <button onClick={onClick}>Click to Focus on input</button>
    </div>
  )
}*/

// Getting content from DOM tree (content of another element)
/*const App = (props) => {
  const ref = useRef(null)
  const onClick = () => {
    let content = ref.current.textContent
    alert(content)
    console.log(content)
  }

  return(
    <div className='App'>
      <h1 ref={ref}>How to get content from DOM tree</h1>
      <button onClick={onClick}>Getting content</button>
    </div>
  )
}*/

// Accessing and Styling a DOM element ((YESSSSS))
/*const App = (props) => {
  const ref = useRef(null)
  const onClick = () => {
    ref.current.style.backgroundColor = '#61dbfb' 
    
    ref.current.style.padding = '50px'
    ref.current.style.textAlign = 'center'
  }

  return (
    <div className='App'>
      <h1 ref={ref}>How to style HTML from the DOM tree using useRef</h1>
      <button onClick={onClick}>Style it</button>
    </div>
  )
}*/

export default App;
