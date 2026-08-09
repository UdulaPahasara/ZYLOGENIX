import React from 'react';
import { Box, Typography } from '@mui/material';
import Footer from '../components/footer/footer';
import IconCard from '../components/common/iconCard';
import FeatureCard from '../components/common/featureCard';
import InterestedCard from '../components/common/interestedCard';

// Assets
import HeroImg from '../assets/Content&SocialMedia/hero.webp';
import Vector1 from '../assets/Content&SocialMedia/vector 2.webp';
import Vector2 from '../assets/Content&SocialMedia/vector 4.webp';
import Vector3 from '../assets/Content&SocialMedia/vector 5.webp';
import Vector4 from '../assets/Content&SocialMedia/vector 6.webp';
import Vector5 from '../assets/Content&SocialMedia/vector 7.webp';
import Vector6 from '../assets/Content&SocialMedia/vector 8.webp';

import Section1 from '../assets/Content&SocialMedia/section1.webp';
import Section2 from '../assets/Content&SocialMedia/section2.webp';
import Section3 from '../assets/Content&SocialMedia/section3.webp';
import Section4 from '../assets/Content&SocialMedia/section4.webp';
import Section5 from '../assets/Content&SocialMedia/section5.webp';
import Section6 from '../assets/Content&SocialMedia/section6.webp';

const ContentSocialMedia = () => {
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      {/* ─── Hero Section ─── */}
      <Box
        sx={{
          width: '100%',
          height: { xs: '400px', md: '642px' },
          backgroundImage: `url(${HeroImg})`,
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
            fontSize: { xs: '40px', md: '75.72px' },
            lineHeight: { xs: 1.2, md: '89.4px' },
            color: '#FFFFFF',
            textAlign: 'center',
            textTransform: 'uppercase',
            mt: { xs: '80px', md: '0px' },
            maxWidth: '900px',
            whiteSpace: 'pre-line'
          }}
        >
          LOREM LIPSUM<br/>SOLO LORM
        </Typography>
      </Box>

      {/* ─── Icons Section (White Area) ─── */}
      <Box className="white-section" sx={{ width: '100%', backgroundColor: '#FFFFFF', py: { xs: '60px', md: '100px' } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', px: '20px', mb: '60px' }}>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 700,
              fontSize: '14px',
              color: '#BE52CE',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              mb: '10px'
            }}
          >
            CONTENT & SOCIAL MEDIA
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 800,
              fontSize: { xs: '28px', md: '40px' },
              color: '#000000',
              textAlign: 'center',
              textTransform: 'uppercase'
            }}
          >
            LOREM LIPSUM SOLO LORM
          </Typography>
        </Box>

        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' }, 
            justifyContent: 'center', 
            alignItems: 'center',
            gap: { xs: '40px', md: '60px' },
            flexWrap: 'wrap',
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          <IconCard icon={Vector1} title="Content Creation & Marketing" />
          <IconCard icon={Vector2} title="Social Media Management" />
          <IconCard icon={Vector3} title="Blog Management" />
          <IconCard icon={Vector4} title="YouTube Management" />
          <IconCard icon={Vector5} title="LinkedIn Profile Optimization" />
          <IconCard icon={Vector6} title="Video Production" />
        </Box>
      </Box>

      {/* ─── Feature Cards Section ─── */}
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        
        {/* Card 1 */}
        <FeatureCard 
          image={Section1}
          badgeText="Content Creation & Marketing"
          title={"Lorem Lipsum Solor\nLorem Lipsms"}
          description1="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut eu"
          description2="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur."
          bgColor="rgba(16, 8, 1, 1)"
          imagePosition="left"
        />

        {/* Card 2 */}
        <FeatureCard 
          className="white-section"
          image={Section2}
          badgeText="Social Media Management"
          title={"Lorem Lipsum Solor\nLorem Lipsms"}
          description1="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut eu"
          description2="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur."
          bgColor="#FFFFFF"
          textColor="#000000"
          imagePosition="right"
        />

        {/* Card 3 */}
        <FeatureCard 
          image={Section3}
          badgeText="Blog Management"
          title={"Lorem Lipsum Solor\nLorem Lipsms"}
          description1="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut eu"
          description2="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur."
          bgColor="#1E0B36"
          imagePosition="left"
        />

        {/* Card 4 */}
        <FeatureCard 
          className="white-section"
          image={Section4}
          badgeText="YouTube Management"
          title={"Lorem Lipsum Solor\nLorem Lipsms"}
          description1="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut eu"
          description2="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur."
          bgColor="#FFFFFF"
          textColor="#000000"
          imagePosition="right"
        />

        {/* Card 5 */}
        <FeatureCard 
          image={Section5}
          badgeText="LinkedIn Profile Optimization"
          title={"Lorem Lipsum Solor\nLorem Lipsms"}
          description1="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut eu"
          description2="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur."
          bgColor="#000000"
          imagePosition="left"
        />

        {/* Card 6 */}
        <FeatureCard 
          className="white-section"
          image={Section6}
          badgeText="Video Production"
          title={"Lorem Lipsum Solor\nLorem Lipsms"}
          description1="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut eu"
          description2="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur."
          bgColor="#FFFFFF"
          textColor="#000000"
          imagePosition="right"
        />

      </Box>

      {/* ─── Informational Grid Section (White Area) ─── */}
      <InterestedCard />

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default ContentSocialMedia;
