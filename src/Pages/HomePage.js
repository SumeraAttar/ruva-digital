import React from 'react';
import Header from '../Components/Header';

import Services from '../Components/Services';
import Footer from '../Components/Footer';
import content from '../Components/content';
import Jayesh from '../Components/Jayesh';
import cards from '../Components/cards';
import Testimonials from '../Components/Testimonials';
import Slogan from '../Components/Slogan';
import Quotes from '../Components/Quotes';
import MarketingSection from '../Components/MarketingSection';
import Section1 from '../Components/Section1';
const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
   
      <Section1/>
      <Services />
      <content></content>
      <MarketingSection/>
      <Jayesh/>
      <cards></cards>
      <Testimonials/>
      <Slogan></Slogan>
      <Quotes/>
      <Footer />
    </div>
  );
};

export default HomePage;
