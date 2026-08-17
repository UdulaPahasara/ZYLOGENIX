import React from 'react';
import { Box, Typography } from '@mui/material';
import Footer from '../components/footer/footer';
import IconCard from '../components/common/iconCard';
import FeatureCard from '../components/common/featureCard';
import InterestedCard from '../components/common/interestedCard';

// Assets
import HeroImg from '../assets/Design&Branding/hero.webp';
import Vector1 from '../assets/Design&Branding/vector 1.webp';
import Vector2 from '../assets/Design&Branding/vector 2.webp';
import Vector3 from '../assets/Design&Branding/vector 3.webp';
import Img1 from '../assets/Design&Branding/img1.webp';
import Img2 from '../assets/Design&Branding/img2.webp';
import Img3 from '../assets/Design&Branding/img3.webp';

const DesignBranding = () => {
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
          DESIGN & <br/> BRANDING
        </Typography>
      </Box>

      {/* ─── Icons Section (White Area) ─── */}
      <Box className="white-section" sx={{ width: '100%', backgroundColor: '#FFFFFF', py: { xs: '60px', md: '100px' } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', px: '20px', mb: '60px' }}>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 700,
              fontSize:{xs:'11px',sm:'15px',md:'18px'},
              color: '#BE52CE',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              mb: '10px'
            }}
          >
            Designing Brands That Make an Impact
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
            Creative Solutions for Stronger Brands
          </Typography>
        </Box>

        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' }, 
            justifyContent: 'center', 
            alignItems: 'center',
            gap: { xs: '40px', md: '60px' },
            flexWrap: 'wrap'
          }}
        >
          <IconCard icon={Vector1} title="Custom Graphic Design" />
          <IconCard icon={Vector2} title="Branding & Identity" />
          <IconCard icon={Vector3} title="UI/UX Design" />
        </Box>
      </Box>

      {/* ─── Feature Cards Section ─── */}
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', }}>
        
        {/* Card 1: Black Background */}
        <FeatureCard 
          image={Img1}
          badgeText="Custom Graphic Design"
          title={"Visuals That Bring Your Brand to Life"}
          description1="We create custom graphics that communicate your message clearly and make your brand visually memorable. From marketing materials to digital content, our designs are tailored to your identity, audience, and business objectives."
          description2="Every visual element is crafted with consistency and purpose to help your brand stand out across digital platforms."
          bgColor="rgba(0, 0, 0, 1)"
          objectFitOverride='contain'
          imageScale={1}
          imagePosition="left"
          
          containerSx={{ minHeight: { xs: 'auto', sm: 'auto', md: '520px', lg: '639px' } }}
          imageContainerSx={{ 
            flex: { xs: '1 1 100%', sm: '1 1 50%', lg: '0 0 483px' }, 
            width: { xs: '100%', sm: '50%', lg: '483px' }, 
            height: { xs: 'auto', sm: 'auto', lg: '613px' },
            ml: { xs: '0px', lg: '105px' },
            mt: { xs: '0px',sm:'80px', lg: '26px' } 
          }}
        />

        {/* Card 2: White Background */}
        <FeatureCard 
          className='white-section'
          image={Img2}
          badgeText="Branding & Identity"
          title={"Build a Brand People Remember"}
          description1="We develop cohesive brand identities that communicate who you are and what your business represents. From visual direction and brand elements to consistent digital presentation, we help create a recognizable identity across every customer touchpoint."
          description2="Our approach combines creativity and strategy to build brands that communicate with confidence and consistency."
          bgColor="#FFFFFF"
          textColor="#000000"
          imageScale={1}
          imagePosition="right"
          objectFitOverride='contain'
          textContainerSx={{ pl: {xs:'13px' ,sm:'40px',lg: '180px' }}}
          imageContainerSx={{ 
            flex: { xs: '1 1 100%', sm: '1 1 50%', lg: '0 0 433px' }, 
            width: { xs: '100%', sm: '50%', lg: '433px' }, 
            height: { xs: 'auto', sm: 'auto', lg: '600px' }
          }}
          badgeSx={{ 
            width: { lg: '153px' }, 
            height: { lg: '24px' },
            padding: { lg: '0px' } 
          }}
          titleSx={{ 
            fontSize: { xs: '25px',sm:'30px',lg: '37.81px' }, 
            lineHeight: { lg: '34.79px' }, 
            maxWidth: { lg: '472px' }
          }}
          descriptionSx={{ 
            fontSize: { xs: '15px',sm:'15px',lg: '16px' }, 
            lineHeight: { lg: '25px' }, 
            maxWidth: { lg: '486px' }
          }}
        />

        {/* Card 3: Dark Brown Background */}
        <FeatureCard 
          image={Img3}
          badgeText="UI/UX Design"
          title={"Design Experiences People Enjoy"}
          description1="We design intuitive and engaging digital experiences that make it easier for users to navigate, interact, and connect with your products or services. Our UI/UX process focuses on usability, functionality, and visually compelling interfaces."
          description2="From user-focused layouts to polished interface designs, we create experiences that support both your users and business goals."
          bgColor="rgba(16, 8, 1, 1)"
          badgeBgColor='linear-gradient(90deg, rgba(206, 140, 82, 1) 0%,rgba(255, 89, 0, 1) 100%)'
          imagePosition="left"
          imageScale={1}
          objectFitOverride='cover'
          containerSx={{ minHeight: { xs: 'auto', sm: 'auto', md: '520px', lg: '639px' } }}

          imageContainerSx={{ 
            flex: { xs: '1 1 100%', sm: '1 1 50%', lg: '0 0 682px' }, 
            width: { xs: '100%', sm: '50%', lg: '682px' }, 
            height: { xs: 'auto', sm: 'auto', lg: '639px' },
            mt: { xs: '0px', lg: '0px' }, 
            mb: { xs: '0px', lg: '0px' }  
          }}
        />

      </Box>

      <InterestedCard 
        subtitle="OUR CREATIVE APPROACH"
        title="Designed With Purpose. Built Around Your Brand."
        description="Great design goes beyond appearance. We combine creativity, consistency, and user-focused thinking to create digital experiences that communicate your brand effectively and support meaningful business growth."
        boxData={[
          {
            title: "CUSTOMIZED APPROACH",
            description: "CUSTOMIZED APPROACH"
          },
          {
            title: "CONSISTENT BRANDING",
            description: "Create a unified visual identity across your digital and marketing touchpoints."
          },
          {
            title: "USER-CENTERED DESIGN",
            description: "Design intuitive experiences that make your products easier and more enjoyable to use."
          }
        ]}
        interestedTitle="Interested ?"
        interestedDescription="Let’s create a distinctive digital presence that reflects your brand and connects with your audience."
      />

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default DesignBranding;
