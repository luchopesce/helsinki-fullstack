const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Part = (props) => {
  // console.log(props);
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  );
};

const Content = (props) => {
  // console.log(props.parts);
  return (
    <>
      {props.parts.map((part) => {
        return (
          <Part key={part.name} part={part.name} exercises={part.exercises} />
        );
      })}
    </>
  );
};

const Total = (props) => {
  let acc = 0;

  props.parts.forEach((part) => {
    acc = acc + part.exercises;
  });

  return (
    <>
      <p>Number of exercises {acc} </p>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
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
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
