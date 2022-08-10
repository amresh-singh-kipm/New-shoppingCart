import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "./Context/AppContext";
function Navbar() {
 let isLogin =useContext(AppContext)

  let handleLogout = () =>{
  localStorage.clear();  
    isLogin?.setIsSubmit(false);
  }
  return (
    <div className="nav">
      <span className="nav-title">E-commerce</span>
      <NavLink to="/" className="nav-item">
        Home
      </NavLink>
      {isLogin?.isSubmit ?<><NavLink to="/dashboard" className="nav-item">
        Dashboard
      </NavLink>
      <NavLink to="/signin" className="nav-item" onClick={handleLogout}>
        Logout
      </NavLink>
      </> 
      :<> <NavLink to="/signin" className="nav-item">
        Signin
      </NavLink>
      <NavLink to="/signup" className="nav-item">
        Signup
      </NavLink></>}
      {/* <NavLink to="/signin" className="nav-item">
        Signin
      </NavLink>
      <NavLink to="/signup" className="nav-item">
        Signup
      </NavLink>
      <NavLink to="/dashboard" className="nav-item">
        Dashboard
      </NavLink> */}
    </div>
  );
}

export default Navbar;
