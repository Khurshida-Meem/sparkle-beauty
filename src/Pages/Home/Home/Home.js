import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import About from '../About/About';
import Banner from '../Banner/Banner';
import HomeProducts from '../HomeProducts/HomeProducts';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <About></About>
            <HomeProducts></HomeProducts>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;