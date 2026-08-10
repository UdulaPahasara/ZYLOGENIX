import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeHero from '../assets/home/Homehero.webp';
import WhyZylogenixImg from '../assets/home/WHY ZYLOGENIX.webp';
import DeliverCard from '../components/common/deleverCard';
import ServicesCard from '../components/common/servicescard';
import P1Img from '../assets/home/p1.webp';
import P1_1Img from '../assets/home/p1.1.webp';
import P2Img from '../assets/home/p2.webp';
import P2_1Img from '../assets/home/p2.1.webp';
import P3Img from '../assets/home/p3.webp';
import P3_1Img from '../assets/home/p3.1.webp';
import RoodwaveImg from '../assets/company/roodwave.webp';
import LevestageImg from '../assets/company/levestage.webp';
import InfluencerhubImg from '../assets/company/influencerhub.webp';
import TransformBusinessImg from '../assets/home/transformBussines.webp';
import ZylogenixImg from '../assets/home/ZYLOGENIX.webp';
import Footer from '../components/footer/footer';

const servicesData = [
  [
    {
      title: "Web Design & Development",
      description: "We create modern, responsive, and performance-driven websites tailored to your brand and business goals. From corporate websites to advanced custom platforms, our team delivers solutions that combine aesthetics, usability, and functionality.",
      imageSrc: P1Img,
      bgGradient: "linear-gradient(113.49deg, #8D53DB 5.01%, #4B2C75 79.43%)",
      reverse: false
    },
    {
      title: "Mobile App & Custom Software Development",
      description: "Bring your ideas to life with scalable mobile applications and custom-built software solutions. We develop digital products that streamline operations, improve user experiences, and support long-term business growth",
      imageSrc: P1_1Img,
      bgGradient: "linear-gradient(113.49deg, #8D53DB 5.01%, #4B2C75 79.43%)",
      reverse: true
    }
  ],
  [
    {
      title: "UI/UX Design",
      description: "Deliver exceptional digital experiences through intuitive interfaces and user-centered design. Our UI/UX experts craft engaging, accessible, and visually compelling products that enhance usability and maximize customer satisfaction.",
      imageSrc: P2Img,
      bgGradient: "linear-gradient(113.49deg, #5373DB 5.01%, #2F2C75 79.43%)",
      reverse: false
    },
    {
      title: "Digital Marketing & Branding",
      description: "Grow your brand with strategic digital marketing solutions, including SEO, social media management, content marketing, paid advertising, and creative branding that helps your business reach the right audience and generate measurable results.",
      imageSrc: P2_1Img,
      bgGradient: "linear-gradient(116.48deg, #52CE69 22.81%, #1F5C17 83.13%)",
      reverse: true
    }
  ],
  [
    {
      title: "Cloud Hosting & Maintenance",
      description: "Ensure your digital platforms remain secure, reliable, and optimized with professional hosting, server management, website maintenance, performance monitoring, backups, and ongoing technical support for uninterrupted business operations.",
      imageSrc: P3Img,
      bgGradient: "linear-gradient(113.49deg, #DB9753 5.01%, #633500 79.43%)",
      reverse: false
    },
    {
      title: "Creative Media & Content Production",
      description: "Capture attention with impactful visual content, including graphic design, promotional videos, motion graphics, photography, print media, and multimedia assets that strengthen your brand identity across digital and traditional channels.",
      imageSrc: P3_1Img,
      bgGradient: "linear-gradient(116.48deg, #CE5252 22.81%, #4A0808 83.13%)",
      reverse: true
    }
  ]
];

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

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  const imageX = useTransform(smoothX, [-0.5, 0.5], [-25, 25]);
  const imageY = useTransform(smoothY, [-0.5, 0.5], [-25, 25]);

  const handleWhyZylogenixMouseMove = (e) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };
  const [[activeServiceSlide, serviceDirection], setServiceSlideState] = useState([0, 0]);
  const swipeConfidenceThreshold = 5000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };
  
  const sliderRef = useRef(null);
  const activeSlideRef = useRef(activeSlide);
  const isScrolling = useRef(false);

  const servicesRef = useRef(null);
  const activeServiceSlideRef = useRef(activeServiceSlide);
  const isServicesScrolling = useRef(false);

  const paginateService = (newDirection) => {
    setServiceSlideState((prev) => {
      let nextSlide = prev[0] + newDirection;
      if (nextSlide < 0) nextSlide = servicesData.length - 1;
      if (nextSlide >= servicesData.length) nextSlide = 0;
      return [nextSlide, newDirection];
    });
  };

  const handleServiceDotClick = (index) => {
    setServiceSlideState((prev) => {
      const direction = index > prev[0] ? 1 : -1;
      return [index, direction];
    });
  };

  useEffect(() => {
    activeServiceSlideRef.current = activeServiceSlide;
  }, [activeServiceSlide]);

  useEffect(() => {
    const servicesSlider = servicesRef.current;
    if (!servicesSlider) return;

    const handleServicesWheel = (e) => {
      if (isServicesScrolling.current) {
        e.preventDefault();
        return;
      }

      if (e.deltaY > 0) {
        if (activeServiceSlideRef.current < servicesData.length - 1) {
          e.preventDefault();
          isServicesScrolling.current = true;
          paginateService(1);
          setTimeout(() => { isServicesScrolling.current = false; }, 800);
        }
      } else if (e.deltaY < 0) {
        if (activeServiceSlideRef.current > 0) {
          e.preventDefault();
          isServicesScrolling.current = true;
          paginateService(-1);
          setTimeout(() => { isServicesScrolling.current = false; }, 800);
        }
      }
    };

    servicesSlider.addEventListener('wheel', handleServicesWheel, { passive: false });
    return () => servicesSlider.removeEventListener('wheel', handleServicesWheel);
  }, []);

  const serviceVariants = {
    enter: (direction) => {
      return {
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        opacity: 0
      };
    }
  };

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
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
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
        onMouseMove={handleWhyZylogenixMouseMove}
        onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
        sx={{
          width: '100%',
          
          maxWidth: '1440px',
          margin: '0 auto',
          height: { xs: 'auto', md: '500px' },
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
          component={motion.div}
          style={{ x: imageX, y: imageY }}
          sx={{
            zIndex: 1,
            alignSelf: { xs: 'center', md: 'flex-end' },
            display: 'flex',
          }}
        >
          <Box
            component="img"
            src={WhyZylogenixImg}
            alt="Why Zylogenix"
            sx={{
              width: { xs: '100%', sm: '400px', md: '45%', lg: '500px' },
              height: { xs: 'auto', md: '450px' },
              objectFit: 'contain',
              objectPosition: 'bottom center',
              transform: { 
                xs: 'scale(1.1) translateY(30px)', 
                md: 'scale(1.15) translateY(40px)' 
              }, 
              transformOrigin: 'bottom center',
            }}
          />
        </Box>

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
        ref={servicesRef}
        sx={{
          width: '100%',
          minHeight: 'auto',
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

        <AnimatePresence mode="wait" custom={serviceDirection}>
          <motion.div
            key={activeServiceSlide}
            custom={serviceDirection}
            variants={serviceVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", duration: 1.2, ease: "easeOut" },
              opacity: { duration: 1.0, ease: "easeInOut" }
            }}
            style={{ width: '100%' }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '20px', md: '28px' }, width: '100%', alignItems: 'center' }}>
              {servicesData[activeServiceSlide].map((service, index) => (
                <ServicesCard 
                  key={index}
                  title={service.title}
                  description={service.description}
                  imageSrc={service.imageSrc}
                  bgGradient={service.bgGradient}
                  reverse={service.reverse}
                />
              ))}
            </Box>
          </motion.div>
        </AnimatePresence>

        {/* Horizontal Pagination Dots */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            mt: { xs: '30px', md: '30px',lg:'35px' },
          }}
        >
          {servicesData.map((_, index) => (
            <Box
              key={index}
              onClick={() => handleServiceDotClick(index)}
              sx={{
                width: activeServiceSlide === index ? '35px' : '16px',
                height: '16px',
                borderRadius: '100px',
                background: activeServiceSlide === index 
                  ? 'linear-gradient(180deg, #BE52CE 0%, #8D53DB 100%)' 
                  : 'rgba(221, 221, 221, 1)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: activeServiceSlide === index 
                    ? 'linear-gradient(180deg, #BE52CE 0%, #8D53DB 100%)' 
                    : 'rgba(180, 180, 180, 1)',
                }
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Our Partnerships Section */}
      <Box
        className="white-section"
        sx={{
          width: '100%',
          backgroundColor: '#FFFFFF',
          padding: { xs: '60px 20px', md: '100px 20px' },
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
            color: '#A953E2',
            mb: '15px',
            textAlign: 'center'
          }}
        >
          OUR PARTNERSHIPS
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 700,
            fontSize: { xs: '28px', md: '40px' },
            lineHeight: { xs: '38px', md: '50px' },
            textAlign: 'center',
            color: '#000000',
            mb: '20px',
            maxWidth: '650px'
          }}
        >
          Stronger Together Through Strategic Collaboration
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '25px',
            textAlign: 'center',
            color: '#666666',
            mb: '60px',
            maxWidth: '850px'
          }}
        >
          At Zylogenix, We Believe Powerful Collaborations Create Stronger Digital Outcomes. We Work Alongside Creative, Technical, And Growth-Focused Partners To Expand Capabilities, Deliver Greater Value, And Provide Businesses With Complete Digital Solutions Under One Ecosystem.
        </Typography>

        {/* Company Logos */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: '40px', sm: '60px', md: '80px' },
            width: '100%'
          }}
        >
          <Box
            component="img"
            src={RoodwaveImg}
            alt="Roodwave"
            sx={{
              width: '98.48px',
              height: '89.93px',
              objectFit: 'contain'
            }}
          />
          
          <Box
            component="img"
            src={LevestageImg}
            alt="Levestage"
            sx={{
              width: '163.24px',
              height: '101px',
              objectFit: 'contain'
            }}
          />
          
          <Box
            component="img"
            src={InfluencerhubImg}
            alt="Influencer Hub"
            sx={{
              width: '175px',
              height: '68px',
              borderRadius: '8.18px',
              objectFit: 'contain'
            }}
          />
        </Box>
      </Box>

      {/* Transform Business Section */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          minHeight: { xs: 'auto', md: '500px' },
          backgroundImage: `url(${TransformBusinessImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: { xs: '60px 20px', md: '100px 20px' },
          boxSizing: 'border-box',
          overflow: 'hidden'
        }}
      >
        {/* Dark Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.6)',
            zIndex: 1
          }}
        />

        {/* Content Container */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '1000px',
            textAlign: 'center'
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 700,
                fontSize: { xs: '32px', md: '48px' },
                lineHeight: { xs: '42px', md: '58px' },
                color: '#FFFFFF',
                mb: '25px',
                maxWidth: '900px'
              }}
            >
              Ready To Transform Your Business With Smart Digital Solutions ?
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: { xs: '14px', md: '16px' },
                lineHeight: { xs: '24px', md: '26px' },
                color: '#FFFFFF',
                mb: '40px',
                maxWidth: '850px'
              }}
            >
              Whether You're Building A New Digital Presence, Improving An Existing Platform, Launching A Product, Or Scaling Your Business Through Technology, Zylogenix Is Here To Help. Let's Create Solutions That Are Innovative, Reliable, And Built For Growth.
            </Typography>
          </motion.div>

          {/* Contact Us Button Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <Box
              sx={{
                width: '161px',
                height: '54px',
                borderRadius: '20px',
                padding: '9.78px 24.46px',
                background: 'rgba(255, 255, 255, 0.1)',
                boxShadow: `
                  0.98px 0.98px 1.96px 0px rgba(255, 255, 255, 0.3) inset,
                  -0.98px -0.98px 1.96px 0px rgba(255, 255, 255, 0.1) inset,
                  0px 0px 9.78px 0px rgba(255, 255, 255, 0.3) inset
                `,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '9.78px',
                cursor: 'pointer',
                boxSizing: 'border-box',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.2)',
                  transform: 'scale(1.05)'
                }
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                  fontSize: '14px',
                  color: '#FFFFFF',
                  whiteSpace: 'nowrap'
                }}
              >
                CONTACT US
              </Typography>
              <ArrowForwardIcon sx={{ color: '#FFFFFF', fontSize: '18px' }} />
            </Box>
          </motion.div>
        </Box>
      </Box>

      {/* Trusted Partner Section */}
      <Box
        className="white-section"
        sx={{
          width: '100%',
          backgroundColor: '#FFFFFF',
          padding: { xs: '60px 20px', md: '100px 40px', lg: '120px 80px' },
          display: 'flex',
          flexDirection: { xs: 'column-reverse', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: '30px', sm: '40px', md: '75px', lg: '100px' },
          boxSizing: 'border-box'
        }}
      >
        {/* Left Side: Image Container */}
        <Box
          sx={{
            flex: { xs: '1 1 auto', sm: '0 0 40%', md: '0 0 456px' },
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            position: 'relative',
            width: '100%',
            maxWidth: '456px',
            height: { xs: 'auto', md: '590px' },
            mt:{md:'-100px',lg:'-140px'}
            
          }}
        >
          {/* Background Blob */}
          <Box
            sx={{
              position: 'absolute',
              width: '100%',
              height: {xs:'230px', md:'380px'},
              bottom: 9,
              background: 'linear-gradient(116.48deg, #BE52CE 22.81%, #8D53DB 83.13%)',
              borderRadius: '53.42px',
              zIndex: 1
            }}
          />
          {/* Foreground Image */}
          <Box
            component="img"
            src={ZylogenixImg}
            alt="Zylogenix Trusted Partner"
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'bottom',
              borderRadius: '64.05px',
              zIndex: 2
            }}
          />
        </Box>

        {/* Right Side: Content Container */}
        <Box
          sx={{
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            maxWidth: '550px',
            textAlign: { xs: 'center', sm: 'left' }
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '25px',
              textTransform: 'uppercase',
              color: '#A953E2',
              mb: '10px'
            }}
          >
            ZYLOGENIX
          </Typography>

          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 700,
              fontSize: { xs: '24px', md: '30px' },
              lineHeight: { xs: '32px', md: '38px' },
              textTransform: 'capitalize',
              color: 'rgba(0, 0, 0, 1)',
              mb: '25px'
            }}
          >
            Your Trusted Partner In Digital Transformation
          </Typography>

          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '25px',
              color: 'rgba(0, 0, 0, 1)',
              mb: '15px'
            }}
          >
            We combine creativity, strategy, and cutting-edge technology to build powerful digital solutions that help businesses stay competitive. Every project is crafted with precision, innovation, and a commitment to delivering measurable results.
          </Typography>

          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '25px',
              color: 'rgba(0, 0, 0, 1)'
            }}
          >
            Whether it's a high-performing website, enterprise software, mobile application, or complete digital marketing strategy, Zylogenix delivers scalable solutions that accelerate growth and unlock new opportunities
          </Typography>
        </Box>
      </Box>

      {/* Footer Section */}
      <Footer />
    </Box>
  );
};

export default Home;
