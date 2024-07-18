import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import './AboutUs.css';
import m11 from "../images/pink.png";
import m12 from "../images/purple.png";
import m13 from "../images/blue.png";

function AboutUs() {
    return ( 
        <React.Fragment>
            <Header></Header>
            <div className="mt-5 contain">
                <span alt="" className="rounded-circle p-2 py-3 arrow">
                <i class="bi bi-arrow-left"></i>
                </span>
                <h5 className="text-primary about">About Us</h5>
                <p className="mx-5 text-center">We, at ruva Digital Media, apply neuromarketing 
                    <br/>and behavioural science to design, digitiz<br/> 
                    and grow your business.
                </p>
                <img style={{marginTop:'-400px',marginLeft:'550px'}} src={m11}></img>

                <img style={{marginTop:'-480px',marginLeft:'300px',width:'40px',height:'40px'}} src={m12}></img>
               
                <div className="ruva" style={{position: "relative",padding:200, paddingBottom:10}}>
                    <span>R</span>
                    <span>U</span>
                    <span>V</span>
                    <span>A</span>
                    <div className="ruva1" style={{position : "relative", padding:'60'+'px', width:'400px'}}>
                        <span className="rounded-circle p-3"></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <img style={{marginTop:'-480px',marginLeft:'630px',width:'40px',height:'40px'}} src={m13}></img>
               



                <div className="ruva2">
                    <span>R</span>
                    <span>U</span>
                    <span>V</span>
                    <span>A</span>
                </div>
               
                <main className="main-content">
        <div className="about-intro">
          
        </div>
        <section className="about-details">
          <p>Ruva Digital Media is one of the leading companies in the Digital Marketing space in the Pune area. With a small yet experienced team, we are driving the narrative in the digital space with our marketing strategies and campaigns that disrupt market norms.</p>
          <p>We do thorough research before implementing any strategies. We believe in implementation and data analysis. It is our core strength. With this, we are always one step ahead to deliver the desired result.</p>
          <p>Our clients were always happy with the output they achieved. Our marketing campaign is aimed to provide a clear message and proper outlook of the product or services we are promoting.</p>
          <p>We have worked with many clients from different industries such as hotel, dairy, clinics, pharma shops, fast food franchises, chains of restaurants, and real estate companies. It has bolstered our experience and exposure to many industries allowing us to work with everyone.</p>
        </section>
        
      </main>
                
            </div>
            <Footer></Footer>
        </React.Fragment>
     );
}

export default AboutUs;