
import { useState } from "react";

import StripeCheckout from "react-stripe-checkout";

import axios from "axios";

import { toast } from "react-toastify";

// import "react-toastify/dist/ReactToastify.css";

function Checkout() {

//   toast.configure()
const userId = localStorage.getItem("userId");
const dataForCheckout = JSON.parse(localStorage.getItem(`cart/${userId}`));
  

const [product,setProduct] = useState(dataForCheckout);
console.log("product is",product)
  async function handleToken(token, addresses) {
    const response = await axios.post(
      "http://localhost:8080/checkout",
      { token, product }
    );

    console.log(response.status)

    if (response.status === 200) {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
    <div className="App">
      <div className="container">
        <br />
        <br />
        <h1 className="text-center">Stripe Checkout</h1>
        <br />
        <h2 className="text-center">Product Info</h2>
        {product && product.map((item,index)=>{
          return(
            <div key={index}>
            <h3 className="text-center">Product Name: {item.name}</h3>
        <h3 className="text-center">Product Price: {item.price}</h3>
        <h3 className="text-center">
          Product Description: {product.description}
        </h3>
        <br />
        <div className="form-group container">
          <StripeCheckout
            className="center"
            stripeKey="pk_test_51Lc6iESB0s4MkNrXxKsyvYwLFYySeSiXwFONR7f5UKVpOS0wsZ2s9q7fS86iyXpIQ4hczQU8dlRf6jFRMp74MdIG00DXCbJK3R"
            token={handleToken}
            amount={item.price*100 }
            name={item.name}
            billingAddress
            shippingAddress
          />
        </div>
            </div>
          )
        }) 
      }
      <div className="form-group container">
          <StripeCheckout
            className="center"
            stripeKey="pk_test_51Lc6iESB0s4MkNrXxKsyvYwLFYySeSiXwFONR7f5UKVpOS0wsZ2s9q7fS86iyXpIQ4hczQU8dlRf6jFRMp74MdIG00DXCbJK3R"
            token={handleToken}
            amount={product}
            name={product}
            billingAddress
            shippingAddress
          />
        </div>
      </div>
    </div>
  );
}

export default Checkout;