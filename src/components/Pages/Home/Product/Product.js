import React from 'react'
import product_1 from '../../../../assets/images/testing_2.png'
import product_2 from '../../../../assets/images/testing_1.png'
import banner_logo from '../../../../assets/images/logo_banner.jpg'
import { NavLink } from 'react-router-dom'

const Product = () => {
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
                <div className="col-sm-6 col-lg-4">
                    <a href="#/" className="d-block text-center mb-4">
                        <div className="product-list">
                            <div className="product-image position-relative">
                                <span className="sale">Sale</span>
                                <img src={product_1} alt="products" className="img-fluid product-image-first"/>
                                <img src={product_2} alt="products" className="img-fluid product-image-secondary"/>
                            </div>
                            <div className="product-name pt-3">
                                <h3 className="text-capitalize">Winter Long Sleeve Black White</h3>
                                <p className="mb-0 amount">$400.00 <del>$580.00</del></p>
                                <div className="py-1">
                                    <span className="ti-star"></span>
                                    <span className="ti-star"></span>
                                    <span className="ti-star"></span>
                                    <span className="ti-star"></span>
                                    <span className="ti-star"></span>
                                </div>
                                <button type="button" className="add_to_Card">ADD TO CARD</button>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <a href="#/" className="d-block text-center mb-4">
                        <div className="product-list">
                            <div className="product-image position-relative">
                                <img src={product_2} alt="products" className="img-fluid product-image-first"/>
                                <img src={product_1} alt="products" className="img-fluid product-image-secondary"/>
                            </div>
                            <div className="product-name pt-3">
                                <h3 className="text-capitalize">women totes lady handbag</h3>
                                <p className="mb-0 amount">$300.00</p>
                                <div className="py-1">
                                    <span className="ti-star active"></span>
                                    <span className="ti-star active"></span>
                                    <span className="ti-star active"></span>
                                    <span className="ti-star"></span>
                                    <span className="ti-star"></span>
                                </div>
                                <button type="button" className="add_to_Card">ADD TO CARD</button>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <a href="#/" className="d-block text-center mb-4">
                        <div className="product-list">
                            <div className="product-image position-relative">
                                <img src={product_2} alt="products" className="img-fluid product-image-first"/>
                                <img src={product_1} alt="products" className="img-fluid product-image-secondary"/>
                            </div>
                            <div className="product-name pt-3">
                                <h3 className="text-capitalize">Lace water soluble sexy dress</h3>
                                <p className="mb-0 amount">$600.00</p>
                                <div className="py-1">
                                    <span className="ti-star active"></span>
                                    <span className="ti-star active"></span>
                                    <span className="ti-star active"></span>
                                    <span className="ti-star active"></span>
                                    <span className="ti-star active"></span>
                                </div>
                                <button type="button" className="add_to_Card">ADD TO CARD</button>
                            </div>
                        </div>
                    </a>
                </div>
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
