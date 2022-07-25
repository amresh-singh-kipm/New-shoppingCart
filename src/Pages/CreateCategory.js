import React, { useState } from "react";
import { createCategory } from "../Helpers/AuthHelper";
import Dashboard from "./Dashboard";

function Createproduct() {
  const [inputValue, setInputValue] = useState({
    name: "",
  });

  let createProduct = (e) => {
    e.preventDefault();
    createCategory(inputValue);
    console.log("data is sent", inputValue);
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
                <button
                  type="submit"
                  onClick={createProduct}
                  className="btn btn-outline-success mb-3"
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

export default Createproduct;
