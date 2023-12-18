import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faHouse,
  faUser,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

const AnimatedNav = () => {
  const [showNav, setShownav] = useState(false);

  const handleOpenNav = () => {
    setShownav(true);
  };
  const handleCloseNav = () => {
    setShownav(false);
  };

  return (
    <div>
      <div className="bg-gray-800 min-h-screen">

        {/* for blog data with the dog picture in it */}
        <div
          className={` ${
            showNav ? "rotate-[-20deg]" : "rotate-[0deg]"
          } wrapper origin-top-left transition-transform duration-500 ease-linear bg-gray-100 min-h-screen`}
        >
          <div className="container mx-auto">
            <div className=" w-3/5 mx-auto py-14">
              <h2 className="text-4xl font-semibold">Amazing Article</h2>
              <span className="text=[#555] italic">Florin Pop</span>

              <p className="text-[#333] leading-normal my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium quia in ratione dolores cupiditate, maxime aliquid
                impedit dolorem nam dolor omnis atque fuga labore modi veritatis
                porro laborum minus, illo, maiores recusandae cumque ipsa quos.
                Tenetur, consequuntur mollitia labore pariatur sunt quia harum
                aut. Eum maxime dolorem provident natus veritatis molestiae
                cumque quod voluptates ab non, tempore cupiditate? Voluptatem,
                molestias culpa. Corrupti, laudantium iure aliquam rerum sint
                nam quas dolor dignissimos in error placeat quae temporibus
                minus optio eum soluta cupiditate! Cupiditate saepe voluptates
                laudantium. Ducimus consequuntur perferendis consequatur nobis
                exercitationem molestias fugiat commodi omnis. Asperiores quia
                tenetur nemo ipsa.
              </p>

              <h3 className="text-lg font-semibold my-5">My Dog</h3>
              <img
                src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                alt="doggy"
              />
              <p className="text-[#333] leading-normal my-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
                libero deleniti rerum quo, incidunt vel consequatur culpa ullam.
                Magnam facere earum unde harum. Ea culpa veritatis magnam at
                aliquid. Perferendis totam placeat molestias illo laudantium?
                Minus id minima doloribus dolorum fugit deserunt qui vero
                voluptas, ut quia cum amet temporibus veniam ad ea ab
                perspiciatis, enim accusamus asperiores explicabo provident.
                Voluptates sint, neque fuga cum illum, tempore autem maxime
                similique laborum odio, magnam esse. Aperiam?
              </p>
            </div>
          </div>
        </div>

          {/* for circle nav on top with hamburger and cross */}
        <div
          className={`${
            showNav ? "rotate-[-90deg]" : "rotate-[0deg]"
          } circle flex items-end justify-between bg-[#f14536] w-52 h-52 px-12 py-10 rounded-full fixed 
             transition-transform duration-500 ease-linear -top-24 -left-24`}
        >
          <div className="close cursor-pointer" onClick={handleCloseNav}>
            <FontAwesomeIcon icon={faXmark} className="text-white h-8" />
          </div>

          <div className="Open cursor-pointer" onClick={handleOpenNav}>
            <FontAwesomeIcon icon={faBars} className="text-white h-8" />
          </div>
        </div>

          {/* for nav menu thats appears when clicked on the hamburger */}
        <div className="fixed bottom-10 z-10 -left-32">
          <nav>
            <ul>
              <li
                className={`${
                  showNav ? "translate-x-40 delay-100" : "translate-x-0"
                } text-white hover:text-[#f14536] transition-all duration-150 cursor-pointer flex items-center ease-in-out mb-8`}
              >
                <FontAwesomeIcon icon={faHouse} className=" h-6" />
                <span className="uppercase ml-2 font-bold text-xl">Home</span>
              </li>
              <li
                className={`${
                  showNav ? "translate-x-44 delay-300" : "translate-x-0"
                }  text-white hover:text-[#f14536] transition-all duration-300 cursor-pointer flex items-center ease-out mb-8`}
              >
                <FontAwesomeIcon icon={faUser} className="h-7" />
                <span className="uppercase ml-2 font-bold text-xl">about</span>
              </li>
              <li
                className={`${
                  showNav ? "translate-x-48 delay-500" : "translate-x-0"
                }  text-white hover:text-[#f14536] transition-all duration-300 cursor-pointer flex items-center ease-out mb-8`}
              >
                <FontAwesomeIcon icon={faAddressBook} className="h-6" />
                <span className="uppercase ml-2 font-bold text-xl">Contact</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AnimatedNav;
