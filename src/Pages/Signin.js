import React, { useState } from "react";
import { signin } from "../Helpers/AuthHelper";

function Signin() {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });

  let handleSubmit = (e) => {
    e.preventDefault();
    signin()
     
    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <div className="container">
      <form className="form">
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
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            className="form-control"
            value={inputValue.password}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button className="signin-button" onClick={handleSubmit}>
          Signin
        </button>
      </form>
      {JSON.stringify(inputValue)}
    </div>
  );
}

export default Signin;
