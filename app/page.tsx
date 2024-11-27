import React from "react";
import Home from "./components/Home";

const page = () => {
  const classWork: {
    Student: string;
    Teacher: string;
    Task1: string;
    Task2: string;
    Complete: string;
  } = {
    Student: "M Salman",
    Teacher: "Sir Ali Jawwad",
    Task1: "Pass props to Child Component",
    Task2: "Render props Child Component",
    Complete: "Task Completed",
  };

  return (
    <div>
      <Home classWork={classWork} />
    </div>
  );
};

export default page;
