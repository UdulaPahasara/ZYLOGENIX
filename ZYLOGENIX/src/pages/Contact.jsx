import React, { useState, useRef } from 'react';
import { Box, Typography, Button, Grid, Alert } from '@mui/material';
import emailjs from '@emailjs/browser';
import contactHeroImg from '../assets/contactus/contactHero.webp';
import Footer from '../components/footer/footer';

const inputStyle = {
  display: 'block',
  width: '100%',
  height: '50px',
  borderRadius: '20px',
  backgroundColor: 'rgba(243, 243, 243, 1)',
  border: 'none',
  padding: '0 28px',
  fontFamily: 'Poppins',
  fontWeight: 400,
  fontSize: { xs: '13px', sm: '14px', md: '16px' },
  lineHeight: '25px',
  boxSizing: 'border-box',
  color: '#555',
  outline: 'none',
};

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus({ type: 'info', message: 'Sending message...' });
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({ type: 'error', message: 'Failed to send message. Please ensure EmailJS credentials are configured.' });
    }
  };

  return (
    <Box sx={{ width: '100%', overflowX: 'hidden', backgroundColor: '#FFFFFF' }}>

      {/* ─── Hero Section ─── */}
      <Box
        sx={{
          width: '100%',
          height: { xs: '300px', sm: '450px', md: '730px' },
          backgroundImage: `url(${contactHeroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 800,
            fontSize: { xs: '28px', sm: '52px', md: '75.72px' },
            lineHeight: 1.2,
            textAlign: 'center',
            textTransform: 'uppercase',
            color: '#FFFFFF',
            px: '20px',
          }}
        >
          CONTACT US
        </Typography>
      </Box>

      {/* ─── Main Content Area ─── */}
      <Box
        className="white-section"
        sx={{
          width: '100%',
          boxSizing: 'border-box',
          px: { xs: '20px', sm: '40px', md: '20px' },
          py: { xs: '60px', md: '120px' },
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ width: '100%', maxWidth: '940px', boxSizing: 'border-box' }}>

          {/* Get In Touch Header */}
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 600,
              fontSize: { xs: '24px', sm: '28px', md: '50px' },
              lineHeight: 1.3,
              textTransform: 'capitalize',
              textAlign: { xs: 'center', md: 'left' },
              color: '#000000',
              mb: '12px',
            }}
          >
            Get In Touch
          </Typography>

          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: { xs: '14px', md: '16px' },
              lineHeight: '25px',
              textTransform: 'capitalize',
              textAlign: { xs: 'center', md: 'left' },
              color: '#000000',
              mb: '50px',
            }}
          >
            We'd Love To Hear From You. Whether You Have A Question, A Project In Mind, Or Just Want To Say Hello — Reach Out And Let's Start A Conversation.
          </Typography>

          {/* ─── Contact Form ─── */}
          <form ref={formRef} onSubmit={handleSubmit}>

            {status.message && (
              <Alert severity={status.type} sx={{ mb: '24px', borderRadius: '12px' }}>
                {status.message}
              </Alert>
            )}

            {/* Row 1: First Name + Last Name */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: '8px',
                mb: '18px',
              }}
            >
              <Box
                component="input"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                sx={{
                  ...inputStyle,
                  '&::placeholder': { color: '#999', textTransform: 'capitalize' },
                  '&:focus': { outline: '2px solid #BE52CE' },
                }}
              />
              <Box
                component="input"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                sx={{
                  ...inputStyle,
                  '&::placeholder': { color: '#999', textTransform: 'capitalize' },
                  '&:focus': { outline: '2px solid #BE52CE' },
                }}
              />
            </Box>

            {/* Row 2: Email + Phone */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: '8px',
                mb: '18px',
              }}
            >
              <Box
                component="input"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                sx={{
                  ...inputStyle,
                  '&::placeholder': { color: '#999', textTransform: 'capitalize' },
                  '&:focus': { outline: '2px solid #BE52CE' },
                }}
              />
              <Box
                component="input"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                sx={{
                  ...inputStyle,
                  '&::placeholder': { color: '#999', textTransform: 'capitalize' },
                  '&:focus': { outline: '2px solid #BE52CE' },
                }}
              />
            </Box>

            {/* Row 3: Message */}
            <Box sx={{ mb: '24px' }}>
              <Box
                component="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter Your Message"
                sx={{
                  display: 'block',
                  width: '100%',
                  height: '152px',
                  borderRadius: '20px',
                  backgroundColor: 'rgba(243, 243, 243, 1)',
                  border: 'none',
                  padding: '15px 28px',
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: { xs: '13px', sm: '14px', md: '16px' },
                  lineHeight: '25px',
                  boxSizing: 'border-box',
                  resize: 'none',
                  color: '#555',
                  '&::placeholder': { color: '#999' },
                  '&:focus': { outline: '2px solid #BE52CE' },
                }}
              />
            </Box>

            {/* Submit Button */}
            <Button
              type="submit"
              sx={{
                width: '100%',
                height: '60px',
                borderRadius: '20px',
                background: 'linear-gradient(90deg, #BE52CE 0%, #8D53DB 100%)',
                color: '#FFFFFF',
                fontFamily: 'Poppins',
                fontWeight: 700,
                fontSize: { xs: '16px', md: '20px' },
                lineHeight: '25px',
                textTransform: 'capitalize',
                '&:hover': {
                  background: 'linear-gradient(90deg, #8D53DB 0%, #BE52CE 100%)',
                },
              }}
            >
              SUBMIT
            </Button>
          </form>

          {/* ─── Bottom Section ─── */}
          <Box
            sx={{
              mt: { xs: '80px', md: '140px' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              pb: '10px',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '25px',
                textTransform: 'uppercase',
                textAlign: 'center',
                color: '#BE52CE',
                mb: '10px',
              }}
            >
              CONTACT US
            </Typography>

            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 600,
                fontSize: { xs: '24px', sm: '28px', md: '40px' },
                lineHeight: 1.3,
                textTransform: 'capitalize',
                textAlign: 'center',
                color: 'rgba(0, 0, 0, 1)',
                mb: '15px',
              }}
            >
              Let's Start A Conversation
            </Typography>

            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: { xs: '14px', md: '16px' },
                lineHeight: '25px',
                textTransform: 'capitalize',
                textAlign: 'center',
                color: '#333333',
                maxWidth: '735px',
                mb: '50px',
              }}
            >
              Whether You Need A New Digital Solution, Want To Improve An Existing Platform, Or Need Support With Your Digital Growth, Our Team Is Ready To Hear From You. Reach Out To Zylogenix And Let's Explore The Right Solution For Your Business.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '20px',
                width: '100%',
              }}
            >
              {/* EMAIL US */}
              <Box
                sx={{
                  width: { xs: '100%', sm: '300px' },
                  minHeight: '190px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(241, 235, 243, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: '24px',
                  boxSizing: 'border-box',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '25px',
                    textAlign: 'center',
                    textTransform: 'capitalize',
                    color: '#8D53DB',
                    mb: '10px',
                  }}
                >
                  Email Us
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '21px',
                    textAlign: 'center',
                    textTransform: 'capitalize',
                    color: 'rgba(10, 10, 10, 1)',
                  }}
                >
                  Have An Enquiry Or Project Requirement? Reach Our Team Directly Through Email.
                </Typography>
              </Box>

              {/* SOCIAL MEDIA */}
              <Box
                sx={{
                  width: { xs: '100%', sm: '300px' },
                  minHeight: '190px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(241, 235, 243, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: '24px',
                  boxSizing: 'border-box',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '25px',
                    textAlign: 'center',
                    textTransform: 'capitalize',
                    color: 'rgba(141, 83, 219, 1)',
                    mb: '10px',
                  }}
                >
                  Social Media
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '21px',
                    textAlign: 'center',
                    textTransform: 'capitalize',
                    color: 'rgba(10, 10, 10, 1)',
                  }}
                >
                  Stay Connected With Zylogenix Through Our Social Platforms And Follow Our Latest Updates, Services, And Digital Insights.
                </Typography>
              </Box>

              {/* EXPLORE OUR SERVICES */}
              <Box
                sx={{
                  width: { xs: '100%', sm: '300px' },
                  minHeight: '190px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(241, 235, 243, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: '24px',
                  boxSizing: 'border-box',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '25px',
                    textAlign: 'center',
                    textTransform: 'capitalize',
                    color: 'rgba(141, 83, 219, 1)',
                    mb: '10px',
                  }}
                >
                  Explore Our Services
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '21px',
                    textAlign: 'center',
                    textTransform: 'capitalize',
                    color: 'rgba(10, 10, 10, 1)',
                  }}
                >
                  Zylogenix Helps Businesses Grow With Web, Mobile, Software, Marketing, UI/UX, Branding, Security, And More.
                </Typography>
              </Box>
            </Box>
          </Box>

        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Contact;
