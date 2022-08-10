import { config } from "../../Utils/api.constant";
// let userId = localStorage.getItem("userId");

 export const getUserId = () =>{
  const userId = localStorage.getItem("userId")
  return userId;
}

export const createCategory = (name) => {
    return fetch(`${config.host}${config.category.createCategory}/${getUserId()}`, {
      method: "POST",
      headers:config.headersWithToken,
      body: JSON.stringify(name),
    })
      .then((data) => data.json())
      .catch((err) => console.log(err));
  };
  export const getCategory = () => {
    return fetch(`${config.host}${config.category.getCategory}`)
      .then((resp) => resp.json())
      .catch((err) => console.log(err));
  };
  export const deleteCategory = (id) =>{
    return fetch(`${config.host}${config.category.deleteCategory}/${id}/${getUserId()}`,{
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
    return fetch(`${config.host}${config.category.updateCategory}/${id}/${getUserId()}`,{
      method:'PUT',
      headers:config.headersWithToken,
      body:JSON.stringify(name)
    })
    .then((resp) =>console.log(resp))
    .catch((error)=>console.log(error))
  }
