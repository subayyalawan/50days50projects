import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen">

      <h1 className="text-6xl font-bold capitalize text-center text-[#f14536]">
        Hello! <br />
      </h1>
      <h2 className="pt-10 text-3xl font-bold capitalize text-center text-[#f14536]">
        Welcome to my 50 days 50 projects challenge
      </h2>
      <p className="text-center text-lg mt-3 text-gray-900">
        These are the projetcs that i have done so far
      </p>
      <ul className="flex justify-center gap-6 mt-5 w-2/5 mx-auto flex-wrap text-gray-900">
        <Link to="/random-choice-picker">
          <li className="capitalize bg-white px-4 py-2 rounded-xl font-semibold hover:bg-[#f14536] hover:text-white transition-all duration-150 shadow-lg cursor-pointer">
            Random Choice Picker
          </li>
        </Link>

        <Link to="/Animated-Navigatiton">
          <li className="capitalize bg-white px-4 py-2 rounded-xl font-semibold hover:bg-[#f14536] hover:text-white transition-all duration-150 shadow-lg cursor-pointer">
            Animated Navigation
          </li>
        </Link>

        <Link to="/Drag-N-Drop">
          <li className="capitalize bg-white px-4 py-2 rounded-xl font-semibold hover:bg-[#f14536] hover:text-white transition-all duration-150 shadow-lg cursor-pointer">
            Drag And Drop Images
          </li>
        </Link>

        <Link to="/Notes">
          <li className="capitalize bg-white px-4 py-2 rounded-xl font-semibold hover:bg-[#f14536] hover:text-white transition-all duration-150 shadow-lg cursor-pointer">
            Notes Crud
          </li>
        </Link>

        <Link to="/QuizApp">
          <li className="capitalize bg-white px-4 py-2 rounded-xl font-semibold hover:bg-[#f14536] hover:text-white transition-all duration-150 shadow-lg cursor-pointer">
            Quiz App
          </li>
        </Link>

      </ul>
    </div>
  );
};

export default Home;
