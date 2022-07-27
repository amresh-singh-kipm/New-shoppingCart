import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {getCategory} from "../Helpers/CategoryAuthApi/CategoryAuthApi";
import { getUpdateProduct, updateProduct } from "../Helpers/ProductAuthApi/ProductApiHelper";
import Dashboard from "./Dashboard";

function UpdateData() {
  const location = useLocation();
  const searchs = new URLSearchParams(location.search);
  const id = searchs.get("id");

  const defaultValue = {
    category: "",
    name: "",
    description: "",
    price: "",
    stock: "",
  };
  const [updateValue, setUpdateValue] = useState(defaultValue);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    getUpdateProduct(id).then((data) => {
      console.log("DATA::", data);
      setUpdateValue({
        name: data?.name ?? "",
        description: data?.description ?? "",
        price: data?.price ?? "",
        stock: data?.stock ?? "",
        category: data?.category?._id ?? "",
      });
    });
  }, []);
  console.log("this is data for update", updateValue);

  let handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateValue({ ...updateValue, [name]: value });
  };

  useEffect(() => {
    getCategory()
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
    console.log(categories);
  }, []);

  let onSubmit = (e) => {
    e.preventDefault();
    updateProduct(id,updateValue);



    // let url= `https://merncomm.herokuapp.com/api/product/${id}/${userId}`;
    // let config ={
    //   headers: {
    //     "content-type": "multipart/form-data",
    //     Authorization: `Bearer ${token}`,
    //   },
    // };
    // axios.put(url,updateValue,config)
    // .then((resp)=>console.log(resp))
    // .catch((error)=>console.log(error))


    // return fetch(`https://merncomm.herokuapp.com/api/product/${id}/${userId}`, {
    //   method: "PUT",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //     body: JSON.stringify(item),
    //   })
      
    //     .then((resp) => console.log(resp))
    //     .catch((err) => console.log(err));
    };
    
    // sumbitUpdate(id, updateValue)
    // console.log(updateValue)
    //   .then((data) => console.log("data", data))
    //   .catch((error) => console.log(error));
  

  return (
    <>
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
                      value={updateValue.name}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  {defaultValue.name}
                  <div className="form-group">
                    <select
                      className="form-control"
                      placeholder="Category"
                      name="category"
                      value={updateValue.category}
                      onChange={(e) => handleChange(e)}
                    >
                      <option>Select</option>
                      {categories &&
                        categories.map((item) => (
                          <option value={item._id}>{item.name}</option>
                        ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="description"
                      className="form-control"
                      placeholder="Desciption"
                      value={updateValue.description}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  {}
                  <div className="form-group">
                    <input
                      type="text"
                      name="price"
                      id="price"
                      placeholder="Price"
                      className="form-control"
                      value={updateValue.price}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="stock"
                      id="stock"
                      placeholder="stock"
                      className="form-control"
                      value={updateValue.stock}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <button className="btn btn-success" onClick={onSubmit}>Update Product</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateData;
