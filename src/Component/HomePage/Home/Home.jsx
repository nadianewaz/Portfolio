import React from 'react';
import Navigation from '../../Multiple/Navbar/Navigation';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Toolkit from '../Toolkit/Toolkit';

import Projects from '../Project/Projects';


const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            <Banner></Banner>
            <About></About>
            <Toolkit></Toolkit>
          <Projects></Projects>
            
        </>
    );
};

export default Home;