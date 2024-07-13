import React from "react";
import NavLink from "./NavLink";
import { GiMicrophone } from "react-icons/gi";
import { TiHome } from "react-icons/ti";
import { MdAlbum } from "react-icons/md";
import { IoIosAlbums } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul className="sidebar-text">
          <NavLink to={"/"} label="Home" icon={<TiHome />} />
          <NavLink to="/search" label="Search" icon={<IoSearch />} />
          <NavLink to="/artists" label="Artists" icon={<GiMicrophone />} />
          <NavLink to="/albums" label="Albums" icon={<MdAlbum />} />
          <NavLink to="/my-library" label="My Library" icon={<IoIosAlbums />} />
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
