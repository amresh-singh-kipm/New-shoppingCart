import React, { useState, useEffect } from "react";
import {
  deleteCategory,
  getCategory,
} from "../Helpers/CategoryAuthApi/CategoryAuthApi";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

function ManageCategory() {
  let nagivate = useNavigate();
  const [categories, setCategories] = useState();
  const [isDelete, setIsDelete] = useState(false);
  let get = () => {
    getCategory()
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    get();
  }, [isDelete]);

  let handleDelete = (id) => {
    get();
    deleteCategory(id)
      .then((resp) => setIsDelete(!isDelete))
      .catch((error) => console.log(error));
  };
  console.log("first", categories);
  return (
    <div className="fluid-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 md-6 sm-12">
            <Dashboard />
          </div>
          <div className="col-lg-8 md-6 sm-12">
            <div className="data">
              <table className="table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                {categories &&
                  categories.map((item, index) => {
                    return (
                      <tbody key={index}>
                        <tr>
                          <td>{item.name}</td>

                          <td>
                            <button
                              className="btn btn-primary"
                              onClick={() =>
                                nagivate(`/createcategory?id=${item._id}`)
                              }
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

export default ManageCategory;
