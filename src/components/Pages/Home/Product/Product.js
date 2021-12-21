import React, { useEffect, useState } from 'react'
import banner_logo from '../../../../assets/images/logo_banner.jpg'
import { NavLink } from 'react-router-dom'
import Ladies from '../Ladies/Ladies'

const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    },[])
    return (
        <section id="products" className="products">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="headline text-center mb-5">
                        <h2 className="pb-3 position-relative d-inline-block">FEATURED PRODUCTS</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                {
                    products.map(product => <Ladies
                        key={product._id}
                        product={product}
                    />).slice(0,6)
                }
            </div>
                <div className="row">
                <div className="col-sm-12">
                    <div className="headline text-center mb-5">
                        <NavLink to="/products" className="btn btn-danger text-uppercase mt-4">More Products</NavLink>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden my-5">
                <div className="row">
                    <div className="col-sm-12 up_to_off">
                        <img src={banner_logo} alt="offers" className="img-fluid w-100"/>
                        <div className="up_to_content">
                            <h2>UP TO 75% OFF SPRINGSALE!</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Product
