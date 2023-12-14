import React, { useRef, useState } from "react";

const DragNDrop = () => {
  const fillRef = useRef();

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text", fillRef.current.id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedItem = document.getElementById(e.dataTransfer.getData("text"));

    if (droppedItem) {
      e.target.appendChild(droppedItem);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex justify-center items-center flex-col">
        <h1 className="pt-20 text-3xl font-bold capitalize text-center text-[#f14536]">
          Welcome to Drag And Drop
        </h1>
        <p className="text-center text-lg mt-3 mb-6 text-gray-900">Pick the picture and drop it into any of the boxes</p>
        <div className="flex justify-center items-center gap-20">
          <div
            className="empty h-52 w-52 bg-white rounded-lg shadow-xl overflow-hidden"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <div
              id="draggableItem"
              className="fill cursor-pointer bg-[url('https://source.unsplash.com/random/200x200')] bg-cover h-full"
              // bg-[url('https://source.unsplash.com/random/200x200')] bg-cover h-full
              draggable
              ref={fillRef}
              onDragStart={handleDragStart}
            ></div>
          </div>
          <div
            className={` empty h-52 w-52 bg-white rounded-lg shadow-xl overflow-hidden`}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          ></div>
          <div
            className={` empty h-52 w-52 bg-white rounded-lg shadow-xl overflow-hidden`}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          ></div>
          <div
            className={` empty h-52 w-52 bg-white rounded-lg shadow-xl overflow-hidden`}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          ></div>
          <div
            className={` empty h-52 w-52 bg-white rounded-lg shadow-xl overflow-hidden`}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default DragNDrop;
