import React from 'react'
import { config } from '../Utils/api.constant'


function ImageHelper({product}) {
    const imageUrl = product? `${config.host}${config.products.getPhoto}/${product._id}` : ""
    return (
        <>
            <img src={imageUrl} width="300px" height="200px" alt="photo"/>
        </>
    )
}

export default ImageHelper