import React from 'react';
import { Box, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';

// Icons
import HumanIcon from '../../assets/icon/human.webp';
import BulbIcon from '../../assets/icon/bulb.webp';
import BellIcon from '../../assets/icon/bell.webp';
import PaperPlaneIcon from '../../assets/icon/paperPlane.webp';

const ServicesCard = ({ title, description, imageSrc, reverse, bgGradient }) => {
  const leftVariants = {
    enter: { x: -250, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -250, opacity: 0 }
  };

  const rightVariants = {
    enter: { x: 250, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: 250, opacity: 0 }
  };

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
        height: { xs: 'auto', sm: '250px' },
        maxWidth: '1150px', 
        margin: '0 auto',
      }}
    >
      {/* Text Box */}
      <Box
        component={motion.div}
        variants={reverse ? rightVariants : leftVariants}
        transition={{ type: "tween", duration: 1.2, ease: "easeOut" }}
        sx={{
          flex: { xs: '1 1 auto', sm: '1 1 70%' },
          minHeight: { xs: 'auto', sm: '250px' },
          background: bgGradient || 'linear-gradient(113.49deg, #8D53DB 5.01%, #4B2C75 79.43%)',
          borderRadius: '20px',
          padding: { xs: '20px', sm: '25px 30px', md: '40px 40px' }, 
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
            fontSize: { xs: '20px', sm: '15px', md: '18px', lg: '22px' },
            lineHeight: { xs: '28px', sm: '20px', md: '24px', lg: '30px' },
            textTransform: 'capitalize',
            color: 'rgba(255, 255, 255, 1)',
            mb: { xs: '10px', sm: '8px', md: '12px' },
            textAlign: { xs: 'center', sm: 'left' }
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: { xs: '13px', sm: '10px', md: '12px', lg: '14px' },
            lineHeight: { xs: '22px', sm: '16px', md: '19px', lg: '22px' },
            textTransform: 'capitalize',
            textAlign: { xs: 'center', sm: 'justify' },
            color: 'rgba(255, 255, 255, 1)',
            mb: 'auto',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: { xs: 10, sm: 4, md: 5, lg: 5 },
            WebkitBoxOrient: 'vertical',
          }}
        >
          {description}
        </Typography>

        {/* Bottom: Icons then Button stacked on mobile */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: { xs: '15px', sm: '12px' },
            pt: '12px',
            borderTop: '1px solid rgba(255,255,255,0.2)'
          }}
        >
          {/* Icons Group */}
          <Box sx={{ display: 'flex', gap: { xs: '14px', sm: '10px', md: '14px', lg: '18px' }, justifyContent: 'center' }}>
            <Box component="img" src={HumanIcon} alt="Human" sx={{ width: { xs: '28px', sm: '20px', md: '24px', lg: '28px' }, height: { xs: '28px', sm: '20px', md: '24px', lg: '28px' } }} />
            <Box component="img" src={BulbIcon} alt="Bulb" sx={{ width: { xs: '28px', sm: '20px', md: '24px', lg: '28px' }, height: { xs: '28px', sm: '20px', md: '24px', lg: '28px' } }} />
            <Box component="img" src={BellIcon} alt="Bell" sx={{ width: { xs: '28px', sm: '20px', md: '24px', lg: '28px' }, height: { xs: '28px', sm: '20px', md: '24px', lg: '28px' } }} />
            <Box component="img" src={PaperPlaneIcon} alt="Paper Plane" sx={{ width: { xs: '28px', sm: '20px', md: '24px', lg: '28px' }, height: { xs: '28px', sm: '20px', md: '24px', lg: '28px' } }} />
          </Box>

          {/* Arrow Button */}
          <Box
            sx={{
              width: { xs: '100px', sm: '70px', md: '90px', lg: '110px' },
              height: { xs: '33px', sm: '24px', md: '28px', lg: '33px' },
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
            <ArrowForwardIcon sx={{ color: '#fff', fontSize: { xs: '18px', sm: '14px', md: '16px', lg: '18px' } }} />
          </Box>
        </Box>
      </Box>

      {/* Image Wrapper */}
      <Box
        component={motion.div}
        variants={reverse ? leftVariants : rightVariants}
        transition={{ type: "tween", duration: 1.2, ease: "easeOut" }}
        sx={{
          flex: { xs: '1 1 auto', sm: '0 0 280px', md: '0 0 350px' },
          display: 'flex',
          alignItems: 'stretch',
          overflow: 'hidden',
          borderRadius: '20px',
        }}
      >
        <Box
          component="img"
          src={imageSrc}
          alt={title}
          sx={{
            width: '100%',
            height: '100%',
            minHeight: { xs: '200px', md: '250px' },
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
