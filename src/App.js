import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import Mainservices from './Pages/Mainservices';
import Clients from './Pages/Clients';
import Contact from './Pages/Contact';
import Seo from './Pages/Seo';
import SMM from './Pages/SMM';
import ContentMarketing from './Pages/ContentMarketing';
import Graphic from './Pages/Graphic';
import AI from './Pages/AI';
import Webdevl from './Pages/Webdevl';
import Google from './Pages/Google';
const App = () => {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/services" element={<Mainservices />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/seo" element={<Seo />} />
        <Route path="/smm" element={<SMM />} />
        <Route path="/contentmarketing" element={<ContentMarketing />} />
        <Route path="/graphic" element={<Graphic />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/google" element={<Google />} />
        <Route path="/web" element={<Webdevl />} />
        
      </Routes>
    </Router>
  );
};

export default App;
