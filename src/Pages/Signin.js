import React, { useContext, useState, useEffect } from "react";
import { signin } from "../Helpers/AuthHelper";
import { AppContext } from "../Components/Context/AppContext";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState({ email: "", password: "" });
  const context = useContext(AppContext);
  let navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    validation()
    signin(inputValue)
      .then((data) => {
        if (data?.error) {
          context.setIsSubmit(false);
          return;
        
        }
        else{alert("You hava successfully logged")}
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.user._id);
        localStorage.setItem("userName", data.user.name);
        context.setIsSubmit(true);
      })
      .catch((err) => console.log(err));
    console.log(context);
    console.log("data", context.isSubmit);
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setInputValue({ ...inputValue, [name]: value });
  // };

  const handleChange2 = (name) => (e) => {
    setInputValue({ ...inputValue, [name]: e.target.value });
  };

  let data = localStorage.getItem("token");
  useEffect(() => {
    if (data) {
      context.setIsSubmit(true);
      navigate("/dashboard");
    } else {
      navigate("/signin");
    }
  }, [data, navigate, context]);

  let validation = () => {
    let regax =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let message = { ...errorMsg };
    if (!inputValue.email.trim()) {
      message.email = "Email is required";
    } else if (inputValue.email.match(regax)) {
      message.email = "";
    } else {
      message.email = "Email format is wrong";
    }

    //validation for password field

    if (!inputValue.password.trim()) {
      message.password = "Password is required";
    } else {
      message.password = "";
    }
    setErrorMsg(message);
  };

  return (
    <div className="fluid-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 md-6 sm-12">
            <form className="form-signin">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="form-control"
                  value={inputValue.email}
                  // onChange={(e) => handleChange(e)}
                  onChange={handleChange2("email")}
                />
              </div>
              {errorMsg?.email&& <p className="alert alert-danger">{errorMsg.email}</p>}
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  value={inputValue.password}
                  // onChange={(e) => handleChange(e)}
                  onChange={handleChange2("password")}
                />
              </div>
              {errorMsg?.password && <p className="alert alert-danger">{errorMsg.password}</p>}
              <button className="signin-button" onClick={handleSubmit}>
                Signin
              </button>
              <br />
              {JSON.stringify(inputValue)}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
