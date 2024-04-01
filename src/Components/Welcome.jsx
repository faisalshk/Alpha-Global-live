import React from 'react'
import '../CSS/welcome.css'
import offerings_3 from '../assets/offerings_3.jpeg';


const Welcome = () => {
    return (
        <section className="welcome-section" id="section--4">
            <div className="welcome-img">
                <img src={offerings_3} alt="offerings_3" />
            </div>
            <div className="seperator">
                <div className="main-sep"></div>
                <div className="sub-sep"></div>
            </div>
            <div className="welcome-text">
                <h3 className="my-custom-font">Welcome to Alpha Global</h3>
                <br />
                <br />
                <p className="my-custom-font">
                    We offer International Immersion, Study Tours, Student Exchange,
                    Industrial Visits, Corporate Tours, MDP, MICE, Group Tours, and Family
                    Tours - all meticulously curated and seamlessly executed, in India and
                    abroad.
                    <br />
                    <br />
                    Partnering with top-tier educational institutes worldwide, we provide
                    unparalleled opportunities for personal and professional growth.
                    <br />
                    <br />
                    Explore our International Summer Schools and embark on specialized
                    Industrial Visits.
                    <br />
                    <br />
                    For Corporates, our Global Management Development Programs deliver
                    invaluable insights and leadership skills. Our MICE division curates
                    high-impact corporate events.
                    <br />
                    <br />
                    Get in touch with us for lifetime experiences and memories you will
                    cherish forever!
                </p>
            </div>
        </section>
    )
}

export default Welcome
