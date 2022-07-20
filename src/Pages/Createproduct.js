import React, { useState } from "react";
import { createData } from "../Helpers/AuthHelper";
import Dashboard from "./Dashboard";

function Createproduct() {
  const [inputValue, setInputValue] = useState({
    title: "",
    product:"",
    price:"",
    image:"",
  });

  let createProduct = (e) =>{
    e.preventDefault();
    createData(inputValue)
    console.log("data is sent",inputValue)

  }

  let handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <Dashboard/>
        </div>
        <div className="col-lg-8">
          <form >
            <div className="form-group">
              <label htmlFor="title">Product-Name</label>
              <input
                type="text"
                name="title"
                id="title"
                className="form-control"
                value={inputValue.title}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="product">Product-description </label>
              <input
                type="text"
                name="product"
                className="form-control"
                value={inputValue.product}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                name="price"
                id="price"
                className="form-control"
                value={inputValue.price}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">Image</label>
              <input
                type="file"
                name="image"
                id="image"
                className="form-control"
                value={inputValue.image}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <button onClick={createProduct}>Add Product</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Createproduct;
