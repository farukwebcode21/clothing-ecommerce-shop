import React from 'react'
import offer_1 from '../../../../assets/images/offer_1.jpg';
import offer_2 from '../../../../assets/images/offfer_4.jpg';
import offer_3 from '../../../../assets/images/offer_3.jpg';
import offer_4 from '../../../../assets/images/offer_2.jpg';
import { NavLink } from 'react-router-dom';


const Banner = () => {
    return (
        <section id="home" className="home pt-5 overflow-hidden">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="home-banner home-banner-1">
                        <div className="home-banner-text">
                            <h1>Women</h1>
                            <h2>52% Discount For This Season</h2>
                            <NavLink to="/products" className="btn btn-danger text-uppercase mt-4">Our Products</NavLink>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="home-banner home-banner-2">
                        <div className="home-banner-text">
                            <h1>E-Shop</h1>
                            <h2>With Working Card & Pay Pal</h2>
                            <NavLink to="/products" className="btn btn-danger text-uppercase mt-4">Our Products</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true">
                    <span className="ti-angle-left slider-icon"></span>
                </span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true">
                    <span className="ti-angle-right slider-icon"></span>
                </span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
            <div className="offers">
            <div className="container">
                <div className="row">

                    <div className="col-sm-6 col-lg-4 mb-lg-0 mb-4">
                        <a href="#/">
                            <div className="offer-box text-center position-relative">
                                <div className="offer-inner">
                                    <div className="offer-image position-relative overflow-hidden">
                                        <img src={offer_1} alt="Offers" className="img-fluid"/>
                                        <div className="offer-overlay"></div>
                                    </div>
                                    <div className="offer-info">
                                        <div className="offer-info-inner">
                                            <p className="heading-bigger text-capitalize">Sale 30%</p>
                                            <p className="offer-title-1 text-uppercase font-weight-bold">Don't Miss This
                                                Chance</p>
                                            <button type="button"
                                                className="btn btn-outline-danger text-uppercase mt-4">Shop Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-sm-6 col-lg-4 mb-lg-0 mb-4 d-flex flex-column justify-content-between">
                        <a href="#/">
                            <div className="offer-box text-center position-relative mb-4 mb-sm-0 mb-lg-0">
                                <div className="offer-inner">
                                    <div className="offer-image position-relative overflow-hidden">
                                        <img src={offer_2} alt="Offers" className="img-fluid"/>
                                        <div className="offer-overlay"></div>
                                    </div>
                                    <div className="offer-info">
                                        <div className="offer-info-inner">
                                            <p className="heading-bigger text-capitalize">Sale 70%</p>
                                            <p className="offer-title-1 text-uppercase font-weight-bold">Don't Miss This
                                                Chance</p>
                                            <button type="button"
                                                className="btn btn-outline-danger text-uppercase mt-4">Shop Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="#/">
                            <div className="offer-box text-center position-relative">
                                <div className="offer-inner">
                                    <div className="offer-image position-relative overflow-hidden">
                                        <img src={offer_3} alt="Offers" className="img-fluid"/>
                                        <div className="offer-overlay"></div>
                                    </div>
                                    <div className="offer-info">
                                        <div className="offer-info-inner">
                                            <p className="heading-bigger text-capitalize">Sale 50%</p>
                                            <p className="offer-title-1 text-uppercase font-weight-bold">Don't Miss This
                                                Chance</p>
                                            <button type="button"
                                                className="btn btn-outline-danger text-uppercase mt-4">Shop Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>


                    <div className="col-sm-6 col-lg-4 mb-lg-0 mb-4">
                        <a href="#/">
                            <div className="offer-box text-center position-relative">
                                <div className="offer-inner">
                                    <div className="offer-image position-relative overflow-hidden">
                                        <img src={offer_4} alt="Offers" className="img-fluid"/>
                                        <div className="offer-overlay"></div>
                                    </div>
                                    <div className="offer-info">
                                        <div className="offer-info-inner">
                                            <p className="heading-bigger text-capitalize">Sale 25%</p>
                                            <p className="offer-title-1 text-uppercase font-weight-bold">Don't Miss This
                                                Chance</p>
                                            <button type="button"
                                                className="btn btn-outline-danger text-uppercase mt-4">Shop Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Banner
