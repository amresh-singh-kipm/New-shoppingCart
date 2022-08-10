import React from 'react'

function Cart() {
let userId = localStorage.getItem("userId")
console.log(userId)
   let cartItem = JSON.parse(localStorage.getItem("cartItem"))
   console.log("CartItem is :",cartItem)
    return (
        <div className='container'>
            <h1>lorem34</h1>
        {cartItem && cartItem.map((item,index)=>{
            return(
                <div className='container'id={index}>
                    {item.id}
                    {item.name}
                </div>
            )
        })}
        </div>
    )
}

export default Cart