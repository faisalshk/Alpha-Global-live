import React from 'react';
import Hero from './Hero'
import '../CSS/modal.css'; // Import your modal styles

const Modal = ({ tour, closeModal }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <span className="close" onClick={closeModal}>&times;</span>
                <img className="modal-image" src={tour.image} alt={tour.name} />
                {/* <Hero image={tour.image} /> */}

                <div className="modal-details">
                    <h2>{tour.name}</h2>
                    <ul>
                        <li>Description: {tour.description}</li>
                        {/* Add other details as bullet points */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Modal;
