import React, { useContext, useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import { AppContext } from "../Components/Context/AppContext";
import {
  deleteProduct,
  getProducts,
} from "../Helpers/ProductAuthApi/ProductApiHelper";
import { useNavigate } from "react-router-dom";
import { getCategory } from "../Helpers/CategoryAuthApi/CategoryAuthApi";

function Manageproduct() {
  const [categories, setCategories] = useState();

  let get = () => {
    getCategory()
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  };
  // console.log("categories",categories)
  let navigate = useNavigate();
  const dataValue = useContext(AppContext);
  let productData = () => {
    getProducts()
      .then((data) => dataValue.setProductValue(data))
      .catch((err) => console.log(err));
  };
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    productData();
    get();
  }, [isDelete]);
  let handleDelete = (_id) => {
    productData();
    deleteProduct(_id)
      .then((resp) => {
        setIsDelete(!isDelete);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="fluid-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <Dashboard />
          </div>
          <div className="col-lg-8">
            <div className="data">
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>quantity</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                {dataValue?.productValue?.map((item, index) => {
                  return (
                    <tbody key={index}>
                      <tr>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.stock}</td>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              navigate(`/createproduct?id=${item._id}`);
                            }}
                          >
                            Update
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(item._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manageproduct;
