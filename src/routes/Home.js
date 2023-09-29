import React from 'react';
import Navbar from "../components/NavBar";
import HeroImage from '../components/HeroImage';
import Footer from '../components/Footer';
import Work from "../components/Work";
import Form from "../components/Form"
    
const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroImage />
            <Work/>
            <Form />
            <Footer />
        </div>

    )
}

export default Home;    