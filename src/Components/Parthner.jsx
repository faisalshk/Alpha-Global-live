import React from 'react'
import parthner_1 from '../assets/Partner_1.svg'
import parthner_2 from '../assets/Partner_2.svg'
import parthner_3 from '../assets/Partner_3.svg'
import parthner_4 from '../assets/Partner_4.svg'
import '../CSS/parthner.css'

const Parthner = () => {
    return (
        <section className="partner">
            <h3 className="my-custom-font">Our Partners</h3>
            <img src={parthner_1} alt="Partner_1" />
            <img src={parthner_2} alt="Partner_2" />
            <img src={parthner_3} alt="Partner_3" />
            <img src={parthner_4} alt="Partner_4" />
        </section>

    )
}

export default Parthner
