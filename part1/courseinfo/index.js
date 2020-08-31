import React, { useState } from "react";
import ReactDOM from "react-dom";

/* const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  console.log(props);

  return (
    <>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
    </>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}; */

/* c. ESTADO DEL COMPONENTE, CONTROLADORES DE EVENTOS

const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const setToZero = () => setCounter(0);
  const decreaseByOne = () => setCounter(counter - 1);

  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text="plus" />
      <Button handleClick={setToZero} text="zero" />
      <Button handleClick={decreaseByOne} text="minus" />
    </div>
  );
}; */

/* UN ESTADO MAS COMPLEJO */

/*const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  return (
    <div>
      <div>
        {left}
        <button onClick={() => setLeft(left + 1)}>left</button>
        <button onClick={() => setRight(right + 1)}>right</button>
        {right}
      </div>
    </div>
  );
};*/

//UN OBJETO EN EL ESTADO
/*const App = (props) => {
    const [clicks, setClicks] = useState({
      left: 0,
      right: 0,
    });

    const handleLeftClick = () => setClicks({ ...clicks, left: clicks.left + 1 });

    const handleRightClick = () =>
      setClicks({ ...clicks, left: clicks.right + 1 });

    return (
      <div>
        <div>
          {clicks.left}
          <button onClick={handleLeftClick}>left</button>
          <button onClick={handleRightClick}>right</button>
          {clicks.right}
        </div>
      </div>
    );
  };*/

//MANEJO DE MATRICES

/*  const App = props => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])

    const handleLeftClick = () =>{
      setAll(allClicks.concat('L'))
      setLeft(left + 1)
    }

    const handleRightClick = () => {
      setAll(allClicks.concat('R'))
      setRight(right + 1)
    }

    return(
      <div>
        <div>
          {left}
          <button onClick={handleLeftClick}>left</button>
          <button onClick={handleRightClick}>right</button>
          {right}
          <p>{allClicks.join(' ')}</p>
        </div>
      </div>
    )
  }*/

//REPRESENTACION CONDICIONAL
/* const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }

  return <div>button press history: {props.allClicks.join(" ")}</div>;
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = (props) => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };
  
  return (
    <div>
      <div>
        {left}
        <Button onClick={handleLeftClick} text="left" />
        <Button onClick={handleRightClick} text="right" />
        {right}
        <History allClicks={allClicks} />
      </div>
    </div>
  );
}; */

//MANEJO DE EVENTOS
/* const App = (props) => {
  const [value, setValue] = useState(10);
  
  const handleClick = ()=>{
    setValue(0)
  }

  return (
    <div>
      {value}
      <button onClick={handleClick}>reset to zero</button>
    </div>
  );
}; */

//FUNCION QUE DEVUELVE UNA FUNCION
/* const App = () => {
  const [value, setValue] = useState(10);
  // const hello = (who)=>{
  //   const handler = ()=> console.log('Hello', who)
  //   return handler
  // }
  const setToValue = (newValue) => () => {
    setValue(newValue);
  };

  return (
    <div>
      {value}
      <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>increment</button>
    </div>
  );
}; */

const Display = ({value}) => <div>{value}</div>

const Button = (props) =>{
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )  

}

const App = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Display value={value}/>
      <Button handleClick={()=>setToValue(1000)} text="thousand"/>
      <Button handleClick={()=>setToValue(0)} text="reset"/>
      <Button handleClick={()=>setToValue(value+1)} text="increment"/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
