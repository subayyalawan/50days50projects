import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1 className="pt-20 text-3xl font-bold capitalize text-center text-[#f14536]">
        Welcome to my 50 days 50 projects challenge
      </h1>
      <p className="text-center text-lg mt-3 text-gray-900">
        These are the projetcs that i have done so far
      </p>
      <ul className="flex justify-center gap-6 mt-5 w-2/5 mx-auto flex-wrap text-gray-900">
        <Link to="/random-choice-picker">
          <li className="capitalize bg-white px-4 py-2 rounded-xl font-semibold hover:bg-[#f14536] hover:text-white transition-all duration-150 shadow-lg cursor-pointer">
            Random Choice Picker
          </li>
        </Link>
        <li className="capitalize bg-white px-4 py-2 rounded-xl font-semibold hover:bg-[#f14536] hover:text-white transition-all duration-150 shadow-lg cursor-pointer">
          Random Choice Picker
        </li>
      </ul>
    </>
  );
};

export default Home;
