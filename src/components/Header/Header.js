import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="h-20 flex justify-center items-center">
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "link")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "link")}
        to="/reviews"
      >
        Reviews
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "link")}
        to="/dashboard"
      >
        Dashboard
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "link")}
        to="/blogs"
      >
        Blogs
      </NavLink>
    </nav>
  );
};

export default Header;
