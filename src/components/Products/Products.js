import React from 'react'
import products_1 from '../../assets/images/testing_2.png'
import products_2 from '../../assets/images/testing_1.png'

const Products = () => {
    return (
        <section id="products" className="products">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="headline text-center mb-5">
                        <h2 className="pb-3 position-relative d-inline-block"> PRODUCTS LIST</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 col-lg-4">
                    <a href="#/" className="d-block text-center mb-4">
                        <div className="product-list">
                            <div className="product-image position-relative">
                                <span className="sale">Sale</span>
                                <img src={products_1} alt="products" className="img-fluid product-image-first"/>
                                <img src={products_2} alt="products" className="img-fluid product-image-secondary"/>
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
                                <img src={products_1} alt="products" className="img-fluid product-image-first"/>
                                <img src={products_2} alt="products" className="img-fluid product-image-secondary"/>
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
                                <img src={products_1} alt="products" className="img-fluid product-image-first"/>
                                <img src={products_2} alt="products" className="img-fluid product-image-secondary"/>
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
        </div>
        </section>
    )
}

export default Products
