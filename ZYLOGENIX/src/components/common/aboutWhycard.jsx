import React from 'react';
import { Box, Typography } from '@mui/material';
import deliverBg from '../../assets/Home/deleverbg.webp';

const AboutWhyCard = ({ icon, title, description, bgColor }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: bgColor,
        borderRadius: '24px',
        padding: { xs: '30px', sm: '20px', lg: '30px' },
        display: 'flex',
        flexDirection: 'column',
        minWidth: { xs: '280px', sm: '230px', md: '250px', lg: '280px' },
        width: { xs: '280px', sm: '230px', md: '250px', lg: '280px' },
        height: { xs: '320px', sm: '270px', md: '290px', lg: '310px' },
        boxSizing: 'border-box',
        flexShrink: 0,
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        border: '2px solid transparent',
        // Background image overlay that fades out on hover
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${deliverBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '22px',
          opacity: 1,
          transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 0,
        },
        '&:hover::before': {
          opacity: 0,
        },
        '&:hover': {
          transform: 'translateY(-10px) scale(1.02)',
          backgroundColor: bgColor,
          border: `2px solid ${bgColor}`,
          '& .card-icon': {
            filter: 'none',
          },
          '& .card-title': {
            color: '#000000',
          },
          '& .card-desc': {
            color: '#333333',
          }
        }
      }}
    >
      {/* All content sits above the background overlay */}
      <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Box
          className="card-icon"
          component="img"
          src={icon}
          alt={title}
          sx={{
            width: { xs: '45px', sm: '35px', md: '40px', lg: '45px' },
            height: { xs: '45px', sm: '35px', md: '40px', lg: '45px' },
            objectFit: 'contain',
            marginBottom: { xs: '30px', sm: '20px', md: '25px', lg: '30px' },
            filter: 'brightness(0) invert(1)',
            transition: 'filter 0.4s ease',
          }}
        />
        <Typography
          className="card-title"
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: { xs: '20px', sm: '16px', md: '18px', lg: '20px' },
            lineHeight: { xs: '25px', sm: '20px', md: '22px', lg: '25px' },
            textTransform: 'capitalize',
            color: '#FFFFFF',
            marginBottom: { xs: '15px', sm: '10px', md: '12px', lg: '15px' },
            transition: 'color 0.4s ease',
          }}
        >
          {title}
        </Typography>
        <Typography
          className="card-desc"
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: { xs: '14px', sm: '12px', md: '13px', lg: '14px' },
            lineHeight: { xs: '22px', sm: '18px', md: '20px', lg: '22px' },
            textTransform: 'capitalize',
            color: 'rgba(255,255,255,0.85)',
            transition: 'color 0.4s ease',
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutWhyCard;
