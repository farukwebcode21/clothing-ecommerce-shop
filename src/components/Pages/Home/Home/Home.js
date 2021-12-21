import React from 'react'
import Footer from '../../Shaired/Footer/Footer'
import Banner from '../Banner/Banner'
import Contact from '../Contact/Contact'
import Product from '../Product/Product'
import Special from '../Special/Special'
import Testimonials from '../Testimonials/Testimonials'

const Home = () => {

    return (
        <div>
                <Banner />
                <Product/>
                <Special />
                <Testimonials />
                <Contact />
                <Footer/>
            </div>
    )
}

export default Home
