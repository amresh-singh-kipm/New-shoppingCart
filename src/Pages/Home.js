import React, { useContext, useEffect } from "react";
import { getData } from "../Helpers/AuthHelper";
import { AppContext } from "../Components/Context/AppContext";

function Home() {
  const dataValue = useContext(AppContext);
  useEffect(() => {
    getData()
      .then((data) => dataValue.setProductValue(data))
      .catch((err) => console.log(err));
    console.log("dashboard data", dataValue?.productValue);
  }, []);
  return (
    <div className="fluid-container">
      <div className="row">
        {dataValue?.productValue?.map((item) => {
          return (
            <>
              <div className="col-lg-3">
                <span className="home-item">{item.name}</span>
                <div className="home-cart">
                  <img
                    src="/assets/images/index.jpeg"
                    alt="tiger"
                    width="250px"
                    height="300px"
                  />
                </div>
                <span className="home-item-desc"> {item.description} </span>
                <span className="home-item-price"> ${item.price} </span>
                <br />
                <span className="cart-button">Add to Cart</span>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
