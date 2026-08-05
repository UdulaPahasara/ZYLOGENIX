import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import HomeHero from '../assets/home/Homehero.webp';

const slidesData = [
  {
    subtitle: "WHO WE ARE",
    title: "Your Trusted Partner in Digital Growth & Innovation",
    heading: "At Zylogenix Digital Solutions,",
    description: "We help businesses bridge the gap between ideas and innovation through tailored digital services, business-focused technology solutions, and expert guidance. From startups to growing enterprises, we work closely with clients to build impactful digital products, improve operations, and create meaningful online experiences that support long-term growth.",
    buttonText: "Learn More"
  },
  {
    subtitle: "OUR SERVICES",
    title: "Empowering Your Business With Modern Solutions",
    heading: "Tailored Strategies For Success,",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    buttonText: "View Services"
  },
  {
    subtitle: "WHY CHOOSE US",
    title: "Delivering Excellence Through Innovation",
    heading: "Commitment To Quality And Growth,",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
    buttonText: "Contact Us"
  }
];

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);
  const activeSlideRef = useRef(activeSlide);
  const isScrolling = useRef(false);

  // Keep ref in sync for the event listener closure
  useEffect(() => {
    activeSlideRef.current = activeSlide;
  }, [activeSlide]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleWheel = (e) => {
      // If we are currently transitioning, block the page from scrolling away
      if (isScrolling.current) {
        e.preventDefault();
        return;
      }

      if (e.deltaY > 0) {
        // Scrolling down
        if (activeSlideRef.current < slidesData.length - 1) {
          e.preventDefault(); // Stop page scroll
          isScrolling.current = true;
          setActiveSlide((prev) => prev + 1);
          // Wait 800ms before allowing another scroll swap (matches animation length nicely)
          setTimeout(() => { isScrolling.current = false; }, 800);
        }
      } else if (e.deltaY < 0) {
        // Scrolling up
        if (activeSlideRef.current > 0) {
          e.preventDefault(); // Stop page scroll
          isScrolling.current = true;
          setActiveSlide((prev) => prev - 1);
          setTimeout(() => { isScrolling.current = false; }, 800);
        }
      }
    };

    // Attach non-passive event listener so e.preventDefault() works to stop page scroll
    slider.addEventListener('wheel', handleWheel, { passive: false });
    return () => slider.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      {/* Hero Section */}
      <Box
        sx={{
          width: '100%',
          height: { xs: '60vh', md: '781px' },
          backgroundImage: `url(${HomeHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Dark Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
          }}
        />
        
        {/* Hero Content */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          sx={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '900px',
            px: 2
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 800,
              fontSize: { xs: '40px', md: '72px' },
              lineHeight: { xs: '50px', md: '85px' },
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 1)',
            }}
          >
            CRAFTING IMPACTFUL
          </Typography>
          <Box
            sx={{
              backgroundColor: 'rgba(190, 82, 206, 0.35)',
              borderRadius: '25px',
              padding: { xs: '5px 15px', md: '9.78px 24.46px' },
              mt: { xs: 1, md: 0 },
              display: 'inline-block',
              boxShadow: `
                0.98px 0.98px 1.96px 0px rgba(255, 255, 255, 0.3) inset, 
                -0.98px -0.98px 1.96px 0px rgba(255, 255, 255, 0.1) inset, 
                0px 0px 9.78px 0px rgba(255, 255, 255, 0.3) inset
              `,
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 800,
                fontSize: { xs: '40px', md: '72px' },
                lineHeight: { xs: '50px', md: '85px' },
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 1)',
              }}
            >
              EXPERIENCES
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Content Section (Slider) */}
      <Box
        ref={sliderRef}
        sx={{
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          position: 'relative',
          pt: { xs: '60px', md: '108px' }, 
          pb: { xs: '60px', md: '108px' },
          pl: { xs: '20px', md: '60px', lg: '150px', xl: '250px' },
          pr: { xs: '20px', md: '80px', lg: '180px', xl: '263px' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-start' },
          textAlign: { xs: 'center', md: 'left' },
          boxSizing: 'border-box',
          minHeight: { xs: 'auto', md: '600px' } // Helps prevent container from collapsing during animations
        }}
      >
        <Box sx={{ width: '100%', maxWidth: '927px', position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '25px',
                  textTransform: 'uppercase',
                  background: 'linear-gradient(90deg, #BE52CE 0%, #8D53DB 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: '11px',
                }}
              >
                {slidesData[activeSlide].subtitle}
              </Typography>

              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  fontWeight: 800,
                  fontSize: { xs: '24px', sm: '28px', md: '39.41px' },
                  lineHeight: { xs: '32px', sm: '38px', md: '45.52px' },
                  textTransform: 'uppercase',
                  background: 'linear-gradient(90deg, #D493DB 0%, #BE52CE 50%, #8D53DB 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: { xs: '30px', md: '33px' },
                  wordWrap: 'break-word',
                }}
              >
                {slidesData[activeSlide].title}
              </Typography>

              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                  fontSize: { xs: '20px', sm: '22px', md: '30px' },
                  lineHeight: { xs: '28px', sm: '30px', md: '38px' },
                  textTransform: 'capitalize',
                  color: 'rgba(0, 0, 0, 1)',
                  mb: { xs: '20px', md: '28px' },
                }}
              >
                {slidesData[activeSlide].heading}
              </Typography>

              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '25px',
                  textTransform: 'capitalize',
                  textAlign: { xs: 'center', md: 'justify' },
                  color: 'rgba(153, 153, 153, 1)',
                  mb: { xs: '40px', md: '28px' },
                  wordWrap: 'break-word',
                }}
              >
                {slidesData[activeSlide].description}
              </Typography>

              <Button
                sx={{
                  background: 'linear-gradient(180deg, #BE52CE 0%, #8D53DB 100%)',
                  borderRadius: '10px',
                  minWidth: '151px',
                  height: '45px',
                  padding: '10px 20px',
                  textTransform: 'capitalize',
                  color: 'rgba(255, 255, 255, 1)',
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '25px',
                  boxShadow: 'none',
                  '&:hover': {
                    background: 'linear-gradient(180deg, #A848B6 0%, #7B49BF 100%)',
                    boxShadow: 'none',
                  }
                }}
              >
                {slidesData[activeSlide].buttonText}
              </Button>
            </motion.div>
          </AnimatePresence>
        </Box>

        {/* Pagination Dots (Desktop Only) - Now Interactive */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            position: 'absolute',
            right: { md: '10px', lg: '60px', xl: '196px' }, 
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10
          }}
        >
          {slidesData.map((_, index) => (
            <Box
              key={index}
              onClick={() => setActiveSlide(index)}
              sx={{
                width: activeSlide === index ? '16px' : '12px',
                height: activeSlide === index ? '58px' : '12px',
                borderRadius: activeSlide === index ? '100px' : '50%',
                background: activeSlide === index ? 'linear-gradient(180deg, #BE52CE 0%, #8D53DB 100%)' : '#e0e0e0',
                cursor: 'pointer',
                transition: 'all 0.4s ease-in-out',
                '&:hover': {
                  background: activeSlide === index ? 'linear-gradient(180deg, #A848B6 0%, #7B49BF 100%)' : '#bdbdbd',
                }
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
