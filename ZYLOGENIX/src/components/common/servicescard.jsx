import React from 'react';
import { Box, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Icons
import HumanIcon from '../../assets/icon/human.webp';
import BulbIcon from '../../assets/icon/bulb.webp';
import BellIcon from '../../assets/icon/bell.webp';
import PaperPlaneIcon from '../../assets/icon/paperPlane.webp';

const ServicesCard = ({ title, description, imageSrc, reverse, bgGradient }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { 
          xs: 'column-reverse', 
          sm: reverse ? 'row-reverse' : 'row' 
        },
        gap: '20px',
        width: '100%',
        maxWidth: '940px', 
        margin: '0 auto',
      }}
    >
      {/* Text Box */}
      <Box
        sx={{
          flex: { xs: '1 1 auto', md: '0 0 618px' },
          minHeight: '378px',
          background: bgGradient || 'linear-gradient(113.49deg, #8D53DB 5.01%, #4B2C75 79.43%)',
          borderRadius: '20px',
          padding: { xs: '30px 20px', md: '50px 45px' }, 
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
          width: '100%'
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 700,
            fontSize: { xs: '26px', md: '34.04px' },
            lineHeight: { xs: '34px', md: '43.12px' },
            textTransform: 'capitalize',
            color: 'rgba(255, 255, 255, 1)',
            mb: '20px',
            textAlign: { xs: 'center', md: 'left' }
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '25px',
            textTransform: 'capitalize',
            textAlign: { xs: 'center', md: 'justify' },
            color: 'rgba(255, 255, 255, 1)',
            mb: 'auto'
          }}
        >
          {description}
        </Typography>

        {/* Bottom: Icons then Button stacked on mobile */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: { xs: 'center', md: 'space-between' },
            alignItems: 'center',
            gap: { xs: '20px', md: '0px' },
            mt: '30px'
          }}
        >
          {/* Icons Group */}
          <Box sx={{ display: 'flex', gap: '18px', justifyContent: 'center' }}>
            <Box component="img" src={HumanIcon} alt="Human" sx={{ width: '31.27px', height: '31.27px' }} />
            <Box component="img" src={BulbIcon} alt="Bulb" sx={{ width: '31.27px', height: '31.27px' }} />
            <Box component="img" src={BellIcon} alt="Bell" sx={{ width: '31.27px', height: '31.27px' }} />
            <Box component="img" src={PaperPlaneIcon} alt="Paper Plane" sx={{ width: '31.27px', height: '31.27px' }} />
          </Box>

          {/* Arrow Button */}
          <Box
            sx={{
              width: '110px',
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
      </Box>

      {/* Image Wrapper */}
      <Box
        sx={{
          flex: { xs: '1 1 auto', md: '0 0 300px' },
          display: 'flex',
          alignItems: 'stretch',
          width: '100%'
        }}
      >
        <Box
          component="img"
          src={imageSrc}
          alt={title}
          sx={{
            width: '100%',
            height: '100%',
            minHeight: { xs: '200px', md: '378px' },
            objectFit: 'cover',
            borderRadius: '20px',
            boxSizing: 'border-box'
          }}
        />
      </Box>
    </Box>
  );
};

export default ServicesCard;
