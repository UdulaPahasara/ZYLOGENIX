import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Technology from './pages/Technology';
import Contact from './pages/Contact';
import DesignBranding from './pages/Design&Branding';
import ContentSocialMedia from './pages/Content&SocialMedia';
import DigitalMarketing from './pages/DigitalMarketing';
import WebApp from './pages/Web&App';
import ITTechnicalSupport from './pages/IT&TechnicalSupport';
import LoadingScreen from './components/common/LoadingScreen';
import { AnimatePresence } from 'framer-motion';
import './App.css';

import ScrollToTopButton from './components/common/ScrollToTopButton';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      <Router>
        <ScrollToTop />
        {!isLoading && <ScrollToTopButton />}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/capabilities" element={<Navigate to="/web-app" replace />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/design-branding" element={<DesignBranding />} />
          <Route path="/content-social-media" element={<ContentSocialMedia />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/web-app" element={<WebApp />} />
          <Route path="/it-technical-support" element={<ITTechnicalSupport />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
