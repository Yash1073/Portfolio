import "./AboutContent.css";
import React from 'react';
import {Link} from "react-router-dom";
import React1 from "../assests/react1.jpg";
import React2 from "../assests/react2.webp";
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1> Who Am I?</h1>
            <p>Im a React front-end developer.I create a few projects and want to create more.</p>
            <Link to="/contact"> <button className="btn">CONTACT</button></Link>
           
        </div>
        <div className="right">
            <div className="img_container">
                 <div className="img_stack top">
                    <img src={React1} alt="Images" className="img" />
                </div>
                <div className="img_stack bottom">
                    <img src={React2} alt="Images" className="img" />
                </div> 
               
            </div>
        </div>
    </div>
  )
}

export default AboutContent;
