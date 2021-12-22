import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../../../assets/images/logo.png'
import useAuth from '../../../../hooks/useAuth';

// nav hide
// const navBar = document.querySelectorAll('.nav-link');
// const navCollapse = document.querySelector('.navbar-collapse.collapse');
// navBar.forEach(function(a){
//     a.addEventListener("click", function(){
//         navCollapse.classList.remove("show");
//     })
// })


const Navigation = () => {
    const {user, logout} = useAuth();
    return (
        <section id="header">
        <nav className="navbar navbar-expand-lg bg-white fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#/">
                    <img src={logo} alt='logo' className="img-fluid"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="ti-align-justify navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="products">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="special">Special</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="testimonial">Testimonials</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="myorder">My Order</NavLink>
                        </li>
                        <li className="nav-item">
                                {
                                    user?.email ?
                                    <NavLink onClick={logout} className="nav-link" to="login">Logout</NavLink>
                                    :<NavLink className="nav-link" to="login">Login</NavLink>
                                }
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="cart"><span className='ti-shopping-cart'></span></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </section>

    )
}

export default Navigation
