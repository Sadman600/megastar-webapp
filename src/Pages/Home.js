import React from 'react';
import MainBanner from '../Components/Banner/MainBanner';
import Products from '../Components/Products/Products';
import Services from '../Components/Services/Services';
import Stat from '../Components/Stat/Stat';

const Home = () => {
    return (
        <div className='container'>
            <MainBanner />
            <Stat />
            <Services />
            <Products/>
        </div>
    );
};

export default Home;