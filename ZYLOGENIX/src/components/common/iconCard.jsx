
import { Box, Typography } from '@mui/material';

const IconCard = ({ icon, title }) => {
  return (
    <Box
      sx={{
        width: '204px',
        height: '204px',
        backgroundColor: 'rgba(243, 243, 243, 1)',
        borderRadius: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        boxSizing: 'border-box',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.05)'
        }
      }}
    >
      {/* Icon Section */}
      <Box
        component="img"
        src={icon}
        alt={title}
        sx={{
          width: '50px',
          height: '50px',
          objectFit: 'contain',
          marginBottom: '20px' // Adjust space between icon and text
        }}
      />
      
      {/* Text Section */}
      <Typography
        sx={{
          fontFamily: 'Poppins',
          fontWeight: 600,
          fontSize: '16px',
          lineHeight: '25px',
          textAlign: 'center',
          textTransform: 'uppercase',
          color: 'rgba(169, 169, 169, 1)', // Grey text color based on the screenshot
          maxWidth: '173px'
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default IconCard;
