import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const InterestedCard = ({
  subtitle = "LOREM LIPSUM LORLM",
  title = "Lorem lipsum solor lorem",
  description = "Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur.",
  boxData = [
    {
      title: "Lorem ipsum dolor sit amet",
      description: "Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consecte"
    },
    {
      title: "Lorem ipsum dolor sit amet",
      description: "Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consecte"
    },
    {
      title: "Lorem ipsum dolor sit amet",
      description: "Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consecte"
    }
  ],
  interestedTitle = "Interested ?",
  interestedDescription = "Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit ae"
}) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <Box className="white-section" sx={{ width: '100%', backgroundColor: '#FFFFFF', py: { xs: '60px', md: '100px' }, display: 'flex', justifyContent: 'center' }}>
      <Box 
        sx={{ 
          width: '100%', 
          maxWidth: '1440px', 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          justifyContent: 'center',
          alignItems: { xs: 'center', md: 'flex-start' },
          gap: { xs: '40px', md: '120px' },
          px: '20px'
        }}
      >
        {/* Left Side (Text) */}
        <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '444px', alignItems: { xs: 'center', md: 'flex-start' }, textAlign: { xs: 'center', md: 'left' } }}>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '25px',
              textTransform: 'uppercase',
              background: 'linear-gradient(90deg, #BE52CE 0%, #8D53DB 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: '10px'
            }}
          >
            {subtitle}
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 600,
              fontSize: { xs: '28px', md: '37.81px' },
              lineHeight: { xs: '32px', md: '40px' },
              color: '#000000',
              textTransform: 'capitalize',
              mb: '20px'
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
              color: '#000000',
              textTransform: 'capitalize'
            }}
          >
            {description}
          </Typography>
        </Box>

        {/* Right Side (Boxes Stack) */}
        <Box 
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', maxWidth: '472px',mt:{xs:'30px',md:'0px'} }}
        >
          {/* Light Grey Boxes */}
          {boxData.map((item, index) => (
            <Box
              component={motion.div}
              variants={cardVariants}
              key={index}
              sx={{
                width: '100%',
                minHeight: '155px',
                backgroundColor: 'rgba(243, 243, 243, 1)',
                borderRadius: '30px',
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                boxSizing: 'border-box'
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '25px',
                  textTransform: 'uppercase',
                  color: '#000000',
                  mb: '10px'
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '20px',
                  textTransform: 'capitalize',
                  color: '#000000'
                }}
              >
                {item.description}
              </Typography>
            </Box>
          ))}

          {/* Interested Box */}
          <Box
            component={motion.div}
            variants={cardVariants}
            sx={{
              width: '100%',
              minHeight: '155px',
              background: 'linear-gradient(90deg, #ED81FD 0%, #BE52CE 50.96%, #8D53DB 100%)',
              borderRadius: '30px',
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              boxSizing: 'border-box'
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 700,
                fontSize: '32.35px',
                lineHeight: '57.77px',
                textTransform: 'uppercase',
                color: '#FFFFFF'
              }}
            >
              {interestedTitle}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '20px',
                textTransform: 'capitalize',
                color: '#FFFFFF',
                textAlign: 'center'
              }}
            >
              {interestedDescription}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InterestedCard;
