import React, { useContext, useState } from "react";

import { signin } from "../Helpers/AuthHelper";
import { AppContext } from "../Components/Context/AppContext";

function Signin() {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const context = useContext(AppContext);
 
  let handleSubmit = (e) => {
    e.preventDefault();

    signin(inputValue)
      .then((data) => {
        if (data?.error) {
          alert(data.error);
          context.setIsSubmit(false);
          return;
        }
        console.log(data);
        localStorage.setItem("token", data.token);
        context.setIsSubmit(true);
      
       
      })
      .catch((err) => console.log(err));
    console.log(context);
    console.log("data",context.isSubmit)
  };

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  // let data = localStorage.getItem("token")
  // useEffect(() => {
  //   console.log(data)
  //   if(data){
  //     context.setIsSubmit(true); 
  //     <Navigate to ={"/dashboard"}/>
  //   }else{
  //     <Navigate to ={"/signin"}/>
  //   }
  
   
  // }, [data,context])
  

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
