import React from "react";
import { NavLink } from "react-router-dom";

// prettier-ignore
const Navigation = () => {
  return (
    <ul className="header">
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/About">About</NavLink></li>
      <li><NavLink to="/Contact">Contact</NavLink></li>
    </ul>
  );
};

export default Navigation;
