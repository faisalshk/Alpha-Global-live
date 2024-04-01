import React, { useRef, useEffect } from 'react'
import reviewImg from '../assets/Review_img.png'
import '../CSS/review.css'


const CarouselReview = ({ wrapperSelector, carouselSelector, cardSelector, autoPlayDelay }) => {

    const reviewData = [
        {
            name: "Meenaxi Dhariwal",
            review:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptatum tenetur laborum dolorum laboriosam pariatur aspernatur debitis accusamus dicta harum consequatur sapiente quos deserun temporibus, obcaecati molestias. Amet, adipisci fugit? ",
            stars: 5,
            image: reviewImg,
        },
        {
            name: "Meenaxi Dhariwal",
            review:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptatum tenetur laborum dolorum laboriosam pariatur aspernatur debitis accusamus dicta harum consequatur sapiente quos deserun temporibus, obcaecati molestias. Amet, adipisci fugit? ",
            stars: 5,
            image: reviewImg,
        },

        {
            name: "Meenaxi Dhariwal",
            review:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptatum tenetur laborum dolorum laboriosam pariatur aspernatur debitis accusamus dicta harum consequatur sapiente quos deserun temporibus, obcaecati molestias. Amet, adipisci fugit? ",
            stars: 5,
            image: reviewImg,
        },
        {
            name: "Meenaxi Dhariwal",
            review:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptatum tenetur laborum dolorum laboriosam pariatur aspernatur debitis accusamus dicta harum consequatur sapiente quos deserun temporibus, obcaecati molestias. Amet, adipisci fugit? ",
            stars: 5,
            image: reviewImg,
        },
        {
            name: "Meenaxi Dhariwal",
            review:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptatum tenetur laborum dolorum laboriosam pariatur aspernatur debitis accusamus dicta harum consequatur sapiente quos deserun temporibus, obcaecati molestias. Amet, adipisci fugit? ",
            stars: 5,
            image: reviewImg,
        },
        {
            name: "Meenaxi Dhariwal",
            review:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptatum tenetur laborum dolorum laboriosam pariatur aspernatur debitis accusamus dicta harum consequatur sapiente quos deserun temporibus, obcaecati molestias. Amet, adipisci fugit? ",
            stars: 5,
            image: reviewImg,
        },
    ];

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
        <div className="wrapper-review">
            <ul ref={carouselRef} className="carousel-review">
                {reviewData.map((review, index) => (
                    <li className="card-review" key={index}>
                        <div className="img">
                            <img src={review.image} alt="img" draggable="false" />
                        </div>
                        <span> ⭐⭐⭐⭐⭐ </span>
                        <h2>{review.name}</h2>
                        <span
                        >{review.review}</span
                        >
                    </li>
                ))}

            </ul>
        </div>

    );
};

const Reviews = () => {

    return (
        <section className="section flex-center">
            <div className="section__title_1">
                <h2 className="island-moments-regular font1">Testimonals & Reviews</h2>
                <h3 className="section__header my-custom-font">What are they saying</h3>
            </div>

            <CarouselReview
                wrapperSelector=".wrapper-review"
                carouselSelector="carousel-review"
                cardSelector=".card-review"
                autoPlayDelay={4500}

            />

        </section>
    )
}

export default Reviews
