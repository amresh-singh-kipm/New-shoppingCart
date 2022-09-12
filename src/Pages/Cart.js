import React, { useEffect, useState } from "react";
// import { cartItem, removeItem, updateQuantity } from "../Helpers/CartHelper";
import { IoMdRemoveCircle } from "react-icons/io";
import { GrAddCircle } from "react-icons/gr";
import Checkout from "./Checkout";
import ImageHelper from "../Helpers/ImageHelper";

function Cart() {
  let userId = localStorage.getItem("userId");
  let products = JSON.parse(localStorage.getItem("products"));
  let dataItem = JSON.parse(localStorage.getItem(`cart/${userId}`));
  const [dataForCart, setDataForCart] = useState(dataItem);

  const cartItem = () => {
    fetch("https://merncomm.herokuapp.com/api/products")
      .then((data) => data.json())
      .then(function (resp) {
        localStorage.setItem("products", JSON.stringify(resp));
        if (!localStorage.getItem("cart")) {
          localStorage.setItem("cart", "[]");
        }
      });
  };

  let cartData = JSON.parse(localStorage.getItem(`cart/${userId}`));
  const addItemToCart = (productId) => {
    let product = products.find((product) => product._id === productId);

    if (cartData?.length === 0) {
      cartData.push(product);
    } else {
      let res = cartData?.find((productsss) => productsss._id === productId);
      if (res === undefined) {
        cartData.push(product);
      }
    }
    localStorage.setItem("cart", JSON.stringify(cartData));
    // console.log("product is :::",cartData)
  };

  const removeItem = (productId) => {
    let remove = cartData?.filter((remove) => remove?._id !== productId);
    localStorage.setItem(`cart/${userId}`, JSON.stringify(remove));
    setDataForCart(remove);
  };

  const updateQuantity = (productId) => {
    // for(let product of cartData){
    //     if(product._id ===productId){
    //         cartData?.map((item)=>{
    //             return(
    //                (item.stock=item.stock+1)
    //             )
    //         })
    //     }
    // }
    let quantity = cartData?.filter((product) => product?._id === productId);
    if (quantity) {
      quantity?.map((item) => {
        return (item.stock = item.stock + 1);
      });
    }
    localStorage.setItem(`cart/${userId}`, JSON.stringify(cartData));
    setDataForCart(cartData);
  };

  const onDecreasement = (productId) => {
    let quantity = cartData?.filter((product) => product?._id === productId);
    if (quantity) {
      quantity?.map((item) => {
        if (item.stock > 1) {
          return (item.stock = item.stock - 1);
        }
      });
    }
    localStorage.setItem(`cart/${userId}`, JSON.stringify(cartData));
    setDataForCart(cartData);
  };

  //    const[dataCompare,setDataCompare] = useState("");
  //    const[dataForShow,setDataForShow] = useState(null)
  //    console.log("first",dataCompare)
  //    const showData = (arr1,arr2) => {
  //     return arr1.filter((item) => {
  //       return arr2.some((element) => {
  //         return item?._id === element?._id;
  //       });
  //     });
  //   };
  //   useEffect(()=>{
  //     setDataCompare(products)
  //   },[])

  //   useEffect(()=>{
  // setDataForShow(showData(dataCompare,dataForCart))
  //   },[])
  //   console.log("snduifhuisedfhidshi",dataForShow);

  //   const removeCartItem = (productId)=>{
  //     removeItem(productId)
  //     showData()
  //   }
  return (
    <>
    {dataForCart ? ( <div className="cart-section">
      <h1 style={{ textAlign: "center", color: "#f7444e", marginTop: "10px", marginBottom:"10px" }}>
        My Cart
      </h1>
    

      <section className="main-cart-section">

        <div className="cart-items">
          <div className="cart-items-container">
              {dataForCart&& dataForCart.map((item,index) => {
                return (
                  <div key={index}>
                  <div className="items-info " >
                  <div className="product-img">
                    <ImageHelper product={item} />
                  </div>
          
                  <div className="title">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                  </div>
          
                  <div className="add-minus-quantity">
                    <i className="fas fa-minus minus" onClick={() => onDecreasement(item._id)}></i>
                    <input type="text" placeholder={item.stock} disabled />
                    <i className="fas fa-plus add" onClick={() => updateQuantity(item._id)}></i>
                  </div>
          
                  <div className="price">
                    <h3>{item.price*item.stock}₹</h3>
                  </div>
          
                  <div className="remove-item">
                    <i
                      className="fas fa-trash-alt remove"
                      onClick={() => removeItem(item._id)}></i>
                  </div>
                </div>
                  <hr/>
                  </div>
                );
              })}
          
          </div>
        </div>

        <div className="card-total">
          <h3>
            Cart Total : <span>{
              dataForCart?.reduce((total,data)=>total+data.price*data.stock,0)
              }₹</span>
          </h3>
          <button className="cart-checkout">checkout</button>
          <button className="clear-cart" >
            Clear Cart
          </button>
        </div>
      </section>
    <Checkout/>
     
    </div>):(
      <div className="cart-empty">
        <h1 style={{color:"red",textAlign:"center",margin:"10px"}}>Cart is empty</h1>
      </div>
    )}
   
    </>
  );
}

export default Cart;

{
  /* <div className="row">
        {dataForCart &&
          dataForCart?.map((item, index) => {
            return (
              <div key={index}>
                {item._id}
                {item.name}
                {item.stock}
                {item.price*item.stock}
                <button
                  className="btn btn-primary m-2"
                  onClick={() => removeItem(item._id)}
                >
                  Remove Item
                </button>
                <button
                  className="btn btn-danger m-2"
                  onClick={() => onDecreasement(item._id)}
                >
                 <IoMdRemoveCircle/>
                </button>
                <button
                  className="btn btn-danger m-2"
                  onClick={() => updateQuantity(item._id)}
                >
                  <GrAddCircle/>
                </button>
              </div>
            );
          })}
      </div>
      {<span>
        Total amount is ::
        {dataForCart?.reduce(
          (total,data)=>total + data.price*data.stock,0)}
        </span>
        }
        <Checkout/> */
}
