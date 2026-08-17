import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const TecCard = ({ 
  image, 
  badgeText = "LOREM LIPSUM SOLOR", 
  title, 
  description, 
  bgColor = '#161616', 
  imagePosition = 'right',
  imageSx = {},
  imageContainerSx = {},
  imageScale = 1,
  objectFitOverride
}) => {
  const isImageRight = imagePosition === 'right';

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '902px',
        minHeight: { xs: 'auto', sm: '280px', md: '300px', lg: '400px' },
        backgroundColor: bgColor,
        borderRadius: { xs: '32px', sm: '48px', md: '96px' },
        display: 'flex',
        flexDirection: { 
          xs: 'column', 
          sm: isImageRight ? 'row' : 'row-reverse',
          md: isImageRight ? 'row' : 'row-reverse' 
        },
        alignItems: 'center',
        padding: { xs: '20px 24px', sm: '0 30px', md: '0 40px', lg: '0 60px' },
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden',
        transition: 'min-height 0.4s ease',
        cursor: 'pointer',
        '&:hover': {
          '& .tec-description': {
            WebkitLineClamp: 'unset',
            maxHeight: '300px',
          },
          '& .tec-btn': {
            opacity: 1,
            maxHeight: '60px',
            mt: '0px',
          },
          '& .tec-image': {
            transform: { 
              xs: `scale(${imageScale})`,
              md: `scale(${imageScale * 0.9})`
            }
          },
          '& .tec-fade': {
            opacity: 1,
          }
        }
      }}
    >
      {/* Text Content Section */}
      <Box 
        sx={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: { xs: 'center', sm: 'flex-start' },
          justifyContent: 'center',
          textAlign: { xs: 'center', sm: 'left' },
          zIndex: 2,
          py: { sm: '30px', md: '50px', lg: '60px' },
          pr: { sm: isImageRight ? '16px' : 0, md: isImageRight ? '20px' : 0 },
          pl: { sm: isImageRight ? 0 : '16px', md: isImageRight ? 0 : '20px' },
          mb: { xs: '28px', sm: 0, md: 0 }
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
            fontSize: { xs: '28px', md: '35.4px' },
            lineHeight: 1.2,
            color: '#FFFFFF',
            mb: '16px',
            textTransform: 'capitalize'
          }}
        >
          {title}
        </Typography>

        {/* Description — truncated by default, full on hover */}
        <Typography
          className="tec-description"
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: { xs: '14px', md: '15px' },
            lineHeight: '25px',
            color: '#FFFFFF',
            mb: '16px',
            opacity: 0.9,
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
            maxHeight: '75px',
            transition: 'max-height 0.4s ease',
          }}
        >
          {description}
        </Typography>

        {/* Learn More Glass Button — hidden by default, appears on hover */}
        <Box
          className="tec-btn"
          component="button"
          onClick={() => {}}
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            padding: '8px 20px',
            color: '#FFFFFF',
            fontFamily: 'Poppins',
            fontWeight: 500,
            fontSize: '14px',
            cursor: 'pointer',
            border: 'none',
            outline: 'none',
            boxShadow: [
              'inset 0.77px 0.77px 1.54px 1px rgba(255, 255, 255, 0.3)',
              'inset -0.77px -0.77px 1.54px 1px rgba(255, 255, 255, 0.1)',
              'inset 0px 0px 7.92px 1px rgba(255, 255, 255, 0.3)'
            ].join(', '),
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            transition: 'all 0.4s ease',
            opacity: 0,
            maxHeight: 0,
            overflow: 'hidden',
            '&:hover': {
              background: 'rgba(255, 255, 255, 0.18)',
              transform: 'translateY(-2px)'
            }
          }}
        >
          Learn More
          <ArrowForwardIcon sx={{ fontSize: '18px' }} />
        </Box>
      </Box>

      {/* Image Section with Animations */}
      <Box
        sx={{
          width: { xs: '80%', sm: '240px', md: '300px', lg: '392px' },
          height: { xs: '240px', sm: '280px', md: '400px', lg: '539px' },
          flexShrink: 0,
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1,
          mx: { xs: 'auto', md: 0 },
          ...imageContainerSx
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: isImageRight ? 50 : -50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Box
            component={motion.img}
            src={image}
            alt={title}
            className="tec-image"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: objectFitOverride || 'contain',
              maxWidth: '392px',
              transform: `scale(${imageScale})`,
              transition: 'transform 0.4s ease',
              ...imageSx
            }}
          />
        </motion.div>

        {/* Bottom fade overlay */}
        <Box
          className="tec-fade"
          sx={{
            position: 'absolute',
            bottom: { xs: '-20%', sm: '-20%', md: 0 },
            left: 0,
            right: 0,
            height: { xs: '70%', sm: '70%', md: '50%' },
            background: `linear-gradient(to bottom, transparent 0%, ${bgColor} 85%, ${bgColor} 100%)`,
            pointerEvents: 'none',
            zIndex: 2,
            opacity: 0,
            transition: 'opacity 0.4s ease',
          }}
        />
      </Box>
    </Box>
  );
};

export default TecCard;
