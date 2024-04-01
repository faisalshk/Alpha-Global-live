import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../CSS/form.css';

import heroImg from '../assets/hero_img.jpeg';

const Form = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        setLoading(true); // Display loader

        emailjs
            .sendForm('service_hphzvuh', 'template_mdn00m1', form.current, {
                publicKey: 'lDuRon2EPZYf762Ao',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.reset(); // Reset the form
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            )
            .finally(() => {
                setLoading(false); // Hide loader after sending email
            });
    };

    return (
        <section className="section-form" id="section--5">
            <img src={heroImg} alt="hero_img" />
            <div className="contact">
                <div className="highlight-text">
                    <h2 className="my-custom-font">Travel with Alpha Global</h2>
                    <p className="my-custom-font">
                        Create memories that you will cherish forever!
                    </p>
                </div>
                <form className="form" id="emailForm" ref={form} onSubmit={sendEmail}>
                    <label className="my-custom-font">Get in touch with us</label>
                    <input type="text" id="nameInput" name="name" placeholder="Name" required />
                    <input
                        type="number"
                        id="phoneInput"
                        name="phone_number"
                        placeholder="Phone number"
                        required
                    />
                    <input type="email" id="emailInput" name="email" placeholder="Email" required />
                    <input
                        type="text"
                        id="interestInput"
                        name="interested_in"
                        placeholder="Interested In"
                        required
                    />
                    <p className="my-custom-font">
                        By clicking the button below, you agree to receive communications
                        via Email/Call/WhatsApp/SMS from us.
                    </p>
                    <button className={`my-custom-font ${loading ? 'hidden' : ""}`} type="submit" id="submitButton">
                        SUBMIT
                    </button>
                    <div id="loader" className={`loader ${loading ? '' : 'hidden'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                            <path
                                d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"
                            />
                        </svg>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Form;