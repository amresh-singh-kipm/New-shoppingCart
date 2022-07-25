import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import { getCategory } from "../Helpers/AuthHelper";
import axios from "axios";

function CreateProduct() {
  let userId = localStorage.getItem("userId");
  let token = localStorage.getItem("token");
  const [inputValue, setInputValue] = useState({
    category: "",
    name: "",
    description: "",
    price: "",
    stock: "",
  });
  const [categories, setCategories] = useState(null);

  let handleChange = (e) => {
    // const value = name === "image"? e.target.files[0] : e.target.value;
    // formData.set({ [name]: value });
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    submit(inputValue);
    console.log();
  };
  let submit = () => {
    let url = `https://merncomm.herokuapp.com/api/product/create/${userId}`;
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .post(url, inputValue, config)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  };

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
                <div className="form-group">
                  {/* <input
                    type="text"
                    name="category"
                    className="form-control"
                    placeholder="category"
                    value={inputValue.category}
                    onChange={(e) => handleChange(e)}
                  /> */}
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
                {/* <div className="form-group">
              <label htmlFor="image">Image</label>
              <input
                type="file"
                name="image"
                id="image"
                className="form-control"
                onChange={(e) => handleImage(e)}
              />
            </div> */}
                <button onClick={handleSubmit}>Add Product</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
