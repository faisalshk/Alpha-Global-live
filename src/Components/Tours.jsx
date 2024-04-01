import React, { useEffect, useRef } from 'react';
import '../CSS/tour.css'
import tajmahal from '../assets/agra.jpg'
import leftArrow from '../assets/left_arrow.svg';
import rightArrow from '../assets/right_arrow.svg';
import offerings_1 from '../assets/offerings_1.jpg';
import offerings_2 from '../assets/offerings_2.jpg';
import offerings_3 from '../assets/offerings_3.jpeg';
import offerings_4 from '../assets/offerings_4.jpg';
import redFort from '../assets/redFort.jpg'
import munich from '../assets/munich.jpg'
import agra_1 from '../assets/agra_1.jpg'
import titlis from '../assets/titls.jpg'

const Tours = () => {

    const tourData = [
        {
            name: "Corporate Tours",
            image: offerings_1,
            description:
                "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptatum tenetur laborum dolorum laboriosam pariatur aspernatur debitis accusamus dicta harum consequatur sapiente quos deserun temporibus, obcaecati molestias. Amet, adipisci fugit? ",
        },
        {
            name: "Family Tours",
            image: offerings_2,
            description:
                "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptatum tenetur laborum dolorum laboriosam pariatur aspernatur debitis accusamus dicta harum consequatur sapiente quos deserun temporibus, obcaecati molestias. Amet, adipisci fugit? ",
        },
        {
            name: "Group Tours",
            image: offerings_3,
            description:
                "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptatum tenetur laborum dolorum laboriosam pariatur aspernatur debitis accusamus dicta harum consequatur sapiente quos deserun temporibus, obcaecati molestias. Amet, adipisci fugit? ",
        },
        {
            name: "Solo Tours",
            image: offerings_4,
            description:
                "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptatum tenetur laborum dolorum laboriosam pariatur aspernatur debitis accusamus dicta harum consequatur sapiente quos deserun temporibus, obcaecati molestias. Amet, adipisci fugit? ",
        },
        {
            name: "Munich",
            image: munich,
            description:
                "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptatum tenetur laborum dolorum laboriosam pariatur aspernatur debitis accusamus dicta harum consequatur sapiente quos deserun temporibus, obcaecati molestias. Amet, adipisci fugit? ",
        },
        {
            name: "Red Fort",
            image: redFort,
            description:
                "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptatum tenetur laborum dolorum laboriosam pariatur aspernatur debitis accusamus dicta harum consequatur sapiente quos deserun temporibus, obcaecati molestias. Amet, adipisci fugit? ",
        },
        {
            name: "Mount Titlis",
            image: titlis,
            description:
                "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptatum tenetur laborum dolorum laboriosam pariatur aspernatur debitis accusamus dicta harum consequatur sapiente quos deserun temporibus, obcaecati molestias. Amet, adipisci fugit? ",
        },
        {
            name: "Agra",
            image: agra_1,
            description:
                "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptatum tenetur laborum dolorum laboriosam pariatur aspernatur debitis accusamus dicta harum consequatur sapiente quos deserun temporibus, obcaecati molestias. Amet, adipisci fugit? ",
        },
        {
            name: "Agra",
            image: agra_1,
            description:
                "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptatum tenetur laborum dolorum laboriosam pariatur aspernatur debitis accusamus dicta harum consequatur sapiente quos deserun temporibus, obcaecati molestias. Amet, adipisci fugit? ",
        },


    ];

    const carouselRef = useRef(null);

    useEffect(() => {
        const addEventListeners = () => {
            const arrowBtns = document.querySelectorAll('.wrapper i');
            const carousel = carouselRef.current;
            const firstCardWidth = carousel.querySelector('.card').offsetWidth;



            carousel.classList.add('no-transition');
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove('no-transition');

            const clickHandler = (event) => {
                const scrollWidth = carousel.scrollWidth - carousel.offsetWidth;
                // console.log(carousel.offsetWidth)
                // console.log(carousel.scrollWidth)
                // console.log(scrollWidth)
                // console.log(carousel.scrollLeft)
                // console.log(carousel.scrollRight)

                if (event.target.id === 'left' || event.target.id === 'leftArrow') {
                    // Check if at the start of carousel, then scroll to the end
                    if (carousel.scrollLeft === 0) {
                        carousel.scrollLeft = scrollWidth;
                    } else {
                        // Scroll the carousel to the left
                        carousel.scrollLeft -= firstCardWidth;
                    }
                } else if (event.target.id === 'right' || event.target.id === 'rightArrow') {
                    // Check if at the end of carousel, then scroll to the start
                    if (Math.floor(carousel.scrollLeft) === scrollWidth) {
                        carousel.scrollLeft = 0;
                    } else {
                        // Scroll the carousel to the right
                        carousel.scrollLeft += firstCardWidth;
                    }
                }
            };



            arrowBtns.forEach((btn) => {
                btn.addEventListener('click', clickHandler);
            });

            return () => {
                arrowBtns.forEach((btn) => {
                    btn.removeEventListener('click', clickHandler);
                });
            };
        };

        // Call addEventListeners after the initial render
        addEventListeners();
    }, []); // Empty dependency array ensures this effect runs only once after initial render

    const scrollToContact = () => {
        console.log('clicked');
        const contactSection = document.querySelector('#section--5');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <section className="section flex-center" id="section--3">
            <div className="section__title_1">
                <h1 className="island-moments-regular font1">Featured Tours</h1>
                <h1 className="section__header my-custom-font ">Most popular tours</h1>
            </div>

            <div className="wrapper">
                <i id="left"><img id='leftArrow' src={leftArrow} alt="left arrow" /></i>
                <ul ref={carouselRef} className="carousel">
                    {tourData.map((tour, index) => (
                        <li className="card" key={index}>
                            <div className="img">
                                <img src={tour.image} alt="img" draggable="false" />
                            </div>
                            <h2 className="my-custom-font font1">{tour.name}</h2>
                            <span className="my-custom-font">{tour.description}</span>
                            <button className="card-btn my-custom-font" type="button" onClick={scrollToContact}>
                                Book Tour
                            </button>
                        </li>
                    ))}
                </ul>
                <i id="right"><img id='rightArrow' src={rightArrow} alt="right arrow" /></i>
            </div>
        </section>
    );
};

export default Tours;