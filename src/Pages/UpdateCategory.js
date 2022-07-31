import React, { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import { updateCategory,submitUpdateCategory } from "../Helpers/CategoryAuthApi/CategoryAuthApi";
import Dashboard from "./Dashboard";
function UpdateCategory() {
  let location = useLocation();
  let search = new URLSearchParams(location.search);
  const id = search.get("id");
  const [inputValue, setInputValue] = useState({
    name: "",
  });
  const[errorMsg,setErrorMsg] = useState(null)
  let handleChange = (name) => (e) => {
    //    const {name,value} = e.target;
    setInputValue({ ...inputValue, [name]: e.target.value });
  };
  useEffect(() => {
    updateCategory(id).then((data) => {
      setInputValue({
        name: data?.name ?? "",
      });
    });
  }, []);

  let validation = () => {
    if (!inputValue.name.trim()) {
      setErrorMsg("Provide a category");
    } else {
      setErrorMsg("");
    }
  };
  let onSubmit = (e) =>{
e.preventDefault();
validation();
submitUpdateCategory(id,inputValue)
  }
  return (
    <div className="fluid-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <Dashboard/>
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
                    onChange={handleChange("name")}
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

export default UpdateCategory;
