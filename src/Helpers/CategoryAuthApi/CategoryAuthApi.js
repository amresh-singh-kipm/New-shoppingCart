import { config } from "../../Utils/api.constant";
let userId = localStorage.getItem("userId");


export const createCategory = (name) => {
    return fetch(`${config.host}${config.category.createCategory}/${userId}`, {
      method: "POST",
      headers:config.headersWithToken,
      body: JSON.stringify(name),
    })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  export const getCategory = () => {
    return fetch(`${config.host}${config.category.getCategory}`)
      .then((resp) => resp.json())
      .catch((err) => console.log(err));
  };
  export const deleteCategory = (id) =>{
    return fetch(`${config.host}${config.category.deleteCategory}/${id}/${userId}`,{
      method:'DELETE',
      headers:config.headersWithToken,
      body:JSON.stringify(),
    })
    .then((resp)=>console.log(resp))
    .catch((error)=>console.log(error))
  }
  export const updateCategory = (id) =>{
    return fetch(`${config.host}${config.category.updateCategory}/${id}`)
    .then((resp)=>resp.json())
    .catch((error)=>console.log(error))
  };
  export const submitUpdateCategory = (id,name) =>{
    return fetch(`${config.host}${config.category.updateCategory}/${id}/${userId}`,{
      method:'PUT',
      headers:config.headersWithToken,
      body:JSON.stringify(name)
    })
    .then((resp) =>console.log(resp))
    .catch((error)=>console.log(error))
  }
