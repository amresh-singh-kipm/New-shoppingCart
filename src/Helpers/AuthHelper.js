export const signup = (data)=>{
  console.log("second")
fetch("https://merncomm.herokuapp.com/api/signup",{
    method :'POST',
    headers:{
        Accept:"Appliction/json",
        "content-type":"Appliction/json"
    },
    body:JSON.stringify(data),
}).then((item)=>console.log("data is 1ssent to API",item))
}

export const signin = () =>{
    
    console.log("HEllo")
    fetch("https://merncomm.herokuapp.com/api/signin")
    .then(resp=>resp.json())
    .then((data)=>console.log("data is fetch from API"))
}