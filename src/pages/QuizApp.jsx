import React, { useState } from "react";

const QuizApp = () => {
  const questions = [
    {
      question: "what language is not used in Web?",
      options: ["HTML", "CSS", "JavaScript", "Swift"],
      correctAnswer: "Swift",
    },
    {
      question: "which language runs in Browser?",
      options: ["Java", "C++", "C#", "JavaScript"],
      correctAnswer: "JavaScript",
    },
    {
      question: "What is CSS used for?",
      options: ["for Showing text", "Styling", "Logic", "Backend"],
      correctAnswer: "Styling",
    },
    {
      question: "What does HTML Stands For?",
      options: [
        "Hypertext markup language",
        "Hypertext Markdown Language",
        "Hyperloop Machine Language",
        "Helicopters Terminals Motorboats Lamborginis",
      ],
      correctAnswer: "Hypertext markup language",
    },
    {
      question: "Which is not a styling framwork?",
      options: ["Tailwind", "Bootstrap", "Materialize", "Reactjs"],
      correctAnswer: "Reactjs",
    },
  ];

  const [start, setStart] = useState(false);
  const [result, setResult] = useState(false);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleCheckOptions = () => {
    if (selectedOption === questions[count].correctAnswer) {
      setScore((score) => score + 1);
      // setCount((count) => count + 1)
    }
    console.log(selectedOption);
    const nextQuestion = count + 1;

    if (nextQuestion < questions.length) {
      setCount(nextQuestion);
      setSelectedOption(null);
    } else {
      setResult(true);
    }
  };

  const handleReset = () => {
    setStart(false)
    setResult(false)
    setScore(0)
    setCount(0)
  }

  return (
    <div className="pt-20">
      <div className="flex flex-col items-center justify-center min-h-full">
        <h1 className="pt-20 text-3xl font-bold capitalize text-center text-[#f14536]">
          Welcome to My Quiz App
        </h1>

        <p className="text-center text-lg mt-3 text-gray-900 font-semibold capitalize">
          {start
            ? result
              ? "Want To Take the quiz again?"
              : "Please Select the correct options"
            : "Press the start Button when you are ready"}
        </p>

        {start ? (
          // when the quiz has started

          result ? (
            // for when the quiz is completed
            <div className="mt-12 bg-white w-1/3 min-h-[200px] shadow-lg rounded-lg overflow-hidden">
              <div className="bg-[#f14536] text-white p-4">
                <h3 className="font-bold text-lg capitalize text-center ">Your Quiz is over</h3>
              </div>

              <div className="px-3 my-12 flex justify-center items-center flex-col">
                <h3 className="capitalize ml-2 text-xl font-semibold">Your Total score is {score} out of {questions.length}</h3>
                <button
                  className="bg-[#f14536] text-white px-20 py-3 mt-5 rounded-md hover:text-[#f14536] hover:bg-white shadow-lg font-semibold cursor-pointer transition-all duration-100"
                  onClick={handleReset}
                >
                  Take the Test Again
                </button>
                
              </div>
            </div>
          ) : (
            // when the quiz has started but not completed
            <div className="mt-12 bg-white w-1/3 min-h-[200px] shadow-lg rounded-lg overflow-hidden">
              <div className="bg-[#f14536] text-white p-4 flex justify-between">
                <span></span>
                <h3 className="font-bold text-lg capitalize text-center ">
                  {count + 1}. {questions[count].question}
                </h3>
                <span className="opacity-80">{count + 1}/5</span>
              </div>

              <div className="px-3 my-12">
                <div className="mx-10">
                  {questions[count].options.map((option, index) => {
                    return (
                      <div key={index} className="flex items-center my-4">
                        <input
                          type="radio"
                          name="option"
                          id={index + 1}
                          value={option}
                          checked={selectedOption === option}
                          className="h-5 w-5 accent-[#f14536] cursor-pointer"
                          required
                          // checked = {option}
                          onChange={(e) => setSelectedOption(e.target.value)}
                        />
                        <label
                          htmlFor={index + 1}
                          className="capitalize ml-2 text-xl font-semibold cursor-pointer"
                        >
                          {option}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex justify-center p-4">
                <button
                  className="bg-[#f14536] text-white px-20 py-3 rounded-md hover:text-[#f14536] hover:bg-white shadow-lg font-semibold cursor-pointer transition-all duration-100 disabled:bg-[#ff8075] disabled:hover:text-white"
                  onClick={handleCheckOptions}
                  disabled={selectedOption === null}
                >
                  Submit
                </button>
              </div>
            </div>
          )
        ) : (
          // when the quiz hasn't started yet
          <div>
            <button
              className="bg-[#f14536] text-white px-20 py-3 mt-6 rounded-md hover:text-[#f14536] hover:bg-white shadow-lg font-semibold cursor-pointer transition-all duration-100"
              onClick={() => setStart(true)}
            >
              Start
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizApp;
