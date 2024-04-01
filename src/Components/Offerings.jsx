import React from 'react';
import '../CSS/offerings.css';
import offerings_1 from '../assets/offerings_1.jpg';
import offerings_2 from '../assets/offerings_2.jpg';
import offerings_3 from '../assets/offerings_3.jpeg';
import offerings_4 from '../assets/offerings_4.jpg';

const Offerings = () => {
    // Array containing offerings data
    const offeringsData = [
        {
            image: offerings_1,
            title: 'Corporate Tours',
            subtitle: 'To Dubai',
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rem ullam aliquam quam quos? Ex unde tempora et eaque quam officiis quod aspernatur. Esse expedita ipsa adipisci facilis? Veniam, odio!'
        },
        {
            image: offerings_2,
            title: 'Family Tours',
            subtitle: 'To Bali',
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rem ullam aliquam quam quos? Ex unde tempora et eaque quam officiis quod aspernatur. Esse expedita ipsa adipisci facilis? Veniam, odio!'
        },
        {
            image: offerings_3,
            title: 'Group Tours',
            subtitle: 'To Switzerland',
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rem ullam aliquam quam quos? Ex unde tempora et eaque quam officiis quod aspernatur. Esse expedita ipsa adipisci facilis? Veniam, odio!'
        },
        {
            image: offerings_4,
            title: 'Solo Tours',
            subtitle: 'To Veitnam',
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rem ullam aliquam quam quos? Ex unde tempora et eaque quam officiis quod aspernatur. Esse expedita ipsa adipisci facilis? Veniam, odio!'
        }
    ];

    return (
        <section className="section flex-center" id="section--2">
            <div className="section__title_1">
                <h1 className="island-moments-regular font1">Our Offerings</h1>
                <h1 className="section__header my-custom-font">Go fun Places</h1>
            </div>
            <div className="offerings-img">
                {offeringsData.map((offering, index) => (
                    <div className="img-div" key={index}>
                        <img src={offering.image} alt={`offerings_${index}`} />
                        <div className="card-body">
                            <h1 className="card-title island-moments-regular">{offering.title}</h1>
                            <p className="card-sub-title my-custom-font">{offering.subtitle}</p>
                            <p className="card-info my-custom-font">{offering.info}</p>
                            <button className="card-btn my-custom-font" type="button" href="#section--5">
                                Book Tour
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Offerings;
