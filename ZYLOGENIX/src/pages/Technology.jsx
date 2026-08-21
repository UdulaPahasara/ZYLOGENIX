import React from 'react';
import SEO from '../components/common/SEO';
import { Box, Typography } from '@mui/material';
import Footer from '../components/footer/footer';
import TecCard from '../components/common/tecCard';

// Hero Image
import TecHeroImg from '../assets/Technology/tecHero.webp';

// Tech stack icons
import Icon1 from '../assets/Technology/Rectangle 39999.webp';
import Icon2 from '../assets/Technology/Rectangle 40000.webp';
import Icon3 from '../assets/Technology/Rectangle 40001.webp';
import Icon4 from '../assets/Technology/Rectangle 40002.webp';
import Icon5 from '../assets/Technology/Rectangle 40003.webp';
import Icon6 from '../assets/Technology/Rectangle 40004.webp';
import Icon7 from '../assets/Technology/Rectangle 40005.webp';
import Icon8 from '../assets/Technology/Rectangle 40006.webp';
import Icon9 from '../assets/Technology/Rectangle 40007.webp';

// Card Images
import AiImg from '../assets/Technology/Ai.webp';
import WebImg from '../assets/Technology/web.webp';
import MobileImg from '../assets/Technology/mobile.webp';
import EcommerceImg from '../assets/Technology/e-commerce.webp';

const techIcons = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8, Icon9];

const Technology = () => {
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <SEO 
        title="Our Technology Stack | Zylogenix"
        description="Explore the modern technologies and practical digital expertise Zylogenix uses to power your digital growth."
        url="https://zylogenix.com/technology"
      />
      {/* ─── Hero Section ─── */}
      <Box
        sx={{
          width: '100%',
          height: { xs: '400px', md: '642px' },
          backgroundImage: `url(${TecHeroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 800,
            fontSize: { xs: '32px', sm: '42px', md: '75.72px' },
            lineHeight: { xs: 1.2, md: '89.4px' },
            color: '#FFFFFF',
            textAlign: 'center',
            textTransform: 'uppercase',
            mt: { xs: '80px', md: '0px' } // Accounts for navbar on mobile
          }}
        >
          Technology
        </Typography>
      </Box>

      {/* ─── Main White Section ─── */}
      <Box className="white-section" sx={{ width: '100%', backgroundColor: '#F3F3F3', pb: '100px' }}>
        
        {/* Tech Stack Marquee */}
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            pt: { xs: '50px', md: '100px' },
            mb: '40px',
            overflow: 'hidden'
          }}
        >
          <Box
            sx={{
              maxWidth: '764px',
              width: '100%',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: '40px',
                animation: 'scroll 15s linear infinite',
                '@keyframes scroll': {
                  '0%': { transform: 'translateX(0)' },
                  '100%': { transform: 'translateX(calc(-50% - 20px))' } // -50% of the total width minus half the gap
                },
                width: 'max-content'
              }}
            >
              {[...techIcons, ...techIcons].map((icon, i) => (
                <Box
                  key={i}
                  component="img"
                  src={icon}
                  alt={`Tech icon ${i}`}
                  sx={{
                    width: '49px',
                    height: '49px',
                    objectFit: 'contain'
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>

        {/* Section Heading */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', px: '20px', mb: '80px' }}>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 800,
              fontSize: { xs: '22px', sm: '28px', md: '55.51px' },
              lineHeight: { xs: 1.3, md: '66.61px' },
              textAlign: 'center',
              textTransform: 'capitalize',
              background: 'linear-gradient(90deg, #F6B0FE 0%, #BE52CE 36.97%, #8D53DB 82.38%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              maxWidth: { xs: '320px', sm: '600px', md: '1000px' },
              mb: '20px'
            }}
          >
            Technology That Powers<br/>Your Digital Growth
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: {xs:'14px',sm:'15px',md:'16px'},
              lineHeight: '25px',
              textAlign: 'center',
              color: '#333333',
              maxWidth: '735px'
            }}
          >
            From intelligent AI solutions to web, mobile, e-commerce, and enterprise development, Zylogenix combines modern technologies with practical digital expertise to create solutions tailored to your business needs.
          </Typography>
        </Box>

        {/* ─── Technology Cards Container ─── */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: { xs: '30px', md: '60px' },
            width: '100%',
            boxSizing: 'border-box',
            px: { xs: '16px', sm: '24px', md: '40px' },
            mt:{xs:-7}
          }}
        >
          <TecCard 
            image={AiImg}
            badgeText="NEXT-GEN AI"
            title="AI Solutions"
            description="Harness The Power Of Next-Generation AI To Enhance Efficiency, Optimize Marketing, And Create Personalized Customer Experiences For Your Business. Our AI Solutions Help Streamline Processes, Support Smarter Decision-Making, And Deliver Intelligent Digital Experiences Tailored To Your Business Goals."
            bgColor="#161616"
            imageScale={0.87}
            imageContainerSx={{mb:{xs:-4,sm:-8,lg:-4},mt:{xs:-6}}}
            imagePosition="right"
          />
          <TecCard 
            image={WebImg}
            badgeText="WEB DEVELOPMENT"
            title="Web Platform Development"
            description="We Design And Develop Tailored Websites And Digital Platforms That Combine Functionality, Usability, And Engaging Experiences To Meet Your Unique Business Needs. From Concept To Launch, We Build Scalable Solutions That Strengthen Your Online Presence, Engage Your Users, And Support Long-Term Digital Growth."
            bgColor="#13012a"
            imageScale={0.87}
            imageContainerSx={{mb:{xs:-4,sm:-7,lg:-4},mt:{xs:-4}}}
            imagePosition="left"
          />
          <TecCard 
            image={MobileImg}
            badgeText="MOBILE DEVELOPMENT"
            title="Mobile Applications"
            description="Build User-Friendly And Feature-Rich Mobile Applications Tailored To Your Requirements, With Development Across IOS, Android, And Other Supported Platforms. We Create Intuitive, Reliable, And Scalable Mobile Solutions That Deliver Seamless User Experiences, Support Business Operations, And Help You Connect With Your Customers Wherever They Are."
            bgColor="#011531"
             
             imageContainerSx={{mb:{xs:-4,sm:-6,lg:-6},mt:{xs:-6},mt:{xs:'-10px'}}}
            imagePosition="right"
          />
          <TecCard 
            image={EcommerceImg}
            badgeText="E-COMMERCE DEVELOPMENT"
            title="e-Commerce Development"
            description="Create Secure, User-Friendly E-Commerce Platforms That Improve The Online Shopping Experience, Strengthen Customer Engagement, And Support Business Growth. We Develop Tailored Solutions With Seamless Functionality, Secure Payment Integrations, And Intuitive Experiences That Help Businesses Manage Online Sales And Build Lasting Customer Relationships."
            bgColor="#330101"
            imageScale={0.87}
            imageContainerSx={{mb:{xs:-5,sm:-11,lg:-7.3},mt:{xs:-6}}}
            imagePosition="left"
          />
        </Box>

      </Box>

      <Footer />
    </Box>
  );
};

export default Technology;
