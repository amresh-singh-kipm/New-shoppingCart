import { config } from "../Utils/api.constant";



export const signup = (data) => {
  return fetch(`${config.host}${config.auth.signup}`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify(data),
  })
    .then((data) => data.json())
    .catch((err) => console.log(err));
};

export const signin = (data) => {
  return fetch(`${config.host}${config.auth.signin}`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify(data),
  })
    .then((data) => data.json())
    .catch((err) => console.log(err));
};

// export const getProducts = () => {
//   return fetch(`${config.host}${config.products.getProduct}`)
//     .then((data) => data.json())
//     .catch((err) => console.log(err));
// };

// export const createCategory = (name) => {
//   return fetch(`${config.host}${config.category.createCategory}/${userId}`, {
//     method: "POST",
//     headers:config.headersWithToken,
//     body: JSON.stringify(name),
//   })
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// };

// export const createproduct = (name) => {
//   return fetch(`${config.host}${config.products.createProduct}/${userId}`, {
//     method: "POST",
//     headers: config.headersWithToken,
//     body: JSON.stringify(name),
//   })
//     .then((resp) => console.log(resp))
//     .catch((err) => console.log(err));
// };
// export const getCategory = () => {
//   return fetch(`${config.host}${config.category.getCategory}`)
//     .then((resp) => resp.json())
//     .catch((err) => console.log(err));
// };
// export const deleteProduct = (id) => {
//   return fetch(`${config.host}${config.products.deleteProduct}/${id}/${userId}`, {
//     method: "DELETE",
//     headers:config.headersWithToken,
//     body: JSON.stringify(),
//   })
//     .then((resp) => resp.json())
//     .catch((err) => console.log(err));
// };

// export const updateProduct = (id) => {
  
//   return fetch(`${config.host}${config.products.updateProduct}/${id}`)
//     .then((resp) =>resp.json())
//     .catch((err) => console.log(err));
// };
// export const sumbitUpdate = (id,name) => {
//   return fetch(`https://merncomm.herokuapp.com/api/product/${id}/${userId}`, {
//     method: "PUT",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(name),
//   })
//     .then((resp) => resp.json())
//     .catch((err) => console.log(err));
// };
// return fetch("https://merncomm.herokuapp.com/api/category/create",formData,{
//     method:'POST',
//     headers:{
//         Accept:"multipart/form-data",
//         "Content-Type": "multipart/form-data"
//     },
//     body:JSON.stringify(data)
// })
// .then((data)=>data.json())
// .catch((err)=>console.log(err))

// let formData = new FormData();
// let url = "https://merncomm.herokuapp.com/api/category/create";
// formData.append("title", "Shoe");
// formData.append("price", 20);

// const config = {
//   headers: { "content-type": "multipart/form-data" },
// };

// axios
//   .post(url, formData, config)
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// https://merncomm.herokuapp.com/api/product/62de68ca2702c600237feed1 -- get
// /api/product/62de68ca2702c600237feed1/60f5beec6ae70c06b8b030c3  -- put

	// https://merncomm.herokuapp.com/api/product/62de68ca2702c600237feed1/60f5beec6ae70c06b8b030c3
  // https://merncomm.herokuapp.com/api/product/62de68ca2702c600237feed1/60f5beec6ae70c06b8b030c3