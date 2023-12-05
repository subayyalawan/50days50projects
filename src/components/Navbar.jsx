import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <>
      <div className="bg-white fixed inset-x-0 top-0 shadow-lg ">
        <div className="px-8 py-3 flex justify-between text-xl">
          <div className="navbar-logo">
            <h3 className="font-bold uppercase text-gray-900 cursor-pointer">
              <Link to="">50 days <span className="font-medium text-sm text-[#f14536]">(50 projects)</span></Link>
            </h3>
          </div>

          <div className="navbar-personal-info flex text-gray-500 text-base">
            <p className="cursor-pointer" >Hello! Subayyal</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;