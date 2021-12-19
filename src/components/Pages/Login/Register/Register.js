import React from 'react'
import { NavLink } from 'react-router-dom'
import registerimg from '../../../../assets/images/offer_2.jpg'

const Register = () => {
    return (
        <section className='mt-5'>
            <div className="container py-5">
                <div className="row d-flex justify-content-center align-items-center">
                <div className="col col-xl-10">
                    <div className="card" style={{borderRadius:'1rem', borderColor:'red'}}>
                    <div className="row g-0">
                        <div className="col-md-6 col-lg-5 d-none d-md-block">
                        <img
                            src={registerimg}
                            alt="login form"
                            className="img-fluid" style={{borderRadius:'1rem 0 0 1rem'}}
                        />
                        </div>
                        <div className="col-md-6 col-lg-7 d-flex align-items-center">
                        <div className="card-body p-4 p-lg-5 text-black">
                            <form>
                            <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing:'1px'}}>Create into your account New Account </h5>

                            <div className="form-outline mb-4">
                                <input type="email"  name="email" className="form-control form-control-lg" placeholder="Your Email" />
                            </div>
                            <div className="form-outline mb-4">
                                <input type="password"  name="password" className="form-control form-control-lg" placeholder="Your" />
                            </div>
                            <div className="pt-1 mb-4">
                                <button className="btn btn-danger text-uppercase" type="submit">Register</button>
                            </div>
                            <p className="mb-5 pb-lg-2">Have already an account ? <NavLink to="/login" className="text-danger">Login here</NavLink></p>
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

export default Register
