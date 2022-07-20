import React, { useState } from "react";
import { signup } from "../Helpers/AuthHelper";
import {useNavigate} from 'react-router-dom';

function Signup() {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [validation, setValidation] = useState({
    name: "",
    email: "",
    password: "",
  });
let navigate = useNavigate();
  //Validation for Signup form

  let handleValidation = () => {
    let message = { ...validation };
    let regax =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //validation for name field

    if (!inputValue.name.trim()) {
      message.name = "Name is required";
    } else {
      message.name = "";
    }

    //validation for email field

    if (!inputValue.email.trim()) {
      message.email = "Email is required";
    } else{
      message.email = "";
    }

    //validation for password field

    if (!inputValue.password.trim()) {
      message.password = "Password is required";
    } else {
      message.password = "";
    }

    if(!message.name && !message.email && !message.password.trim())
   {
  navigate('/signin')
   }else{
    console.log("Error are present")
   } 
    setValidation(message);
   
  };

// validation end here for signup form


  //function for handling the input field

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  //function for submitting the form
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(inputValue);
    handleValidation();
    console.log("data is sent", inputValue);
  };

  return (
    <div className="container">
      <form className="form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            value={inputValue.name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        {validation?.name && validation?.name}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            className="form-control"
            value={inputValue.email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        {validation?.email && validation?.email}
        <div className="forn-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            value={inputValue.password}
            onChange={(e) => handleChange(e)}
          />
          <br /> {validation?.password && validation?.password}
        </div>

        <button className="signin-button" onClick={handleSubmit}>
          Signup
        </button>
      </form>
      {JSON.stringify(inputValue)}
    </div>
  );
}

export default Signup;
