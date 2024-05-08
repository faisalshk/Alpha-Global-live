import React, { useState, useEffect } from 'react';
import offerings_1 from '../assets/offerings_1.jpg';
import offerings_2 from '../assets/offerings_2.jpg';
import offerings_3 from '../assets/offerings_3.jpeg';
import leftArrow from '../assets/left_arrow.svg';
import rightArrow from '../assets/right_arrow.svg';
import '../CSS/hero.css';

const Hero = ({ tourImage }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { image: offerings_1, title: 'Travel & Adventure', subtitle: 'Where do you want to go ?' },
        { image: offerings_2, title: 'Explore Nature', subtitle: 'Discover the beauty of the world' },
        { image: offerings_3, title: 'Adventure Awaits', subtitle: 'Find your next thrill' }
    ];

    const goToSlide = (index) => {
        const activeSlideHeroText = document.querySelector('.slide.active--slide .hero_text');
        activeSlideHeroText.style.opacity = 0;

        if (index < 0) {
            index = slides.length - 1;
        } else if (index >= slides.length) {
            index = 0;
        }

        setCurrentSlide(index);
    };

    useEffect(() => {
        const activeSlideHeroText = document.querySelector('.slide.active--slide .hero_text');
        activeSlideHeroText.style.opacity = 1;

        const interval = setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 4000);

        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <div className="slider" id="section--1">
            {slides.map((slide, index) => (
                <div className={`slide ${index === currentSlide ? 'active--slide' : ''}`} key={index}>
                    <img className="slider_img" src={slide.image} alt={`slider${index + 1}`} />
                    <div className="hero_text">
                        <h1 className="head island-moments-regular">{slide.title}</h1>
                        <p className="sub_head my-custom-font">{slide.subtitle}</p>
                    </div>
                </div>
            ))}
            <img className="arrow left" src={leftArrow} alt="left_arrow" onClick={() => goToSlide(currentSlide - 1)} />
            <img className="arrow right" src={rightArrow} alt="right_arrow" onClick={() => goToSlide(currentSlide + 1)} />
        </div>
    );
};

export default Hero;
