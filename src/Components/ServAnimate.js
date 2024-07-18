import React from "react";
import Star from './Star';
import ellipse from '../images/Ellipse 257.png';
import m16 from "../images/dgreen.png";
import m17 from "../images/pink.png";


function ServAnimate() {
    return ( 
        <>
        <section className="intro-section">
        <h1 className='text-start' style={{color:'blueviolet',textAlign:'left',marginLeft:'20px'}}>SEO</h1>
       <div className='row'>
        <div className='col-md-6 col-sm-12 col-lg-6'>

        <img style={{marginTop:'-80px',marginLeft:'700px' , width:'50px',height:'50px'}} src={m16}></img>

        <img style={{marginTop:'-227px',marginLeft:'1038px' , width:'28px',height:'28px'}} src={m17}></img>



          <p>Which is the practice of increasing  the quantity 
            & quality of traffic to your website through organic serach engine results.</p>
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
        </>
     );
}

export default ServAnimate;