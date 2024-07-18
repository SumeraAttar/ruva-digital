import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './TestimonialsClient.css';
import T2 from "../images/T2.png";


const testimonials = [
  {
    text: "Ruva Digital Media is one of the few Design agencies that understand the financial services industry's inner workings. They're an incredible agency that 'knows it'. The team Ruva is killing it and bringing UI/UX Designs to the forefront of a whole industry's digital transformation.",
    author: "Amit Singh",
    position: "CEO City Vista",
    image: T2
  },

  {
    text: "Ruva Digital Media is one of the few Design agencies that understand the financial services industry's inner workings. They're an incredible agency that 'knows it'. The team Ruva is killing it and bringing UI/UX Designs to the forefront of a whole industry's digital transformation.",
    author: "Amit Singh",
    position: "CEO City Vista",
    image: T2
  },
  {
    text: "Ruva Digital Media is one of the few Design agencies that understand the financial services industry's inner workings. They're an incredible agency that 'knows it'. The team Ruva is killing it and bringing UI/UX Designs to the forefront of a whole industry's digital transformation.",
    author: "Amit Singh",
    position: "CEO City Vista",
    image: T2
  },
  // Add more testimonials here if needed
];

const TestimonialsClient = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="testimonial-section">
      <h3 className="testimonials-title">Testimonials</h3>
      <h2 className="testimonial-heading">Happy clients with 260+ successful Projects</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="testimonial-author">
              <img src={testimonial.image} alt={testimonial.author} className="testimonial-image" />
              <div>
                <h4>{testimonial.author}</h4>
                <p>{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsClient;
