import React, { useContext, useEffect, useState } from "react";
import { getProducts } from "../Helpers/ProductAuthApi/ProductApiHelper";
import { AppContext } from "../Components/Context/AppContext";
import ImageHelper from "../Helpers/ImageHelper";

import SliderSection from "./SliderSection";
import { addItemToCart, cartItem } from "../Helpers/CartHelper";
function Home() {
  const dataValue = useContext(AppContext);

// const addToCart = (product) =>{
//   localStorage.setItem("cartDetail",JSON.stringify(product));
//   fetch("http://localhost:3000/cart",{
//     method:'POST',
//     headers:{
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body:JSON.stringify(product)
//   })
//   .then((data)=>console.log(data))
//   .catch((error)=>console.log(error))
// };



//   const onAdd = (productValue)=>{
//     console.log(productValue)
//     const exist = cart.find((x)=> x.id ===productValue.id);
//     if(exist){
//       const newCartItems = cart.map((x)=>
//       x._id ===productValue._id?{...exist,stock:exist.stock+1}:x
//       );
//       setCart(newCartItems);
//   }
//     console.log("bknjbjbjbjbjbjbjbjbjbjb",exist)
//   };
// console.log("cartItem is:::", cart);
  useEffect(() => {
    cartItem();
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
    <React.Fragment>
      <SliderSection />
      <div className="container">
        <h1 className="text-center mb-5">
          Our <span>Product</span>{" "}
        </h1>
        <div className="row">
          {dataValue?.productValue?.map((item, index) => {
            return (
              <div className="col-sm-12 col-md-6 col-lg-4 d-flex" key={index}>
                <div className="box">
                  <div className="image-box">
                    <ImageHelper product={item}  />
                  </div>
                  <div className="product-detail-box">
                    <h5>{item.name}</h5>
                    <h4>{item.price}</h4>
                  </div>
                  <div className="option-container">
                    <div className="option">
                      <button className="option1"onClick={()=>addItemToCart(item._id)}>Add To Cart</button>
                      <button className="option2" >Buy Now</button>
                    </div>
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      {/* <div className="row">
        {dataValue?.productValue?.map((item, index) => {
          return (
            
              <div className="col-lg-3 sm-4 md-4" key={index}>
                <span className="home-item">{item.name}</span>
                <div className="home-cart">
                 <ImageHelper product={item}/>
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
      </div> */}
      {/* <Carousel>
      <Carousel.Item>
      <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        
      </Carousel.Item>
      <Carousel.Item>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Item>
      <Carousel.Item>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
      </Carousel.Item>
    </Carousel> */}
    </div>
    </React.Fragment>
  );
}

export default Home;
