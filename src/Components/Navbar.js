import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="nav">
      <span className="nav-title">E-commerce</span>
      <NavLink to="/" className="nav-item">
        Home
      </NavLink>
      <NavLink to="/signin" className="nav-item">
        Signin
      </NavLink>
      <NavLink to="/signup" className="nav-item">
        Signup
      </NavLink>
      <NavLink to="/dashboard" className="nav-item">
        Dashboard
      </NavLink>
    </div>
  );
}

export default Navbar;
