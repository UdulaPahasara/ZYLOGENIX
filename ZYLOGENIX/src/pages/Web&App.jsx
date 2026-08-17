import React from 'react';
import { Box, Typography } from '@mui/material';
import Footer from '../components/footer/footer';
import IconCard from '../components/common/iconCard';
import FeatureCard from '../components/common/featureCard';
import InterestedCard from '../components/common/interestedCard';

// Assets
import HeroImg from '../assets/Web&App/hero.webp';
import Vector1 from '../assets/Web&App/vector 5.webp';
import Vector2 from '../assets/Web&App/vector 6.webp';
import Vector3 from '../assets/Web&App/vector 7.webp';
import Vector4 from '../assets/Web&App/vector 8.webp';
import Vector5 from '../assets/Web&App/vector 9.webp';

import Img1 from '../assets/Web&App/img1.webp';
import Img2 from '../assets/Web&App/img2.webp';
import Img3 from '../assets/Web&App/img3.webp';
import Img4 from '../assets/Web&App/img4.webp';
import Img5 from '../assets/Web&App/img5.webp';

const WebApp = () => {
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
            fontSize: { xs: '32px', sm: '42px', md: '75.72px' },
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
              fontSize: {xs:'11px',sm:'15px',md:'14px'},
              color: '#BE52CE',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              mb: '10px'
            }}
          >
            WEB & APP DEVELOPMENT
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 800,
              fontSize: { xs: '23px', sm: '28px', md: '40px' },
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
          <IconCard icon={Vector1} title="Web Design & Development" />
          <IconCard icon={Vector2} title="Website Redesign & Maintenance" />
          <IconCard icon={Vector3} title="E-Commerce Development" />
          <IconCard icon={Vector4} title="Mobile App Development" />
          <IconCard icon={Vector5} title="Custom Software Development" />
        </Box>
      </Box>

      {/* ─── Feature Cards Section ─── */}
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        
        {/* Card 1 */}
        <FeatureCard 
          image={Img1}
          badgeText="Web Design & Development"
          title={"Lorem Lipsum Solor\nLorem Lipsms"}
          description1="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut eu"
          description2="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur."
          bgColor="rgba(0, 0, 0, 1)"
          imagePosition="left"
          imageScale={1}
          objectFitOverride='cover'
          containerSx={{ minHeight: { xs: 'auto', sm: 'auto', md: '520px', lg: '639px' } }}
          imageContainerSx={{ 
            flex: { xs: '1 1 100%', sm: '1 1 50%', lg: '0 0 580px' }, 
            width: { xs: '100%', sm: '50%', lg: '580px' }, 
            height: { xs: 'auto', sm: 'auto', lg: '639px' },
            ml: { xs: '0px', lg: '45px' },
            mt: { xs: '0px', lg: '0px' } 
          }}
          imageSx={{ transform: { xs: 'scale(1)', sm: 'scale(0.85)', md: 'scale(0.85)', lg: 'scale(1)' } }}
        />

        {/* Card 2 */}
        <FeatureCard 
          className="white-section"
          image={Img2}
          badgeText="Website Redesign & Maintenance"
          title={"Lorem Lipsum Solor\nLorem Lipsms"}
          description1="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut eu"
          description2="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur."
          bgColor="#FFFFFF"
          textColor="#000000"
          imagePosition="right"
          imageScale={1}
          objectFitOverride='contain'
          imageContainerSx={{ 
            flex: { xs: '1 1 100%', sm: '1 1 50%', lg: '0 0 487px' }, 
            width: { xs: '100%', sm: '50%', lg: '487px' }, 
            height: { xs: 'auto', sm: 'auto', lg: '614px' },
            mb:{xs:'-28px',sm:'-120px',md:'-150px',lg:'-24px'}
          }}
          textContainerSx={{ pl: { sm: '20px',md:'60px', lg: '180px' } }}
          badgeSx={{ 
            width: { lg: '153px' }, 
            height: { lg: '24px' },
            padding: { lg: '0px' } 
          }}
          titleSx={{ 
            fontSize: { lg: '37.81px' }, 
            lineHeight: { lg: '34.79px' }, 
            maxWidth: { lg: '472px' }
          }}
          descriptionSx={{ 
            fontSize: { lg: '16px' }, 
            lineHeight: { lg: '25px' }, 
            maxWidth: { lg: '486px' }
          }}
          imageSx={{ transform: { xs: 'scale(0.85)', sm: 'scale(0.9)', md: 'scale(0.75)', lg: 'scale(1)' } }}
        />

        {/* Card 3 */}
        <FeatureCard 
          image={Img3}
          badgeText="E-Commerce Development"
          title={"Lorem Lipsum Solor\nLorem Lipsms"}
          description1="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut eu"
          description2="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur."
          bgColor="#0B1117"
          imagePosition="left"
          imageScale={1}
          objectFitOverride='contain'
          containerSx={{ minHeight: { xs: 'auto', sm: 'auto', md: '520px', lg: '639px' } }}
          imageContainerSx={{ 
            flex: { xs: '1 1 100%', sm: '1 1 50%', lg: '0 0 391px' }, 
            width: { xs: '100%', sm: '50%', lg: '391px' }, 
            height: { xs: 'auto', sm: 'auto', lg: '557px' },
            ml: { xs: '0px', lg: '148px' },
            mt: { xs: '-70px', lg: '84px' },
            mb:{xs:'-68px',sm:'-100px',md:'-100px',lg:'-10px'}
          }}
          imageSx={{ transform: { xs: 'scale(0.7)', sm: 'scale(0.85)', md: 'scale(0.75)', lg: 'scale(1)' } }}
        />

        {/* Card 4 */}
        <FeatureCard 
          className="white-section"
          image={Img4}
          badgeText="Mobile App Development"
          title={"Lorem Lipsum Solor\nLorem Lipsms"}
          description1="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut eu"
          description2="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur."
          bgColor="rgba(232, 232, 232, 1)"
          textColor="#000000"
          imagePosition="right"
          imageScale={1}
          objectFitOverride='cover'
          containerSx={{ minHeight: { xs: 'auto', sm: 'auto', md: '520px', lg: '633px' } }}
          imageContainerSx={{ 
            flex: { xs: '1 1 100%', sm: '1 1 50%', lg: '0 0 537px' }, 
            width: { xs: '100%', sm: '50%', lg: '537px' }, 
            height: { xs: 'auto', sm: 'auto', lg: '634px' },
            mr:{xs:'-48px',sm:'-35px',md:'-150px',lg:'-10px'},
            mb:{xs:'-28px',sm:'-60px',md:'-100px',lg:'-10px'},
            mt:{xs:'-40px'}
          }}
          textContainerSx={{ pl: { sm: '30px', lg: '180px' } }}
          imageSx={{ transform: { xs: 'scale(0.85)', sm: 'scale(0.8)', md: 'scale(0.75)', lg: 'scale(1)' } }}
        />

        {/* Card 5 */}
        <FeatureCard 
          image={Img5}
          badgeText="Custom Software Development"
          title={"Lorem Lipsum Solor\nLorem Lipsms"}
          description1="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut eu"
          description2="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur."
          bgColor="#0D1614"
          imagePosition="left"
          imageScale={1}
          objectFitOverride='cover'
          containerSx={{ minHeight: { xs: 'auto', sm: 'auto', md: '520px', lg: '639px' } }}
          imageContainerSx={{ 
            flex: { xs: '1 1 100%', sm: '1 1 50%', lg: '0 0 590px' }, 
            width: { xs: '100%', sm: '50%', lg: '590px' }, 
            height: { xs: 'auto', sm: 'auto', lg: '638px' }
          }}
          imageSx={{ transform: { xs: 'scale(1)', sm: 'scale(0.999)', md: 'scale(0.999)', lg: 'scale(1)' } }}
        />

      </Box>

      {/* ─── Informational Grid Section (White Area) ─── */}
      <InterestedCard 
        subtitle="WEB & APP DEVELOPMENT"
        title="Ready to Build Your Digital Presence?"
        description="Our expert team creates stunning, responsive, and high-performance websites and applications tailored to your business needs."
        boxData={[
          {
            title: "Custom Solutions",
            description: "We build tailored web and mobile applications designed to meet your specific business requirements and goals."
          },
          {
            title: "Responsive Design",
            description: "Ensuring your website looks and functions perfectly across all devices, from desktops to smartphones."
          },
          {
            title: "Scalable Architecture",
            description: "Developing robust and scalable architectures that can grow seamlessly alongside your expanding business."
          }
        ]}
        interestedTitle="Let's Get Started"
        interestedDescription="Contact us today to discuss your web and app development needs and take your business to the next level."
      />

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default WebApp;
