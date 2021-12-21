import React, { useState } from 'react'
import { NavLink,  useNavigate } from 'react-router-dom'
import registerimg from '../../../../assets/images/special_1.jpg'
import useAuth from '../../../../hooks/useAuth'

const Register = () => {

    const [registerData, setRegisterData] = useState({});
    const { user, authError, userRegister, isLoading } = useAuth();
;
    const navigate = useNavigate();



    const handleOnBlure = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        console.log(newRegisterData);
        setRegisterData(newRegisterData);

    }

    const handleRegisterSubmit = e => {
        e.preventDefault();
        if (registerData.password !== registerData.password2) {
            alert("Your password didn't match");
            return;
        }
        userRegister(registerData.email, registerData.password, registerData.name, navigate);
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
                            src={registerimg}
                            alt="login form"
                            className="img-fluid" style={{borderRadius:'1rem 0 0 1rem'}}
                        />
                        </div>
                        <div className="col-md-6 col-lg-7 d-flex align-items-center">
                        <div className="card-body  p-lg-5 text-black">

                        { !isLoading && <form onSubmit={handleRegisterSubmit}>
                              <h5 className="fw-normal mb-2 pb-1">Create into your account New Account </h5>
                             <div className="form-outline mb-2">
                                <input type="text"  name="name" onBlur={handleOnBlure} className="form-control" placeholder="Your name" />
                            </div>
                            <div className="form-outline mb-2">
                                <input type="email" onBlur={handleOnBlure}  name="email" className="form-control" placeholder="Your Email" required />
                            </div>
                            <div className="form-outline mb-2">
                                <input type="password" onBlur={handleOnBlure} name="password" className="form-control" placeholder="Your Password" required />
                             </div>
                             <div className="form-outline mb-2">
                                <input type="password" onBlur={handleOnBlure}  name="password2" className="form-control " placeholder="Re-Type your password" />
                            </div>
                            <div className="pt-1 mb-2">
                                <button className="btn btn-danger text-uppercase" type="submit">Register</button>
                            </div>
                            <p className="mb-22 pb-lg-2">Have already an account ? <NavLink to="/login" className="text-danger">Login here</NavLink></p>
                        </form>}
                            {isLoading && <div className="spinner-border text-success" style={{ width: '5rem', height: '5rem' }} role="status"></div>}
                            {user?.email && <div class="alert alert-success" role="alert">User account Create Success</div>}
                            {authError && <div class="alert alert-danger" role="alert">please correct email and password</div>}
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
