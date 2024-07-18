import React from "react";
import "./Hero.css";
import c1 from "../images/c1.png";
import c2 from "../images/c2 (1).png";
import c3 from "../images/c2 (2).png";
import c4 from "../images/c2 (3).png";
import c5 from "../images/c2 (4).png";
import logo98 from "../images/circle.png";
import Arrow1 from "./Arrow1";
import Logo from "../images/RuvAa 1.png";
const Hero = () => {
  return (
    <section className="hero">
      {/* <div className="ruvaName">
        <h3>
          <span style={{ color: "#90EE90" }}>R</span>
          <span style={{ color: "#FF5F1F" }}>U</span>
          <span style={{ color: "blue" }}>V</span>
          <span style={{ color: "#A666EA" }}>A</span>
        </h3>
        <p>
          <strong>Digital Media</strong>
        </p>
      </div> */}
     
      <div className="hero-content">
     
        <div className="text-content">
        <div className="Logo">
            <img src={Logo} alt="Logo" />
          </div>
         
          <h1 >Pune’s Brightest Digital Agency</h1>
          <p>
          Get your brand recognized by people with our 
             marketing channel. Branding, Marketing, SEO,
             SMM & SEM all at one place. 
          </p>
          <button className="watch-video-btn">
            <b>WATCH VIDEO</b>
          </button>
        </div>
        <div className="image-content">
          <div className="shape">
            <div className="shape-inner">
              <img src={c1} className="circular-image" alt="Circular Image" />
            </div>
            <div className="shape-inner4"></div>
            <div className="shape-inner1">
              <img src={c2} className="circular-image" alt="Circular Image" />
            </div>
            <div className="shape-inner2">
              <img src={c3} className="circular-image" alt="Circular Image" />
            </div>
            <img src={c5} className="circularimage1" alt="Circular Image" />
          </div>

          <div className="shape2">
            <div className="shape-inner3">
              <img src={c4} className="circular-image" alt="Circular Image" />
            </div>
            <div className="shape-inner5"></div>
            <img src={c5} className="circularimage" alt="Circular Image" />
          </div>
        </div>
      </div>
      <div className="arrow-container">
        <Arrow1 />
      </div>
    </section>
  );
};

export default Hero;
