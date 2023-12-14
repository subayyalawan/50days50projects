import React from "react";

const Notes = () => {
  return (
    <div className="pt-20 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="pt-20 text-3xl font-bold capitalize text-center text-[#f14536]">
          Welcome to Crud Notes
        </h1>

        <p className="text-center text-lg mt-3 text-gray-900">
          Click on Add Note to add new Note, and click on edit icon to edit
          already created notes
        </p>

        <button className="bg-[#f14536] text-white px-6 py-2 rounded-md my-6 hover:text-[#f14536] hover:bg-white shadow-lg font-semibold cursor-pointer transition-all duration-100">
          Add Note
        </button>
      </div>
    </div>
  );
};

export default Notes;
