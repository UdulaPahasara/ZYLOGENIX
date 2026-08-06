import React from 'react';
import { Box, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import deliverBg from '../../assets/home/deleverbg.webp';

const DeliverCard = ({ title, description }) => {
  return (
    <Box
      sx={{
        flex: { xs: '1 1 100%', sm: '1 1 0' },
        minWidth: 0,
        maxWidth: { xs: '100%', sm: '320px' },
        height: '324px',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${deliverBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '50px 20px 40px 20px',
        boxSizing: 'border-box',
        justifyContent: 'space-between',
        boxShadow: '0px 10px 30px rgba(0,0,0,0.5)',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 700,
            fontSize: '16.21px',
            lineHeight: '21.62px',
            textAlign: 'center',
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 1)',
            width: '100%',
            maxWidth: '237px',
            mb: '36px',
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: '12px',
            lineHeight: '16px',
            textAlign: 'center',
            textTransform: 'capitalize',
            color: 'rgba(255, 255, 255, 1)',
            width: '100%',
            maxWidth: '203px',
          }}
        >
          {description}
        </Typography>
      </Box>

      {/* Arrow Button */}
      <Box
        sx={{
          width: '142px',
          height: '33px',
          borderRadius: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          boxShadow: `
            0.72px 0.72px 1.43px 0px rgba(255, 255, 255, 0.3) inset, 
            -0.72px -0.72px 1.43px 0px rgba(255, 255, 255, 0.1) inset, 
            0px 0px 7.17px 0px rgba(255, 255, 255, 0.3) inset
          `,
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            transform: 'scale(1.05)'
          }
        }}
      >
        <ArrowForwardIcon sx={{ color: '#fff', fontSize: '18px' }} />
      </Box>
    </Box>
  );
};

export default DeliverCard;
