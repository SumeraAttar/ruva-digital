// Modal.js
import React from 'react';
import './Modal.css'; // Import the CSS file

const Modal = ({ show, children, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✕</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
