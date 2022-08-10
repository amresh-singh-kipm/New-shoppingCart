import React, { useState, useEffect } from "react";
import {
  createCategory,
  submitUpdateCategory,
  updateCategory,
} from "../Helpers/CategoryAuthApi/CategoryAuthApi";
import Dashboard from "./Dashboard";
import { useLocation } from "react-router-dom";
function CreateCategory() {
  let location = useLocation();
  let search = new URLSearchParams(location.search);
  const id = search.get("id");

  const [inputValue, setInputValue] = useState({
    name: "",
  });
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  useEffect(() => {
    if (id) {
      updateCategory(id).then((data) => {
        setInputValue({
          name: data?.name ?? "",
        });
      });
    }
  }, []);

  let onSubmit = (e) => {
    e.preventDefault();
    validation();
    if (id) {
      submitUpdateCategory(id, inputValue);
    } else {
      createCategory(inputValue)
        .then((resp) => {
          if (resp?.err) {
            setSuccessMsg("Category is not created")
          } else {
            setSuccessMsg("Category is created")
          }
        })
        .catch((err) => console.log(err));
    }
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
            {successMsg && <p className="alert alert-danger">{successMsg}</p>}
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
                <button
                  className="btn btn-success"
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
