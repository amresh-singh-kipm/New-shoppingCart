import React, { useContext, useState,useEffect } from "react";
import { signin } from "../Helpers/AuthHelper";
import { AppContext } from "../Components/Context/AppContext";
import {  useNavigate, } from "react-router-dom";

function Signin() {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const context = useContext(AppContext);
 let navigate = useNavigate();
let handleSubmit = (e) => {
    e.preventDefault();
    signin(inputValue)
      .then((data) => {
        if (data?.error) {
          alert(data.error);
          context.setIsSubmit(false);
          return;
        }
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.user._id);
        localStorage.setItem("userName", data.user.name);
        context.setIsSubmit(true);
      })
      .catch((err) => console.log(err));
    console.log(context);
    console.log("data", context.isSubmit);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  let data = localStorage.getItem("token")
  useEffect(() => {
    if(data){
      context.setIsSubmit(true)
      navigate("/dashboard")
    }else{
      navigate("/signin")
    }

  }, [data,navigate,context])

  return (
    <div className="fluid-container">
      <div className="container">
        <form className="form-signin">
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
    </div>
  );
}

export default Signin;
