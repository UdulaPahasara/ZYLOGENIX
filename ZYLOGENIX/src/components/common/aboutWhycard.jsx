import React from 'react';
import { Box, Typography } from '@mui/material';
import deliverBg from '../../assets/home/deleverbg.webp';

const AboutWhyCard = ({ icon, title, description, bgColor }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: bgColor,
        borderRadius: '24px',
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        minWidth: '280px',
        width: '280px',
        height: '320px',
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
            width: '45px',
            height: '45px',
            objectFit: 'contain',
            marginBottom: '30px',
            filter: 'brightness(0) invert(1)',
            transition: 'filter 0.4s ease',
          }}
        />
        <Typography
          className="card-title"
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '25px',
            textTransform: 'capitalize',
            color: '#FFFFFF',
            marginBottom: '15px',
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
            fontSize: '14px',
            lineHeight: '22px',
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
