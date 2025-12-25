import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle = ({ isActive }) => ({ color: isActive ? "red" : "black"});

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" style={linkStyle}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" style={linkStyle}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/characters" style={linkStyle}>
            Characters
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
