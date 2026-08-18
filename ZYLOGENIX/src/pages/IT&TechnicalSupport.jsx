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
          IT & TECHNICAL<br/>SUPPORT
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
              textAlign: 'center',
              mb: '10px'
            }}
          >
            TECHNOLOGY SUPPORT YOU CAN RELY ON
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 800,
              fontSize: { xs: '22px', sm: '28px', md: '40px' },
              lineHeight: 1.3,
              color: '#000000',
              textAlign: 'center',
              textTransform: 'uppercase',
              maxWidth: { xs: '320px', sm: '100%' }
            }}
          >
            Reliable Technology. Secure Digital Operations.
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
          title={"Keep Your Digital\nInfrastructure Secure"}
          description1="We Provide Robust Server Management And Security Services Designed To Maintain The Efficiency And Reliability Of Your Digital Infrastructure While Protecting The Integrity And Confidentiality Of Your Online Presence."
          description2="Our Security-Focused Approach Helps Safeguard Digital Assets Against Evolving Threats And Provides Businesses With Greater Confidence In Their Technology Environment."
          bgColor="#050000"
          imagePosition="left"
          badgeBgColor='linear-gradient(90deg, rgba(83, 115, 219, 1) 0%,rgba(0, 4, 255, 1) 100%)'
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
          title={"Protect Your Online\nIdentity"}
          description1="We Simplify Domain Management To Help Keep Your Digital Identity Secure And Aligned With Your Brand. Our Solutions Provide Reliable Management Of Your Online Presence While Supporting A Consistent Digital Identity."
          description2="From Maintaining Your Domain Presence To Keeping It Aligned With Your Brand, We Help Ensure Your Digital Footprint Remains Organized And Secure."
          bgColor="#FFFFFF"
          textColor="#000000"
          imagePosition="right"
          imageScale={1}
          
          objectFitOverride="contain"
          containerSx={{ minHeight: { xs: 'auto', sm: 'auto', md: '520px', lg: '639px' } }}
           textContainerSx={{ pl: { xs: '20px',sm: '20px',md:'60px', lg: '180px' } }}
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
          title={"Make Digital\nTransactions Simple &\nSecure"}
          description1="We Seamlessly Integrate Secure Payment Options Into Your Digital Platforms To Enhance User Experience And Streamline Transactions. Our Solutions Focus On Providing Customers With A Smooth And Efficient Payment Process."
          description2="With Security And Reliability At The Core, We Help Businesses Create A More Convenient Transaction Experience For Their Customers."
          bgColor="rgba(0, 0, 0, 1)"
          imagePosition="left"
          imageScale={1}
          badgeBgColor='linear-gradient(90deg, rgba(206, 140, 82, 1) 0%,rgba(255, 89, 0, 1) 100%)'
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
          title={"Quality Built Into Every\nDigital Solution"}
          description1="We Follow Rigorous Testing And Quality Assurance Practices To Identify And Address Potential Issues Before They Affect Users. Our Approach Focuses On Maintaining Strong Functionality, Performance, Reliability, And User Satisfaction."
          description2="Through Careful Testing And Quality Checks, We Help Businesses Deliver More Dependable Digital Products And Experiences."
          bgColor="#FFFFFF"
          textColor="#000000"
          imagePosition="right"
          imageScale={1}
          badgeBgColor='linear-gradient(90deg, rgba(255, 0, 0, 1) 0%,rgba(156, 1, 1, 1) 100%)'
          objectFitOverride="contain"
          containerSx={{ minHeight: { xs: 'auto', sm: 'auto', md: '520px', lg: '639px' } }}
           textContainerSx={{ pl: { xs: '20px',sm: '20px',md:'60px', lg: '180px' } }}
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
          title={"Technical Support When\nYou Need It"}
          description1="We Provide Reliable Virtual Technical Support To Help Keep Your Digital Infrastructure Operating Smoothly. Our Dedicated Team Supports Businesses Whenever And Wherever Assistance Is Required."
          description2="Our Support Approach Helps Businesses Address Technical Needs Efficiently While Maintaining Continuity Across Their Digital Operations."
          bgColor="#000000"
          imagePosition="left"
          badgeBgColor='linear-gradient(90deg, rgba(121, 206, 82, 1)0%,rgba(52, 199, 89, 1) 100%)'
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
          title={"Connect With Customers\nMore Directly"}
          description1="We Integrate WhatsApp Into Your Communication Strategy To Strengthen Customer Engagement And Support. Our Customized Solutions Help Businesses Use The Platform As A Convenient Channel For Connecting With Their Audience."
          description2="By Bringing Communication Closer To Your Customers, We Help Create More Accessible And Responsive Digital Interactions."
          bgColor="#FFFFFF"
          textColor="#000000"
          badgeBgColor='linear-gradient(90deg, rgba(72, 112, 244, 1)0%,rgba(0, 4, 255, 1) 100%)'
          imagePosition="right"
          imageScale={1}
          objectFitOverride="contain"
          
          containerSx={{ minHeight: { xs: 'auto', sm: 'auto', md: '520px', lg: '639px' } }}
           textContainerSx={{ pl: { xs: '20px',sm: '20px',md:'60px', lg: '180px' } }}
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
          title={"A Reliable Technology\nPartner"}
          description1="We Help Businesses Optimize Their Technology Resources Through Reliable IT Outsourcing Services. Our Approach Provides An Experienced Partner To Support Your Digital Journey While Allowing Your Team To Stay Focused On Core Business Priorities."
          description2="We Work As An Extension Of Your Business, Providing The Technical Capabilities And Support Needed To Move Your Digital Operations Forward."
          bgColor="rgba(0, 0, 0, 1)"
          imagePosition="left"
          imageScale={1}
          badgeBgColor='linear-gradient(90deg, rgba(228, 196, 12, 1) 0%,rgba(170, 145, 4, 1) 100%)'
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
        subtitle="OUR SUPPORT APPROACH"
        title={"Technology Support\nThat Keeps You\nMoving"}
        description="We Combine Technical Expertise, Security, Quality Assurance, And Responsive Support To Help Businesses Maintain Reliable Digital Operations. Our Goal Is To Provide Practical Solutions That Protect Your Infrastructure, Support Your Users, And Keep Your Technology Working Effectively."
        boxData={[
          {
            title: "RELIABLE SUPPORT",
            description: "Practical Technical Assistance Designed To Keep Your Digital Operations Running Smoothly."
          },
          {
            title: "SECURITY & PROTECTION",
            description: "Solutions Focused On Protecting Your Digital Assets And Maintaining A Secure Technology Environment."
          },
          {
            title: "BUSINESS CONTINUITY",
            description: "Dependable Infrastructure And Support That Help Your Business Stay Operational And Focused On Growth."
          }
        ]}
        interestedTitle="INTERESTED ?"
        interestedDescription="Contact our support team today for reliable and efficient IT solutions tailored to your business needs."
      />

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default ITTechnicalSupport;
