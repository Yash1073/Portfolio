import React from 'react'
import Navbar from "../components/NavBar";
import Heroimage2 from '../components/Heroimage2';
import Work from '../components/Work';
import Footer from '../components/Footer';
const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimage2  heading="PROJECTS." text="Some of My Most Recent Works" />
      <Work  />
      <Footer />
    </div>
  )
}

export default Project