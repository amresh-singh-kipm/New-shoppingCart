import axios from "axios";
import { config } from "../../Utils/api.constant";
let userId = localStorage.getItem("userId");


export const getProducts = () => {
    return fetch(`${config.host}${config.products.getProduct}`)
      .then((data) => data.json())
      .catch((err) => console.log(err));
  };
  export const createproduct = (name) => {
    let url=`${config.host}${config.products.createProduct}/${userId}`;
     let config1 = {
      headers:config.headersWithFormData,
     };
    axios.post(url,name,config1)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  };
  export const deleteProduct = (id) => {
    return fetch(`${config.host}${config.products.deleteProduct}/${id}/${userId}`, {
      method: "DELETE",
      headers:config.headersWithToken,
      body: JSON.stringify(),   
    })
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  };
  export const getUpdateProduct = (id) => {
    return fetch(`${config.host}${config.products.updateProduct}/${id}`)
      .then((resp) =>resp.json())
      .catch((err) => console.log(err));
  };
  export const updateProduct = (id,name) => {
    return fetch(`${config.host}${config.products.updateProduct}/${id}/${userId}`,{
      method:'PUT',
      headers:config.headersWithFormData,
      body:JSON.stringify(name)
    })
    .then((resp)=>console.log(resp))
    .catch((error)=>console.log(error))
  };

      // let url1 = `${config.host}${config.products.updateProduct}/${id}/${userId}`;
      // let config2 = {
      //   headers:config.headersWithFormData
      // };
      // axios.put(`${config.host}${config.products.updateProduct}/${id}/${userId}`,config2)
      // .then((resp)=>console.log(resp))
      // .catch((error)=>console.log(error))


      // return fetch(`https://merncomm.herokuapp.com/api/product/${id}/${userId}`, {
      //   method: "PUT",
      //   headers: config.headersWithToken,
      //   body: JSON.stringify(name),
      // })
      //   .then((resp) => resp.json())
      //   .catch((err) => console.log(err));
    