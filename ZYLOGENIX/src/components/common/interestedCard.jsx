import React from 'react';
import { Box, Typography } from '@mui/material';

const InterestedCard = () => {
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
        <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '350px', alignItems: { xs: 'center', md: 'flex-start' }, textAlign: { xs: 'center', md: 'left' } }}>
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
            LOREM LIPSUM LORLM
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
            Lorem lipsum solor lorem 
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
            Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur.
          </Typography>
        </Box>

        {/* Right Side (Boxes Stack) */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', maxWidth: '472px' }}>
          {/* Light Grey Boxes */}
          {[1, 2, 3].map((item) => (
            <Box
              key={item}
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
                Lorem ipsum dolor sit amet
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
                Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consecte
              </Typography>
            </Box>
          ))}

          {/* Interested Box */}
          <Box
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
              Interested ?
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
              Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit ae
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InterestedCard;
