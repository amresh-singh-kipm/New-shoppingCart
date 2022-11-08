import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import { getCategory } from "../Helpers/CategoryAuthApi/CategoryAuthApi";
import { createproduct, getUpdateProduct, updateProduct } from "../Helpers/ProductAuthApi/ProductApiHelper";
import { useLocation } from "react-router-dom";

function CreateProduct() {
let location = useLocation();
let search = new URLSearchParams(location.search)
let id = search.get("id")
  // to set all field empty after submit
  const defaultValue = {
    category: "",
    name: "",
    description: "",
    price: "",
    stock: "",
    photo:null,
  };

  const [inputValue, setInputValue] = useState(defaultValue);
  const [categories, setCategories] = useState("");
  const [errormsg, setErrorMsg] = useState(defaultValue);
  const [image, setImage] = useState(null);

  let handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  
  useEffect(() => {
   if(id){
    getUpdateProduct(id)
    .then((data)=>{
      setInputValue({
        category:data?.category?._id ?? "",
        name:data?.name ??"",
        description:data?.description ?? "",
        price: data?.price ?? "",
        stock:data.stock?? "",
        photo:data.photo?? image,

      })
    })
   }
  }, [])
  

  let handleImage = (e) => {
    setImage(e.target.files[0]);
  };
  let validation = () => {
    let message = { ...errormsg };
    if (!inputValue.name.trim()) {
      message.name="please enter name";
    } else {
      message.name = "";
    }
    if (!inputValue.category.trim()) {
      message.category = "Please enter category ";
    } else {
      message.category = "";
    }
    if (!inputValue.description.trim()) {
      message.description = "Please enter description ";
    } else {
      message.description = "";
    }
    if (!inputValue.price.trim()) {
      message.price = "Please enter price ";
    } else {
      message.price = "";
    }
    if (!inputValue.stock.trim()) {
      message.stock = "Please enter stock ";
    } else {
      message.stock = "";
    }
    return message;
  };

  let formData = new FormData();
  let handleSubmit = (e) => {
    e.preventDefault();
    if(id){
      updateProduct(id,inputValue)
    }else{ formData.append("photo", image);
    formData.append("category", inputValue.category);
    formData.append("name", inputValue.name);
    formData.append("description", inputValue.description);
    formData.append("price", inputValue.price);
    formData.append("stock", inputValue.stock);

    setErrorMsg(validation());
    createproduct(formData);

    setInputValue(defaultValue);
  }
  };
  
  // let str = "Hello there";
  // let strindex = str.indexOf("e");
  // // console.log(strindex)
  // let findIndex = () => {
  //   for (let index = 0; index < str.length; index++) {
  //     if (str[index] === str[strindex])
  //       console.log("Index where e is present :", index);
  //   }
  // };

  useEffect(() => {
    // uniqueArray();
    // findIndex();
    getCategory()
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
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
                {errormsg.name && (
                  <p className="alert alert-danger">{errormsg.name}</p>
                )}
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
                      categories.map((item,index) => (
                        <option key={index} value={item._id}>{item.name}</option>
                      ))}
                  </select>
                </div>
                {errormsg.category && (
                  <p className="alert alert-danger">{errormsg.category}</p>
                )}
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
                {errormsg.description && (
                  <p className="alert alert-danger">{errormsg.description}</p>
                )}
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
                {errormsg.price && (
                  <p className="alert alert-danger">{errormsg.price}</p>
                )}
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
                {errormsg.stock && (
                  <p className="alert alert-danger">{errormsg.stock}</p>
                )}
                <div className="form-group">
                  <input
                    type="file"
                    name="images"
                    className="form-control"
                    placeholder="photo"
                    onChange={(e) => handleImage(e)}
                  />
                </div>
                <button className="btn btn-success" onClick={handleSubmit}>
                  Add Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
