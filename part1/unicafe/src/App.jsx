import { useState } from "react";

const Header = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
    </>
  );
};

const Display = (props) => (
  <div>
    {" "}
    {props.text} {props.state} {props.symbol ? props.symbol : null}
  </div>
);

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const average = total ? (good - bad) / total : 0;
  const positive = total ? (good * 100) / total : 0;

  //handlers
  const handleClickGood = () => setGood(good + 1);
  const handleClickNeutral = () => setNeutral(neutral + 1);
  const handleClickBad = () => setBad(bad + 1);

  return (
    <div>
      <Header title="give feedback" />
      <Button handleClick={handleClickGood} text="good" />
      <Button handleClick={handleClickNeutral} text="neutral" />
      <Button handleClick={handleClickBad} text="bad" />
      <Header title="statistics" />
      <Display state={good} text="good" />
      <Display state={neutral} text="neutral" />
      <Display state={bad} text="bad" />
      <Display state={total} text="total" />
      <Display state={average} text="average" />
      <Display state={positive} text="positive" symbol="%" />
    </div>
  );
};

export default App;
