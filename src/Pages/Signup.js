import React, { useState } from "react";
import { signup } from "../Helpers/AuthHelper";

function Signup() {
  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
const handleSubmit =(e)=>{
  e.preventDefault();
   signup()
  //  console.log("input value",signup(inputValue))
//     body: JSON.stringify(inputValue),
//   .then((data) => {
//     console.log("data is sent successfully", data);
//   });
}

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
        </div>
        <button className="signin-button" onClick={handleSubmit}>Signup</button>
        
      </form>
      {JSON.stringify(inputValue)}
    </div>
  );
}

export default Signup;
