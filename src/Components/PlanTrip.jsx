import React from 'react'
import '../CSS/plan.css'
import paris from '../assets/paris.png'
import checkIcon from '../assets/check_icon.svg'

const PlanTrip = () => {
    return (
        // < !--plan your trip section-- >
        <section className="section flex">
            <div className="section__img">
                <img src={paris} alt="paris_img" />
            </div>
            <div className="section__title">
                <h2 className="font1 section__description island-moments-regular">
                    Get to know us
                </h2>
                <h3 className="section__header my-custom-font">Plan your Trip with</h3>
                <h3 className="section__header my-custom-font">Alpha Global</h3>
                <p className="font my-custom-font">
                    Welcome to Alpha Global - we offer meticulously <br />
                    curated and seamlessly executed Tours - in India & abroad.
                </p>
                <div className="margin-top">
                    <div className="check__list">
                        <img src={checkIcon} alt="check_icon" />
                        <span className="check_list_desc my-custom-font">
                            Study tours - International Immersion, Summer Program</span
                        >
                    </div>
                    <div className="check__list">
                        <img src={checkIcon} alt="check_icon" />
                        <span className="check_list_desc my-custom-font">
                            Corporate tours – MICE, MDPs, Offsite</span
                        >
                    </div>
                    <div className="check__list">
                        <img src={checkIcon} alt="check_icon" />
                        <span className="check_list_desc my-custom-font">
                            Private tours – Budget, Wellness Retreat, Cruise</span
                        >
                    </div>
                    <p className="font1 island-moments-regular">and more ...</p>
                    <button className="book-btn my-custom-font" href="#section--5">
                        Book with us now
                    </button>
                </div>
            </div>
        </section>

    )
}

export default PlanTrip
