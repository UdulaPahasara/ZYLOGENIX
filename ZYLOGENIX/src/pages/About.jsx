import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import AboutWhyCard from '../components/common/aboutWhycard';
import DocumentIcon from '../assets/About/document.webp';
import UsersIcon from '../assets/About/users.webp';
import RocketIcon from '../assets/About/rocket.webp';
import FolderIcon from '../assets/About/folder.webp';
import KeyIcon from '../assets/About/key.webp';
import Footer from '../components/footer/footer';
import VrBoxImg from '../assets/About/vrbox.webp';
import HandTogetherImg from '../assets/About/handtogather.webp';
import { motion } from 'framer-motion';

const cardsData = [
  {
    icon: DocumentIcon,
    title: 'Transparent Quotations',
    description: 'Clear And Comprehensive Quotes For Client Approval',
    bgColor: 'rgba(241, 235, 243, 1)'
  },
  {
    icon: UsersIcon,
    title: 'Expert Team',
    description: 'Professional Service From A Talented Team',
    bgColor: 'rgba(236, 235, 243, 1)'
  },
  {
    icon: RocketIcon,
    title: 'Seamless Communication',
    description: 'Continuous Communication Throughout Our Partnership',
    bgColor: 'rgba(243, 235, 235, 1)'
  },
  {
    icon: FolderIcon,
    title: 'Quality & Document Control',
    description: 'Document Control, Ensuring Client Approvals to Safeguard Brand Integrity',
    bgColor: 'rgba(235, 243, 235, 1)'
  },
  {
    icon: KeyIcon,
    title: 'Confidentiality & Security',
    description: 'Strict Confidentiality and Security Measures for Client Information',
    bgColor: 'rgba(243, 241, 235, 1)'
  }
];

