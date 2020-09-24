import React from "react";

const Header = ({ title }) => {
  return <h1>{title}</h1>;
};

const Total = ({ courses }) => {
  let total = 0;
  courses.map((course) => {
    let sum = course.parts.reduce(
      (accumulator, currentValue) => accumulator + currentValue.exercises,
      0
    );
    total += sum;
    return total;
  });

  return (
    <p>
      <strong>Number of exercises {total}</strong>
    </p>
  );
};

const Part = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => {
        return (
          <p key={part.id}>
            {part.name} {part.exercises}
          </p>
        );
      })}
    </div>
  );
};

const Content = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <strong>{course.name}</strong>
            <Part parts={course.parts} />
          </div>
        );
      })}
    </div>
  );
};

const Course = ({ courses }) => {
  return (
    <div>
      <Header title="Web development curriculum" />
      <Content courses={courses} />
      <Total courses={courses} />
    </div>
  );
};

export default Course;
