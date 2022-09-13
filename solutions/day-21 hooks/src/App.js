import React, { useState, useMemo } from "react";
import ReactDOM from "react-dom";
import asabenehImage from "./images/asabeneh.jpg";

/* declaring state using hooks

const App = () => {
  // declaring new state variable
  const [ count, setCount ] = useState(0)

  const addOne = () => {
    let value = count + 1
    setCount(value)
  }

  const minusOne = () => {
    let value = count - 1
    setCount(value)
  }

  return (
    <div className='App'>
      <h1>{count}</h1>
      (inline function)<button onClick={() => setCount(count - 1)}>Minus</button> <br />
      <button onClick={addOne}>Add one</button> <button onClick={minusOne}>Minus one</button>
    </div>
  )
}
*/
/*

below could be useful with fetching URL resources

const App = () => {
  // declaring state
  const url = 
    'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg'

  const [image, setImage] = useState(url)

  const changeAnimal = () => {
    let dogURL = 
      'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg'
    let catURL = 
      'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg'

    let result = image === catURL ? dogURL : catURL
    setImage(result) 
  }

  return (
    <div className='App'>
      <h1>30 Days Of React</h1>
      <div className='animal'>
        <img src={image} alt='animal' />
      </div>

      <button onClick={changeAnimal} class='btn btn-add'>
        Change
      </button>
    </div>
  )
}
*/

const showDate = (time) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[time.getMonth()].slice(0, 3);
  const year = time.getFullYear();
  const date = time.getDate();
  return `${month} ${date}, ${year}`;
};

//User card
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className="user-card">
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
);

// button component
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
);

// css style in javascript object
const buttonStyles = {
  backgroundColor: "#61dbfb",
  padding: 10,
  border: "none",
  borderRadius: 5,
  margin: 3,
  cursor: "pointer",
  fontSize: 18,
  color: "white",
};

const Header = (props) => {
  const {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  } = props.data;

  return (
    <header style={props.styles}>
      <div className="header-wrapper">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{date}</small>
      </div>
    </header>
  );
};

const Count = ({ count, addOne, minusOne }) => (
  <div>
    <h1>{count}</h1>
    <div>
      <Button text="+1" onClick={addOne} style={buttonStyles} />
      <Button text="-1" onClick={minusOne} style={buttonStyles} />
    </div>
  </div>
);

// Techlist component
const TechList = (props) => {
  const { techs } = props;
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
  return techsFormatted;
};

// Main Component
const Main = (props) => {
  const {
    techs,
    user,
    greetPeople,
    handleTime,
    changeBackground,
    count,
    addOne,
    minusOne,
  } = props;
  return (
    <main>
      <div className="main-wrapper">
        <p>Prerequisite to get started react.js: </p>
        <ul>
          <TechList techs={techs} />
        </ul>
        <UserCard user={user} />
        <Button
          text="Greet People"
          onClick={greetPeople}
          style={buttonStyles}
        />
        <Button text="Show Time" onClick={handleTime} style={buttonStyles} />
        <Button
          text="Change Background"
          onClick={changeBackground}
          style={buttonStyles}
        />
        <Count count={count} addOne={addOne} minusOne={minusOne} />
      </div>
    </main>
  );
};

// Footer Component
const Foober = (props) => {
  return (
    <footer>
      <div className="footer-wrapper">
        <p>Copyright {props.date.getFullYear()}</p>
      </div>
    </footer>
  );
};

const App = (props) => {
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("");

  // useMemo to optimize - if value is changed, rerenders, otherwise it is not called
  const bgCaps = useMemo(() => {
    console.log("bgCaps");
    return backgroundColor.toUpperCase();
  }, [backgroundColor]);

  const addOne = () => {
    setCount(count + 1);
  };
  const minusOne = () => {
    setCount(count - 1);
  };

  const handleTime = () => {
    alert(showDate(new Date()));
  };
  const greetPeople = () => {
    alert("Welcome to 30 Days Of React Challenge, 2020");
  };
  const changeBackground = () => {
    console.log("background change called");
    setBackgroundColor(backgroundColor === "" ? "red" : "");
  };

  const data = {
    welcome: "Welcome to 30 Days of React",
    title: "Getting Started React",
    subtitle: "JavaScript Library",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
    date: "Oct 7, 2020",
  };

  const techs = ["HTML", "CSS", "JavaScript"];

  const user = { ...data.author, image: asabenehImage };

  return (
    <div className="App" style={{ backgroundColor }}>
      {backgroundColor}
      <Header data={data} />
      <Main
        user={user}
        techs={techs}
        handleTime={handleTime}
        greetPeople={greetPeople}
        changeBackground={changeBackground}
        addOne={addOne}
        minusOne={minusOne}
        count={count}
      />
      <Foober date={new Date()} />
    </div>
  );
};

export default App;
