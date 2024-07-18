import React,{useState} from 'react';
import './Seo.css';
import FAQ from '../Components/FAQ';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Star from '../Components/Star';
import ServAnimate from '../Components/ServAnimate';
import logo86 from "../images/se.png";




function AI() {
  const [animate, setAnimate] = useState(false);

  const startAnimation = () => {
    setAnimate(true);
  };
  return (
    <div className="App">
     <Header/>
     <span alt="" className="rounded-circle p-2 py-3 arrow" style={{marginLeft:'-1100px',width:'20px',height:'20px'}}>
                <i class="bi bi-arrow-left"></i>
                </span>
      <ServAnimate></ServAnimate>
    

      
      
      <div className="p-5 my-5 section2 text-white" style={{backgroundColor:"#EF259B",justifyContent:"left"}}>

                    <h1>what is SEO?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime vero harum fuga eveniet, sit, ipsa facere voluptatum dolores minima,
                         cupiditate quaerat? Aliquam ea impedit, eaque consequatur quidem neque veniam alias.</p>
                         <h3 style={{color:'purple'}}>what do we serve?</h3>
                         <p style={{fontWeight: '700', fontSize: '33px'}}>A strategy and a broad spectrum of creative brand marketing services in the digital world.</p>
                         <div className="section3 row">
                         <div className="col-2">SEO</div>
                         <div className="col-2">SMM</div>
                         <div className="col-3">Content Marketing</div>
                         <div className="col-3">Graphics Design</div>
                         <div className="col-3">AI Marketing</div>
                         <div className="col-3">AI Marketing</div>
                         <div className="col-3">Google Ad's</div>
                         <div className="col-4">Website Developement</div>
                         </div>
                </div>
      
      <FAQ />
      
      <section className="quote-section">
        <h2>Let’s create a measurable impact on your business.</h2>
        <button>DESIGN A QUOTE</button>
      </section>
    <Footer/>
    </div>
  );
}

export default AI;