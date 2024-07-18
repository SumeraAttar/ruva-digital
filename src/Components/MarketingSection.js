import React from "react";
import "./MarketingSection.css";
import m1 from "../images/m2.png";
import m2 from "../images/m1.png";
import m3 from "../images/m3.png";
import m4 from "../images/m4.png";
import m5 from "../images/m5.png";
import m6 from "../images/m6.png";
import Arrow4 from "./Arrow4";
import Arrow3 from "./Arrow3";
import logo86 from "../images/cir9.png";

const MarketingSection = () => {
  return (
    <div className="marketing-section">
      <div className="section-header">
        <h1>
          Marketing that builds brand and generates more revenue is the way of RUVA Digital Media. We leverage digital platforms and craft a compelling system that drives business.
        </h1>
      </div>
      <div className="section-content">
        <div className="content-item">
          <div className="image-wrapper">
            <img src={m2} alt="Description 1" />
            <img className="rotating-image" style={{ top: '2px', left: '-1px',height:'160px',width:'160px' }} src={m4} alt="Decorative" />
            <img className="rotating-image1" style={{ top: '95px',right: '-6px' }} src={m5} alt="Decorative" />
            <img className="rotating-image" style={{ bottom: '0px', left: '20%' }} src={m6} alt="Decorative" />
          </div><br></br>
          <div className="text-wrapper">
            <h2>
              We Craft Experience For Business To Help Reach Our Customers
            </h2>
            <p style={{fontSize:'1.5em',fontFamily:'Kumbh Sans'}}>
              Reach out to more customers with the help of our marketing campaigns and understand your customer persona. Improve reach, Increase Conversion and Satisfied Customer.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
     
      <div className="content-item reverse">
      <div className="image-wrapper">
          <img src={m1} alt="Description 2" />
          <img className="rotating-image" style={{ top: '-102px',right: '259px',width:'50px !important' ,height:'50px !important' }} src={m3} alt="Decorative" />
        </div>
        <div className="text-wrapper" style={{        marginTop: '-196px',marginLeft:'-20px'}}>
          <img className="small-logo" src={logo86} alt="Logo" />
          <h2>
            We Craft Compelling Content and Engaging Campaigns
          </h2>
          <p style={{fontSize:'1.5em',fontFamily:'Kumbh Sans'}}>
            We are the leading Digital marketing agency in Pune. We have helped more than 40+ local business to rank online and grow organically.
          </p>
          <button>Learn More</button>
        </div>
       
      </div>
      
    </div>
  );
};

export default MarketingSection;