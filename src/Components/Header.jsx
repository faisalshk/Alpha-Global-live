import React, { useState } from 'react';
import '../CSS/header.css';
import phoneLogo from '../assets/phone_logo.svg';
import atLogo from '../assets/at_icon.svg';
import instagram from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import printrest from '../assets/printrest.svg';
import logo from '../assets/Group 16.svg';
import menuBar from '../assets/menu bar.svg';

const Header = () => {
    const [isMobileMenuActive, setMobileMenuActive] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuActive(!isMobileMenuActive);
    };

    const scrollToSection = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuActive(false); // Close mobile menu after clicking on a link
        }
    };


    return (
        <>
            <header className="main-header">
                <div className="blue-header">
                    {/* phone number and mail */}
                    <div className="detail">
                        <div className="phone">
                            <img src={phoneLogo} alt="phone_icon" />
                            <span className="my-custom-font">+91 9594225060</span>
                        </div>
                        <div className="phone">
                            <img src={atLogo} alt="phone_icon" />
                            <span className="my-custom-font">ceoalphaglobal@gmail.com</span>
                        </div>
                    </div>
                    {/* social media icons and button */}
                    <div className="icon-btn">
                        <div className="icons">
                            <div className="instagram">
                                <img src={instagram} alt="icons" />
                            </div>
                            <div className="facebook">
                                <img src={facebook} alt="icons" />
                            </div>
                            <div className="twitter">
                                <img src={twitter} alt="icons" />
                            </div>
                            <div className="printrest">
                                <img src={printrest} alt="icons" />
                            </div>
                        </div>
                        <div className="funBtn">
                            <h3 className="my-custom-font">Let's have some fun!</h3>
                        </div>
                    </div>
                </div>
                {/* white-header */}
                <nav className="nav">
                    {/* logo */}
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>

                    {/* header menu */}
                    <ul className="nav__links my-custom-font">
                        <li className="nav__item">
                            <a className="nav__link" onClick={() => scrollToSection('#section--1')}> Home</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" onClick={() => scrollToSection('#section--4')}>About us</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" onClick={() => scrollToSection('#section--2')}>Offerings</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" onClick={() => scrollToSection('#section--3')}>Tours</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" onClick={() => scrollToSection('#section--5')}>Contact</a>
                        </li>
                    </ul>
                    <div className="menu" onClick={toggleMobileMenu}>
                        <img src={menuBar} alt="menu" />
                    </div>
                </nav>
            </header >

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuActive ? 'active' : ''}`
            }>
                <button className="close-btn" onClick={toggleMobileMenu}>&times;</button>
                <ul className="mobile-nav my-custom-font">
                    <li className="nav__item">
                        <a className="nav__link" onClick={() => scrollToSection('#section--1')}> Home</a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" onClick={() => scrollToSection('#section--4')}>About us</a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" onClick={() => scrollToSection('#section--2')}>Offerings</a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" onClick={() => scrollToSection('#section--3')}>Tours</a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" onClick={() => scrollToSection('#section--5')}>Contact</a>
                    </li>
                </ul>
            </div >
        </ >
    );
};

export default Header;
