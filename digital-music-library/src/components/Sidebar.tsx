import React from "react";
import NavLink from "./NavLink";
import { GiMicrophone } from "react-icons/gi";
import { TiHome } from "react-icons/ti";
import { IoIosAlbums } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul className="sidebar-text">
          <NavLink to={"/"} label="Home" icon={<TiHome />} />
          <NavLink to="/search" label="Search" icon={<IoSearch />} />
          <NavLink to="/my-library" label="My Library" icon={<IoIosAlbums />} />
          <NavLink to="/my-songs" label="My Music" icon={<GiMicrophone />} />
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
