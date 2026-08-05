import React from 'react';
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ pt: '100px', p: 4, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#121212' }}>
      <Typography variant="h2" sx={{ color: 'white' }}>Home Page</Typography>
    </Box>
  );
};

export default Home;
