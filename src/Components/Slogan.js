import React, { useState, useEffect, useRef } from 'react';
import './Slogan.css';
import Sloganimg from "../images/sloganimg.png";

const Slogan = () => {
  const [count, setCount] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 } // Adjust as needed to determine visibility
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let interval;
    if (isVisible && count < 240) {
      interval = setInterval(() => {
        setCount(prevCount => {
          if (prevCount >= 240) {
            clearInterval(interval);
            return prevCount;
          }
          return prevCount + 1;
        });
      }, 100); // Adjust the speed of the counter as needed
    }

    return () => clearInterval(interval);
  }, [isVisible, count]);

  return (
    <section ref={sectionRef} className="slogan-section">
      <div className="slogan-content">
        <h1 style={{fontWeight:'bold'}}>{count}+ Live Projects</h1>
        <p>And Counting More...</p>
      </div>
      <div className="map-container">
        <img src={Sloganimg} alt="World Map with Circles and Lines" className="map-image" />
        <div className="animated-ball ball1"></div>
        <div className="animated-ball ball2"></div>
        <div className="animated-ball ball3"></div>
      </div>
    </section>
  );
};

export default Slogan;