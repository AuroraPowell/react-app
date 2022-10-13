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
<<<<<<< Updated upstream
  const onClick = () => {
    ref.current.focus()
=======
  const [editing, toggleEditing] = useState(false)

  const editPost = () => {
    toggleEditing(true)
  }

  // NEED to handle onChange
  const onChange = (e) => {
    //wowiezowie yall
  }

  const handleSave = () => {
    let text = ref.current.value
    posts.editPost(text, id)
    console.log('new text: ')
    console.log(text)
    toggleEditing(false)
  }
  const cancelEdit = () => {
    toggleEditing(false)
  }

  const renderEditBox = (
    <div className="editContainer">
        <textarea
          ref={ref}
          placeholder={post}
          value={post}
          cols="90"
          rows="3"
          onChange={onChange}
        />
        <div>
          <button className="saveButton">Save</button>
          <button className="cancleButton" onClick={cancelEdit}>Cancel</button>
        </div>
    </div>
  )

  const renderPost = (
    <IconContext.Provider value={{ className: "shared-class", size: 25 }}>
      <div className="post-container">
        <div className="post-user-info">
          <FaUser className="faUser" />
          <h4>
            {user} <span>@{firstName}</span>
          </h4>
        </div>

        <p className="post-text">{post}</p>

        <div className="post-interact-bar">
          <div className="edit-delete">
            <button onClick={editPost}>
              <FaRegEdit className="faEdit" />
            </button>
            <button>
              <FiTrash2 className="faEdit" />
            </button>
          </div>
          <div className="user-engagement">
            <button>
              <FaRegComment className="faComment" />
            </button>
            <button>
              <FaRetweet className="faRetweet" size={28} />
            </button>
            <button>
              <FaRegHeart className="faHeart" />
            </button>
          </div>
          <div className="post-time">
            <p>time</p>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  )
  
  return editing ? renderEditBox : renderPost
//   if(editing) {
//     return renderEditBox
//   }
//  return (
    
//   );
};

{/*const EditPost = ({ targetPost: {post, editing,} }) => {

  let uneditedText = targetPost.post

  const onChange = (e) => {
    targetPost.setParams({ editing: true, post: e.target.value })
  }

  const handleSave = (e) => {
    e.preventDefault();
    targetPost.setParams({ post: ref.current.value, editing: false })
    console.log("Edited tweet object: ");
    console.log(targetPost);
  };

  const handleCancel = (e) => {
    setParams({ post: uneditedText, editing: false })
>>>>>>> Stashed changes
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
