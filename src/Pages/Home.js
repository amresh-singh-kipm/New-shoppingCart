import React, { useContext, useEffect, useState } from "react";
import { getProducts } from "../Helpers/ProductAuthApi/ProductApiHelper";
import { AppContext } from "../Components/Context/AppContext";

function Home() {
  const dataValue = useContext(AppContext);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        dataValue.setProductValue(data);
      })
      .catch((err) => console.log(err));
  }, []);
  // useEffect(() => {
  //   localStorage.setItem("name", JSON.stringify(cart));
  // }, [cart]);

  return (
    <div className="fluid-container">
      <div className="row">
        {dataValue?.productValue?.map((item, index) => {
          return (
            
              <div className="col-lg-3 sm-4 md-4" key={index}>
                <span className="home-item">{item.name}</span>
                <div className="home-cart">
                  <img src={"/assets/images/Watch.jpeg"} alt="tiger" width="350px" height="300px" />
                </div>
                <span className="home-item-desc"> {item.description} </span>
                <span className="home-item-price"> ${item.price}</span>
                <br />
                <button
                  className="btn btn-block btn-success"
                  onClick={() => {
                    cart.push({
                      id: item._id,
                      name: item.name,
                      price: item.price,
                      description: item.description,
                    });
                    setCart([
                      ...cart,
                      {
                        id: item._id,
                        name: item.name,
                        price: item.price,
                        description: item.description,
                      },
                    ]);
                    localStorage.setItem("name", JSON.stringify(cart));
                  }}
                >
                  Add to Cart
                </button>
              </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
