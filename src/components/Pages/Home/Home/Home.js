import React from 'react'
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
            </div>
    )
}

export default Home
