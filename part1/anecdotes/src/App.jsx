import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Header = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState({
    anecdote: 0,
    vote: new Array(anecdotes.length).fill(0),
  });

  console.log(selected);

  const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  const handleClickRandom = () => {
    const value = randomNumber(0, anecdotes.length);
    const newValue = {
      ...selected,
      anecdote: value,
    };
    setSelected(newValue);
  };

  const handleClickVote = () => {
    const newVote = { ...selected };
    newVote.vote[selected.anecdote] += 1;
    setSelected(newVote);
  };

  const maxVoted = selected.vote.indexOf(Math.max(...selected.vote));

  return (
    <>
      <Header title="Anecdote of day" />
      <div>{anecdotes[selected.anecdote]}</div>
      <div>has {selected.vote[selected.anecdote]} votes</div>
      <Button handleClick={handleClickVote} text="vote" />
      <Button handleClick={handleClickRandom} text="next anecdote" />
      <Header title="Anecdote with most vote" />
      <div>{anecdotes[maxVoted]}</div>
      <div>has {selected.vote[maxVoted]} votes</div>
    </>
  );
};

export default App;
