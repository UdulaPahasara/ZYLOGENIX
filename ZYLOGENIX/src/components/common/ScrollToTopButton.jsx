import React, { useState, useEffect } from 'react';
import { Box, Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top coordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: '10px', sm: '15px', md: '20px' },
        right: { xs: '10px', sm: '15px', md: '20px' },
        zIndex: 9999,
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
      }}
    >
      <Fab
        onClick={scrollToTop}
        size="medium"
        sx={{
          background: 'linear-gradient(135deg, #BE52CE 0%, #8D53DB 100%)',
          color: 'white',
          boxShadow: '0px 4px 12px rgba(141, 83, 219, 0.4)',
          '&:hover': {
            background: 'linear-gradient(135deg, #8D53DB 0%, #BE52CE 100%)',
            transform: 'scale(1.1)',
            boxShadow: '0px 6px 16px rgba(141, 83, 219, 0.6)',
          },
          transition: 'all 0.3s ease-in-out',
          width: { xs: '45px', md: '56px' },
          height: { xs: '45px', md: '56px' },
        }}
        aria-label="scroll back to top"
      >
        <KeyboardArrowUpIcon sx={{ fontSize: { xs: '24px', md: '30px' } }} />
      </Fab>
    </Box>
  );
};

export default ScrollToTopButton;
