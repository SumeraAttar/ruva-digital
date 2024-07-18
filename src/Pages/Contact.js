import React from "react";
import Header from "../Components/Header";
import Footer from '../Components/Footer';
import './Contact.css';
import logo from '../images/RuvAa 1.png';
import c2 from '../images/c1.png';
import c1 from '../images/c2 (1).png';
import c3 from '../images/c2 (2).png';
import c4 from '../images/c2 (4).png';
import c5 from '../images/c2 (3).png';

function Contact() {
    return (         
        <React.Fragment>
            <Header />
            <div className="row py-3 text-white color">
                <div className="col-12 col-lg-4 p-5 text-center text-lg-start ms-auto">
                    <img src={logo} alt="image" width={150} className="mb-3" />
                    <img src="" alt="" className="r p-4 rounded-circle bg-light ms-4" />
                    <h1 className="text-lowercase display-5">
                        <span className="text-uppercase">W</span>e've got a great feeling about this
                    </h1>
                    <button className="btn btn2 btn-lg btn-outline-dark py-3 my-4">
                        <b>LET'S GET STARTED</b>
                    </button>
                    <p className="p">Speak to Us</p>
                    <p className="p">95618 76100</p>
                    <p className="p">Contact@ruvadg.com</p>
                </div>
                <div className="col-12 col-lg-6 position-relative d-none d-lg-block">
                    <div className="semi"></div>
                    <div className="semi1"></div>
                    <div className="poly9"></div>
                    <div className="poly10"></div>
                    <img src={c2} alt="image" className="ii" width={200} />
                    <div className="square"></div>
                    <div className="circle"></div>
                    <div className="sq"></div>
                    <div className="poly11">
                        <img src={c1} alt="image" width={120} className="img11 mx-auto d-block" />
                        <br />
                        <img src={c3} alt="image" width={120} className="img12 mx-auto d-block" />
                    </div>
                    <div className="tri"></div>
                    <div className="poly12">
                        <img src={c4} alt="image" width={120} className="img13 mx-auto d-block" />
                    </div>
                    <div className="sq1"></div>
                    <img src={c5} alt="image" className="iii" width={200} />
                    <div className="sq2"></div>
                    <div className="sq3"></div>
                </div>
            </div>
            <div className="rounded section1">
                <div className="d-flex justify-content-center p-3">
                    <span className="me-5">367789090</span>
                    <span className="ms-5">ruva2gmail.com</span>
                </div>
                <div className="ms-5 p-5">
                    <h1 className="mx-3">Let's get started!</h1>
                    <p className="mb-0 pp mx-3">Fill in the blanks and we'll respond in one business day.</p>
                    <p className="text-secondary pp mx-3">Just want to chat? Call or email, we're a nice bunch.</p>
                    <form>
                        <div className="row my-4">
                            <div className="col-12 col-lg-5 mx-3">
                                <label className="form-label">What's your name?</label>
                                <input type="text" className="focus pp" placeholder="Your name here" />
                            </div>
                            <div className="col-12 col-lg-5 mx-3">
                                <label className="form-label">Name of your company/organization?</label>
                                <input type="text" className="focus pp" />
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col-12 col-lg-5 mx-3">
                                <label className="form-label">How shall we contact you?</label>
                                <input type="text" className="focus pp" placeholder="Phone number" />
                            </div>
                            <div className="col-12 col-lg-5 mx-3">
                                <label className="form-label">Email Address</label>
                                <input type="text" className="focus" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-10 my-5 mx-3">
                            <label className="form-label">Tell us about your project</label>
                            <p className="text-secondary pp">Let us know how we can help you</p>
                            <textarea cols="10" rows="3" className="focus"></textarea>
                        </div>
                        <div className="col-12 col-lg-10 my-5 mx-3">
                            <label className="form-label">How did you hear about us?</label>
                            <input type="text" className="focus pp" placeholder="From a friend? From Google?" />
                        </div>
                        <button type="submit" className="col-12 col-lg-10 p-2 btnb mx-auto my-3"><b>Submit</b></button>
                    </form>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default Contact;
