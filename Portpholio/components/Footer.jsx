import React from 'react';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <ul className="footer-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#works">Works</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <p>&copy; {new Date().getFullYear()} Shanideval All Rights Resverd</p>
            </div>
        </footer>
    );
};

export default Footer;
