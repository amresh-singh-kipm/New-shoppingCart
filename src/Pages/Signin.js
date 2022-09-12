import React, { useContext, useState, useEffect } from "react";
import { signin } from "../Helpers/AuthHelper";
import { AppContext } from "../Components/Context/AppContext";
import { NavLink, useNavigate } from "react-router-dom";

function Signin() {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState({ email: "", password: "" });
  const context = useContext(AppContext);
  let navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    validation();
    signin(inputValue)
      .then((data) => {
        console.log(data)
        if (data?.error) {
          context.setIsSubmit(false);
          return;
        } else {
          alert("You hava successfully logged");
        }
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.user._id);
        localStorage.setItem("userName", data.user.name);
        localStorage.setItem("email",data.user.email)
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
    <>
      <div className="form-container-section">
        <div className="form-container"></div>
        <div className="form-container form-section">
          <div className="row">
            <div className="col-sm-6 col-md-5 col-lg-5">
              <div className="form-logo-section">
                <img src="/assets/images/shopify.png" width="300px"/>
                <div className="form-description-section">
                  <p>welcome to login page</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-7 col-lg-7">
              <div className="white">
                <div className="form-main-section">
                  <div className="login-form">
                    <p className="form-title">
                      <strong>log in </strong>
                    </p>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="form-control"
                        value={inputValue.email}
                        onChange={handleChange2("email")}
                      />
                    </div>
                    {errorMsg?.email && (
                      <p className="alert alert-danger">{errorMsg.email}</p>
                    )}
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        value={inputValue.password}
                        onChange={handleChange2("password")}
                      />
                      <div className="forget-password">
                      <span>forget password?</span>
                    </div>
                    </div>
                    
                    {errorMsg?.password && (
                      <p className="alert alert-danger">{errorMsg.password}</p>
                    )}
                    <button
                      className="btn btn-success"
                      onClick={handleSubmit}
                    >
                      Signin
                    </button>
                    <div className="form-footer">
                      <span>Need a account? <NavLink to="/signup">SignUp</NavLink></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
