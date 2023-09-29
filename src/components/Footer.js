import "./Footer.css";
import React from 'react';
import { Link } from "react-router-dom"
import {  FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter,FaInstagram } from "react-icons/fa"
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p> B-24 ,Madhavbaug Appt,</p>
                            <p>Bhavnagar,India</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            +91 8160611261
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            yashparmar1073@gmail.com
                        </h4>
                    </div>

                </div>
                <div className="right">
                     <h4>About the Owner:-</h4>
                    <p>I am committed to staying at the forefront of the ever-evolving tech landscape.
                        With a strong sense of creativity and a determination to make a difference, I eagerly embrace challenges and look forward to making a meaningful impact in the world of software development.
                    </p> 
                    <div className="social">
                        <Link to='www.linkedin.com/in/yash-parmar1073'>
                            <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </Link>
                        <Link to='https://twitter.com/yashparmaar'>
                            <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </Link>
                        <Link to='https://instagram.com/yash_parmar_1073?igshid=OGQ5ZDc2ODk2ZA=='>
                            <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer