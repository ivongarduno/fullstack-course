import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Button = ({ handleFeedback, text }) => {
  return <button onClick={handleFeedback}>{text}</button>;
};

const Estatistics = ({ value, text }) => {
  return (
    <div>
      <table>
        <tr>
          <td>{text} </td>
          <td>{value}</td>
        </tr>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [percentage, setPercentage] = useState(0.0);

  useEffect(() => {
    const handleStatics = () => {
      setAverage((good + neutral + bad) / 3);
      setAll(+good + neutral + bad);
      if (all !== 0) {
        setPercentage(((good + neutral) * 100) / all);
      }
    };
    handleStatics();
  }, [all, good, bad, neutral, percentage]);

  const handleGood = () => {
    setGood(good + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <p>
        <strong>Give feddback</strong>
      </p>
      <Button handleFeedback={handleGood} text="good" />
      <Button handleFeedback={handleNeutral} text="neutral" />
      <Button handleFeedback={handleBad} text="bad" />
      <p>
        <strong>Statistics</strong>
      </p>
      <Estatistics value={good} text="Good" />
      <Estatistics value={neutral} text="Neutral" />
      <Estatistics value={bad} text="Bad" />
      <Estatistics value={all} text="All" />
      <Estatistics value={average} text="Average" />
      <Estatistics value={percentage} text="Percentage" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
