import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0]);
  const [valueMostVotes, setValueMostVotes] = useState(0);
  const [mostVotes, setMostVotes] = useState(0);

  useEffect(() => {
    const handleMostVotes = () => {
      const max = Math.max(...votes);
      setValueMostVotes(max);
      const indexMostVotes = votes.indexOf(max);
      setMostVotes(indexMostVotes);
    };
    handleMostVotes();
  }, [votes]);

  const handleAnecdote = () => {
    setSelected(Math.floor(Math.random() * (6 - 0)));
  };

  const handleVotes = (value) => {
    const array = [...votes];
    array[value] += 1;
    setVotes(array);
  };

  return (
    <div>
      <h3>Anecdote of the day</h3>
      <p>{props.anecdotes[selected]}</p>
      <p>Has {votes[selected]}</p>
      <button onClick={() => handleVotes(selected)}>vote</button>
      <button onClick={handleAnecdote}>next anecdote</button>
      <h3>Anecdote with most votes</h3>
      <p>{props.anecdotes[mostVotes]}</p>
      <p>Has {valueMostVotes}</p>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>,
  document.getElementById("root")
);
