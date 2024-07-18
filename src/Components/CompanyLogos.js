import React from 'react';
import './CompanyLogos.css';
import c1 from './images/company1.png';
import c2 from './images/company2.png';
import c3 from './images/company3.png';
import c4 from './images/company4.png';
import c5 from './images/company5.png';

const logos = [
  { src: c1, alt: 'Company 1' },
  { src: c2, alt: 'Company 2' },
  { src: c3, alt: 'Company 3' },
  { src: c4, alt: 'Company 4' },
  { src: c5, alt: 'Company 5' },
];

const CompanyLogos = () => {
  return (
    <div className="logo-container">
      <div className="logo-slider">
        {logos.concat(logos).map((logo, index) => (
          <div className="logo" key={index}>
            <img src={logo.src} alt={logo.alt} onError={(e) => console.log(`Error loading image: ${logo.src}`)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;
