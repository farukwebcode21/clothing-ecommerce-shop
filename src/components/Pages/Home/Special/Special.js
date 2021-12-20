import React from 'react'
import special_offer from '../../../../assets/images/testing_2.png'

const Special = () => {
    return (
         <section id="special" className="special" style={{height:'100%'}}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="headline text-center mb-5">
                            <h2 className="pb-3 position-relative d-inline-block">SUMMER SALE</h2>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-7 text-center text-lg-start">
                        <div className="countdown-container">
                            <h2 className="text-uppercase">Sexy Women Floral Embroidery</h2>
                            <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <ul className="list-unstyled countdown-counter">
                                <li><span className="fs-1 d-block" id="days">00</span> Days</li>
                                <li><span className="fs-1 d-block" id="hours">00</span> Hr</li>
                                <li><span className="fs-1 d-block" id="min">00</span> Min</li>
                                <li><span className="fs-1 d-block" id="sec">00</span> Sec</li>
                            </ul>
                            <span className="countdown-price h3 d-block mb-4">$420.00 <del>$670.00</del></span>
                            <button type="button" className="btn btn-danger">ADD TO CART</button>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-5">
                        <div className="special-img position-relative">
                            <span className="">Sale</span>
                            <img src={special_offer} alt='offer' className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Special
