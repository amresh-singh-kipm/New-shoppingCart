import React, { useContext, useEffect, useState } from "react";
import { getData } from "../Helpers/AuthHelper";
import { AppContext } from "../Components/Context/AppContext";

function Home() {
  const [productId, setProductId] = useState([]);
  const dataValue = useContext(AppContext);
  useEffect(() => {
    getData()
      .then((data) => {
        dataValue.setProductValue(data);
      })
      .catch((err) => console.log(err));
    }, []);
    
    console.log("dashboard data", dataValue?.productValue);
  useEffect(() => {
    // if(dataValue?.productValue?.length>0){
      dataValue?.productValue?.forEach(element => {
        console.log(element._id)
        productId.push(element._id)
        setProductId([...productId])
      });
    // }
  }, [dataValue])
  
  console.log("PRODUCT IDS::",productId);
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
