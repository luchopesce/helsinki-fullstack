const Course = ({ courses }) => {
  return (
    <>
      {courses.map((course) => {
        return (
          <Content key={course.id} course={course}/>
        );
      })}
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
    <Header course={course}/>
      {course.parts.map((part) => {
        return (
          <Part key={part.id} part={part.name} exercises={part.exercises} />
        );
      })}
      <Total course={course} />
    </>
  );
};

const Part = ({ part, exercises }) => {
  return (
    <>
      <p>
        {part} {exercises}
      </p>
    </>
  );
};

const Total = ({ course }) => {
  const total = course.parts.reduce((s, p) => {
    const someMagicHere = s + p.exercises
    return someMagicHere;
  }, 0);
  return (
    <>
      <p>Number of exercises {total} </p>
    </>
  );
};

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course courses={courses} />;
};

export default App;
