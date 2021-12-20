import React from 'react'
import product_1 from '../../../../assets/images/testing_2.png'
import product_2 from '../../../../assets/images/testing_1.png'
import banner_logo from '../../../../assets/images/logo_banner.jpg'
import { NavLink } from 'react-router-dom'
import Ladies from '../Ladies/Ladies'

const ladices = [
    {
    id: 1,
    name: 'Navy Printed Ladies Long Kameez',
    price: '5000',
    disprice: '400',
    img: product_1
    },
    {
    id: 2,
    name: 'Ladies Long Kameez printed',
    price: '5000',
    disprice: '400',
    img: product_2
    },
    {
    id: 3,
    name: 'Ladies Full Sleeve Long Kameez',
    price: '5000',
    disprice: '400',
    img: product_1
    }


]


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
                {
                    ladices.map(ladies => <Ladies
                        key={ladies.id}
                        ladies={ladies}
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
