const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content course={course} />
    </>
  );
};

const Header = ({ course }) => {
  return (
    <>
      <h1>{course.name}</h1>
    </>
  );
};

const Content = ({ course }) => {
  return (
    <>
      {course.parts.map((part) => {
        return (
          <Part key={part.id} part={part.name} exercises={part.exercises} />
        );
      })}
    </>
  );
};

const Part = ({part, exercises}) => {
  return (
    <>
      <p>
        {part} {exercises}
      </p>
    </>
  );
};

// const Total = (props) => {
//   let acc = 0;

//   props.course.parts.forEach((part) => {
//     acc = acc + part.exercises;
//   });

//   return (
//     <>
//       <p>Number of exercises {acc} </p>
//     </>
//   );
// };

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App;