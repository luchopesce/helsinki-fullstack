const Header = (props) => {
  return (
    <>
      <h1>{props.course.name}</h1>
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
      {props.course.parts.map((part) => {
        return (
          <Part key={part.name} part={part.name} exercises={part.exercises} />
        );
      })}
    </>
  );
};

const Total = (props) => {
  let acc = 0;

  props.course.parts.forEach((part) => {
    acc = acc + part.exercises;
  });

  return (
    <>
      <p>Number of exercises {acc} </p>
    </>
  );
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
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
