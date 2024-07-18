// Quotes.js
import React, { useState } from 'react';
import './Quotes.css'; // Import the CSS file
import Modal from './Modal';
import MultiStepForm from './MultiStepForm';

const Quotes = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="hero-section">
      <h1 >Let's create a measurable</h1>
       <h1> impact on your business.</h1>
      <button onClick={openModal}>DESIGN A QUOTE</button>
      <Modal show={showModal} onClose={closeModal}>
        <MultiStepForm onClose={closeModal} />
      </Modal>
    </div>
  );
};

export default Quotes;
