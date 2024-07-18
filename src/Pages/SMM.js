import React,{useState} from 'react';
import './Seo.css';
import FAQ from '../Components/FAQ';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Star from '../Components/Star';
import ServAnimate from '../Components/ServAnimate';
import logo86 from "../images/se.png";
import ellipse from '../images/Ellipse 257.png';
import m16 from "../images/dgreen.png";
import m17 from "../images/pink.png";




function SMM() {
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
                <section className="intro-section">
        <h1 className='text-start' style={{color:'blueviolet',textAlign:'left',marginLeft:'20px'}}>SMM</h1>
       <div className='row'>
        <div className='col-md-6 col-sm-12 col-lg-6'>

        <img style={{marginTop:'-80px',marginLeft:'700px' , width:'50px',height:'50px'}} src={m16}></img>

        <img style={{marginTop:'-227px',marginLeft:'1038px' , width:'28px',height:'28px'}} src={m17}></img>



          <p>Social media
marketing refers to
the process
of gaining traffic or
attention through 
social media sites.</p>
        </div>
       <div className="col-sm-12 col-md-6 col-lg-6 shape-container">
           
            <div className='cir1'></div>
            <div className='filled'>
              <div className='unfilled'></div>
            </div>
            <Star></Star>
            <div className='diagonal'></div>
            <div className='polygon'></div>
            <div className='line'></div>
            <div className='square1'></div>
            <div className='triangle'></div>
            <div className='half-circle'></div>
            <div className='bigcir'> <img src={ellipse} alt="Description 2" style={{animation:'rotate 5s linear infinite',width:'100px',height:'100px'}} /></div>
            <div className='smallcir'></div>
    </div> 
       </div>
          
      </section>
    

      
      
      <div className="p-5 my-5 section2 text-white" style={{backgroundColor:"#EF259B",justifyContent:"left"}}>

                    <h1>What is SMM?</h1>
                    <p>Social media often feeds into the discovery of new content such as news 
stories, and “discovery” is a search activity. Social media can also help build 
links that in turn support into SEO efforts. Many people also perform 
searches at social media sites to find social media content. Social connections
may also impact the relevancy of some search results, either within a social 
media network or at a ‘mainstream’ search engine.</p>
                         <h3 style={{color:'purple'}}>what do we serve?</h3>
                         <p style={{fontWeight: '700', fontSize: '33px'}}>We can help you build your brand, drive 
traffic to your site, increase engagement, 
and increase brand awareness. We work 
towards our client's goals and strive to 
achieve them.</p>
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

export default SMM;