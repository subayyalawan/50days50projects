import React, { useState } from "react";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Note = ({ id, note }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNotes, setEditedNotes] = useState("");

  const handleEdit = (noteid) => {
    setIsEditing((prevVal) => !prevVal);
    console.log(noteid);
  };

  return (
    <>
      <div
        // id={index}
        className="min-h-[300px] w-[30%] bg-white rounded-lg shadow-lg overflow-hidden mt-10"
      >
        <div className="bg-[#f14536] p-3 text-white font-semibold flex justify-between">
          <h4>Note No {id}</h4>

          <div>
            <FontAwesomeIcon 
                icon={faPenToSquare} 
                className="text-white h-5"
                onClick={()=> handleEdit(id)} 
            />
            <FontAwesomeIcon
              icon={faTrashCan}
              className="text-white h-5 ml-4"
            />
          </div>
        </div>
        {isEditing ? (
          <textarea
            className="resize-none h-full w-full outline-none p-3 font-semibold"
          ></textarea>
        ) : (
          <h3 className="p-3 font-semibold">{note}</h3>
        )}
      </div>
    </>
  );
};

export default Note;
