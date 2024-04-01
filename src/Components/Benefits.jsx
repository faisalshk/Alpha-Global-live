import React from 'react'
import '../CSS/benefits.css'
import ballonImg from '../assets/ballons.jpg'
import planeIcon from '../assets/plane_icon.svg'
import ballonIcon from '../assets/ballon_icon.svg'
import map_2 from '../assets/map_2.svg'


const Benefits = () => {
    return (
        <section className="benefits_section">
            <div className="benefits_img">
                <img src={ballonImg} alt="ballons" />
                <div className="red-line"></div>
            </div>
            <div className="benefits_details">
                <div className="head-text">
                    <h3 className="my-custom-font">Our benefits list</h3>
                    <h2 className="my-custom-font">Why Choose Alpha Global</h2>
                </div>
                <div className="other-text">
                    <p className="my-custom-font">
                        There are many variations of passages of Lorem Ipsum is simply free
                        text available in the market for you, but the majority have suffered
                        alteration in some form.
                    </p>
                </div>
                {/* <!-- list-1 --> */}
                <div className="benefits-list">
                    <img src={planeIcon} alt="plane" />
                    <div className="list-details">
                        <h3 className="my-custom-font">Professional and Certified</h3>
                        <p className="my-custom-font">
                            Lorem ipsum is simply free text dolor sit but the majority have
                            suffered amet, consectetur notted.
                        </p>
                    </div>
                </div>
                {/* <!-- list-2 --> */}
                <div className="benefits-list">
                    <img src={ballonIcon} alt="plane" />
                    <div className="list-details">
                        <h3 className="my-custom-font">Get Instant Tour Bookings</h3>
                        <p className="my-custom-font">
                            Lorem ipsum is simply free text dolor sit but the majority have
                            suffered amet, consectetur notted.
                        </p>
                    </div>
                </div>
            </div>
            <img className="map_2" src={map_2} alt="map_2" />
        </section>

    )
}

export default Benefits
