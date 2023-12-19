import React, { useEffect, useState } from "react";
import {
  faPenToSquare,
  faTrashCan,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Note = ({ id, note, setFetcheNotes, fetchedNotes }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newNote, setNewNote] = useState("");

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (noteId) => {
    setIsEditing(false);
    setFetcheNotes((prevVal) => {
      return prevVal.map((note, index) => {
        if (noteId === index + 1) {
          return newNote;
        } else {
          return note;
        }
      });
    });
  };

  useEffect(() => {
    setNewNote(note);
  }, [note]);

  const handleDel = (noteId) => {
    const updatedNote = fetchedNotes.filter(
      (note, index) => noteId !== index + 1
    );
    setFetcheNotes(updatedNote);
  };

  return (
    <>
      <div
        // id={index}
        className={`${
          isEditing ? "border-2 border-[#f14536]" : "border-white border-2"
        } min-h-[300px] w-[30%] bg-white box-border rounded-lg shadow-lg overflow-hidden mt-10`}
      >
        <div className="bg-[#f14536] p-3 text-white font-semibold flex justify-between">
          <h4>Note No {id}</h4>

          <div>
            {isEditing ? (
              <FontAwesomeIcon
                icon={faCheck}
                className="text-white h-5"
                onClick={() => handleSave(id)}
              />
            ) : (
              <FontAwesomeIcon
                icon={faPenToSquare}
                className="text-white h-5"
                onClick={handleEdit}
              />
            )}

            <FontAwesomeIcon
              icon={faTrashCan}
              className="text-white h-5 ml-4"
              onClick={() => handleDel(id)}
            />
          </div>
        </div>
        {isEditing ? (
          <textarea
            className="resize-none h-full w-full outline-none p-3 font-semibold"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
          ></textarea>
        ) : (
          <h3 className="p-3 font-semibold">{newNote}</h3>
        )}
      </div>
    </>
  );
};

export default Note;
