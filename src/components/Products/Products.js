import React, { useEffect, useState } from 'react'
import Ladies from '../Pages/Home/Ladies/Ladies'


const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    },[])

    return (
        <section id="products" className="products" style={{height:'100%'}}>
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="headline text-center mb-5">
                        <h2 className="pb-3 position-relative d-inline-block"> PRODUCTS LIST</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                {
                    products.map(product => <Ladies
                        key={product._id}
                        product={product}
                    />)
                }
            </div>
        </div>
        </section>
    )
}

export default Products
