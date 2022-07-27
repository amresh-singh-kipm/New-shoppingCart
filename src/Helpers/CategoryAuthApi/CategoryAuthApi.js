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