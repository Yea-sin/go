import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Shop from '../Shop/Shop';


const Home = () => {
    return (
        <>
            <Banner/>
            <Services/>
            <Shop/>
            <About/>
        </>
    );
};

export default Home;