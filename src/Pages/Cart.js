import React from 'react'

function Cart() {
let userId = localStorage.getItem("userId")
console.log(userId)
   let cartItem = JSON.parse(localStorage.getItem("name"))
   console.log("CartItem is :",cartItem)
    return (
        <div className='fluid-container'>
            <div className='row'>
            {cartItem && cartItem.map((item,index)=>{
            return(
                <div id={index}>
                    {item.id}
                    {item.name}
                </div>
            )
        })}
            </div>
        </div>
        // <div className='fluid-container'>
        //     <h1>lorem34</h1>
        // {cartItem && cartItem.map((item,index)=>{
        //     return(
        //         <div className='data'id={index}>
        //             {item.id}
        //             {item.name}
        //         </div>
        //     )
        // })}
        // </div>
    )
}

export default Cart