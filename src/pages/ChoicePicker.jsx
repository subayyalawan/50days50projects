import React, { useState } from "react";

const ChoicePicker = () => {
  const [randomChoice, setRandomChoice] = useState();
  const [hightlight, setHightlight] = useState(false);

  console.log(randomChoice);

  return (
    <div className="flex items-center flex-col">
      <h1 className="pt-20 text-3xl font-bold capitalize text-center text-gray-900">
        Welcome to Random Choice Picker
      </h1>

      <p className="text-center text-lg mt-3 text-gray-900">
        Please Enter Your choices.
      </p>
      <p className="text-center text-lg text-gray-900">
        <span className="font-semibold">Note:</span> Choices are separated by
        Comma (,) sign
      </p>

      <textarea
        name="choices"
        className="resize-none w-2/5 mt-10 outline-none border p-2 rounded-lg font-semibold shadow-lg min-h-[144px]"
        placeholder="Enter Your Choice"
        value={randomChoice}
        onChange={(e)=>setRandomChoice(e.target.value)}
      ></textarea>

      <ul className="tags flex flex-wrap w-2/5 gap-6 mt-10 justify-center text-gray-900">
        <li className="bg-white px-5 py-2 rounded-xl font-semibold shadow-lg capitalize">choice1</li>
        <li className={`bg-white px-5 py-2 rounded-xl font-semibold shadow-lg capitalize`}>choice1</li>
        <li className="bg-white px-5 py-2 rounded-xl font-semibold shadow-lg capitalize">choice1</li>
      </ul>
    </div>
  );
};

export default ChoicePicker;
