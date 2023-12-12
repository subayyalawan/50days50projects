import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

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
      <div className="pt-16 bg-gray-900">
        <div
          className={` ${
            showNav ? "rotate-[-20deg]" : "rotate-[0deg]"
          } wrapper origin-top-left transition-transform duration-500 ease-linear bg-white`}
        >
          <div className="circle-container">hello world Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque minima culpa voluptas iure nesciunt consectetur enim dolorem. Quibusdam ipsam quis reprehenderit voluptatum nulla ratione odio molestiae itaque veritatis, nihil maxime consequuntur officiis cum perspiciatis dignissimos consectetur quos labore maiores distinctio eos dolor ullam placeat? Temporibus maiores quos alias autem architecto minima aliquam esse enim aliquid optio, asperiores porro consectetur, corporis beatae delectus, sint soluta nemo culpa maxime suscipit nihil voluptates? Iusto porro praesentium officiis illum dicta eaque optio. Porro eligendi aliquam, mollitia nihil facere atque? Culpa repellat eius enim iusto, impedit consequuntur similique velit perferendis et non. A, dolores explicabo?</div>
        </div>

        <div
          className={`${
            showNav ? "rotate-[-90deg]" : "rotate-[0deg]"
          } circle flex items-end justify-between bg-[#f14536] w-52 h-52 px-12 py-10 rounded-full fixed 
             transition-transform duration-500 ease-linear -top-24 -left-24`}
        >
           
          <div className="close" onClick={handleCloseNav}>
            <FontAwesomeIcon icon={faXmark} className="text-white h-8" />
          </div>

          <div className="Open" onClick={handleOpenNav}>
            <FontAwesomeIcon icon={faBars} className="text-white h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedNav;
