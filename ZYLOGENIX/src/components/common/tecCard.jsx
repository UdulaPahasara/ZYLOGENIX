import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const TecCard = ({ 
  image, 
  badgeText = "LOREM LIPSUM SOLOR", 
  title, 
  description, 
  bgColor = '#161616', 
  imagePosition = 'right' 
}) => {
  const isImageRight = imagePosition === 'right';

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '902px',
        minHeight: { xs: 'auto', md: '575px' },
        backgroundColor: bgColor,
        borderRadius: { xs: '32px', md: '96px' },
        display: 'flex',
        flexDirection: { 
          xs: 'column', 
          md: isImageRight ? 'row' : 'row-reverse' 
        },
        alignItems: 'center',
        padding: { xs: '36px 24px', md: '0 60px' },
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Text Content Section */}
      <Box 
        sx={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: { xs: 'center', md: 'flex-start' },
          justifyContent: 'center',
          textAlign: { xs: 'center', md: 'left' },
          zIndex: 2,
          py: { md: '60px' },
          pr: { md: isImageRight ? '20px' : 0 },
          pl: { md: isImageRight ? 0 : '20px' },
          mb: { xs: '28px', md: 0 }
        }}
      >
        {/* Gradient Badge */}
        <Box
          sx={{
            background: 'linear-gradient(90deg, #BE52CE 0%, #8D53DB 100%)',
            borderRadius: '100px',
            padding: '6px 16px',
            mb: '24px'
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 700,
              fontSize: { xs: '10px', md: '12px' },
              color: '#FFFFFF',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            {badgeText}
          </Typography>
        </Box>

        {/* Title */}
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: { xs: '28px', md: '39.4px' },
            lineHeight: 1.2,
            color: '#FFFFFF',
            mb: '24px',
            textTransform: 'capitalize'
          }}
        >
          {title}
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: { xs: '14px', md: '16px' },
            lineHeight: '25px',
            color: '#FFFFFF',
            mb: '40px',
            opacity: 0.9
          }}
        >
          {description}
        </Typography>

        {/* Learn More Glass Button */}
        <Button
          endIcon={<ArrowForwardIcon sx={{ fontSize: '18px' }} />}
          sx={{
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            padding: '8px 20px',
            color: '#FFFFFF',
            fontFamily: 'Poppins',
            fontWeight: 500,
            fontSize: '14px',
            textTransform: 'none',
            boxShadow: 'inset 0.77px 0.77px 1.54px 0px rgba(255, 255, 255, 0.3), inset -0.77px -0.77px 1.54px 0px rgba(255, 255, 255, 0.1), inset 0px 0px 7.72px 0px rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
            '&:hover': {
              background: 'rgba(255, 255, 255, 0.2)',
              transform: 'translateY(-2px)'
            }
          }}
        >
          Learn More
        </Button>
      </Box>

      {/* Image Section with Animations */}
      <Box
        sx={{
          width: { xs: '80%', md: '392px' },
          height: { xs: '240px', md: '539px' },
          flexShrink: 0,
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1,
          mx: { xs: 'auto', md: 0 }
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: isImageRight ? 50 : -50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <motion.img
            src={image}
            alt={title}
            animate={{ y: [-15, 15, -15] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              maxWidth: '392px'
            }}
          />
        </motion.div>
      </Box>
    </Box>
  );
};

export default TecCard;
