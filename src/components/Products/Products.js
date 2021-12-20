import React from 'react'
import products_1 from '../../assets/images/testing_2.png'
import products_2 from '../../assets/images/testing_1.png'
import Ladies from '../Pages/Home/Ladies/Ladies'

const ladices = [
    {
    id: 1,
    name: 'Navy Printed Ladies Long Kameez',
    price: '5000',
    disprice: '400',
    img: products_1
    },

    {
    id: 2,
    name: 'Ladies Long Kameez printed',
    price: '5000',
    disprice: '400',
    img: products_2
    },

    {
    id: 3,
    name: 'Ladies Full Sleeve Long Kameez',
    price: '5000',
    disprice: '400',
    img: products_1
    },
    {
    id: 4,
    name: 'Ladies Full Sleeve Long Kameez',
    price: '5000',
    disprice: '400',
    img: products_1
    },
    {
    id: 5,
    name: 'Ladies Full Sleeve Long Kameez',
    price: '5000',
    disprice: '400',
    img: products_1
    },
    {
    id: 6,
    name: 'Ladies Full Sleeve Long Kameez',
    price: '5000',
    disprice: '400',
    img: products_1
    },
    {
    id: 7,
    name: 'Ladies Full Sleeve Long Kameez',
    price: '5000',
    disprice: '400',
    img: products_1
    },
    {
    id: 8,
    name: 'Ladies Full Sleeve Long Kameez',
    price: '5000',
    disprice: '400',
    img: products_1
    }



]


const Products = () => {
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
                    ladices.map(ladies => <Ladies
                        key={ladies.id}
                        ladies={ladies}
                    />)
                }
            </div>
        </div>
        </section>
    )
}

export default Products
