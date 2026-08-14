import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut'
    }
  }),
  exit: {
    opacity: 0,
    y: 60,
    transition: {
      duration: 0.4,
      ease: 'easeIn'
    }
  }
};

const OurMissionAndVision = ({ showCards }) => {
  const boxStyle = {
    flex: { xs: '1 1 100%', md: '1 1 0' },
    width: '100%',
    borderRadius: '20px',
    padding: { xs: '16px 14px', sm: '20px 16px', md: '24px 20px', lg: '28px 24px' },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: { xs: '10px', sm: '12px', md: '16px' },
    background: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    boxShadow: `
      inset 0.98px 0.98px 1.96px 0px rgba(255, 255, 255, 0.3),
      inset -0.98px -0.98px 1.96px 0px rgba(255, 255, 255, 0.1),
      inset 0px 0px 9.78px 0px rgba(255, 255, 255, 0.3),
      0px 10px 30px rgba(0,0,0,0.5)
    `,
    textAlign: 'center',
    boxSizing: 'border-box'
  };

  return (
    <AnimatePresence>
      {showCards && (
        <Box
          sx={{
            width: '100%',
            maxWidth: { xs: '100%', sm: '680px', md: '980px', lg: '1068px' },
            margin: '0 auto',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: '12px', sm: '16px', md: '24px' },
            alignItems: 'stretch',
            boxSizing: 'border-box',
          }}
        >
          {/* Our Vision Box */}
          <Box
            component={motion.div}
            key="vision"
            custom={0}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={cardVariants}
            sx={boxStyle}
          >
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 700,
                fontSize: { xs: '11px', sm: '12px', md: '14px', lg: '16px' },
                lineHeight: { xs: '18px', md: '22px' },
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 1)',
                letterSpacing: '1px'
              }}
            >
              OUR VISION
            </Typography>

            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 800,
                fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '22px' },
                lineHeight: { xs: '20px', sm: '22px', md: '26px' },
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 1)'
              }}
            >
              We Craft the Perfect Vision of Your Dreams and help businesses bridge the gap between ideas and innovation
            </Typography>

            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: { xs: '11px', sm: '12px', md: '13px', lg: '15px' },
                lineHeight: { xs: '18px', sm: '20px', md: '22px' },
                textTransform: 'capitalize',
                color: 'rgba(255, 255, 255, 1)'
              }}
            >
              To be the leading provider of Digital Solutions that empower businesses with Business needs & challenges to succeed with Crafting Innovative IT Solutions & Support.
            </Typography>
          </Box>

          {/* Our Mission Box */}
          <Box
            component={motion.div}
            key="mission"
            custom={1}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={cardVariants}
            sx={boxStyle}
          >
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 700,
                fontSize: { xs: '11px', sm: '12px', md: '14px', lg: '16px' },
                lineHeight: { xs: '18px', md: '22px' },
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 1)',
                letterSpacing: '1px',
                mt:{xs:'-5px',sm:'0',md:'-40px',lg:'-40px'},
                pb:{xs:'0',md:'10px',lg:'40px'}
              }}
            >
              OUR MISSION
            </Typography>

            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: { xs: '11px', sm: '12px', md: '13px', lg: '15px' },
                lineHeight: { xs: '18px', sm: '20px', md: '22px' },
                color: 'rgba(255, 255, 255, 1)',
              }}
            >
              We Help Businesses Of All Sizes Transform Their Operations And Reach Their Full Potential Through Innovative, Affordable In Different Tiers, And Reliable Digital Solutions. We Are Committed To Providing Outstanding Customer Service And Building Long-Term Relationships With Our Clients.
            </Typography>
          </Box>
        </Box>
      )}
    </AnimatePresence>
  );
};

export default OurMissionAndVision;
