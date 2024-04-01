import React from 'react'
import '../CSS/footer.css'
import logo from '../assets/Group 16.svg'
import phoneIcon from '../assets/Symbol.svg'
import messageIcon from '../assets/Symbol1.svg'
import locationIcon from '../assets/Symbol3.svg'
import instagram from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';
import resetArrow from '../assets/reset_arrow.svg';


const Footer = () => {

    const scrollToSection = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });

        }
    }

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-details">
                    <img
                        src={logo}
                        alt="logo"
                    />
                    <p className="my-custom-font">
                        Welcome to our Trip and Tour Agency. Lorem simply text amet cing
                        elit.
                    </p>

                    <div className="contact-details">
                        <div className="detail1">
                            <img className="Symbol" src={phoneIcon} alt="Symbol" />
                            <span>+ 92 666 999 0000</span>
                        </div>

                        <div className="detail1">
                            <img className="Symbol" src={messageIcon} alt="Symbol" />
                            <span>ceoalphaglobal@gmail.com</span>
                        </div>

                        <div className="detail1">
                            <img className="Symbol" src={locationIcon} alt="Symbol" />
                            <span>Mumbai, Maharashtra. India</span>
                        </div>
                    </div>
                </div>
                {/* <!-- footer-link-1 --> */}
                <div className="footer-link">
                    <h3 className="my-custom-font">Company</h3>
                    <ul className="footer_links">
                        <li className="link_item">
                            <a>About us</a>
                        </li>
                        <li className="link_item">
                            <a>Tours</a>
                        </li>
                        <li className="link_item">
                            <a>Destinations</a>
                        </li>
                        <li className="link_item">
                            <a>Contact</a>
                        </li>
                    </ul>
                </div>
                {/* <!-- footer-link-2 --> */}
                <div className="footer-link">
                    <h3 className="my-custom-font">Explore</h3>
                    <ul className="footer_links">
                        <li className="link_item">
                            <a>Zurich</a>
                        </li>
                        <li className="link_item">
                            <a>Golden Triangle</a>
                        </li>
                        <li className="link_item">
                            <a>Paris</a>
                        </li>
                        <li className="link_item">
                            <a>Munich</a>
                        </li>
                    </ul>
                </div>

                {/* <!-- subscribe form --> */}

                <div className="subscribe">
                    <input
                        className="my-custom-font"
                        type="text"
                        placeholder="Email Address"
                    />
                    <button className="my-custom-font">SUBSCRIBE</button>
                    <p className="my-custom-font">
                        <span>☑</span> I agree to all terms and policies
                    </p>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="copy-right">
                    <p className="my-custom-font">@ All Copyright 2024, Alpha Global</p>
                    <div className="icon">
                        <img className='footer-icon' src={instagram} alt="instagram_icon" />
                        <img className='footer-icon' src={facebook} alt="facebook_icon" />
                    </div>
                </div>
                <div className="red-arrow">
                    <img src={resetArrow} alt="reset_arrow" onClick={() => scrollToSection('#section--1')} />
                </div>
            </div>
        </footer>
    )
}

export default Footer
