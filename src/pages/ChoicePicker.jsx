import React, { useState, useRef, useEffect } from "react";

const ChoicePicker = () => {
  const [randomChoice, setRandomChoice] = useState("");
  const [choices, setChoices] = useState([]);

  const createTags = (e) => {
    const tags = randomChoice

      // for putting the value in an array separating by a comma
      .split(",")

      // to remove any empty values
      .filter((tag) => tag.trim() !== "")

      // to remove space in side the values
      .map((tag) => tag.trim());
    setChoices(tags);

    if (e.key === "Enter") {
      setTimeout(() => {
        setRandomChoice("");
      }, 100);
      randomSelect();
    }
  };

  const choicesRef = useRef([]);
  //   choicesRef.current = [];

  const randomSelect = () => {
    const times = 30;
    let intCount = 100;

    const interval = setInterval(() => {
      const randomChoice =
        choicesRef.current[
          Math.floor(Math.random() * choicesRef.current.length)
        ];
      console.log(choicesRef.current[randomChoice]);

      // hightlight

      // unhightlight
    }, intCount);
    console.log(choicesRef.current);
  };

  //   console.log(choicesRef.current);

  const pickRandomChoice = () => {};

  return (
    <div className="flex items-center flex-col">
      <h1 className="pt-20 text-3xl font-bold capitalize text-center text-[#f14536]">
        Welcome to Random Choice Picker
      </h1>

      <p className="text-center text-lg mt-3 text-gray-900">
        Please Enter Your choices.
      </p>
      <p className="text-center text-lg text-gray-900">
        <span className="font-semibold text-[#f14536]">Note:</span> Choices are
        separated by Comma (,) sign
      </p>

      <textarea
        name="choices"
        className="resize-none w-2/5 mt-10 outline-none border p-2 rounded-lg font-semibold shadow-lg min-h-[144px]"
        placeholder="Enter Your Choice"
        value={randomChoice}
        onChange={(e) => setRandomChoice(e.target.value)}
        onKeyDown={createTags}
      ></textarea>

      <ul className="tags flex flex-wrap w-2/5 gap-6 mt-10 justify-center text-gray-900">
        {choices.map((choice, index) => {
          return (
            <li
              // ref={AddToRefs}
              ref={(ele) => (choicesRef.current[index] = ele)}
              key={index}
              className="bg-white px-5 py-2 rounded-xl font-semibold shadow-lg capitalize"
            >
              {choice}
            </li>
          );
        })}
        {/* <li className="bg-white px-5 py-2 rounded-xl font-semibold shadow-lg capitalize">
          hello
        </li> */}
      </ul>
    </div>
  );
};

export default ChoicePicker;
