import React from 'react';
import { Box, Typography, Link, Divider } from '@mui/material';
import ZylogenixLogo from '../../assets/Logo/ZylogenixLogo.webp';
import FacebookIcon from '../../assets/socialmedia/facebook.webp';
import InstagramIcon from '../../assets/socialmedia/instragram.webp';
import WhatsappIcon from '../../assets/socialmedia/whatssapp.webp';
import ThreadsIcon from '../../assets/socialmedia/threads.webp';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#08080E', 
        color: '#FFFFFF',
        display: 'flex',
        justifyContent: 'center',
        padding: { xs: '60px 20px', md: '80px 0 60px' },
        boxSizing: 'border-box'
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '938px', 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* Top Section: Logo & Social Media */}
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', md: 'flex-start' },
            mb: '50px',
            gap: { xs: '30px', md: '0' }
          }}
        >
          {/* Logo */}
          <Box
            component="img"
            src={ZylogenixLogo}
            alt="Zylogenix Logo"
            sx={{
              width: { xs: '200px', md: '243px' },
              height: 'auto',
              objectFit: 'contain'
            }}
          />

          {/* Social Media Icons */}
          <Box sx={{ display: 'flex', gap: '14px', alignItems: 'center', mt: { md: '20px' } }}>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Box component="img" src={FacebookIcon} alt="Facebook" sx={{ width: '31.27px', height: '31.27px', cursor: 'pointer', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)' } }} />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Box component="img" src={InstagramIcon} alt="Instagram" sx={{ width: '31.27px', height: '31.27px', cursor: 'pointer', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)' } }} />
            </Link>
            <Link href="https://wa.me/" target="_blank" rel="noopener noreferrer">
              <Box component="img" src={WhatsappIcon} alt="Whatsapp" sx={{ width: '31.27px', height: '31.27px', cursor: 'pointer', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)' } }} />
            </Link>
            <Link href="https://threads.net" target="_blank" rel="noopener noreferrer">
              <Box component="img" src={ThreadsIcon} alt="Threads" sx={{ width: '31.27px', height: '31.27px', cursor: 'pointer', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)' } }} />
            </Link>
          </Box>
        </Box>

        {/* Navigation Links */}
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: { xs: 'center', md: 'flex-start' },
            gap: { xs: '20px', md: '30px', lg: '40px' },
            mb: '18px'
          }}
        >
          {['Home', 'About', 'Capabilities', 'Technology', 'Contact Us'].map((text) => (
            <Link
              key={text}
              href={`#${text.toLowerCase().replace(' ', '-')}`}
              underline="none"
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '19px',
                color: 'rgba(255, 255, 255, 0.7)',
                textTransform: 'capitalize',
                transition: 'color 0.3s ease',
                '&:hover': { color: '#FFFFFF' }
              }}
            >
              {text}
            </Link>
          ))}
        </Box>

        {/* Top Divider */}
        <Divider sx={{ width: '100%', borderColor: 'rgba(97, 97, 97, 1)', borderWidth: '1px', mb: '20px' }} />

        {/* Description Text */}
        <Typography
          sx={{
            width: '100%',
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: '13px',
            lineHeight: '19px',
            color: 'rgba(255, 255, 255, 0.7)',
            textAlign: { xs: 'center', md: 'justify' },
            mb: '30px'
          }}
        >
          Zylogenix Digital Solutions is a business-focused digital solutions company helping organizations grow through web development, software solutions, digital marketing, branding, and technology consulting. We craft practical, scalable, and impactful digital experiences that turn ideas into measurable business value.
        </Typography>

        {/* Bottom Divider */}
        <Divider sx={{ width: '100%', borderColor: 'rgba(97, 97, 97, 1)', borderWidth: '1px', mb: '18px' }} />

        {/* Bottom Section: Copyright & Contacts */}
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: { xs: '15px', md: '0' }
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 500,
              fontSize: '9.74px',
              color: 'rgba(255, 255, 255, 0.6)',
              textAlign: 'center'
            }}
          >
            © Copyright 2026 ZYLOGENIX. Web Solution By{' '}
            <Link href="https://roodwave.com" target="_blank" rel="noopener noreferrer" sx={{ color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none', '&:hover': { color: '#FFFFFF' } }}>
              ROODWAVE
            </Link>
          </Typography>

          <Box sx={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <Link href="tel:+9717980427" sx={{ textDecoration: 'none' }}>
              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: '9.74px',
                  color: 'rgba(255, 255, 255, 0.6)',
                  transition: 'color 0.3s ease',
                  '&:hover': { color: '#FFFFFF' }
                }}
              >
                +971 798 0427
              </Typography>
            </Link>
            
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '10px' }}>|</Typography>

            <Link href="mailto:admin@zylogenix.com" sx={{ textDecoration: 'none' }}>
              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: '9.74px',
                  color: 'rgba(255, 255, 255, 0.6)',
                  transition: 'color 0.3s ease',
                  '&:hover': { color: '#FFFFFF' }
                }}
              >
                admin@zylogenix.com
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
