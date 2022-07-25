import React, { useContext, useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import { AppContext } from "../Components/Context/AppContext";
import { deleteProduct, getData } from "../Helpers/AuthHelper";

function Manageproduct() {
  let userId = localStorage.getItem("userId");
  const dataValue = useContext(AppContext);
  let productData = () => {
    getData()
      .then((data) => dataValue.setProductValue(data))
      .catch((err) => console.log(err));
  };
 const [isDelete, setIsDelete] = useState(false)

  useEffect(() => {
    productData();
  }, [isDelete]);
  let handleDelete =  (_id) => {
    productData();
   deleteProduct(_id)
      .then((resp) => {
        setIsDelete(!isDelete)
      })
      .catch((error) => console.log(error));
     ;
  };
  console.log("dashboard ", dataValue?.productValue);
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
                {dataValue?.productValue?.map((item) => {
                  return (
                    <>
                      <tbody>
                        <tr>
                          <td>{item.name}</td>
                          <td>{item.price}</td>
                          <td>{item.stock}</td>
                          <td>
                            <button>Update</button>
                          </td>
                          <td>
                            <button
                              onClick={() =>
                                handleDelete(item._id)
                              }
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </>
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
