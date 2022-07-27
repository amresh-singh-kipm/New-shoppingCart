import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import { getCategory } from "../Helpers/CategoryAuthApi/CategoryAuthApi";
import { createproduct } from "../Helpers/ProductAuthApi/ProductApiHelper";

function CreateProduct() {
  const defaultValue = {
    category: "",
    name: "",
    description: "",
    price: "",
    stock: "",
  };
  const [inputValue, setInputValue] = useState(defaultValue);
  const [categories, setCategories] = useState(null);
  const[errormsg,setErrorMsg] = useState(defaultValue);
  let handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  let validation = () =>{
    let message = {...errormsg}
    if(!inputValue.name.trim()){
      message.name="Please enter name ";
    }else{
      message.name="";
    }
    if(!inputValue.category.trim()){
      message.category="Please enter category ";
    }else{
      message.category="";
    }
    if(!inputValue.description.trim()){
      message.description="Please enter description ";
    }else{
      message.description="";
    }
    if(!inputValue.price.trim()){
      message.price="Please enter price ";
    }else{
      message.price="";
    }
    if(!inputValue.stock.trim()){
      message.stock="Please enter stock ";
    }else{
      message.stock="";
    }
    return message;
  }



  let handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg(validation());
    createproduct(inputValue);
    console.log();
    setInputValue(defaultValue);
  };
  // let submit = () => {
  //   let url = `https://merncomm.herokuapp.com/api/product/create/${userId}`;
  //   const config = {
  //     headers: {
  //       "content-type": "multipart/form-data",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };
  //   axios
  //     .post(url, inputValue, config)
  //     .then((resp) => alert("Product is created Successfully"))
  //     .catch((err) => alert(err));
  // };

  useEffect(() => {
    getCategory()
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
    console.log(categories);
  }, []);

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
                    className="form-control"
                    placeholder="Name"
                    value={inputValue.name}
                    onChange={(e) => handleChange(e)}
                  />  
                </div>
                {errormsg.name &&(<p className="alert alert-danger">{errormsg.name}</p>)}
                <div className="form-group">
                  <select
                    className="form-control"
                    placeholder="Category"
                    name="category"
                    value={inputValue.category}
                    onChange={(e) => handleChange(e)}
                  >
                    <option>Select</option>
                    {categories &&
                      categories.map((item) => (
                        <option value={item._id}>{item.name}</option>
                      ))}
                  </select>
                </div>
                {errormsg.category &&(<p className="alert alert-danger">{errormsg.category}</p>)}
                <div className="form-group">
                  <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Desciption"
                    value={inputValue.description}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                {errormsg.description &&(<p className="alert alert-danger">{errormsg.description}</p>)}
                <div className="form-group">
                  <input
                    type="text"
                    name="price"
                    id="price"
                    placeholder="Price"
                    className="form-control"
                    value={inputValue.price}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                {errormsg.price &&(<p className="alert alert-danger">{errormsg.price}</p>)}
                <div className="form-group">
                  <input
                    type="text"
                    name="stock"
                    id="stock"
                    placeholder="stock"
                    className="form-control"
                    value={inputValue.stock}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                {errormsg.stock &&(<p className="alert alert-danger">{errormsg.stock}</p>)}
                <button className="btn btn-success" onClick={ handleSubmit}>Add Product</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
