let userId = localStorage.getItem("userId")
export const cartItem = () =>{
    fetch("https://merncomm.herokuapp.com/api/products")
.then((data)=> data.json())
.then(function(resp){
    localStorage.setItem("products",JSON.stringify(resp))
    if(!localStorage.getItem(`cart/${userId}`)){
        localStorage.setItem(`cart/${userId}`,"[]");
    }
})
}
let products = JSON.parse(localStorage.getItem("products"))
let cartData = JSON.parse(localStorage.getItem(`cart/${userId}`))

export const addItemToCart = (productId) =>{
  
    let product = products.find((product)=>product._id===productId);
   
    if(cartData.length===0){
        cartData.push(product);
    }
    else{
        let res = cartData.find((productsss)=>productsss._id===productId);
        if(res===undefined){
            cartData.push(product)
        }
    }
    localStorage.setItem(`cart/${userId}`,JSON.stringify(cartData))
    // console.log("product is :::",cartData)

}

export const removeItem = (productId) =>{
let remove = cartData.filter((remove)=>remove._id !==productId);
localStorage.setItem(`cart/${userId}`,JSON.stringify(remove));
}

export const updateQuantity = (productId) =>{
    // for(let product of cartData){
    //     if(product._id ===productId){
    //         cartData?.map((item)=>{
    //             return(
    //                (item.stock=item.stock+1)
    //             )
    //         })
    //     }
    // }
        let quantity = cartData.filter((product)=>product._id===productId);
        if(quantity){
         quantity.map((item)=>{
            return(
                item.stock = item.stock+1
            )
         })
        }
        localStorage.setItem(`cart/${userId}`,JSON.stringify(cartData))
}

 // let product = products.find(function(product){
    //     return product._id ===productId;
        
    // });  