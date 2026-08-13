import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton, useTheme, useMediaQuery, Menu, MenuItem, Collapse } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useNavigate, useLocation } from 'react-router-dom';
import ZylogenixLogo from '../../assets/Logo/ZylogenixLogo.webp';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);
  const [capabilitiesAnchorEl, setCapabilitiesAnchorEl] = useState(null);
  const [mobileCapabilitiesOpen, setMobileCapabilitiesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [isWhiteBackground, setIsWhiteBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const whiteSections = document.querySelectorAll('.white-section');
      let isWhite = false;
      
      whiteSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Check if the center of the navbar (y=45) is inside the section
        if (rect.top <= 45 && rect.bottom >= 45) {
          isWhite = true;
        }
      });
      
      setIsWhiteBackground(isWhite);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMobileCapabilitiesOpen(false);
  };

  const handleCapabilitiesOpen = (event) => {
    setCapabilitiesAnchorEl(event.currentTarget);
  };

  const handleCapabilitiesClose = () => {
    setCapabilitiesAnchorEl(null);
  };

  const handleNavigation = (path) => {
    navigate(path);
    handleMenuClose();
    handleCapabilitiesClose();
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { 
      label: 'Capabilities', 
      path: '/capabilities',
      subItems: [
        { label: 'Design & Branding', path: '/design-branding' },
        { label: 'Content & Social Media', path: '/content-social-media' },
        { label: 'Digital Marketing', path: '/digital-marketing' },
        { label: 'Web & App', path: '/web-app' },
        { label: 'IT & Technical Support', path: '/it-technical-support' }
      ]
    },
    { label: 'Technology', path: '/technology' },
  ];

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1100,
        width: '100%',
        height: 90,
        background: isWhiteBackground ? 'rgb(26, 26, 26)' : 'rgba(0, 0, 0, 0.3)',
        boxShadow: isWhiteBackground ? 'none' : `
          inset 0.98px 0.98px 1.96px 0px rgba(0, 0, 0, 0.3),
          inset -0.98px -0.98px 1.96px 0px rgba(0, 0, 0, 0.1),
          inset 0px 0px 9.78px 0px rgba(0, 0, 0, 0.3)
        `,
        backdropFilter: isWhiteBackground ? 'none' : 'blur(10px)',
        transition: 'all 0.3s ease',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: 1440,
          height: '100%',
          padding: '9.78px 24.46px',
          gap: '9.78px',
          boxSizing: 'border-box'
        }}
      >
      {/* Logo */}
      <Box
        component="img"
        src={ZylogenixLogo}
        alt="Zylogenix Logo"
        onClick={() => handleNavigation('/')}
        sx={{
          width: { xs: 120, md: 174 },
          height: 'auto',
          objectFit: 'contain',
          cursor: 'pointer'
        }}
      />

      {/* Desktop Navigation */}
      {!isMobile && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '42px',marginLeft:{md:'130px',lg:'510px'} }}>
          {navItems.map((item) => (
            <Box key={item.label}>
              <Typography
                onClick={(e) => item.subItems ? handleCapabilitiesOpen(e) : handleNavigation(item.path)}
                sx={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '16px',
                  textTransform: 'capitalize',
                  color: location.pathname === item.path || (item.subItems && item.subItems.some(sub => location.pathname === sub.path)) ? 'rgba(190, 82, 206, 1)' : 'rgba(118, 118, 118, 1)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: 'rgba(190, 82, 206, 1)'
                  }
                }}
              >
                {item.label}
                {item.subItems && <KeyboardArrowDownIcon sx={{ ml: 0.5, fontSize: 20 }} />}
              </Typography>
              
              {item.subItems && (
                <Menu
                  anchorEl={capabilitiesAnchorEl}
                  open={Boolean(capabilitiesAnchorEl)}
                  onClose={handleCapabilitiesClose}
                  disableScrollLock
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  sx={{
                    '& .MuiPaper-root': {
                      mt: 1.5,
                      backgroundColor: '#000000',
                      background: '#000000',
                      color: '#ffffff',
                      borderRadius: '14px 14px 14px 14px',
                      minWidth: '230px',
                      boxShadow: '0 24px 70px rgba(0,0,0,1), 0 0 40px rgba(190,82,206,0.2)',
                      '&::-webkit-scrollbar': { display: 'none' },
                      scrollbarWidth: 'none',
                    },
                    '& .MuiList-root': {
                      padding: 0,
                      backgroundColor: '#000000',
                    },
                    '& .MuiMenuItem-root': {
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 600,
                      fontSize: '15px',
                      padding: '14px 28px',
                      color: '#ffffff',
                      borderLeft: '3px solid transparent',
                      letterSpacing: '0.4px',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(190, 82, 206, 0.18)',
                        color: 'rgba(190, 82, 206, 1)',
                        borderLeft: '3px solid rgba(190, 82, 206, 1)',
                        paddingLeft: '34px',
                      },
                    },
                  }}
                  MenuListProps={{
                    onMouseLeave: handleCapabilitiesClose,
                    disablePadding: true,
                  }}
                >
                  {item.subItems.map((subItem, idx) => (
                    <MenuItem
                      key={subItem.label}
                      onClick={() => handleNavigation(subItem.path)}
                      sx={{
                        borderBottom: idx < item.subItems.length - 1 ? '1px solid rgba(190, 82, 206, 0.15)' : 'none',
                        ...(location.pathname === subItem.path && {
                          color: 'rgba(190, 82, 206, 1) !important',
                          backgroundColor: 'rgba(190, 82, 206, 0.15) !important',
                          borderLeft: '3px solid rgba(190, 82, 206, 1) !important',
                        }),
                      }}
                    >
                      {subItem.label}
                    </MenuItem>
                  ))}
                </Menu>
              )}
            </Box>
          ))}
        </Box>
      )}

      {/* Desktop Contact Us Button */}
      {!isMobile && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 136,
            height: 42,
            borderRadius: '28.37px',
            padding: '9.78px 24.46px',
            background: 'rgba(141, 83, 219, 0.4)',
            boxShadow: `
              inset 0.98px 0.98px 1.96px 0px rgba(255, 255, 255, 0.3),
              inset -0.98px -0.98px 1.96px 0px rgba(255, 255, 255, 0.1),
              inset 0px 0px 9.78px 0px rgba(255, 255, 255, 0.3)
            `,
            cursor: 'pointer',
            boxSizing: 'border-box',
            transition: 'background 0.3s ease',
            '&:hover': {
              background: 'rgba(141, 83, 219, 0.6)'
            }
          }}
          onClick={() => handleNavigation('/contact')}
        >
          <Typography
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '16px',
              textTransform: 'capitalize',
              color: 'rgba(190, 82, 206, 1)',
              whiteSpace: 'nowrap'
            }}
          >
            Contact us
          </Typography>
        </Box>
      )}

      {/* Mobile Menu Icon */}
      {isMobile && (
        <IconButton
          onClick={handleMenuOpen}
          sx={{ color: 'rgba(190, 82, 206, 1)' }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Mobile Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            background: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(10px)',
            color: 'white',
            width: '240px',
            border: '1px solid rgba(190, 82, 206, 0.3)'
          }
        }}
      >
        {navItems.map((item) => (
          <Box key={item.label}>
            <MenuItem 
              onClick={(e) => {
                if (item.subItems) {
                  setMobileCapabilitiesOpen(!mobileCapabilitiesOpen);
                  e.stopPropagation();
                } else {
                  handleNavigation(item.path);
                }
              }}
              sx={{
                fontFamily: 'Poppins, sans-serif',
                color: location.pathname === item.path || (item.subItems && item.subItems.some(sub => location.pathname === sub.path)) ? 'rgba(190, 82, 206, 1)' : 'rgba(118, 118, 118, 1)',
                fontWeight: 600,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              {item.label}
              {item.subItems && (
                mobileCapabilitiesOpen ? <KeyboardArrowUpIcon sx={{ fontSize: 20 }} /> : <KeyboardArrowDownIcon sx={{ fontSize: 20 }} />
              )}
            </MenuItem>
            
            {item.subItems && (
              <Collapse in={mobileCapabilitiesOpen} timeout="auto" unmountOnExit>
                {item.subItems.map((subItem) => (
                  <MenuItem
                    key={subItem.label}
                    onClick={() => handleNavigation(subItem.path)}
                    sx={{
                      fontFamily: 'Poppins, sans-serif',
                      color: location.pathname === subItem.path ? 'rgba(190, 82, 206, 1)' : 'rgba(255, 255, 255, 0.7)',
                      fontWeight: 500,
                      fontSize: '14px',
                      paddingLeft: '32px',
                    }}
                  >
                    {subItem.label}
                  </MenuItem>
                ))}
              </Collapse>
            )}
          </Box>
        ))}
        <MenuItem onClick={() => handleNavigation('/contact')}>
          <Typography sx={{ 
            fontFamily: 'Poppins, sans-serif', 
            color: 'rgba(190, 82, 206, 1)',
            fontWeight: 600
          }}>
            Contact us
          </Typography>
        </MenuItem>
      </Menu>
      </Box>
    </Box>
  );
};

export default Navbar;
