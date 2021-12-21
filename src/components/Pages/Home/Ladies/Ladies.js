import React from 'react'
import { NavLink } from 'react-router-dom';

const Ladies = ({ product }) => {
    const {id, img, name, price, disprice, size } = product;
    return (
        <div className="col-sm-6 col-lg-4">
            <div className="d-block text-center mb-4">
                <div className="product-list">
                    <div className="product-image position-relative">
                        <span className="sale">Sale</span>
                        <img src={img} alt="products" className="img-fluid product-image-first"/>
                    </div>
                    <div className="product-name pt-3">
                        <h3 className="text-capitalize">{name}</h3>
                        <p className="mb-0 amount">{size }</p>
                            <p className="mb-0 amount">${price}.00 <del>${disprice }.00</del></p>
                        <div className="py-1">
                            <span className="ti-star"></span>
                            <span className="ti-star"></span>
                            <span className="ti-star"></span>
                            <span className="ti-star"></span>
                            <span className="ti-star"></span>
                        </div>
                        <NavLink to={`/cart/${id}`}><button type="button" className="add_to_Card">ADD TO CARD</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ladies
