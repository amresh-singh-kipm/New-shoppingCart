import React, { useEffect, useState } from "react";
// import { cartItem, removeItem, updateQuantity } from "../Helpers/CartHelper";

function Cart() {
  let dataCart = JSON.parse(localStorage.getItem("cart"));
  const [dataForCart, setDataForCart] = useState(dataCart);

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
  let products = JSON.parse(localStorage.getItem("products"));
  let cartData = JSON.parse(localStorage.getItem("cart"));

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
    let remove = cartData.filter((remove) => remove._id !== productId);
    localStorage.setItem("cart", JSON.stringify(remove));
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
    let quantity = cartData.filter((product) => product._id === productId);
    if (quantity) {
      quantity.map((item) => {
        return (item.stock = item.stock + 1);
      });
    }
    localStorage.setItem("cart", JSON.stringify(cartData));
    setDataForCart(cartData);
  };

  const onDecreasement = (productId) => {
    let quantity = cartData.filter((product) => product._id === productId);
    if (quantity) {
      quantity.map((item) => {
        if (item.stock > 0) {
          return (item.stock = item.stock - 1);
        }
      });
    }
    localStorage.setItem("cart", JSON.stringify(cartData));
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
    <div className="fluid-container">
      <div className="row">
        {dataForCart &&
          dataForCart.map((item, index) => {
            return (
              <div key={index}>
                {item._id}
                {item.name}
                {item.stock}
                <button
                  className="btn btn-primary"
                  onClick={() => removeItem(item._id)}
                >
                  Remove Item
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => onDecreasement(item._id)}
                >
                  Decrease quantity
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => updateQuantity(item._id)}
                >
                  Update quantity
                </button>
              </div>
            );
          })}
      </div>
    </div>
    // <div className='fluid-container'>
    //     <h1>lorem34</h1>
    // {cartItem && cartItem.map((item,index)=>{
    //     return(
    //         <div className='data'id={index}>
    //             {item.id}
    //             {item.name}
    //         </div>
    //     )
    // })}
    // </div>
  );
}

export default Cart;
