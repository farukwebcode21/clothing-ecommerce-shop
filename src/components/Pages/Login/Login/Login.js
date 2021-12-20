import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import loginimg from '../../../../assets/images/offer_1.jpg'

const Login = () => {

    const [loginData, setLoginData] = useState({});

    const handleOnBlure = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }
    const handleLoginSubmit = e => {
        alert('You click login button')
        e.preventDefault();
    }
    return (
        <section className='mt-5'>
            <div className="container py-5">
                <div className="row d-flex justify-content-center align-items-center">
                <div className="col col-xl-10">
                    <div className="card" style={{borderRadius:'1rem', borderColor:'red'}}>
                    <div className="row g-0">
                        <div className="col-md-6 col-lg-5 d-none d-md-block">
                        <img
                            src={loginimg}
                            alt="login form"
                            className="img-fluid" style={{borderRadius:'1rem 0 0 1rem'}}
                        />
                        </div>
                        <div className="col-md-6 col-lg-7 d-flex align-items-center">
                        <div className="card-body p-4 p-lg-5 text-black">
                        <form onSubmit={handleLoginSubmit}>
                            <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing:'1px'}}>Sign into your account</h5>

                            <div className="form-outline mb-4">
                                <input type="email" onBlur={handleOnBlure}  name="email" className="form-control form-control-lg" placeholder="Your Email" required />
                            </div>
                            <div className="form-outline mb-4">
                                <input type="password" onBlur={handleOnBlure}  name="password" className="form-control form-control-lg" placeholder="Your Password" required />
                            </div>
                            <div className="pt-1 mb-4">
                                <button className="btn btn-danger text-uppercase" type="submit">Login</button>
                            </div>
                            <p className="mb-5 pb-lg-2">Don't have an account? <NavLink to="/register" className="text-danger">Register here</NavLink></p>
                        </form>

                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

    )
}

export default Login
