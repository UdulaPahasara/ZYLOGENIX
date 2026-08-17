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
          CONTENT &<br/>SOCIAL MEDIA
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
            CONTENT & SOCIAL MEDIA
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
            CONTENT & SOCIAL MEDIA SERVICES
          </Typography>
        </Box>

        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            justifyItems: 'center',
            gap: { xs: '40px', md: '40px 60px' },
            maxWidth: 'fit-content',
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
          title={"Content That Tells Your\nStory"}
          description1="We Create Purposeful Content That Communicates Your Brand Message And Connects With Your Target Audience. From Creative Concepts To Digital Marketing Content, Our Approach Focuses On Relevance, Consistency, And Meaningful Engagement."
          description2="Every Piece Of Content Is Developed To Support Your Brand Identity And Contribute To Your Broader Digital Marketing Goals."
          bgColor="rgba(16, 8, 1, 1)"
          imagePosition="left"
          imageScale={1}
          objectFitOverride="cover"
          containerSx={{ minHeight: { xs: 'auto', sm: 'auto', md: '520px', lg: '639px' } }}
          imageContainerSx={{ 
            flex: { xs: '1 1 100%', sm: '1 1 50%', lg: '0 0 627px' }, 
            width: { xs: '100%', sm: '50%', lg: '627px' }, 
            height: { xs: 'auto', sm: 'auto', lg: '637px' }
          }}
          imageSx={{ transform: { xs: 'scale(0.999)', sm: 'scale(0.99) ', md: 'scale(1)', lg: 'scale(1) ' } }}
        />

        {/* Card 2 */}
        <FeatureCard 
          className="white-section"
          image={Section2}
          badgeText="Social Media Management"
          title={"Grow Your Social\nPresence"}
          description1="We Help Businesses Build A Consistent And Engaging Social Media Presence Through Strategic Content Planning, Publishing, And Audience Engagement. Our Solutions Are Designed To Strengthen Visibility, Build Relationships, And Keep Your Brand Connected With Its Audience."
          bgColor="#FFFFFF"
          textColor="#000000"
          imagePosition="right"
          imageScale={1}
          objectFitOverride="contain"
          containerSx={{ minHeight: { xs: 'auto', sm: 'auto', md: '520px', lg: '639px' } }}
          textContainerSx={{ pl: { xs: '20px', sm: '20px', lg: '180px' } }}
          imageContainerSx={{ 
            flex: { xs: '1 1 100%', sm: '1 1 50%', lg: '0 0 578px' }, 
            width: { xs: '100%', sm: '50%', lg: '578px' }, 
            height: { xs: 'auto', sm: 'auto', lg: '609px' },
            mb:{xs:'0',sm:'-150px',md:'-130px',lg:'-10px'}
          }}
          imageSx={{ transform: { xs: 'scale(0.99)', sm: 'scale(0.99)', md: 'scale(0.85)', lg: 'scale(1)' } }}
        />

        {/* Card 3 */}
        <FeatureCard 
          image={Section3}
          badgeText="Blog Management"
          title={"Share Knowledge. Build\nAuthority."}
          description1="We Develop Valuable Blog Content That Informs Your Audience, Communicates Your Expertise, And Supports Your Digital Presence. Consistent, Relevant Content Can Help Your Business Build Credibility While Creating Meaningful Opportunities To Engage Potential Customers."
          description2="Our Content Is Tailored To Your Brand And Audience, Helping You Share Useful Insights, Strengthen Your Online Presence, And Maintain A Consistent Flow Of Communication."
          bgColor="#1E0B36"
          imagePosition="left"
          imageScale={1}
          objectFitOverride="cover"
          containerSx={{ minHeight: { xs: 'auto', sm: 'auto', md: '520px', lg: '639px' } }}
          imageContainerSx={{ 
            flex: { xs: '1 1 100%', sm: '1 1 50%', lg: '0 0 632px' }, 
            width: { xs: '100%', sm: '50%', lg: '632px' }, 
            height: { xs: 'auto', sm: 'auto', lg: '631px' }
          }}
          imageSx={{ transform: { xs: 'scale(1)', sm: 'scale(1)', md: 'scale(0.999)', lg: 'scale(1.02)' } }}
        />

        {/* Card 4 */}
        <FeatureCard 
          className="white-section"
          image={Section4}
          badgeText="YouTube Management"
          title={"Turn Ideas Into\nEngaging Video Content"}
          description1="We Help Businesses Establish And Manage Their YouTube Presence Through Engaging Video Content And Strategic Channel Development. From Content Planning To Presentation, We Help Communicate Your Message In A Format Your Audience Can Connect With."
          description2="Our Approach Focuses On Creating Relevant Video Content That Reflects Your Brand, Strengthens Audience Engagement, And Supports A Consistent And Professional YouTube Presence."
          bgColor="#FFFFFF"
          textColor="#000000"
          imagePosition="right"
          imageScale={1}
          objectFitOverride="contain"
          containerSx={{ minHeight: { xs: 'auto', sm: 'auto', md: '520px', lg: '639px' } }}
          textContainerSx={{ pl: { xs: '20px', sm: '20px', lg: '180px' } }}
          imageContainerSx={{ 
            flex: { xs: '1 1 100%', sm: '1 1 50%', lg: '0 0 635px' }, 
            width: { xs: '100%', sm: '50%', lg: '635px' }, 
            height: { xs: 'auto', sm: 'auto', lg: '583px' },
            mb:{xs:'0',sm:'-190px',md:'-150px',lg:'-10px'},
            mr:{xs:'0',sm:'40px',md:'-14px',lg:'0px'}
          }}
          imageSx={{ transform: { xs: 'scale(0.99)', sm: 'scale(1.4)', md: 'scale(0.95)', lg: 'scale(1.027)' } }}
        />

        {/* Card 5 */}
        <FeatureCard 
          image={Section5}
          badgeText="LinkedIn Profile Optimization"
          title={"Strengthen Your\nProfessional Presence"}
          description1="We Optimize LinkedIn Profiles To Present Your Professional Identity Clearly And Consistently. A Well-Structured Profile Helps Communicate Your Expertise, Strengthen Credibility, And Create A Stronger Professional Presence Online."
          description2="We Refine Your Profile Content And Presentation To Ensure Your Professional Strengths Are Communicated Effectively And Aligned With Your Personal Or Business Goals."
          bgColor="#000000"
          imagePosition="left"
          imageScale={1}
          objectFitOverride="contain"
          containerSx={{ minHeight: { xs: 'auto', sm: 'auto', md: '520px', lg: '639px' } }}
          imageContainerSx={{ 
            flex: { xs: '1 1 100%', sm: '1 1 50%', lg: '0 0 573px' }, 
            width: { xs: '100%', sm: '50%', lg: '573px' }, 
            height: { xs: 'auto', sm: 'auto', lg: '535px' },
            ml: { xs: '0px', lg: '39px' },
            mt: { xs: '0px', lg: '104px' } ,
            mb:{xs:'0',sm:'-140px',md:'-150px',lg:'-10px'}
          }}
          imageSx={{ transform: { xs: 'scale(1)', sm: 'scale(1.2)', md: 'scale(0.85)', lg: 'scale(1)' } }}
        />

        {/* Card 6 */}
        <FeatureCard 
          className="white-section"
          image={Section6}
          badgeText="Video Production"
          title={"Bring Your Ideas To Life"}
          description1="We Create Engaging Video Content Designed To Communicate Your Message Clearly And Capture Audience Attention. From Creative Concepts To Polished Visual Content, Our Approach Helps Businesses Tell Their Stories Through Impactful Video Experiences."
          description2="We Focus On Creating Visually Compelling Content That Reflects Your Brand, Connects With Your Target Audience, And Supports Your Broader Digital Marketing Goals."
          bgColor="#FFFFFF"
          textColor="#000000"
          imagePosition="right"
          imageScale={1}
          objectFitOverride="contain"
          containerSx={{ minHeight: { xs: 'auto', sm: 'auto', md: '520px', lg: '639px' } }}
          textContainerSx={{ pl: { xs: '20px', sm: '20px', lg: '180px' } }}
          imageContainerSx={{ 
            flex: { xs: '1 1 100%', sm: '1 1 50%', lg: '0 0 635px' }, 
            width: { xs: '100%', sm: '50%', lg: '635px' }, 
            height: { xs: 'auto', sm: 'auto', lg: '583px' }
          }}
          imageSx={{ transform: { xs: 'scale(0.85)', sm: 'scale(0.99)', md: 'scale(0.75)', lg: 'scale(1)' } }}
        />

      </Box>

      {/* ─── Informational Grid Section (White Area) ─── */}
      <InterestedCard 
        subtitle="OUR APPROACH"
        title="Content Designed Around Your Goals"
        description="Effective Digital Content Starts With Understanding Your Brand, Audience, And Objectives. We Combine Creativity, Strategic Thinking, And Consistent Execution To Help You Build A Stronger Digital Presence Across The Platforms That Matter To Your Business."
        boxData={[
          {
            title: "STRATEGIC CONTENT",
            description: "Content Planned Around Your Brand, Audience, And Business Objectives."
          },
          {
            title: "CONSISTENT ENGAGEMENT",
            description: "Maintain An Active Digital Presence And Meaningful Connections With Your Audience."
          },
          {
            title: "MEASURABLE GROWTH",
            description: "Build Stronger Visibility And Digital Experiences That Support Long-Term Business Growth."
          }
        ]}
        interestedTitle="INTERESTED ?"
        interestedDescription="Let's Create Content And Digital Experiences That Help Your Brand Connect, Engage, And Grow."
      />

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default ContentSocialMedia;
