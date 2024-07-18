import React from "react";
import "./Services.css";
import Arrow2 from "./Arrow2";
import m10 from "../images/green.png";

const Services = () => {
  return (
    <section className="services ">
      <h2 style={{padding:'80px'}}>Our Services</h2>

      
      <img style={{marginLeft:'1000px',marginTop:'-300px',width:'50px',height:'50px'}} src={m10}/>

      <div className="services-container">
        <div className="service">
          <h3>Content Marketing</h3>
          <p>
          Content is the king. And 
            we work on it. Elevate your
          brand with a content 
         marketing that drives
         traffic and leads for your
         business. 
          </p>
        </div>
        <div className="service">
          <h3>Social Media Marketing</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Netus scelerisque congue
            cursus diam consectetur non cursus euismod arcu.Lorem ipsum dolor
            sit amet consectetur. Netus scelerisque congue cursus diam
            consectetur non cursus euismod arcuLorem ipsum dolor sit amet
            consectetur. Amet netus ma{" "}
          </p>
        </div>
        <div className="service">
          <h3>Search Engine Marketing (SEM)</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Netus scelerisque congue
            cursus diam consectetur non cursus euismod arcu.Lorem ipsum dolor
            sit amet consectetur. Netus scelerisque congue cursus diam
            consectetur non cursus euismod arcuLorem ipsum dolor sit amet
            consectetur. Amet netus{" "}
          </p>
        </div>
      
        <div className="service branding">
          <h3>Branding</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Netus scelerisque congue
            cursus diam consectetur non cursus euismod arcu.Lorem ipsum dolor
            sit amet consectetur. Netus scelerisque congue cursus diam
            consectetur non cursus euismod arcuLorem ipsum dolor sit amet
            consectetur. Amet netus{" "}
          </p>
        </div>
      </div>
   
    </section>
  );
};

export default Services;
