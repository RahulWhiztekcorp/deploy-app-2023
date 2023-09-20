import React from 'react'
import '../components/ProductCard.css'
const ProductCard = ({ title, price, image, rating }) => {

    console.log(rating)
    return (
        <div className='card ' style={{ padding: 20, width: '270px', borderRadius: '5px'}}>
            <img style={{ width: '100%', height: '180px', objectFit: 'contain' ,borderRadius: '5px'}} src={image} />
            <p >{title}</p>
            <h4>₹{price}</h4>
            <h6><span class="badge text-bg-success">{rating.rate}<i class="fa-sharp fa-solid fa-star"></i></span></h6>
            <div className='d-flex justify-content-between mt-2'>
                <a href="#" class="btn btn-warning">Add To Cart</a>
                <button class="btn btn-danger">Buy Now</button>
            </div>
        </div>
    )
}

export default ProductCard