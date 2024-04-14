import { useState } from "react";

const Header = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};

const Statistics = ({ stats }) => {
  const total = stats.good + stats.neutral + stats.bad;
  const average = total ? (stats.good - stats.bad) / total : 0;
  const positive = total ? (stats.good * 100) / total : 0;
  if (total < 1) {
    return <div>No feedback given</div>;
  } else {
    return (
      <>
        <Stats text="good" value={stats.good} />
        <Stats text="neutral" value={stats.neutral} />
        <Stats text="bad" value={stats.bad} />
        <Stats text="total" value={total ? total : 0} />
        <Stats text="average" value={average} />
        <Stats text="positive" value={positive} symbol="%" />
      </>
    );
  }
};

const Stats = ({ text, value, symbol }) => (
  <div>
    {" "}
    {text} {value} {symbol ? symbol : null}
  </div>
);

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const stats = {
    good: good,
    neutral: neutral,
    bad: bad,
  };

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
      <Statistics stats={stats} />
    </div>
  );
};

export default App;
