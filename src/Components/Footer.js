import React from "react";
import './Footer.css';
import Logo from '../images/RuvAa 1.png';
function Footer() {
    return ( 
        <React.Fragment>
            <div className="color-bg ">
                <div className="row text-white mx-auto">
                    <div className="col-sm-12 col-lg-3 mb-3">
                        <img src={Logo} alt="logo" className="mx-auto d-block img-fluid" width={150}/>
                        <div className=" mx-5 d-flex justify-content-center">
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-linkedin"></i>
                        <i class="bi bi-youtube"></i>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-2 mb-3">
                            <h5 className="pb-2"><b>Services</b></h5>
                            <a href="#" className="text-white d-block my-3">Design</a>
                            <a href="#" className="text-white d-block my-3">Technology</a>
                            <a href="#" className="text-white d-block my-3">NeuroMarketing</a>
                            <a href="#" className="text-white d-block my-3">Digital Marketing</a>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-2 mb-3">
                        <h5 className="pb-2"><b>About</b></h5>
                        <a href="#" className="text-white d-block my-3">About Us</a>
                            <a href="#" className="text-white d-block my-3">Team</a>
                            <a href="#" className="text-white d-block my-3">Career</a>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-2 mb-3">
                        <h5 className="pb-2"><b>For Our Client</b></h5>
                        <a href="#" className="text-white d-block my-3">Work</a>
                            <a href="#" className="text-white d-block my-3">Client</a>
                            <a href="#" className="text-white d-block my-3">Blog</a>
                            <a href="#" className="text-white d-block my-3">Reach Us Marketing</a>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 mb-2">
                        <h5 className="pb-2"><b>Quick Links</b></h5>
                        <a href="#" className="text-white d-block my-3">Privacy Policy</a>
                            <a href="#" className="text-white d-block my-3">Terms of use</a>
                            <a href="#" className="text-white d-block my-3">site Map</a>
                            <a href="#" className="text-white d-block my-3">refund policy</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}

export default Footer;