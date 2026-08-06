import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeHero from '../assets/home/Homehero.webp';
import WhyZylogenixImg from '../assets/home/WHY ZYLOGENIX.webp';
import DeliverCard from '../components/common/deleverCard';
import ServicesCard from '../components/common/servicescard';
import P1Img from '../assets/home/p1.webp';
import P1_1Img from '../assets/home/p1.1.webp';

const slidesData = [
  {
    subtitle: "WHO WE ARE",
    title: "Your Trusted Partner in Digital Growth & Innovation",
    heading: "At Zylogenix Digital Solutions,",
    description: "We help businesses bridge the gap between ideas and innovation through tailored digital services, business-focused technology solutions, and expert guidance. From startups to growing enterprises, we work closely with clients to build impactful digital products, improve operations, and create meaningful online experiences that support long-term growth.",
    buttonText: "Learn More"
  },
  {
    subtitle: "OUR SERVICES",
    title: "Empowering Your Business With Modern Solutions",
    heading: "Tailored Strategies For Success,",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    buttonText: "View Services"
  },
  {
    subtitle: "WHY CHOOSE US",
    title: "Delivering Excellence Through Innovation",
    heading: "Commitment To Quality And Growth,",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
    buttonText: "Contact Us"
  }
];

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);
  const activeSlideRef = useRef(activeSlide);
  const isScrolling = useRef(false);

  useEffect(() => {
    activeSlideRef.current = activeSlide;
  }, [activeSlide]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleWheel = (e) => {
      if (isScrolling.current) {
        e.preventDefault();
        return;
      }

      if (e.deltaY > 0) {
        if (activeSlideRef.current < slidesData.length - 1) {
          e.preventDefault();
          isScrolling.current = true;
          setActiveSlide((prev) => prev + 1);
          setTimeout(() => { isScrolling.current = false; }, 800);
        }
      } else if (e.deltaY < 0) {
        if (activeSlideRef.current > 0) {
          e.preventDefault();
          isScrolling.current = true;
          setActiveSlide((prev) => prev - 1);
          setTimeout(() => { isScrolling.current = false; }, 800);
        }
      }
    };

    slider.addEventListener('wheel', handleWheel, { passive: false });
    return () => slider.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Box
        sx={{
          width: '100%',
          height: { xs: '99vh', md: '781px' },
          backgroundImage: `url(${HomeHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
          }}
        />
        
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          sx={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '900px',
            px: 2
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 800,
              fontSize: { xs: '40px', md: '72px' },
              lineHeight: { xs: '50px', md: '85px' },
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 1)',
            }}
          >
            CRAFTING IMPACTFUL
          </Typography>
          <Box
            sx={{
              backgroundColor: 'rgba(190, 82, 206, 0.35)',
              borderRadius: '25px',
              padding: { xs: '5px 15px', md: '9.78px 24.46px' },
              mt: { xs: 1, md: 0 },
              display: 'inline-block',
              boxShadow: `
                0.98px 0.98px 1.96px 0px rgba(255, 255, 255, 0.3) inset, 
                -0.98px -0.98px 1.96px 0px rgba(255, 255, 255, 0.1) inset, 
                0px 0px 9.78px 0px rgba(255, 255, 255, 0.3) inset
              `,
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 800,
                fontSize: { xs: '40px', md: '72px' },
                lineHeight: { xs: '50px', md: '85px' },
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 1)',
              }}
            >
              EXPERIENCES
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        ref={sliderRef}
        className="white-section"
        sx={{
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          position: 'relative',
          pt: { xs: '60px', md: '108px' }, 
          pb: { xs: '60px', md: '92px' },
          pl: { xs: '20px', md: '100px', lg: '250px' },
          pr: { xs: '20px', md: '100px', lg: '263px' },
          boxSizing: 'border-box'
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            style={{ width: '100%' }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'flex-start' },
              }}
            >
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
                  mb: '11px',
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                {slidesData[activeSlide].subtitle}
              </Typography>

              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                  fontSize: { xs: '32px', md: '48px' },
                  lineHeight: { xs: '42px', md: '61.2px' },
                  textTransform: 'uppercase',
                  color: 'rgba(0, 0, 0, 1)',
                  mb: '42px',
                  wordWrap: 'break-word',
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                {slidesData[activeSlide].title}
              </Typography>

              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                  fontSize: { xs: '20px', md: '25px' },
                  lineHeight: { xs: '28px', md: '33px' },
                  textTransform: 'capitalize',
                  color: 'rgba(0, 0, 0, 1)',
                  mb: '17px',
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                {slidesData[activeSlide].heading}
              </Typography>

              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: { xs: '14px', md: '16px' },
                  lineHeight: { xs: '24px', md: '30px' },
                  textTransform: 'capitalize',
                  color: 'rgba(128, 128, 128, 1)',
                  mb: '30px',
                  maxWidth: '927px',
                  wordWrap: 'break-word',
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                {slidesData[activeSlide].description}
              </Typography>

              <Button
                sx={{
                  background: 'linear-gradient(90deg, #BE52CE 0%, #8D53DB 100%)',
                  borderRadius: '10px',
                  padding: '11px 25px',
                  color: '#ffffff',
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: '16px',
                  textTransform: 'none',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #8D53DB 0%, #BE52CE 100%)',
                  },
                }}
              >
                {slidesData[activeSlide].buttonText}
              </Button>
            </Box>
          </motion.div>
        </AnimatePresence>

        <Box
          sx={{
            position: 'absolute',
            right: { xs: '5px', md: '10px', lg: '60px', xl: '196px' },
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            zIndex: 10,
          }}
        >
          {slidesData.map((_, index) => (
            <Box
              key={index}
              onClick={() => setActiveSlide(index)}
              sx={{
                width: '10px',
                height: activeSlide === index ? '40px' : '10px',
                borderRadius: '100px',
                background: activeSlide === index 
                  ? 'linear-gradient(180deg, #BE52CE 10.1%, #8D53DB 100%)' 
                  : 'rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                  background: activeSlide === index 
                    ? 'linear-gradient(180deg, #BE52CE 10.1%, #8D53DB 100%)' 
                    : 'rgba(0, 0, 0, 0.3)',
                }
              }}
            />
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          height: { xs: 'auto', md: '639px' },
          backgroundColor: 'rgba(26, 12, 47, 1)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: '20px', md: '40px', lg: '85px' },
          padding: { xs: '60px 20px 0 20px', md: '0 40px', lg: '0' },
          boxSizing: 'border-box'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: '391.82px',
            height: '391.82px',
            top: { xs: '-50px', md: '166px' },
            left: { xs: '-50px', md: '102px' },
            backgroundColor: 'rgba(229, 221, 230, 0.35)',
            filter: 'blur(200px)',
            borderRadius: '50%',
            zIndex: 0,
          }}
        />

        <Box
          component="img"
          src={WhyZylogenixImg}
          alt="Why Zylogenix"
          sx={{
            width: { xs: '100%', sm: '400px', md: '45%', lg: '500px' },
            height: { xs: 'auto', md: '550px' },
            objectFit: 'contain',
            objectPosition: 'bottom center',
            alignSelf: { xs: 'center', md: 'flex-end' },
            zIndex: 1,
            transform: { 
              xs: 'scale(1.1) translateY(30px)', 
              md: 'scale(1.25) translateY(110px)' 
            }, 
            transformOrigin: 'bottom center',
          }}
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: { xs: '100%', md: '50%', lg: 'auto' },
            maxWidth: '530px',
            zIndex: 1,
            alignItems: { xs: 'center', md: 'flex-start' },
          }}
        >
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
              mb: '11px',
              textAlign: { xs: 'center', md: 'left' }
            }}
          >
            WHY ZYLOGENIX
          </Typography>

          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 600,
              fontSize: { xs: '22px', sm: '26px', md: '30px' },
              lineHeight: { xs: '30px', sm: '34px', md: '38px' },
              textTransform: 'capitalize',
              color: 'rgba(255, 255, 255, 1)',
              mb: '22px', 
              wordWrap: 'break-word',
              width: '100%',
              textAlign: { xs: 'center', md: 'left' }
            }}
          >
            Solutions Built Around Your Business Vision
          </Typography>

          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: { xs: '14px', sm: '16px' },
              lineHeight: { xs: '22px', sm: '25px' },
              textTransform: 'capitalize',
              textAlign: { xs: 'center', md: 'justify' },
              color: 'rgba(255, 255, 255, 1)',
              mb: '30px',
              wordWrap: 'break-word',
              width: '100%',
            }}
          >
            We combine strategy, creativity, and technical expertise to deliver solutions that are not only visually compelling but also commercially effective. Whether you need a business website, a custom application, digital marketing support, or enterprise-grade software, Zylogenix provides the right blend of innovation, performance, and reliability to move your business forward.
          </Typography>

          <Button
            endIcon={<ArrowForwardIcon sx={{ fontSize: '18px' }} />}
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '10px',
              width: '161px',
              height: '45px',
              padding: '9.78px 24.46px',
              textTransform: 'capitalize',
              color: 'rgba(255, 255, 255, 1)',
              fontFamily: 'Poppins',
              fontWeight: 600,
              fontSize: '14px',
              display: 'flex',
              justifyContent: 'space-between',
              boxShadow: `
                0.98px 0.98px 1.96px 0px rgba(255, 255, 255, 0.3) inset, 
                -0.98px -0.98px 1.96px 0px rgba(255, 255, 255, 0.1) inset, 
                0px 0px 9.78px 0px rgba(255, 255, 255, 0.3) inset
              `,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                boxShadow: `
                  0.98px 0.98px 1.96px 0px rgba(255, 255, 255, 0.3) inset, 
                  -0.98px -0.98px 1.96px 0px rgba(255, 255, 255, 0.1) inset, 
                  0px 0px 9.78px 0px rgba(255, 255, 255, 0.3) inset
                `,
              }
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>

      <Box
        className="white-section"
        sx={{
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          padding: { xs: '60px 20px', md: '100px 60px' },
          backgroundColor: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxSizing: 'border-box'
        }}
      >
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
            mb: '15px',
            textAlign: 'center'
          }}
        >
          WHAT WE DELIVER
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 700,
            fontSize: { xs: '28px', md: '40px' },
            lineHeight: { xs: '38px', md: '50px' },
            textAlign: 'center',
            color: '#1A0C2F',
            mb: '60px',
            maxWidth: '650px'
          }}
        >
          Smart Digital Solutions For Modern Businesses
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: '20px', sm: '16px', md: '30px' },
            width: '100%',
            justifyContent: 'center',
            alignItems: 'stretch',
            flexWrap: 'nowrap',
          }}
        >
          <DeliverCard 
            title="WEB DESIGN & DEVELOPMENT" 
            description="Build Responsive, High-Performance Websites That Strengthen Your Online Presence, Improve User Experience, And Convert Visitors Into Loyal Customers." 
          />
          <DeliverCard 
            title="MOBILE APP DEVELOPMENT" 
            description="Develop Intuitive Android And iOS Applications Designed To Streamline Business Operations While Delivering Seamless User Experiences." 
          />
          <DeliverCard 
            title="DIGITAL MARKETING & BRANDING" 
            description="Increase Visibility, Generate Qualified Leads, And Grow Your Brand Through Data-Driven Marketing Strategies, Creative Branding, And Impactful Digital Campaigns." 
          />
        </Box>
      </Box>
      {/* Services Cards Section */}
      <Box
        sx={{
          width: '100%',
          minHeight: { xs: 'auto', md: '1115px' },
          backgroundColor: '#000000',
          padding: { xs: '60px 20px', md: '100px 0' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxSizing: 'border-box'
        }}
      >
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
            mt: { xs: "0px", lg: "-70px" },
            mb: '15px',
            textAlign: 'center'
          }}
        >
          OUR SERVICES
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 700,
            fontSize: { xs: '28px', md: '40px' },
            lineHeight: { xs: '38px', md: '50px' },
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 1)',
            mb: '60px',
            maxWidth: '750px'
          }}
        >
          Meet Our Experts And Elevate Your Business With Zylogenix
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '20px', md: '28px' }, width: '100%', alignItems: 'center' }}>
          <ServicesCard 
            title="Web Design & Development"
            description="We create modern, responsive, and performance-driven websites tailored to your brand and business goals. From corporate websites to advanced custom platforms, our team delivers solutions that combine aesthetics, usability, and functionality."
            imageSrc={P1Img}
            reverse={false} // Image on the right
          />

          <ServicesCard 
            title="Mobile App & Custom Software Development"
            description="Bring your ideas to life with scalable mobile applications and custom-built software solutions. We develop digital products that streamline operations, improve user experiences, and support long-term business growth"
            imageSrc={P1_1Img}
            reverse={true} // Image on the left
          />
        </Box>

        {/* Horizontal Pagination Dots */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            mt: { xs: '30px', md: '30px',lg:'35px' },
          }}
        >
          {/* Active Dot */}
          <Box
            sx={{
              width: '35px',
              height: '16px',
              borderRadius: '100px',
              background: 'linear-gradient(180deg, #BE52CE 0%, #8D53DB 100%)',
              cursor: 'pointer',
            }}
          />
          {/* Inactive Dot 1 */}
          <Box
            sx={{
              width: '16px',
              height: '16px',
              borderRadius: '100px',
              backgroundColor: 'rgba(221, 221, 221, 1)',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(180, 180, 180, 1)',
              }
            }}
          />
          {/* Inactive Dot 2 */}
          <Box
            sx={{
              width: '16px',
              height: '16px',
              borderRadius: '100px',
              backgroundColor: 'rgba(221, 221, 221, 1)',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(180, 180, 180, 1)',
              }
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
