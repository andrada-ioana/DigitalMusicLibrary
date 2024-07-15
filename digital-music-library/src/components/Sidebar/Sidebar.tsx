import React from "react";
import NavLink from "../NavLink/NavLink";
import { TiHome } from "react-icons/ti";
import { IoIosAlbums } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul className="sidebar-text">
          <NavLink to={"/"} label="Home" icon={<TiHome />} />
          <NavLink to="/search" label="Search" icon={<IoSearch />} />
          <NavLink to="/my-library" label="My Library" icon={<IoIosAlbums />} />
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
