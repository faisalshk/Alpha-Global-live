import React, { useRef, useEffect } from 'react'
import redFort from '../assets/redFort.jpg'
import munich from '../assets/munich.jpg'
import agra from '../assets/agra.jpg'
import agra_1 from '../assets/agra_1.jpg'
import titlis from '../assets/titls.jpg'
import map from '../assets/map.svg'
import map_2 from '../assets/map_2.svg'
import '../CSS/gallery.css'


const CarouselGallery = ({ wrapperSelector, carouselSelector, cardSelector, autoPlayDelay }) => {
    const Images = [munich, redFort, agra, titlis]
    const carouselRef = useRef(null);

    useEffect(() => {
        const wrapper = document.querySelector(wrapperSelector);
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
    }, [])


    return (
        <div className="wrapper-gallery">
            <ul ref={carouselRef} className="carousel-gallery">
                {Images.map((img, index) => (
                    <li className="card-gallery" key={index}>
                        <div className="img">
                            <img src={img} alt="img" draggable="false" />
                        </div>
                    </li>
                ))}
            </ul>
        </div>

    );
};

const Gallery = () => {

    return (
        <section className="gallery_section">
            <img className="map" src={map} alt="map" />
            <img className="map1" src={map_2} alt="map" />
            <CarouselGallery
                wrapperSelector=".wrapper-gallery"
                carouselSelector="carousel-gallery"
                cardSelector=".card-gallery"
                autoPlayDelay={2500}

            />

        </section>
    )
}

export default Gallery
