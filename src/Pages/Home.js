import React, { useContext, useEffect } from "react";
import { getProducts } from "../Helpers/ProductAuthApi/ProductApiHelper";
import { AppContext } from "../Components/Context/AppContext";

function Home() {
  const dataValue = useContext(AppContext);
  useEffect(() => {
    getProducts()
      .then((data) => {
        dataValue.setProductValue(data);
      })
      .catch((err) => console.log(err));
    },[]);

  return (
    <div className="fluid-container">
      <div className="row">
        {dataValue?.productValue?.map((item, key) => {
          return (
            <>
              <div className="col-lg-3 sm-4 md-4" id={key}> 
                <span className="home-item">{item.name}</span>
                <div className="home-cart">
                <img
      src={""}
       alt="tiger"
       width="350px"
       height="300px"
     />
                </div>
                <span className="home-item-desc"> {item.description} </span>
                <span className="home-item-price"> ${item.price}</span>
                <br />
                <button className="btn btn-block btn-success" >Add to Cart</button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
