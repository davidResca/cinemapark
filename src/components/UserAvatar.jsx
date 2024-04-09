import React, { useState } from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import AvatarMenu from "./AvatarMenu";


const UserAvatar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleHover = (e) => {
    e.type === "mouseleave" ? setMenuActive(false) : setMenuActive(true);
  };

  return (
    <div onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <RiAccountCircleFill className="text-white text-4xl" />
      {menuActive && <AvatarMenu/>}
    </div>
  );
};

export default UserAvatar;
