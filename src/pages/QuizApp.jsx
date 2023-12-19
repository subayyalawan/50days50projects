import React from "react";

const QuizApp = () => {
  return (
    <div className="pt-20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="pt-20 text-3xl font-bold capitalize text-center text-[#f14536]">
          Welcome to My Quiz App
        </h1>

        <p className="text-center text-lg mt-3 text-gray-900 font-semibold">
          Click on Add Note to add new Note, and click on edit icon to edit
          already created notes
        </p>
      </div>
    </div>
  );
};

export default QuizApp;
