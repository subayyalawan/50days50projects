import React from "react";

const ToDoList = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const handleAddItem = () => {
    
  }

  return (
    <div className="pt-20 flex justify-center flex-col container mx-auto">
      <div className="flex flex-col items-center justify-center">
        <h1 className="pt-20 text-3xl font-bold capitalize text-center text-[#f14536]">
          Welcome to To Do List
        </h1>

        <p className="text-center text-lg mt-3 text-gray-900 font-semibold">
          Click on Add Note to add new Note, and click on edit icon to edit
          already created notes
        </p>

        <button
          className="bg-[#f14536] text-white px-6 py-2 rounded-md my-6 hover:text-[#f14536] hover:bg-white shadow-lg font-semibold cursor-pointer transition-all duration-100"
        //   onClick={handleAddNote}
        >
          Add Note
        </button>
      </div>
    </div>
  );
};

export default ToDoList;
