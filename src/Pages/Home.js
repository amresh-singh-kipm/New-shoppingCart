import React, { useContext, useEffect } from "react";
import {  getProducts } from "../Helpers/ProductAuthApi/ProductApiHelper";
import { AppContext } from "../Components/Context/AppContext";

function Home() {
  const dataValue = useContext(AppContext);
  useEffect(() => {
    getProducts()
      .then((data) => {
        dataValue.setProductValue(data);
      })
      .catch((err) => console.log(err));
    }, []);
    
    console.log("dashboard data", dataValue?.productValue);
  return (
    <div className="fluid-container">
      <div className="row">
        {dataValue?.productValue?.map((item) => {
          return (
            <>
              <div className="col-lg-3 sm-4 md-4">
                <span className="home-item">{item.name}</span>
                <div className="home-cart">
                  <img
                    src="/assets/images/product-6.jpg"
                    alt="tiger"
                    width="350px"
                    height="300px"
                  />
                </div>
                <span className="home-item-desc"> {item.description} </span>
                <span className="home-item-price"> ${item.price}</span>
                <br />
                <button class="btn btn-block btn-success">Add to Cart</button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
