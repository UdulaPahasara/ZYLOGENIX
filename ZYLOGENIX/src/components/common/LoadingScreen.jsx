import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Logo from '../../assets/Logo/ZylogenixLogo.webp';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 7 seconds total duration = 5000ms
   
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Add a slight delay before hiding the screen so the user sees "100%"
      const timeout = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#000000',
        zIndex: 9999, // Ensure it's above absolutely everything
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2, // padding for mobile responsiveness
      }}
    >
      {/* Logo */}
      <Box
        component={motion.img}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        src={Logo}
        alt="Zylogenix Logo"
        sx={{
          width: '100%',
          maxWidth: { xs: '120px', sm: '150px', md: '150px' },
          height: 'auto',
          mb: 4, // margin bottom to space out the progress bar
        }}
      />

      {/* Progress Bar Container */}
      <Box
        sx={{
          width: '100%',
          maxWidth: { xs: '200px', sm: '300px', md: '200px' },
          height: '2px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          position: 'relative',
          overflow: 'hidden',
          mb: 2, // margin bottom for the percentage text
        }}
      >
        {/* Animated Progress Fill */}
        <Box
          component={motion.div}
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1, ease: 'linear' }}
          sx={{
            height: '100%',
            background: 'linear-gradient(90deg, #8D53DB 0%, #4B2C75 100%)',
            position: 'absolute',
            left: 0,
            top: 0,
          }}
        />
      </Box>

      {/* Percentage Text */}
      <Typography
        sx={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 400,
          fontSize: '12px',
          color: '#888888', // subtle gray
        }}
      >
        {progress}%
      </Typography>
    </Box>
  );
};

export default LoadingScreen;
