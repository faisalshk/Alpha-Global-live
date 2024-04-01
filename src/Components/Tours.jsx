import React, { useEffect, useRef } from 'react';
import '../CSS/tour.css'
import tajmahal from '../assets/agra.jpg'
import leftArrow from '../assets/left_arrow.svg';
import rightArrow from '../assets/right_arrow.svg';

const Carousel = ({ wrapperSelector, arrows, carouselSelector, cardSelector, autoPlayDelay }) => {
    const carouselRef = useRef(null);

    useEffect(() => {
        const wrapper = document.querySelector(wrapperSelector);
        const arrowBtns = document.querySelectorAll(arrows);
        const carousel = carouselRef.current;
        const firstCardWidth = carousel.querySelector(cardSelector).offsetWidth;
        const carouselChildrens = [...carousel.children];

        let isDragging = false,
            startX,
            startScrollLeft,
            timeoutId;

        const cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

        carouselChildrens
            .slice(-cardPerView)
            .reverse()
            .forEach((card) => {
                carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
            });

        carouselChildrens.slice(0, cardPerView).forEach((card) => {
            carousel.insertAdjacentHTML("beforeend", card.outerHTML);
        });

        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");

        arrowBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
            });
        });


        const dragStart = (e) => {
            isDragging = true;
            carousel.classList.add("dragging");
            startX = e.pageX;
            startScrollLeft = carousel.scrollLeft;
        };

        const dragging = (e) => {
            if (!isDragging) return;
            carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
        };

        const dragStop = () => {
            isDragging = false;
            carousel.classList.remove("dragging");
        };

        const infiniteScroll = () => {
            if (carousel.scrollLeft === 0) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
                carousel.classList.remove("no-transition");
            } else if (
                Math.ceil(carousel.scrollLeft) ===
                carousel.scrollWidth - carousel.offsetWidth
            ) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.offsetWidth;
                carousel.classList.remove("no-transition");
            }
            clearTimeout(timeoutId);
            if (!wrapper.matches(":hover")) autoPlay();
        };

        const moveCarousel = (direction) => {
            const scrollAmount = direction === 'left' ? -firstCardWidth : firstCardWidth;
            carousel.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        };

        const autoPlay = () => {
            timeoutId = setTimeout(() => {
                moveCarousel('right');
                autoPlay();
            }, autoPlayDelay);
        };
        autoPlay();



        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("mousemove", dragging);
        document.addEventListener("mouseup", dragStop);
        carousel.addEventListener("scroll", infiniteScroll);
        wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
        wrapper.addEventListener("mouseleave", autoPlay);

        return () => {
            carousel.removeEventListener("mousedown", dragStart);
            carousel.removeEventListener("mousemove", dragging);
            document.removeEventListener("mouseup", dragStop);
            carousel.removeEventListener("scroll", infiniteScroll);
            wrapper.removeEventListener("mouseenter", () => clearTimeout(timeoutId));
            wrapper.removeEventListener("mouseleave", autoPlay);
        };
    }, []);

    return (
        <div className="wrapper">
            <i id="left"><img src={leftArrow} alt="left arrow" /></i>
            <ul ref={carouselRef} className="carousel">
                {[...Array(8)].map((_, index) => (
                    <li className="card" key={index}>
                        <div className="img">
                            <img src={tajmahal} alt="img" draggable="false" />
                        </div>
                        <h2 className="my-custom-font font1">Taj Mahal</h2>
                        <span className="my-custom-font">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptatum tenetur laborum dolorum laboriosam pariatur aspernatur debitis accusamus dicta harum consequatur sapiente quos deserun temporibus, obcaecati molestias. Amet, adipisci fugit?</span>
                        <button className="card-btn my-custom-font" type="button" href="#section--5">
                            Book Tour
                        </button>
                    </li>
                ))}
            </ul>
            <i id="right"><img src={rightArrow} alt="right arrow" /></i>
        </div>
    );
};


const Tours = () => {

    return (
        <section className="section flex-center" id="section--3">
            <div className="section__title_1">
                <h1 className="island-moments-regular font1">Featured Tours</h1>
                <h1 className="section__header my-custom-font ">Most popular tours</h1>
            </div>
            <Carousel
                wrapperSelector=".wrapper"
                arrows='i'
                carouselSelector=".carousel"
                cardSelector=".card"
                autoPlayDelay={2500}
            />
        </section>
    );
};

export default Tours;