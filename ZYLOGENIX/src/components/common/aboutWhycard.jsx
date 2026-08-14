import React from 'react';
import { Box, Typography } from '@mui/material';

const AboutWhyCard = ({ icon, title, description, bgColor }) => {
  return (
    <Box
      sx={{
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
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        border: '2px solid transparent', // Prevents layout shift on hover (matches 2px hover border)
        '&:hover': {
          transform: 'translateY(-10px) scale(1.02)',
         // boxShadow: '0px 15px 30px rgba(190, 82, 206, 0.2)', // Soft purple shadow
          backgroundColor: '#FFFFFF', // Clean white background pop
          border: `2px solid ${bgColor}`, // Use the card's specific background color for the border
        }
      }}
    >
      <Box
        component="img"
        src={icon}
        alt={title}
        sx={{
          width: '45px',
          height: '45px',
          objectFit: 'contain',
          marginBottom: '30px'
        }}
      />
      <Typography
        sx={{
          fontFamily: 'Poppins',
          fontWeight: 600,
          fontSize: '20px',
          lineHeight: '25px',
          textTransform: 'capitalize',
          color: '#000000',
          marginBottom: '15px'
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Poppins',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '22px',
          textTransform: 'capitalize',
          color: '#333333'
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default AboutWhyCard;
