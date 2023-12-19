import React, { useState } from "react";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ToDoList = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("hjgf");
  const [isEditing, setIsEditing] = useState([]);

  const handleAddItem = () => {
    setNotes((note) => [...note, newNote]);
    
    setIsEditing(notes.map((prev) => [...prev, true]))
    console.log(notes);
    console.log(isEditing);
  };

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
          onClick={handleAddItem}
        >
          Add Note
        </button>
      </div>

      <div className="flex flex-wrap justify-between">
        {notes.map((note, index) => {
          return (
            <div
              key={index}
              className="min-h-[300px] w-[30%] bg-white rounded-lg shadow-lg overflow-hidden mt-10"
            >
              <div className="bg-[#f14536] p-3 text-white font-semibold flex justify-between">
                <h4>Note No {index + 1}</h4>

                <div>
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="text-white h-5"
                    onClick={(e) => {
                      //   handleEditAndSave(note.id);
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    className="text-white h-5 ml-4"
                  />
                </div>
              </div>
              {/* {isEditing[index] ? (
                <textarea
                  className="resize-none h-full w-full p-3 font-semibold"
                //   value={editingNote}
                ></textarea>
              ) : ( */}
              <h3 className="p-3 font-semibold">{note}</h3>
              {/* )} */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ToDoList;
