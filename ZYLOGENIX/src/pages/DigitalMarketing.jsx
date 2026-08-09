import React from 'react';
import { Box, Typography } from '@mui/material';
import Footer from '../components/footer/footer';
import IconCard from '../components/common/iconCard';
import FeatureCard from '../components/common/featureCard';
import InterestedCard from '../components/common/interestedCard';

// Assets
import HeroImg from '../assets/Digital Marketing/hero.webp';
import Vector1 from '../assets/Digital Marketing/vector 1.webp';
import Vector2 from '../assets/Digital Marketing/vector 2.webp';
import Vector3 from '../assets/Digital Marketing/vector 3.webp';
import Vector4 from '../assets/Digital Marketing/vector 4.webp';
import Vector5 from '../assets/Digital Marketing/vector 5.webp';

import Section1 from '../assets/Digital Marketing/SEO&GoogleIndexing.webp';
import Section2 from '../assets/Digital Marketing/Online advertising.webp';
import Section3 from '../assets/Digital Marketing/Email marketing.webp';
import Section4 from '../assets/Digital Marketing/googleAdd.webp';
import Section5 from '../assets/Digital Marketing/DigitalDirectoryListings.webp';

const DigitalMarketing = () => {
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
            DIGITAL MARKETING
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
            flexWrap: 'wrap',
            justifyContent: 'center', 
            alignItems: 'center',
            gap: { xs: '40px', md: '40px 60px' },
            maxWidth: '800px',
            margin: '0 auto'
          }}
        >
          <IconCard icon={Vector1} title="SEO & Google Indexing" />
          <IconCard icon={Vector2} title="Online Advertising" />
          <IconCard icon={Vector3} title="Email Marketing" />
          <IconCard icon={Vector4} title="Google Services (Analytics, Ads)" />
          <IconCard icon={Vector5} title="Digital Directory Listings" />
        </Box>
      </Box>

      {/* ─── Feature Cards Section ─── */}
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        
        {/* Card 1 */}
        <FeatureCard 
          disableBottomMargin={true}
          image={Section1}
          badgeText="SEO & Google Indexing"
          title={"Lorem Lipsum Solor\nLorem Lipsms"}
          description1="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut eu"
          description2="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur."
          bgColor="#0A1D1C"
          imagePosition="left"
        />

        {/* Card 2 */}
        <FeatureCard 
          disableBottomMargin={true}
          className="white-section"
          image={Section2}
          badgeText="Online Advertising"
          title={"Lorem Lipsum Solor\nLorem Lipsms"}
          description1="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut eu"
          description2="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur."
          bgColor="#FFFFFF"
          textColor="#000000"
          imagePosition="right"
        />

        {/* Card 3 */}
        <FeatureCard 
          disableBottomMargin={true}
          image={Section3}
          badgeText="Email Marketing"
          title={"Lorem Lipsum Solor\nLorem Lipsms"}
          description1="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut eu"
          description2="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur."
          bgColor="#0B0813"
          imagePosition="left"
        />

        {/* Card 4 */}
        <FeatureCard 
          disableBottomMargin={true}
          className="white-section"
          image={Section4}
          imageScale={1.35}
          badgeText="Google Services (Analytics, Ads)"
          title={"Lorem Lipsum Solor\nLorem Lipsms"}
          description1="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut eu"
          description2="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur."
          bgColor="#FFFFFF"
          textColor="#000000"
          imagePosition="right"
        />

        {/* Card 5 */}
        <FeatureCard 
          disableBottomMargin={true}
          image={Section5}
          badgeText="Digital Directory Listings"
          title={"Lorem Lipsum Solor\nLorem Lipsms"}
          description1="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut eu"
          description2="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur."
          bgColor="#0B0314"
          imagePosition="left"
        />

      </Box>

      {/* ─── Informational Grid Section (White Area) ─── */}
      <InterestedCard />

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default DigitalMarketing;
