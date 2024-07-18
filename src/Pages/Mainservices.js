import React from "react";
import header from "../Components/Header";
import footer from "../Components/Footer";
import { Link } from "react-router-dom";
import "./Mainservices.css";
import Facebook from "../images/Facebook.png";
import Instagram from "../images/Instagram.png";
import Linkedin from "../images/Linkedin.png";
import Whatsapp from "../images/Whatsapp.png";
import Youtube from "../images/Youtube.png";
import Marketing from "../images/Marketing.png";
import Research from "../images/Research (1).png";
import Position from "../images/Positioned.png";
import creative from "../images/Creative.png";
import market from "../images/Marketing (2).png";
import Management from "../images/Management.png";
import Logo from "../images/RuvAa 1.png";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Seo from "../Pages/Seo";
function Mainservices() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
    
        <section className="what-we-serve">
          <h2>What Do We Serve?</h2>
          <p>
            End-to-end neuromarketing services and branding strategies of the
            digital world.
          </p>
          <div class="services-tags">
    <span class="tag tag-red"><a href="/seo">SEO</a></span>
    <span class="tag"><a href="/smm">SMM</a></span>
    <span class="tag"><a href="/contentmarketing">Content Marketing</a></span>
    <span class="tag"><a href="/graphic">Graphic Design</a></span>
    <span class="tag"><a href="/ai">AI Marketing</a></span>
    <span class="tag"><a href="/google">Google Ads</a></span>
    <span class="tag"><a href="/web">Website Development</a></span>
    <span class="tag">Influencer marketing</span>
    <span class="tag">Email Marketing</span>
    <span class="tag">Radio FM Advertising</span>
    
</div>

        </section>

        <section className="how-we-do-it">
          <h2>HOW WE DO IT?</h2>
          <div className="how-we-do-it-content">
            <div className="row">
              <div className="col-md-6">
                <div className="servicess">
                  <img src={Research} alt="Research" />
                  <h3>Research</h3>
                  <p>
                    We develop future-proof brands with meticulous research to
                    define a business problem by assessing existing marketing
                    collaterals.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="servicess">
                  <img src={Position} alt="Positioning" />
                  <h3>Positioning</h3>
                  <p>
                    We co-create the brand's purpose, vision, platform,
                    architecture, and brand message matrix by blending human
                    behavioral patterns with data science.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="servicess">
                  <img src={creative} alt="Creative" />
                  <h3>Creative</h3>
                  <p>
                    We unlock scalable and accessible solutions for effortless
                    customer interactions by identifying customer experience
                    gaps and bringing the brand closer to customers.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="servicess">
                  <img src={market} alt="Marketing" />
                  <h3>Marketing</h3>
                  <p>
                    We implement effective marketing strategies to reach the
                    target audience and boost brand visibility and engagement.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="servicess">
                  <img src={Management} alt="Management" />
                  <h3>Management</h3>
                  <p>
                    We offer solutions to help brands manage customer pain
                    points and ensure a seamless customer experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="tools-we-use">
          <h2>Tools We Use</h2>
          <div className="tools-icons">
            <img src={Facebook} alt="Facebook" />
            <img src={Instagram} alt="Instagram" />
            <img src={Whatsapp} alt="WhatsApp" />
            <img src={Youtube} alt="YouTube" />
            <img src={Linkedin} alt="LinkedIn" />
          </div>
        </section>

        <section className="marketing-section">
          <h2>Marketing</h2>
          <img src={Marketing} alt="Marketing" className="marketing-image" />
        </section>

       
      </main>
      <Footer />
      {/* <footer className="footer">
        <div className="footer-links">
          <div className="footer-column">
            <h3>Services</h3>
            <p>Design</p>
            <p>Technology</p>
            <p>Neuromarketing</p>
            <p>Digital Marketing</p>
          </div>
          <div className="footer-column">
            <h3>About</h3>
            <p>About Us</p>
            <p>Team</p>
            <p>Career</p>
          </div>
          <div className="footer-column">
            <h3>For Our Client</h3>
            <p>Work</p>
            <p>Clients</p>
            <p>Blog</p>
            <p>Reach Us</p>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <p>Privacy Policy</p>
            <p>Terms of use</p>
            <p>Site Map</p>
            <p>Refund Policy</p>
          </div>
        </div>
        <div className="footer-social">
          <a href="/">Facebook</a>
          <a href="/">LinkedIn</a>
          <a href="/">Instagram</a>
          <a href="/">YouTube</a>
        </div>
      </footer> */}
    </div>
  );
}

export default Mainservices;