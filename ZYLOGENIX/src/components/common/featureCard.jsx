import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const FeatureCard = ({ 
  image, 
  badgeText = "Custom graphic design", 
  title = "Lorem Lipsum Solor\nLorem Lipsms", 
  description1, 
  description2, 
  bgColor = 'rgba(0, 0, 0, 1)', 
  textColor = 'rgba(255, 255, 255, 1)',
  imagePosition = 'left',
  className
}) => {
  const isImageRight = imagePosition === 'right';

  return (
    <Box
      className={className}
      sx={{
        width: '100%',
        maxWidth: '1407px',
        minHeight: { xs: 'auto', sm: '400px', lg: '639px' },
        backgroundColor: bgColor,
        display: 'flex',
        flexDirection: { 
          xs: 'column-reverse', 
          sm: isImageRight ? 'row-reverse' : 'row' 
        },
        alignItems: 'center',
        boxSizing: 'border-box',
        position: 'relative',
        margin: '0 auto',
        overflow: 'hidden',
        
      }}
    >
      {/* Image Section */}
      <Box
        sx={{
          flex: { xs: '1 1 100%', sm: '1 1 50%', lg: '0 0 629px' },
          width: { xs: '100%', sm: '50%', lg: '639px' },
          height: { xs: 'auto', lg: '659px' },
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1,
          px: { xs: '20px', sm: '20px', md: '0px' },
          mt: { xs: '0px', sm: 9, lg: 0 },
          mb: { lg: bgColor === '#FFFFFF' ? -8 : 0 },
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: isImageRight ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Box
            component="img"
            src={image}
            alt={title.replace('\n', ' ')}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: bgColor === '#FFFFFF' ? 'contain' : 'cover'
            }}
          />
        </motion.div>
      </Box>

      {/* Text Content Section */}
      <Box 
        sx={{ 
          flex: { xs: 1, sm: '1 1 50%', lg: 1 }, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: { xs: 'center', sm: 'flex-start' },
          justifyContent: 'center',
          textAlign: { xs: 'center', sm: 'left' },
          zIndex: 2,
          py: { xs: '40px', sm: '40px', md: '60px' },
          pl: { xs: '20px', sm: '24px', lg: isImageRight ? '60px' : '45px' }, 
          pr: { xs: '20px', sm: '24px', lg: isImageRight ? '45px' : '60px' },
        }}
      >
        {/* Gradient Badge */}
        <Box
          sx={{
            background: 'linear-gradient(90deg, #BE52CE 0%, #8D53DB 100%)',
            borderRadius: '95.97px',
            padding: '6px 18px',
            mb: '24px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 700,
              fontSize: '11.52px',
              lineHeight: '23.99px',
              color: 'rgba(255, 255, 255, 1)',
              textTransform: 'capitalize'
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
            fontSize: { xs: '28px', md: '37.81px' },
            lineHeight: { xs: '36px', md: '34.79px' },
            color: textColor,
            mb: '30px',
            textTransform: 'capitalize',
            maxWidth: '472px',
            whiteSpace: 'pre-line' // Respects \n characters in the title prop
          }}
        >
          {title}
        </Typography>

        {/* Description 1 */}
        {description1 && (
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '25px',
              color: textColor,
              mb: '20px',
              maxWidth: '486px'
            }}
          >
            {description1}
          </Typography>
        )}

        {/* Description 2 */}
        {description2 && (
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '25px',
              color: textColor,
              maxWidth: '486px'
            }}
          >
            {description2}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default FeatureCard;
