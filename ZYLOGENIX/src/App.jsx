import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Capabilities from './pages/Capabilities';
import Technology from './pages/Technology';
import Contact from './pages/Contact';
import DesignBranding from './pages/Design&Branding';
import ContentSocialMedia from './pages/Content&SocialMedia';
import DigitalMarketing from './pages/DigitalMarketing';
import WebApp from './pages/Web&App';
import ITTechnicalSupport from './pages/IT&TechnicalSupport';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/design-branding" element={<DesignBranding />} />
        <Route path="/content-social-media" element={<ContentSocialMedia />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/web-app" element={<WebApp />} />
        <Route path="/it-technical-support" element={<ITTechnicalSupport />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
