import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

const Product = () => {
    const [products, productlist] = useState([]);
    useEffect(() => {
        // fetch('https://fakestoreapi.com/products')
        // .then(res=>res.json())
        // .then(json=>console.log(json))
        // or
        getproducts()
    }, [])
    async function getproducts() {
        let res = await fetch('https://fakestoreapi.com/products');
        let list = await res.json()
        productlist(list);
    }
    if (products.length === 0) {
        return (
            <>
                <h1>Fetching data....</h1>
            </>
        )
    }
    return (
        <>
            <div className='d-flex flex-wrap gap-4 ms-5 mt-3'>
                {
                    products.map((res) => <ProductCard {...res} key={res.id} />)
                }
            </div>
        </>
        // (res)=><ProductCard productdetails={res}/>)
    )
}
export default Product