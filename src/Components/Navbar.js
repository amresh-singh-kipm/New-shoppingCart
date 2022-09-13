import React from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {FaShoppingBag} from 'react-icons/fa'
import {BsSearch} from 'react-icons/bs'
import { AppContext } from "./Context/AppContext";
import { useContext } from "react";

function NavScrollExample() {
  let isLogin = useContext(AppContext);
  let handleLogout = () =>{
    isLogin?.setIsSubmit(false);
    let removeKey = ["token","userId"];
    removeKey.forEach(k =>
      localStorage.removeItem(k))
  
    // localStorage.removeItem("userId","token");
    // localStorage.removeItem()
  }
  let userId = localStorage.getItem("userId");
  let cartLength = JSON.parse(localStorage.getItem(`cart/${userId}`));  
  let length = cartLength?.length;
  
  return (
       <Navbar bg="none" expand="lg">
      <Container >
      <Navbar.Brand to="/" className="navbar-title">shopify</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"  />
        <Navbar.Collapse id="navbarScroll" className="navbar-menu" >
          <div className="navbar-menu-item">
          <Nav
            className="me-auto my-2 my-lg-0 nav-item"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to="/" className="nav-link" >Home</NavLink>
            <NavLink to="/cart" className="nav-link">Shop</NavLink>
           
            {isLogin?.isSubmit ? ( <><NavLink to="/dashboard" className="nav-link" >
            Dashboard
            </NavLink>
            <NavLink to="/signin" className="nav-link" onClick={handleLogout}>
            Logout
            </NavLink>
            </>
            ):(
              <>
            <NavLink to="/signin" className="nav-link">Signin</NavLink>
            <NavLink to="/signup" className="nav-link">Signup </NavLink>
              </>
            )}
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item to="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item to="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          </div>
          <div className="icon-section">
              <NavLink to="/cart" className="icon-item">
            <FaShoppingBag/>
            <span>{length}</span>
            </NavLink>
            <NavLink to="#" className="icon-item">
            <BsSearch/>
            </NavLink>
              </div>
           
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;

// import React, { useContext } from "react";
// import { NavLink } from "react-router-dom";
// import { AppContext } from "./Context/AppContext";
// function Navbar() {

//   let handleLogout = () =>{
//   localStorage.clear();
//     isLogin?.setIsSubmit(false);
//   }
//   return (
//     <div className="nav">
//       <span className="nav-title">E-commerce</span>
//       <NavLink to="/" className="nav-item">
//         Home
//       </NavLink>
//       <NavLink to="/cart" className="nav-item">
//         Cart
//       </NavLink>
//       {isLogin?.isSubmit ?<><NavLink to="/dashboard" className="nav-item">
//         Dashboard
//       </NavLink>
//       <NavLink to="/signin" className="nav-item" onClick={handleLogout}>
//         Logout
//       </NavLink>
//       </>
//       :<> <NavLink to="/signin" className="nav-item">
//         Signin
//       </NavLink>
//       <NavLink to="/signup" className="nav-item">
//         Signup
//       </NavLink></>}
//       {/* <NavLink to="/signin" className="nav-item">
//         Signin
//       </NavLink>
//       <NavLink to="/signup" className="nav-item">
//         Signup
//       </NavLink>
//       <NavLink to="/dashboard" className="nav-item">
//         Dashboard
//       </NavLink> */}
//     </div>
//   );
// }

// export default Navbar;
