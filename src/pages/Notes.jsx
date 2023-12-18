import axios from "axios";
import React, { useEffect, useState } from "react";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Notes = () => {
  const [fetchedNotes, setFetcheNotes] = useState([]);
  const [isEditing, setIsEditing] = useState([]);
  const [editingNote, setEditingNote] = useState("");

  const fetchNotesFromApi = async () => {
    try {
      const resp = await axios.get("http://localhost:3500/notes");
      setFetcheNotes(resp.data);
      setIsEditing(resp.data.map(() => false));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchNotesFromApi();
  }, []);

  const handleAddNote = async () => {
    const newNote = "";
    try {
      await axios.post("http://localhost:3500/notes", { note: newNote });
      fetchNotesFromApi();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditAndSave = async (noteid) => {
    // setIsEditing((prevVal) => {
    //   const newState = [...prevVal];
    //   newState[noteid - 1] = !newState[noteid - 1];
    //   return newState;
    // });

    // const isEditingNote = isEditing[noteid - 1];
    setTimeout(() => {
      console.log(isEditing[noteid - 1]);
    }, 200);

    // if (isEditingNote) {
    //   const oldNote = fetchedNotes.find((note) => note.id === noteid);
    //   setEditingNote(oldNote.note);
    //   // console.log(oldNote);
    //   console.log("hello");
    // }

    // else {
    //   try {
    //     const resp = await axios.put(`http://localhost:3500/notes/${noteid}`, {
    //       note: editingNote,
    //     });
    //     // fetchNotesFromApi();
    //     console.log(resp.data);

    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
  };

  return (
    <div className="pt-20 flex justify-center flex-col container mx-auto">
      <div className="flex flex-col items-center justify-center">
        <h1 className="pt-20 text-3xl font-bold capitalize text-center text-[#f14536]">
          Welcome to Crud Notes
        </h1>

        <p className="text-center text-lg mt-3 text-gray-900 font-semibold">
          Click on Add Note to add new Note, and click on edit icon to edit
          already created notes
        </p>

        <button
          className="bg-[#f14536] text-white px-6 py-2 rounded-md my-6 hover:text-[#f14536] hover:bg-white shadow-lg font-semibold cursor-pointer transition-all duration-100"
          onClick={handleAddNote}
        >
          Add Note
        </button>
      </div>

      <div className="flex flex-wrap justify-between">
        {fetchedNotes.map((note, index) => {
          return (
            <div
              key={index}
              className="min-h-[300px] w-[30%] bg-white rounded-lg shadow-lg overflow-hidden mt-10"
            >
              <div className="bg-[#f14536] p-3 text-white font-semibold flex justify-between">
                <h4>Note No {note.id}</h4>

                <div>
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="text-white h-5"
                    onClick={(e) => {
                      
                      handleEditAndSave(note.id);
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    className="text-white h-5 ml-4"
                  />
                </div>
              </div>
              {isEditing[note.id - 1] ? (
                <textarea
                  className="resize-none h-full w-full p-3 font-semibold"
                  value={editingNote}
                  onChange={(e) => {
                    setEditingNote(e.target.value);
                  }}
                ></textarea>
              ) : (
                <h3 className="p-3 font-semibold">{note.note}</h3>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notes;
