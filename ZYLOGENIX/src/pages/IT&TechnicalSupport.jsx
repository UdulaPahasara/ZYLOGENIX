import React from 'react';
import { Box, Typography } from '@mui/material';
import Footer from '../components/footer/footer';
import IconCard from '../components/common/iconCard';
import FeatureCard from '../components/common/featureCard';
import InterestedCard from '../components/common/interestedCard';

// Assets
import HeroImg from '../assets/It&Technical/hero.webp';
import Vector1 from '../assets/It&Technical/vector 5.webp';
import Vector2 from '../assets/It&Technical/vector 6.webp';
import Vector3 from '../assets/It&Technical/vector 7.webp';
import Vector4 from '../assets/It&Technical/vector 8.webp';
import Vector5 from '../assets/It&Technical/vector 9.webp';
import Vector6 from '../assets/It&Technical/vector 10.webp';
import Vector7 from '../assets/It&Technical/vector 11.webp';

import Img1 from '../assets/It&Technical/img1.webp';
import Img2 from '../assets/It&Technical/img2.webp';
import Img3 from '../assets/It&Technical/img3.webp';
import Img4 from '../assets/It&Technical/img4.webp';
import Img5 from '../assets/It&Technical/img5.webp';
import Img6 from '../assets/It&Technical/img6.webp';
import Img7 from '../assets/It&Technical/img7.webp';

const ITTechnicalSupport = () => {
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
            IT & TECHNICAL SUPPORT
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
          <IconCard icon={Vector1} title="Server Management & Security" />
          <IconCard icon={Vector2} title="Domain Management" />
          <IconCard icon={Vector3} title="Payment Gateway Integration" />
          <IconCard icon={Vector4} title="QA & Testing" />
          <IconCard icon={Vector5} title="Virtual Tech Support" />
          <IconCard icon={Vector6} title="WhatsApp Business Integration" />
          <IconCard icon={Vector7} title="IT Outsourcing" />
        </Box>
      </Box>

      {/* ─── Feature Cards Section ─── */}
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        
        {/* Card 1 */}
        <FeatureCard 
          image={Img1}
          objectFitOverride="contain"
          imageScale={0.97}
          badgeText="Server Management & Security"
          title={"Lorem Lipsum Solor\nLorem Lipsms"}
          description1="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut eu"
          description2="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur."
          bgColor="#050000"
          imagePosition="left"
          
        />

        {/* Card 2 */}
        <FeatureCard 
          className="white-section"
          image={Img2}
          badgeText="Domain Management"
          title={"Lorem Lipsum Solor\nLorem Lipsms"}
          description1="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut eu"
          description2="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur."
          bgColor="#FFFFFF"
          textColor="#000000"
          imagePosition="right"
        />

        {/* Card 3 */}
        <FeatureCard 
          image={Img3}
          objectFitOverride="contain"
          imageScale={0.95}
          badgeText="Payment Gateway Integration"
          title={"Lorem Lipsum Solor\nLorem Lipsms"}
          description1="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut eu"
          description2="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur."
          bgColor="#03060B"
          imagePosition="left"
        />

        {/* Card 4 */}
        <FeatureCard 
          className="white-section"
          image={Img4}
          objectFitOverride="contain"
          badgeText="QA & Testing"
          title={"Lorem Lipsum Solor\nLorem Lipsms"}
          description1="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut eu"
          description2="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur."
          bgColor="#FFFFFF"
          textColor="#000000"
          imagePosition="right"
        />

        {/* Card 5 */}
        <FeatureCard 
          image={Img5}
          objectFitOverride="contain"
          badgeText="Virtual Tech Support"
          title={"Lorem Lipsum Solor\nLorem Lipsms"}
          description1="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut eu"
          description2="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur."
          bgColor="#000000"
          imagePosition="left"
        />

        {/* Card 6 */}
        <FeatureCard 
          className="white-section"
          image={Img6}
          badgeText="WhatsApp Business Integration"
          title={"Lorem Lipsum Solor\nLorem Lipsms"}
          description1="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut eu"
          description2="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur."
          bgColor="#FFFFFF"
          textColor="#000000"
          imagePosition="right"
        />

        {/* Card 7 */}
        <FeatureCard 
          image={Img7}
          objectFitOverride="contain"
          badgeText="IT Outsourcing"
          title={"Lorem Lipsum Solor\nLorem Lipsms"}
          description1="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut eu"
          description2="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur."
          bgColor="#01000C"
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

export default ITTechnicalSupport;
