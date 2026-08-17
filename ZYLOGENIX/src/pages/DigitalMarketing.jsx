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
          DIGITAL<br/>MARKETING
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
            STRATEGIES THAT CONNECT YOUR BRAND WITH THE RIGHT AUDIENCE
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
            Grow Your Reach. Drive Meaningful Results.
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
          title={"Improve Your Search\nVisibility"}
          description1="We Help Businesses Improve Their Online Discoverability Through SEO And Google Indexing Strategies. Our Approach Focuses On Making Your Digital Presence Easier For Search Engines And Potential Customers To Find."
          description2="By Strengthening Your Search Presence, We Help Create Better Opportunities For Relevant Audiences To Discover Your Business And Services."
          bgColor="#0A1D1C"
          imagePosition="left"
        />

        {/* Card 2 */}
        <FeatureCard 
          disableBottomMargin={true}
          className="white-section"
          image={Section2}
          badgeText="Online Advertising"
          title={"Reach The Right\nAudience"}
          description1="We Create Targeted Online Advertising Strategies That Help Businesses Reach Potential Customers Across Relevant Digital Channels. Our Approach Focuses On Improving Visibility, Attracting Qualified Audiences, And Supporting Measurable Marketing Goals."
          description2="From Campaign Planning To Performance Optimization, We Help Make Your Advertising Efforts More Focused And Effective."
          bgColor="#FFFFFF"
          textColor="#000000"
          imagePosition="right"
          imageContainerSx={{ 
            ml: { xs: '160px', sm: '0px' },
            mr: { xs: '0px', sm: '-160px' },
            mt: { xs: '-100px', sm: '-60px' } 
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
          imageSx={{ transform: { sm: 'scale(1.3)' } }}
        />

        {/* Card 3 */}
        <FeatureCard 
          disableBottomMargin={true}
          image={Section3}
          badgeText="Email Marketing"
          title={"Stay Connected With\nYour Audience"}
          description1="We Develop Engaging Email Marketing Campaigns That Help Businesses Communicate Directly With Their Customers And Prospects. From Promotional Messages To Informative Campaigns, We Create Content That Keeps Your Audience Connected With Your Brand."
          description2="Our Approach Focuses On Relevant Communication, Consistent Engagement, And Building Stronger Customer Relationships Over Time."
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
          title={"Turn Marketing Data\nInto Better Decisions"}
          description1="We Help Businesses Make Better Use Of Google Analytics And Google Ads To Understand Performance, Track Audience Behavior, And Measure Marketing Results."
          description2="By Combining Meaningful Insights With Targeted Advertising, Businesses Can Better Understand What Works And Make More Informed Decisions About Their Digital Marketing Efforts."
          bgColor="#FFFFFF"
          textColor="#000000"
          imagePosition="right"
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
        />

        {/* Card 5 */}
        <FeatureCard 
          disableBottomMargin={true}
          image={Section5}
          badgeText="Digital Directory Listings"
          title={"Make Your Business\nEasier To Find"}
          description1="We Help Businesses Maintain A Stronger Presence Across Relevant Digital Directories By Organizing And Optimizing Important Business Information."
          description2="Accurate And Consistent Listings Can Help Improve Online Visibility While Making It Easier For Potential Customers To Discover And Connect With Your Business."
          bgColor="#0B0314"
          imagePosition="left"
        />

      </Box>

      {/* ─── Informational Grid Section (White Area) ─── */}
      <InterestedCard 
        subtitle="OUR DIGITAL MARKETING APPROACH"
        title="Marketing Built Around Your Business Goals"
        description="Effective Digital Marketing Starts With Understanding Your Audience, Your Brand, And Your Objectives. We Combine Focused Strategies And Digital Tools To Help Businesses Strengthen Visibility, Connect With Customers, And Create Opportunities For Sustainable Growth."
        boxData={[
          {
            title: "TARGETED STRATEGIES",
            description: "Marketing Solutions Shaped Around Your Audience, Industry, And Business Objectives."
          },
          {
            title: "MEASURABLE PERFORMANCE",
            description: "Use Meaningful Insights To Understand Results And Make Better Marketing Decisions."
          },
          {
            title: "CONSISTENT GROWTH",
            description: "Build A Stronger Digital Presence Through Continuous And Purposeful Marketing Efforts."
          }
        ]}
        interestedTitle="INTERESTED ?"
        interestedDescription="Let's Build A Digital Marketing Strategy That Helps Your Business Reach The Right Audience And Grow Online."
      />

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default DigitalMarketing;
