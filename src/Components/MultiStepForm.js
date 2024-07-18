import React, { useState } from 'react';
import './MultiStepForm.css';

const MultiStepForm = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [workType, setWorkType] = useState(null);

  const nextStep = () => {
    if (step === 1 && !selectedService) return;
    if (step === 2 && !workType) return;
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="step">
            <h2>Design A Quote</h2>
            <p style={{color:'black'}}>What services would you like to opt?</p>
            <button className={`service-btn ${selectedService === 'UI / UX' ? 'selected' : ''}`} onClick={() => setSelectedService('UI / UX')}>UI / UX</button>
            <button className={`service-btn ${selectedService === 'Branding' ? 'selected' : ''}`} onClick={() => setSelectedService('Branding')}>Branding</button>
            <button className={`service-btn ${selectedService === 'Development' ? 'selected' : ''}`} onClick={() => setSelectedService('Development')}>Development</button>
            <button className={`service-btn ${selectedService === 'Marketing' ? 'selected' : ''}`} onClick={() => setSelectedService('Marketing')}>Marketing</button>
            <button className={`service-btn ${selectedService === 'All Services' ? 'selected' : ''}`} onClick={() => setSelectedService('All Services')}>All Services</button>
            <button className="continue-btn" onClick={nextStep} disabled={!selectedService}>Continue →</button>
          </div>
      
        );
        case 2:
          return (
            <div className="step">
              <button className="back-btn" onClick={prevStep}>←</button>
              <h2>Design A Quote</h2>
              <p>How do you want to work?</p>
              <button className={`service-btn ${workType === 'Project' ? 'selected' : ''}`} onClick={() => setWorkType('Project')}>Project</button>
              <button className={`service-btn ${workType === 'Retainer' ? 'selected' : ''}`} onClick={() => setWorkType('Retainer')}>Retainer</button>
              <button className={`service-btn ${workType === 'Hours' ? 'selected' : ''}`} onClick={() => setWorkType('Hours')}>Hours</button>
              <button className="continue-btn" onClick={nextStep} disabled={!workType}>Continue →</button>
            </div>
          );
        
      case 3:
        return (
          <div className="step">
            <button className="back-btn" onClick={prevStep}>←</button>
            <h2>Design A Quote</h2>
            <p>Project Description</p>
            <textarea placeholder="Describe your project..."></textarea>
            <button className="continue-btn" onClick={nextStep}>Continue →</button>
          </div>
        );
      case 4:
        return (
          <div className="step">
            <button className="back-btn" onClick={prevStep}>←</button>
            <h2>Design A Quote</h2>
            <p>Hi! I am</p>
            <input type="text" placeholder="Your Name" />
            <p>Reach me at</p>
            <input type="email" placeholder="Your Email" />
            <p>Country Name</p>
            <input type="text" placeholder="Country Name" />
            <p>Mobile No. +91</p>
            <input type="tel" placeholder="Mobile Number" />
            <button className="send-btn">SEND</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="multi-step-form">
      {renderStep()}
    </div>
  );
};

export default MultiStepForm;