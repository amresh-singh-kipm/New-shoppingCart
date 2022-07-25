let userId = localStorage.getItem("userId");
let token = localStorage.getItem("token");
let productId = localStorage.getItem("productId")
export const signup = (data) => {
  return fetch("https://merncomm.herokuapp.com/api/signup", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((data) => data.json())
    .catch((err) => console.log(err));
};

export const signin = (data) => {
  return fetch("https://merncomm.herokuapp.com/api/signin", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((data) => data.json())
    .catch((err) => console.log(err));
};

export const getData = (data) => {
  return fetch("https://merncomm.herokuapp.com/api/products")
    .then((data) => data.json())
    .catch((err) => console.log(err));
};

export const createCategory = (name) => {
return fetch(`https://merncomm.herokuapp.com/api/category/create/${userId}`,{
  method:'POST',
  headers:{
    Accept:"application/json",
    "Content-Type":"application/json",
    Authorization: `Bearer ${token}`,
  },
  body:JSON.stringify(name),
}).then((data)=>console.log(data))
  .catch((err)=>console.log(err)) 
}

export const createproduct = (name) =>{
  return fetch(`https://merncomm.herokuapp.com/api/product/create/${userId}`,{
    method:'POST',
    headers:{
      Accept:"application/json",
      "Content-Type":"application/json",
      Authorization: `Bearer ${token}`,
    },
    body:JSON.stringify(name),
  }).then((resp) => console.log(resp))
    .catch((err) => console.log(err));
}
export const getCategory = () =>{
  return fetch('https://merncomm.herokuapp.com/api/categories')
  .then((resp)=>resp.json())
  .catch((err)=>console.log(err))
}
export const deleteProduct =(id)=>{
  return fetch(`https://merncomm.herokuapp.com/api/product/${id}/${userId}`,{
    method:'DELETE',
    headers:{
      Accept:"application/json",
      "Content-Type":"application/json",
      Authorization: `Bearer ${token}`,
    },body:JSON.stringify(),
  }).then((resp) => resp.json())  
  .catch((err) => console.log(err));
}







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
