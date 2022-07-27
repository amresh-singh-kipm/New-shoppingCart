let token = localStorage.getItem("token");


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
        Authorization: `Bearer ${token}`,
    },
    headersWithFormData:{
            "content-type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
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
    },
    category:{
        getCategory:"/categories",
        createCategory:"/category/create",
    }
    
}