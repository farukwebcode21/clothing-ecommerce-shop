import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useAuth from '../../../../hooks/useAuth'
import { useForm } from "react-hook-form";
import './Cart.css'

const Cart = () => {
    const { cardId } = useParams();
    const { user } = useAuth();
   const navigate = useNavigate();



    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch(`https://polar-chamber-95190.herokuapp.com/products/${cardId}`)
            .then(res => res.json())
            .then(data => setCart(data));
    }, [cardId])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.productName = cart.name;
        data.productPrice = cart.price;
        fetch('https://polar-chamber-95190.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Are Your sure add to card this product ? ");
                  navigate('/')
                reset();
            }
        })
   };




    return (
        <section id="special" className="special">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="headline text-center mb-5">
                            <h2 className="pb-3 position-relative d-inline-block">PRODUCT DETAILS</h2>
                        </div>
                    </div>

                    <div className=" purchase-product col-sm-12 col-lg-7 text-center text-lg-start">
                        <div className="container">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input type="email" defaultValue={user.email} {...register("email")} placeholder="Email"/>
                                <input type="number"  {...register("number")} placeholder="Phone Number" required />
                                <input type="text" {...register("address")}  placeholder="Address" required />
                                <input type="text" {...register("shipping_address")}  placeholder="Shipping Address" required />
                               <input className="btn btn-danger" type="submit" />

                            </form>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-5">
                        <div className="special-img position-relative">
                            <span className="">Sale</span>
                            <img src={cart.img} alt='offer' className="img-fluid" />
                            <span className="countdown-price h3 d-block mb-4">${cart.price}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     )
}

export default Cart
