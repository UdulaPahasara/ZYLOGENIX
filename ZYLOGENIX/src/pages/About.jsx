import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import AboutWhyCard from '../components/common/aboutWhycard';
import DocumentIcon from '../assets/About/document.webp';
import UsersIcon from '../assets/About/users.webp';
import RocketIcon from '../assets/About/rocket.webp';
import FolderIcon from '../assets/About/folder.webp';
import KeyIcon from '../assets/About/key.webp';
import Footer from '../components/footer/footer';
import VrBoxImg from '../assets/About/vrbox.webp';
import HandTogetherImg from '../assets/About/handtogather.webp';
import HeroBg from '../assets/About/hero.webp';
import HeroManImg from '../assets/About/heroMan.webp';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import OurMissionAndVision from '../components/common/ourMission&vision';

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
  const theme = useTheme();
  // Target strictly mobile phones (<600px). Tablets (sm/600px+) act as desktop.
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const scrollRef = useRef(null);
  const heroWrapperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showCards, setShowCards] = useState(false);

  const { scrollYProgress } = useScroll({
    target: heroWrapperRef,
    offset: ['start start', 'end end']
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    // Show cards when past 30% into the sticky zone, hide when back above
    if (latest > 0.3) {
      setShowCards(true);
    } else {
      setShowCards(false);
    }
  });

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
    <Box sx={{ width: '100%', overflow: 'clip' }}>
    {/* Hero Sticky Scroll Wrapper — allows scroll-jacking on desktop only */}
      <Box
        ref={heroWrapperRef}
        sx={{
          position: 'relative',
          height: isMobile ? 'auto' : { sm: '170vh', md: '180vh' },
        }}
      >
        {/* Hero Section — sticky on desktop, normal relative on mobile */}
        <Box
          sx={{
            position: isMobile ? 'relative' : 'sticky',
            top: 0,
            width: '100%',
            height: { xs: '420px', sm: '430px', md: '410px', lg: '560px' },
            backgroundColor: '#0a0a0a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            pt: { xs: '60px', md: '80px' }
          }}
        >
          {/* Matrix Background */}
          <Box
            component="img"
            src={HeroBg}
            alt="Matrix Background"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.6,
              zIndex: 0
            }}
          />

          {/* Huge Background Text */}
          <Box
            sx={{
              position: 'absolute',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              top: { xs: '50%', sm: '39%', md: '25%' },
              width: '100%',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 800,
                fontSize: { xs: '60px', sm: '100px', md: '160px', lg: '200px' },
                lineHeight: 1,
                color: 'rgba(255, 255, 255, 0.4)',
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: { xs: '2px', md: '5px' }
              }}
            >
              ABOUT
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 800,
                fontSize: { xs: '50px', sm: '70px', md: '110px', lg: '140px' },
                lineHeight: 1,
                color: 'rgba(255, 255, 255, 0.4)',
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: { xs: '2px', md: '5px' }
              }}
            >
              ZYLOGENIX
            </Typography>
          </Box>

          {/* Hero Character Image */}
          <Box
            component={motion.img}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            src={HeroManImg}
            alt="Zylogenix Hero"
            sx={{
              position: 'absolute',
              zIndex: 2,
              bottom: { xs: '-10px', sm: '-40px', md: '-50px' },
              width: { xs: '320px', sm: '450px', md: '600px', lg: '768px' },
              height: 'auto',
              objectFit: 'contain',
              pointerEvents: 'none'
            }}
          />

          {/* Mission and Vision — overlay on desktop/tablet only */}
          {!isMobile && (
            <Box
              sx={{
                position: 'absolute',
                zIndex: 10,
                bottom: { sm: '20px', md: '30px', lg: '40px' },
                width: '100%',
                px: { sm: 2, md: 4 }
              }}
            >
              <OurMissionAndVision showCards={showCards} />
            </Box>
          )}
        </Box>
      </Box>

      {/* Mission & Vision — separate section below hero on mobile only */}
      {isMobile && (
        <Box
          sx={{
            width: '100%',
            backgroundColor: '#0a0a0a',
            py: { xs: '40px', sm: '50px' },
            px: { xs: 2, sm: 3 },
            boxSizing: 'border-box',
          }}
        >
          <OurMissionAndVision showCards={true} />
        </Box>
      )}

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
        <Box sx={{ position: 'relative', width: '100%', maxWidth: '1440px', pt:"15px" }}>
          
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
              paddingLeft: { xs: 'calc(50vw - 140px)', sm: '0px', lg: '160px' },
              paddingRight: { xs: 'calc(50vw - 140px)', sm: '160px' }, 
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
                  scrollSnapAlign: { xs: 'center', md: 'start' },
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
            flexDirection: { xs: 'column', sm: 'row' }
          }}
        >
          <Box
            sx={{
              flex: { xs: '1 1 100%', sm: '1 1 55.5%' },
              width: { xs: '100%', sm: '55.5%' },
              height: { xs: 'auto', md: '639px' },
              backgroundColor: '#161616',
              padding: { xs: '60px 20px', sm: '40px 30px', md: '0 40px', lg: '0' },
              boxSizing: 'border-box',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            <Box sx={{ maxWidth: '424px', zIndex: 2, position: 'relative', left: { lg: '55px' } }}>
              {/* Top Quote */}
              <Typography
                sx={{
                  position: 'absolute',
                  top: '-20px',
                  left: { md: '-50px', lg: '-50px' },
                  fontFamily: 'Monda, sans-serif',
                  fontWeight: 400,
                  fontSize: { xs: '80px', sm: '110.4px' },
                  lineHeight: { xs: 1, sm: '110px' },
                  color: '#BE52CE',
                  display: { xs: 'none', md: 'block' }
                }}
              >
                “
              </Typography>

              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: { xs: '14px', sm: '15px', md: '16px' },
                  lineHeight: { xs: '22px', sm: '24px', md: '25px' },
                  color: '#FFFFFF',
                  textAlign: { xs: 'center', sm: 'justify' },
                  mb: '25px',
                  position: 'relative',
                  zIndex: 2
                }}
              >
                Zylogenix, a global Digital Solutions Company with a strong presence in Sri Lanka, specializes in Software Development. With our extensive experience in creating intelligent solutions, we take pride in our formidable team of highly skilled resources. Our mission is to create value for our clients by delivering effective and efficient solutions that harness the latest technologies, including PHP, Android, 10S, and more.
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: { xs: '14px', sm: '15px', md: '16px' },
                  lineHeight: { xs: '22px', sm: '24px', md: '25px' },
                  color: '#FFFFFF',
                  textAlign: { xs: 'center', sm: 'justify' },
                  position: 'relative',
                  zIndex: 2
                }}
              >
                Embracing a culture of open communication across the organization, Zylogenix ensures a seamless implementation process. We cater to clients of all sizes, from small SMEs to large corporations, offering the perfect solution regardless of your business scale.
              </Typography>

              {/* Bottom Quote */}
              <Typography
                sx={{
                  position: 'absolute',
                  bottom: '-65px',
                  right: { md: '-50px', lg: '-50px' },
                  fontFamily: 'Monda, sans-serif',
                  fontWeight: 400,
                  fontSize: { xs: '80px', sm: '110.4px' },
                  lineHeight: { xs: 1, sm: '110px' },
                  color: '#BE52CE',
                  transform: 'rotateY(180deg)',
                  display: { xs: 'none', md: 'block' }
                }}
              >
               “
              </Typography>
            </Box>
          </Box>

          {/* Right Side: Image Area with Animation */}
          <Box
            sx={{
              flex: { xs: '1 1 100%', sm: '1 1 44.5%' },
              width: { xs: '100%', sm: '44.5%' },
              height: { xs: '350px', sm: '639px' },
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
      className="white-section"
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
