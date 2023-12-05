import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1 className="pt-20 text-3xl font-bold capitalize text-center text-white">
        Welcome to my 50 days 50 projects challenge
      </h1>
      <p className="text-center text-lg mt-3 text-white">
        These are the projetcs that i have done so far
      </p>
      <ul className="flex justify-center gap-6 mt-5 w-2/5 mx-auto flex-wrap">
        <li className="bg-white px-4 py-2 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-100">
          <Link to="/random-choice-picker">Random Choice Picker</Link>
        </li>
        <li className="bg-white px-4 py-2 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-100">
          Random Choice Picker
        </li>
      </ul>
    </>
  );
};

export default Home;
