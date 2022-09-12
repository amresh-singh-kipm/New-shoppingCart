import React, { useState } from "react";
import { signup } from "../Helpers/AuthHelper";
import { useNavigate,NavLink } from "react-router-dom";

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
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    //validation for name field

    if (!inputValue.name.trim()) {
      message.name = "Name is required";
    } else {
      message.name = "";
    }

    //validation for email field

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

    if (!message.name && !message.email && !message.password.trim()) {
      navigate("/signin");
    } else {
      console.log("Error are present");
    }
    setValidation(message);
  };

  // validation end here for signup form

  //function for handling the input field

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setInputValue({ ...inputValue, [name]: value });
  // };
  const handleChange1 = (name) => (e) => {
    setInputValue({ ...inputValue, [name]: e.target.value });
  };

  //function for submitting the form
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(inputValue);
    handleValidation();
    console.log("data is sent", inputValue);
  };

  return (
    <>
      <div className="form-container-section">
        <div className="form-container"></div>
        <div className="form-container form-section">
          <div className="row">
            <div className="col-lg-5">
              <div className="form-logo-section">
                <img src="/assets/images/shopify.png" width="300px" />
                <div className="form-description-section">
                  <p>welcome to SignUp page</p>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="white">
                <div className="form-main-section">
                  <div className="login-form">
                    <p className="form-title">
                      <strong>Sign Up</strong>
                    </p>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        className="form-control"
                        value={inputValue.name}
                        onChange={handleChange1("name")}
                      />
                    </div>
                    {validation?.name && (
                      <p className="alert alert-danger">{validation?.name}</p>
                    )}
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="form-control"
                        value={inputValue.email}
                        onChange={handleChange1("email")}
                      />
                    </div>
                    {validation?.email && (
                      <p className="alert alert-danger">{validation?.email}</p>
                    )}
                    <div className="forn-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        value={inputValue.password}
                        onChange={handleChange1("password")}
                      />
                      <br />
                      {validation?.password && (
                        <p className="alert alert-danger">
                          {validation?.password}
                        </p>
                      )}
                    </div>

                    <button className="btn btn-success" onClick={handleSubmit}>
                      Signup
                    </button>
                    <div className="form-footer">
                      <span>Already have an account? <NavLink to="/signin">Signin</NavLink> </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    // <div className="fluid-container">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-sm-12 md-6 lg-12">
    //       <form className="form-signout">
    //       <div className="form-group">
    //         <label htmlFor="name">Name</label>
    //         <input
    //           type="text"
    //           name="name"
    //           id="name"
    //           className="form-control"
    //           value={inputValue.name}
    //           onChange={handleChange1("name")}
    //         />
    //       </div>
    //       {validation?.name && <p className="alert alert-danger">{validation?.name}</p>}
    //       <div className="form-group">
    //         <label htmlFor="email">Email</label>
    //         <input
    //           type="text"
    //           name="email"
    //           id="email"
    //           className="form-control"
    //           value={inputValue.email}
    //           onChange={handleChange1("email")}
    //         />
    //       </div>
    //       {validation?.email &&  <p className="alert alert-danger">{validation?.email}</p>}
    //       <div className="forn-group">
    //         <label htmlFor="password">Password</label>
    //         <input
    //           type="password"
    //           name="password"
    //           id="password"
    //           className="form-control"
    //           value={inputValue.password}
    //           onChange={handleChange1("password")}
    //         />
    //         <br /> {validation?.password &&  <p className="alert alert-danger">{validation?.password}</p>}
    //       </div>

    //       <button className="signin-button" onClick={handleSubmit}>
    //         Signup
    //       </button>
    //       {JSON.stringify(inputValue)}
    //     </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Signup;
