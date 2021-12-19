import React from 'react'
import profile from '../../../../assets/images/me.png'
import profile_2 from '../../../../assets/images/me.png'

const Testimonials = () => {
    return (
        <section id="testimonial" className="testimonial">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="headline text-center mb-5">
                            <h2 className="pb-3 position-relative d-inline-block">Testimonials</h2>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-8 offset-lg-2 text-center">
                        <div id="carouselExampleIndicatorsTwo" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicatorsTwo" data-bs-slide-to="0"
                                    className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicatorsTwo" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="testimonial-wrapper">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <img src={profile} alt="" className="img-fluid"/>
                                            </div>
                                            <div className="username">
                                                <h3> Martin Johe, Co-Founder / CEO</h3>
                                                <span>Fastcompany ltd.</span>
                                                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                    commodo consequat. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="testimonial-wrapper">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <img src={profile_2} alt="" className="img-fluid"/>
                                            </div>
                                            <div className="username">
                                                <h3> Martin Johe, Co-Founder / CEO</h3>
                                                <span>Fastcompany ltd.</span>
                                                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                    commodo consequat. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleIndicatorsTwo" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true">
                                    <span className="ti-angle-left slider-icon"></span>
                                </span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleIndicatorsTwo" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true">
                                    <span className="ti-angle-right slider-icon"></span>
                                </span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
