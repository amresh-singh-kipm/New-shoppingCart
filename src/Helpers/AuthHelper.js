export const signup = (data)=>{
 
return fetch("https://merncomm.herokuapp.com/api/signup",{
    method :'POST',
    headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
    },
    body:JSON.stringify(data),
}).then((data)=>data.json())
.catch((err)=>console.log(err))
}

export const signin = (data) =>{   
 return fetch("https://merncomm.herokuapp.com/api/signin",{
    method:'POST',
    headers:{
        Accept:'application/json',
        "Content-Type": "application/json"
    },
    body:JSON.stringify(data),
 }).then((data)=>data.json())
 .catch((err)=>console.log(err))
}

export const getData = (data) =>{
    return fetch("https://merncomm.herokuapp.com/api/products")
    .then((data)=>data.json())
    .catch((err)=>console.log(err))
}

export const createData = (data) =>{
    return fetch("https://merncomm.herokuapp.com/api/category/create",{
        method:'POST',
        headers:{
            Accept:"application/json",
            "Content-Type": "application/json"
        },
        body:JSON.stringify(data)
    })
    .then((data)=>data.json())
    .catch((err)=>console.log(err))
}


