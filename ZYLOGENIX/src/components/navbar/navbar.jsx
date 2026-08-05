import React, { useState } from 'react';
import { Box, Typography, IconButton, useTheme, useMediaQuery, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, useLocation } from 'react-router-dom';
import ZylogenixLogo from '../../assets/Logo/ZylogenixLogo.webp';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (path) => {
    navigate(path);
    handleMenuClose();
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Capabilities', path: '/capabilities' },
    { label: 'Technology', path: '/technology' },
  ];

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: 1440,
        height: 90,
        padding: '9.78px 24.46px',
        gap: '9.78px',
        background: 'rgba(0, 0, 0, 0.3)',
        boxShadow: `
          inset 0.98px 0.98px 1.96px 0px rgba(0, 0, 0, 0.3),
          inset -0.98px -0.98px 1.96px 0px rgba(0, 0, 0, 0.1),
          inset 0px 0px 9.78px 0px rgba(0, 0, 0, 0.3)
        `,
        backdropFilter: 'blur(10px)',
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
            <Typography
              key={item.label}
              onClick={() => handleNavigation(item.path)}
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '16px',
                textTransform: 'capitalize',
                color: location.pathname === item.path ? 'rgba(190, 82, 206, 1)' : 'rgba(118, 118, 118, 1)',
                cursor: 'pointer',
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: 'rgba(190, 82, 206, 1)'
                }
              }}
            >
              {item.label}
            </Typography>
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
            width: '200px',
            border: '1px solid rgba(190, 82, 206, 0.3)'
          }
        }}
      >
        {navItems.map((item) => (
          <MenuItem 
            key={item.label} 
            onClick={() => handleNavigation(item.path)}
            sx={{
              fontFamily: 'Poppins, sans-serif',
              color: location.pathname === item.path ? 'rgba(190, 82, 206, 1)' : 'rgba(118, 118, 118, 1)',
              fontWeight: 600
            }}
          >
            {item.label}
          </MenuItem>
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
  );
};

export default Navbar;
