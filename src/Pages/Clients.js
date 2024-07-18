import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Clients.css";
import TestimonialsClient from "../Components/TestimonialsClient";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import m19 from '../images/pink.png'
import m20 from '../images/dgreen.png'
import m21 from '../images/purple.png'

import clientLogo1 from "../images/JNB logo 1.png";
import clientLogo2 from "../images/octagon logo 1.png";
import clientLogo3 from "../images/krishna logo 1.png";
import clientLogo4 from "../images/kwality logo 1.png";
import clientLogo5 from "../images/lotus beauty logo 1.png";
import clientLogo6 from "../images/R N logo 1 (1).png";
import clientLogo7 from "../images/aadee digital logo 1.png";
import clientLogo8 from "../images/aadee express logo 1.png";
import clientLogo9 from "../images/coders logo 1.png";
import clientLogo10 from "../images/abhishek auto logo 1.png";
import clientLogo11 from "../images/energy hub logo 1.png";
import clientLogo12 from "../images/highness logo 1.png";
import clientLogo13 from "../images/india mechanic logo 1.png";
import clientLogo14 from "../images/just ring 1.png";
import clientLogo15 from "../images/onistays logo 1.png";
import clientLogo16 from "../images/parth logo 1.png";
import clientLogo17 from "../images/pune detective logo 1.png";
import clientLogo18 from "../images/reddy logo 1.png";
import clientLogo19 from "../images/sunayan logo 1.png";
import clientLogo20 from "../images/EBAOM logi 1.png";

import testimonialImage from "../images/T1.png";
import serviceIcon1 from "../images/service1 (1).png";
import serviceIcon2 from "../images/service1 (2).png";
import serviceIcon3 from "../images/service1 (3).png";
import serviceIcon4 from "../images/service2 (1).png";
import serviceIcon5 from "../images/service2 (2).png";
import serviceIcon6 from "../images/service1 (4).png";
import serviceIcon7 from "../images/service1 (5).png";
import serviceIcon8 from "../images/service1 (6).png";
import serviceIcon9 from "../images/service1 (7).png";
import serviceIcon10 from "../images/service1 (8).png";
import serviceIcon11 from "../images/service1 (9).png";
import serviceIcon12 from "../images/service1 (10).png";
import serviceIcon13 from "../images/service1 (11).png";
import serviceIcon14 from "../images/service1 (12).png";
import serviceIcon15 from "../images/service1 (13).png";
import serviceIcon16 from "../images/service1 (14).png";
import serviceIcon17 from "../images/service1 (15).png";
import serviceIcon18 from "../images/service1 (16).png";
import serviceIcon19 from "../images/service2 (4).png";
import serviceIcon20 from "../images/service2 (5).png";
import serviceIcon21 from "../images/service2 (6).png";

import Clientbg from '../images/Clientbg.png';

const Clients = () => {
  const navigate = useNavigate();

  const clientLogos = [
    clientLogo1, clientLogo2, clientLogo3, clientLogo4, clientLogo5,
    clientLogo6, clientLogo7, clientLogo8, clientLogo9, clientLogo10,
    clientLogo11, clientLogo12, clientLogo13, clientLogo14, clientLogo15,
    clientLogo16, clientLogo17, clientLogo18, clientLogo19, clientLogo20,
  ];

  const services = [
    { name: "E-Commerce", icon: serviceIcon1 },
    { name: "Communication", icon: serviceIcon2 },
    { name: "Capital", icon: serviceIcon3 },
    { name: "Food", icon: serviceIcon4 },
    { name: "Events", icon: serviceIcon5 },
    { name: "Automobiles", icon: serviceIcon6 },
    { name: "Movies", icon: serviceIcon7 },
    { name: "Education", icon: serviceIcon8 },
    { name: "Ship", icon: serviceIcon9 },
    { name: "SAAS", icon: serviceIcon10 },
    { name: "Publishing", icon: serviceIcon11 },
    { name: "Hardware", icon: serviceIcon12 },
    { name: "Travel", icon: serviceIcon13 },
    { name: "Hospitality", icon: serviceIcon14 },
    { name: "Healthcare", icon: serviceIcon15 },
    { name: "Real-Estate", icon: serviceIcon16 },
    { name: "Industires", icon: serviceIcon17 },
    { name: "Energy", icon: serviceIcon18 }

    // Add more services as needed
  ];
  const testimonials = [
    {
      text: "Ruva Digital Media is one of the few Design agencies that understand the financial services industry's inner workings. They're an incredible agency that 'knows it'. The team Ruva is killing it and bringing UI/UX Designs to the forefront of a whole industry's digital transformation.",
      author: "Amit Singh",
      position: "CEO City Visa",
      image: testimonialImage,
    },
    // Add more testimonials as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  };

  return (
    <div className="App">
      <Header />
      <span alt="" className="rounded-circle p-2 py-3 arrow" onClick={() => navigate(-1)} style={{marginLeft: '-1178px',}}>
                <i class="bi bi-arrow-left"></i>
                </span>
      <main className="main-content">
      
        <section className="heroSectionclient">
          <div className="contentclient">
            <h1 style={{ textAlign: "left",marginTop: '-115px', marginLeft: '10px',color:'#183C9D' }}>Clients</h1>
            
            <img style={{marginTop:'-67px',marginLeft:'770px' , width:'30px',height:'30px'}} src={m19}></img>

<img style={{marginTop:'40px',marginLeft:'377px' , width:'30px',height:'30px'}} src={m20}></img>
            <h2 className="hero-text">
            
             
              <span style={{ fontWeight: 'bold', display: 'block', fontSize: '60px', color: 'black' }}>We make happy clients</span>
              <span style={{ fontWeight: 'bold', display: 'block', fontSize: '60px', color: 'black' }}>by interconnecting technology</span>
              <span style={{ fontWeight: 'bold', display: 'block', fontSize: '60px', color: 'black' }}>with business & art.</span>
            </h2>
            <img style={{marginTop:'40px',marginLeft:'9px' , width:'30px',height:'30px'}} src={m21}></img>
            <img src={Clientbg} alt="Client Background" />
          </div>
        </section>

        <section className="clientSection">
          <h1 style={{fontSize: '2.5rem', padding: '36px'}}>We’ve been working with amazing clients to create meaningful impact and compelling experiences.</h1>
          <h2 style={{ textAlign: 'left', fontWeight: 'bold' }}>Our Clients</h2>
          <div className="clientLogos">
            {clientLogos.map((logo, index) => (
              <img key={index} src={logo} alt={`Client logo ${index + 1}`} />
            ))}
          </div>
        </section>

        <TestimonialsClient />

        <h1 style={{marginTop:'70px'}}>Expertise</h1>
          <h2>Domains we have worked for</h2>

        <section className="serviceIconGrid">
          
          {services.map((service, index) => (
            <div key={index} className="serviceIcon">
              <img src={service.icon} alt={service.name} />
              <p>{service.name}</p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Clients;
