// let token = localStorage.getItem("token");
// let userId = localStorage.getItem("userId")
export const getToken = () =>{
    let token = localStorage.getItem("token");
    return token;
}

const BASE_URL = 'https://merncomm.herokuapp.com/api'

export const config ={
    host: BASE_URL,
    headers:{
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    headersWithToken:{
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
    },
    headersWithFormData:{
            "content-type": "multipart/form-data",
            Authorization: `Bearer ${getToken()}`,
          },
    auth:{
        signin: "/signin",
        signup: "/signup",
    },
    products:{
        getProduct:"/products",
        createProduct:"/product/create",
        deleteProduct:"/product",
        updateProduct:"/product",
        getPhoto:"/product/photo"
    },
    category:{
        getCategory:"/categories",
        createCategory:"/category/create",
        deleteCategory:"/category",
        updateCategory:"/category",
    }
    
}