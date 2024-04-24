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

export default Course;
