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
          badgeText="Server Management & Security"
          title={"Lorem Lipsum Solor\nLorem Lipsms"}
          description1="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut eu"
          description2="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur."
          bgColor="#050000"
          imagePosition="left"
          imageScale={1}
          objectFitOverride="contain"
          containerSx={{ minHeight: { xs: 'auto', sm: 'auto', md: '520px', lg: '639px' } }}
          imageContainerSx={{ 
            flex: { xs: '1 1 100%', sm: '1 1 50%', lg: '0 0 390px' }, 
            width: { xs: '100%', sm: '50%', lg: '390px' }, 
            height: { xs: 'auto', sm: 'auto', lg: '584px' },
            ml: { xs: '0px', lg: '160px' },
            mt: { xs: '-70px',sm:'10px',md:'0px', lg: '55px' },
            mb:{xs:'-70px',sm:'-118px',md:'-110px'}
          }}
          imageSx={{ transform: { xs: 'scale(0.75)',sm: 'scale(0.75)', md: 'scale(0.7)', lg: 'scale(1)' } }}
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
          imageScale={1}
          objectFitOverride="contain"
          containerSx={{ minHeight: { xs: 'auto', sm: 'auto', md: '520px', lg: '639px' } }}
          textContainerSx={{ pl: {sm:'20px', lg: '180px' } }}
          imageContainerSx={{ 
            flex: { xs: '1 1 100%', sm: '1 1 50%', lg: '0 0 574px' }, 
            width: { xs: '100%', sm: '50%', lg: '574px' }, 
            height: { xs: 'auto', sm: 'auto', lg: '430px' },
            mt: { xs: '-40px', lg: '110px' },
            mr: { xs: '0px', lg: '10px' },
            mb:{xs:'10px'}
          }}
          imageSx={{ transform: { xs: 'scale(0.85)'}}}
        />

        {/* Card 3 */}
        <FeatureCard 
          image={Img3}
          badgeText="Payment Gateway Integration"
          title={"Lorem Lipsum Solor\nLorem Lipsms"}
          description1="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut eu"
          description2="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur."
          bgColor="rgba(0, 0, 0, 1)"
          imagePosition="left"
          imageScale={1}
          objectFitOverride="contain"
          containerSx={{ minHeight: { xs: 'auto', sm: 'auto', md: '520px', lg: '639px' } }}
          imageContainerSx={{ 
            flex: { xs: '1 1 100%', sm: '1 1 50%', lg: '0 0 430px' }, 
            width: { xs: '100%', sm: '50%', lg: '430px' }, 
            height: { xs: 'auto', sm: 'auto', lg: '585px' },
            ml: { xs: '0px', lg: '128px' },
            mt: { xs: '-60px',sm:'44px', lg: '54px' },
            mb:{xs:'-62px',sm:'-110px'}
          }}
          imageSx={{ transform: { xs: 'scale(0.75)',sm: 'scale(0.8)', md: 'scale(0.75)', lg: 'scale(1)' } }}
        />

        {/* Card 4 */}
        <FeatureCard 
          className="white-section"
          image={Img4}
          badgeText="QA & Testing"
          title={"Lorem Lipsum Solor\nLorem Lipsms"}
          description1="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut eu"
          description2="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur."
          bgColor="#FFFFFF"
          textColor="#000000"
          imagePosition="right"
          imageScale={1}
          objectFitOverride="contain"
          containerSx={{ minHeight: { xs: 'auto', sm: 'auto', md: '520px', lg: '639px' } }}
          textContainerSx={{ pl: { sm:'20px',lg: '180px' } }}
          imageContainerSx={{ 
            flex: { xs: '1 1 100%', sm: '1 1 50%', lg: '0 0 405px' }, 
            width: { xs: '100%', sm: '50%', lg: '405px' }, 
            height: { xs: 'auto', sm: 'auto', lg: '561px' },
            mt: { xs: '-70px', lg: '76px' },
            mr: { xs: '0px', lg: '105px' },
            mb:{xs:'-70px',sm:'-205px',md:'-85px'}
          }}
          imageSx={{ transform: { xs: 'scale(0.75)',sm: 'scale(0.8)', md: 'scale(0.75)', lg: 'scale(1)' } }}
        />

        {/* Card 5 */}
        <FeatureCard 
          image={Img5}
          badgeText="Virtual Tech Support"
          title={"Lorem Lipsum Solor\nLorem Lipsms"}
          description1="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut eu"
          description2="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur."
          bgColor="#000000"
          imagePosition="left"
          containerSx={{ minHeight: { xs: 'auto', sm: 'auto', md: '520px', lg: '639px' } }}
          imageContainerSx={{ 
            flex: { xs: '1 1 100%', sm: '1 1 50%', lg: '0 0 472px' }, 
            width: { xs: '100%', sm: '50%', lg: '472px' }, 
            height: { xs: 'auto', sm: 'auto', lg: '574px' },
            ml: { xs: '0px', lg: '125px' },
            mt: { xs: '0px', md: '30px', lg: '67px' },
            mb: { xs: '0px', md: '-74px',sm:'-40px' }
          }}
          imageSx={{ transform: { xs: 'scale(1)', sm: 'scale(0.85)', md: 'scale(0.75)', lg: 'scale(1)' } }}
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
          imageScale={1}
          objectFitOverride="contain"
          
          containerSx={{ minHeight: { xs: 'auto', sm: 'auto', md: '520px', lg: '639px' } }}
          textContainerSx={{ pl: { sm:'20px',lg: '180px' } }}
          imageContainerSx={{ 
            flex: { xs: '1 1 100%', sm: '1 1 50%', lg: '0 0 383px' }, 
            width: { xs: '100%', sm: '50%', lg: '383px' }, 
            height: { xs: 'auto', sm: 'auto', lg: '574px' },
            mt: { xs: '-60px',sm:'-60px', lg: '40px' },
            mr: { xs: '0px', lg: '105px' },
            mb:{xs:'-30px',sm:'-150px',md:'-90px'}

          }}
          imageSx={{ transform: { xs: 'scale(0.8)',sm: 'scale(0.75)', md: 'scale(0.75)', lg: 'scale(1)' } }}
        />

        {/* Card 7 */}
        <FeatureCard 
          image={Img7}
          badgeText="IT Outsourcing"
          title={"Lorem Lipsum Solor\nLorem Lipsms"}
          description1="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut eu"
          description2="Lorem ipsum dolor sit amet consectetur. Ipsum vel dolor ut euLorem ipsum dolor sit amet consectetur."
          bgColor="rgba(0, 0, 0, 1)"
          imagePosition="left"
          imageScale={1}
          objectFitOverride="contain"
          containerSx={{ minHeight: { xs: 'auto', sm: 'auto', md: '520px', lg: '639px' } }}
          imageContainerSx={{ 
            flex: { xs: '1 1 100%', sm: '1 1 50%', lg: '0 0 597px' }, 
            width: { xs: '100%', sm: '50%', lg: '597px' }, 
            height: { xs: 'auto', sm: 'auto', lg: '585px' },
            ml: { xs: '0px', lg: '-7px' },
            mt: { xs: '0px', md: '50px', lg: '55px' },
            mb:{sm:'-70px'}
          }}
          imageSx={{ transform: { xs: 'scale(1)', sm: 'scale(1.3)', md: 'scale(0.999)', lg: 'scale(1)' } }}
        
        />

      </Box>

      {/* ─── Informational Grid Section (White Area) ─── */}
      <InterestedCard 
        subtitle="IT & TECHNICAL SUPPORT"
        title="Reliable Tech Solutions"
        description="Our dedicated IT support team provides comprehensive technical solutions to ensure your business operations run smoothly and securely."
        boxData={[
          {
            title: "24/7 Support",
            description: "Providing round-the-clock technical assistance to resolve issues promptly and minimize downtime for your business."
          },
          {
            title: "Infrastructure Management",
            description: "Managing and optimizing your IT infrastructure to ensure high performance, scalability, and seamless operations."
          },
          {
            title: "Cybersecurity",
            description: "Implementing robust security measures and protocols to protect your sensitive data and digital assets from threats."
          }
        ]}
        interestedTitle="Need IT Assistance?"
        interestedDescription="Contact our support team today for reliable and efficient IT solutions tailored to your business needs."
      />

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default ITTechnicalSupport;
