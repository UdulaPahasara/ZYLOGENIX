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
