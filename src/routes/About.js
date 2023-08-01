import React from 'react';
import Navbar from "../components/NavBar";
import Heroimage2 from '../components/Heroimage2';
import AboutContent from '../components/AboutContent';
import Footer from '../components/Footer';
const About = () => {
  return (
    <div>
      <Navbar />
     <Heroimage2 heading="ABOUT." text="I'm a Front-end Developer." />
     <AboutContent />
      <Footer />
    </div>
  )
}

export default About;