const About = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle manual scrolling to update active dot
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = 310; // 280px card + 30px gap
      const newIndex = Math.round(scrollLeft / cardWidth);
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    }
  };

  // Auto-swipe feature for mobile & tablet
  useEffect(() => {
    const interval = setInterval(() => {
      // Only auto-swipe on screens smaller than desktop (1024px)
      if (window.innerWidth < 1024 && scrollRef.current) {
        const maxIndex = cardsData.length - 1;
        const nextIndex = activeIndex >= maxIndex ? 0 : activeIndex + 1;
        const cardWidth = 310;
        
        scrollRef.current.scrollTo({
          left: nextIndex * cardWidth,
          behavior: 'smooth'
        });
        
        setActiveIndex(nextIndex);
      }
    }, 3000); // Swipe every 3 seconds

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      {/* Blank Hero Section (To be implemented later) */}
      <Box
        sx={{
          width: '100%',
          height: { xs: 'auto', md: '768px',lg:'768px' },
          minHeight: '400px',
          backgroundColor: '#121212', // Placeholder dark background
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography sx={{ color: 'rgba(255, 255, 255, 0.5)', fontFamily: 'Poppins', fontSize: '24px' }}>
          [ Hero Content Placeholder ]
        </Typography>
      </Box>

      {/* Why Choose Zylogenix Section */}
      <Box
        className="white-section"
        sx={{
          width: '100%',
          backgroundColor: '#FFFFFF',
          padding: { xs: '60px 20px', md: '100px 40px' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxSizing: 'border-box'
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 800,
            fontSize: { xs: '32px', md: '40px' },
            lineHeight: { xs: '40px', md: '46px' },
            color: 'rgba(53, 53, 53, 1)',
            textAlign: 'center',
            textTransform: 'capitalize',
            maxWidth: '650px',
            marginBottom: '30px'
          }}
        >
          Why Choose Zylogenix Digital Solutions?
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '25px',
            color: 'rgba(0, 0, 0, 1)',
            textAlign: 'center',
            maxWidth: '650px',
            marginBottom: '60px'
          }}
        >
          At Zylogenix Digital Solutions, we're equipped to handle projects of any size, dedicated to enhancing our clients' productivity and fostering growth. When you choose us, you can expect:
        </Typography>

        {/* Cards Container with Horizontal Scroll and Right Fade */}
        <Box sx={{ position: 'relative', width: '100%', maxWidth: '1400px',paddingLeft:{xs:'0px',lg:'280px'},pt:"15px" }}>
          
          {/* Scrollable Container */}
          <Box
            ref={scrollRef}
            onScroll={handleScroll}
            sx={{
              display: 'flex',
              gap: '30px',
              overflowX: 'auto',
              pt:'20px',
              paddingBottom: '20px',
              paddingRight: { xs: '20px', sm: '200px' }, 
              scrollSnapType: { xs: 'x mandatory', md: 'none' }, 
              '::-webkit-scrollbar': { display: 'none' },
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {cardsData.map((card, index) => (
              <Box 
                key={index} 
                sx={{ 
                  scrollSnapAlign: 'start',
                  display: 'flex'
                }}
              >
                <AboutWhyCard
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  bgColor={card.bgColor}
                />
              </Box>
            ))}
          </Box>

          {/* Right Gradient Fade */}
          <Box
            sx={{
              position: 'absolute',
              right: 0,
              top: 0,
              width: '190px',
              height: '100%',
              background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 66.07%)',
              pointerEvents: 'none', // Allows clicking/swiping through the gradient
              zIndex: 10,
              display: { xs: 'none', sm: 'block' }
            }}
          />
        </Box>

        {/* Pagination Dots (Mobile Only) */}
        <Box 
          sx={{ 
            display: { xs: 'flex', sm: 'none' }, 
            justifyContent: 'center', 
            gap: '10px',
            marginTop: '20px' 
          }}
        >
          {cardsData.map((_, index) => (
            <Box
              key={index}
              onClick={() => {
                if (scrollRef.current) {
                  scrollRef.current.scrollTo({
                    left: index * 310,
                    behavior: 'smooth'
                  });
                  setActiveIndex(index);
                }
              }}
              sx={{
                width: activeIndex === index ? '24px' : '10px',
                height: '10px',
                borderRadius: '5px',
                backgroundColor: activeIndex === index ? '#BE52CE' : '#D9D9D9',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            />
          ))}
        </Box>
      </Box>

      {/* About Text & Image Section */}
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#161616',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '1400px',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }
          }}
        >
          <Box
            sx={{
              flex: { xs: '1 1 100%', md: '1 1 55.5%' },
              width: { xs: '100%', md: '55.5%' },
              height: { xs: 'auto', md: '639px' },
              backgroundColor: '#161616',
              padding: { xs: '100px 20px', sm: '120px 40px', md: '0 40px', lg: '0' },
              boxSizing: 'border-box',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            {/* Top Quote */}
            <Typography
              sx={{
                position: 'absolute',
                top: { xs: '75px', md: '100px', sm: '160px' },
                left: { xs: '20px', md: '6%',sm: '16%', lg: '139px' },
                fontFamily: 'Monda, sans-serif',
                fontWeight: 400,
                fontSize: { xs: '80px', md: '110.4px' },
                lineHeight: { xs: 1, md: '110px' },
                color: '#BE52CE'
              }}
            >
              “
            </Typography>

            <Box sx={{ maxWidth: '424px', zIndex: 2, position: 'relative' }}>
              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '25px',
                  color: '#FFFFFF',
                  textAlign: { xs: 'center', md: 'justify' },
                  mb: '25px'
                }}
              >
                Zylogenix, a global Digital Solutions Company with a strong presence in Sri Lanka, specializes in Software Development. With our extensive experience in creating intelligent solutions, we take pride in our formidable team of highly skilled resources. Our mission is to create value for our clients by delivering effective and efficient solutions that harness the latest technologies, including PHP, Android, 10S, and more.
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '25px',
                  color: '#FFFFFF',
                  textAlign: { xs: 'center', md: 'justify' }
                }}
              >
                Embracing a culture of open communication across the organization, Zylogenix ensures a seamless implementation process. We cater to clients of all sizes, from small SMEs to large corporations, offering the perfect solution regardless of your business scale.
              </Typography>
            </Box>

            {/* Bottom Quote */}
            <Typography
              sx={{
                position: 'absolute',
                bottom: { xs: '40px', sm: '140px', md: 'px' },
                right: { xs: '20px', md: '10%', sm: '18%', lg: '135px' },
                fontFamily: 'Monda, sans-serif',
                fontWeight: 400,
                fontSize: { xs: '80px', md: '110.4px' },
                lineHeight: { xs: 1, md: '110px' },
                color: '#BE52CE',
                transform: 'rotateY(180deg)',
                display: 'block'
              }}
            >
             “
            </Typography>
          </Box>

          {/* Right Side: Image Area with Animation */}
          <Box
            sx={{
              flex: { xs: '1 1 100%', md: '1 1 44.5%' },
              width: { xs: '100%', md: '44.5%' },
              height: { xs: '350px', sm: '450px', md: '639px' },
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              style={{ width: '100%', height: '100%' }}
            >
              <Box
                component="img"
                src={VrBoxImg}
                alt="Zylogenix VR"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
            </motion.div>
          </Box>
        </Box>
      </Box>

      {/* Get Found Section */}
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: { xs: '60px 20px 0', md: '100px 20px 0' }, // 0 bottom padding so image touches bottom
          boxSizing: 'border-box',
          overflow: 'hidden'
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 800,
            fontSize: { xs: '28px', sm: '36px', md: '50px' },
            lineHeight: { xs: '38px', sm: '50px', md: '70px' },
            background: 'linear-gradient(90deg, #F6B0FE 0%, #BE52CE 36.97%, #8D53DB 82.38%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center',
            textTransform: 'capitalize',
            maxWidth: '940px',
            marginBottom: '30px'
          }}
        >
          Get Found. Grow your Business with Zylogenix. Trackable Results.
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: { xs: '14px', sm: '16px', md: '20px' },
            lineHeight: { xs: '22px', sm: '26px', md: '30px' },
            color: 'rgba(0, 0, 0, 1)',
            textAlign: 'center',
            textTransform: 'capitalize',
            maxWidth: '940px',
            marginBottom: '40px'
          }}
        >
          At Zylogenix, we serve as your partners, allowing you to focus on your business while we deliver the optimal Digital Solutions for your Business Growth. Our core expertise lies in providing tailored solutions.
        </Typography>

        <Button
          href="/contact"
          sx={{
            width: '156px',
            height: '45px',
            borderRadius: '10px',
            padding: '10px 13px 11px 9px',
            background: 'linear-gradient(180deg, #BE52CE 0%, #8D53DB 100%)',
            color: '#FFFFFF',
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: '14px',
            textTransform: 'uppercase',
            marginBottom: '80px',
            '&:hover': {
              background: 'linear-gradient(180deg, #8D53DB 0%, #BE52CE 100%)'
            }
          }}
        >
          Contact Us
        </Button>

        {/* Image Container with Background Shape */}
        <Box sx={{ position: 'relative', width: '100%', maxWidth: '940px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', mb: { xs: '40px', md: '80px' } }}>
          {/* Background Gradient Box */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              aspectRatio: '940 / 311', // Ensures proportional scaling across all devices
              borderRadius: { xs: '20px', sm: '40px', md: '75px' },
              background: 'linear-gradient(116.48deg, #BE52CE 22.81%, #602968 83.13%)',
              zIndex: 1
            }}
          />
          {/* Hand Together Image */}
          <Box
            component="img"
            src={HandTogetherImg}
            alt="Partnership"
            sx={{
              position: 'relative',
              zIndex: 2,
              width: { xs: '81.7%', md: '768px' }, // Maintains exact proportion (768/940 = 81.7%)
              height: 'auto',
              display: 'block' 
            }}
          />
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default About;
