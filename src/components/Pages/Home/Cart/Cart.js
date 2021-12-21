import React from 'react'
import { useParams } from 'react-router-dom'

const Cart = () => {
    const {cardId} = useParams();
    return (
        <section id="cart" className='cart ms-auto'>
            <div className='container'>
                <div className='table-responsive-sm-12 md-12 lg-12'>
                        <table className="table table-striped">
                        <thead className='table-dark'>
                            <tr>
                            <th scope="col">SL</th>
                            <th scope="col">Product</th>
                            <th scope="col">Email</th>
                            <th scope="col">Price</th>
                            <th scope="col" className='text-center'>Delete</th>
                            <th scope="col" className='text-end'>Approve</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">{cardId}</th>
                            <td>Ladies Full Sleeve Long Kamesz</td>
                            <td>farukahmadmk@gmail.com</td>
                            <td>$7000</td>
                            <td className='border text-center delete text-danger'>Delete</td>
                            <td className='text-end approve text-success'>Approve</td>
                            </tr>
                             <tr>
                            <th scope="row">{cardId}</th>
                            <td>Ladies Full Sleeve Long Kamesz</td>
                            <td>farukahmadmk@gmail.com</td>
                            <td>$7000</td>
                            <td className='border text-center delete'>Delete</td>
                            <td className='text-end approve'>Approve</td>
                            </tr>
                             <tr>
                            <th scope="row">{cardId}</th>
                            <td>Ladies Full Sleeve Long Kamesz</td>
                            <td>farukahmadmk@gmail.com</td>
                            <td>$7000</td>
                            <td className='border text-center delete'>Delete</td>
                            <td className='text-end approve'>Approve</td>
                            </tr>
                        </tbody>
                        </table>
                </div>
            </div>
        </section>
    )
}

export default Cart
