import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";

interface NavLinkProps {
  to: string;
  label: string;
  icon: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, icon }) => {
  return (
    <li>
      <RouterNavLink to={to} className="nav-link">
        <div className="sidebar-icon">{icon}</div>
        {label}
      </RouterNavLink>
    </li>
  );
};

export default NavLink;
