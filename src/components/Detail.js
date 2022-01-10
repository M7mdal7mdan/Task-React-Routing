import React from 'react'
import { useParams } from 'react-router-dom';
import products from '../products';


function Detail() {
    
let {produtsSlug} = useParams();
let product = products.find((det) => det.slug === produtsSlug)
   
    return (
        <div className="detail">
            <h1>{product.id}</h1>
            <h1>{product.name}</h1>
            <h1>{product.price}</h1>
            <h1>{product.slug}</h1>
            <h1>{product.description}</h1>
            <h1>{product.image}</h1>


        </div>
    )
}

export default Detail
