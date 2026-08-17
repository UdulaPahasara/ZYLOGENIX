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
  className,
  disableBottomMargin = false,
  imageScale = 1,
  objectFitOverride,
  containerSx = {},
  imageContainerSx = {},
  imageSx = {},
  textContainerSx = {},
  badgeSx = {},
  titleSx = {},
  descriptionSx = {},
  badgeBgColor = 'linear-gradient(90deg, #BE52CE 0%, #8D53DB 100%)'
}) => {
  const isImageRight = imagePosition === 'right';

  return (
    <Box
      className={className}
      sx={{
        width: '100%',
        maxWidth: '1407px',
        minHeight: { xs: 'auto', sm: '450px', md: '500px', lg: '639px' },
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
        ...containerSx
      }}
    >
      {/* Image Section */}
      <Box
        sx={{
          flex: { xs: '1 1 100%', sm: '1 1 50%', lg: '0 0 629px' },
          width: { xs: '100%', sm: '50%', lg: '639px' },
          height: { xs: 'auto', lg: '659px' },
          alignSelf: { sm: 'stretch' },
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'stretch',
          zIndex: 1,
          px: { xs: '20px', sm: '0px', md: '0px' },
          mt:{ lg: bgColor === '#FFFFFF' ? 6 : 0, },
          mb: disableBottomMargin ? 0 : { lg: bgColor === '#FFFFFF' ? -8 : -1,md:bgColor === '#FFFFFF' ? -8 : 0,xs:bgColor === '#FFFFFF' ? -8 : 0, },
          ...imageContainerSx
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: isImageRight ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'stretch', alignSelf: 'stretch' }}
        >
          <Box
            component="img"
            src={image}
            alt={title.replace('\n', ' ')}
            sx={{
              width: '100%',
              height: '100%',
              display: 'block',
              objectFit: objectFitOverride || (bgColor === '#FFFFFF' ? 'contain' : 'cover'),
              transform: `scale(${imageScale})`,
              ...imageSx
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
          ...textContainerSx
        }}
      >
        {/* Gradient Badge */}
        <Box
          sx={{
            background: badgeBgColor,
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
              textTransform: 'capitalize',
              ...badgeSx
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
            fontSize: { xs: '25px', md: '37.81px' },
            lineHeight: { xs: '36px', md: '34.79px',lg:'44px' },
            color: textColor,
            mb: '30px',
            textTransform: 'capitalize',
            maxWidth: '472px',
            whiteSpace: 'pre-line', // Respects \n characters in the title prop
            ...titleSx
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
              fontSize: { xs: '15px', sm: '15px', md: '16px' },
              lineHeight: '25px',
              color: textColor,
              mb: '20px',
              maxWidth: '486px',
              ...descriptionSx
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
              fontSize: { xs: '15px', sm: '15px', md: '16px' },
              lineHeight: '25px',
              color: textColor,
              maxWidth: '486px',
              ...descriptionSx
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
