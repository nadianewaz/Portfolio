import React from 'react';
import Navigation from '../../Multiple/Navbar/Navigation';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Toolkit from '../Toolkit/Toolkit';
import Resume from '../Resume/Resume';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';

// import Projects from '../Project/Projects'; 


const Home = () => {
    return (
        <>
            <div id="home"><Navigation></Navigation></div>
            <Banner></Banner>
            <div id="about"><About></About></div>
            <div id="toolkit"><Toolkit></Toolkit></div>
            <div id="projects"><Projects></Projects></div>
            {/* <div id="resume"><Resume></Resume></div> */}
            <Footer></Footer>
            
        </>
    );
};

export default Home;