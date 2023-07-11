import React from 'react';
import Navigation from '../../Multiple/Navbar/Navigation';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Toolkit from '../Toolkit/Toolkit';


const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            <Banner></Banner>
            <About></About>
            <Toolkit></Toolkit>
            
        </>
    );
};

export default Home;