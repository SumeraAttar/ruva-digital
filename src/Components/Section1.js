import React from "react";
import './Section1.css';
import logo from '../images/RuvAa 1.png';
import news from "../images/News.png";
import c1 from "../images/c1.png";
import c2 from "../images/c2 (1).png";
import c3 from "../images/c2 (2).png";
import c4 from "../images/c2 (3).png";
import c5 from "../images/c2 (4).png";
import logo86 from "../images/circle.png";
import logo87 from "../images/circle4.png"
import Lottie from 'react-lottie';
import * as arrowAnimation from '../images/Animation - 1719984554482.json';

function Section1() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: arrowAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <React.Fragment>
            <div className="row mx-5">
                <div className="col p-5 ms-4">
                    <img src={logo} alt="img1" width={200} className="mb-3"></img>
                    
                    <img style={{marginLeft:50,width:34,height:34}} src={logo87}></img>
                  
                   
                    <h1 style={{fontWeight:'bolder',fontSize:70}}>Pune's Brightest<br /> digital agency</h1>
                    <div className="img8">
                    <img style={{marginLeft:'198px',marginTop: '-42px',width:45,height:45}} src={logo86}></img>
                    </div>
                    <p style={{marginBottom:'50px'}}>Get your brand recognized by people with our 
marketing channel. Branding, Marketing, SEO,
SMM & SEM all at one place. </p>
                    <div className="button-container">
                        <button type="button" className="btn btn-lg btn-outline-dark btn2"><b>WATCH VIDEO</b></button><br></br>
                        
                    </div>
                </div>
                <div className="col">
                    <div className="cylinder">
                        <div className="poly">
                            <img src={news} className="img1" alt="image" width={100} />
                        </div>
                        <div className="poly poly1">
                            <img src="" alt="" className="img2 rounded-circle" width={130} />
                        </div>
                        <img src={c2} className="img3" alt="image" width={150}></img>
                    </div>
                    <div className="cylinder1">
                        <img src={c3} alt="image" className="img4" width={100}></img>
                        <div className="poly poly2"></div>
                        <div className="poly poly3">
                            <img src={c4} alt="image" className="img5" width={100}></img>
                        </div>
                        <div className="poly poly4">
                            <img src={c5} alt="image" className="img7" width={100}></img>
                        </div>
                        <img src={c1} alt="image" className="img6" width={150} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Section1;