import React, { useState } from "react";
import { createCategory } from "../Helpers/CategoryAuthApi/CategoryAuthApi";
import Dashboard from "./Dashboard";

function CreateCategory() {
  const [inputValue, setInputValue] = useState({
    name: "",
  });
  const [errorMsg, setErrorMsg] = useState(null);

  let onSubmit = (e) => {
    e.preventDefault();
    validation();
    createCategory(inputValue)
    .then((data)=>{
      if(data?.error){
        alert("dataerror")
        return
      }else{
        alert("hello")
      }
    })
    .catch((error)=>alert(error))
    console.log("data is sent", inputValue);
  };
  let validation = () => {
    if (!inputValue.name.trim()) {
      setErrorMsg("Provide a category");
    } else {
      setErrorMsg("");
    }
  };

  let handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <div className="fluid-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <Dashboard />
          </div>
          <div className="col-lg-8">
            <div className="page-content">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    id="title"
                    placeholder="For ex-winter"
                    className="form-control"
                    value={inputValue.name}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                {errorMsg && <p className="alert alert-danger">{errorMsg}</p>}
                <button className="btn btn-success"
                  type="submit"
                  onClick={onSubmit}
                >
                  Add Category
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateCategory;
