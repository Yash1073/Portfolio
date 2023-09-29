import "./HeroImage.css";
import React from 'react';
import Intro from "../assests/intro-bg.jpg";
import { Link } from "react-router-dom";
import Yash from "../assests/Yash.png (2).jpg";

const HeroImage = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src={Intro} alt="IntroImage" />
            </div>

            <div className="content">
                <div id="leftbox">
                    <p> Hi,I'm Yash Parmar</p>
                    <h1> React-JS Developer</h1>
                    <div>
                        <Link to='/project' className="btn">Projects</Link>
                        <Link to='/contact' className=" btn btn-light">Contact</Link>
                    </div>
                </div >
                <div id="rightbox" >
                    <img src={Yash} />
                </div>
            </div>

        </div>
    )
}

export default HeroImage;