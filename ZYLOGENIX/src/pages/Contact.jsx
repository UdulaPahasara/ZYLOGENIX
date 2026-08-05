import React from 'react';
import { Box, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Box sx={{ pt: '100px', p: 4, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#121212' }}>
      <Typography variant="h2" sx={{ color: 'white' }}>Contact Us Page</Typography>
    </Box>
  );
};

export default Contact;
