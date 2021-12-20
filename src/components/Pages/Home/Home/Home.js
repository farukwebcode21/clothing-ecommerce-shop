import React from 'react'
import useAuth from '../../../../hooks/useAuth'
import Banner from '../Banner/Banner'
import Contact from '../Contact/Contact'
import Product from '../Product/Product'
import Special from '../Special/Special'
import Testimonials from '../Testimonials/Testimonials'

const Home = () => {
    const {isLoading} = useAuth();
    return (
        <>
            {!isLoading && <div>
                <Banner />
                <Product/>
                <Special />
                <Testimonials />
                <Contact />
            </div>}
            {isLoading && <div className='d-flex justify-content-center'>
                <div className="spinner-border text-success" style={{width:'5rem', height:'5rem'}} role="status"></div>
            </div>}
        </>
    )
}

export default Home
