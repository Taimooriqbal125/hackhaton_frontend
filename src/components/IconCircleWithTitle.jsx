import React from 'react';
import { Box, Typography } from '@mui/material';
import { red } from '@mui/material/colors';  // ✅ import red

const IconCircleWithTitle = ({ icon: Icon, title, bgColor = red[500], iconColor = '#000' }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: 100 }}
    >
      <Box
        sx={{
          width: 60,
          height: 60,
          borderRadius: '50%',
          backgroundColor: bgColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 1,
          cursor: 'pointer',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-6px) scale(1.05)',
            boxShadow: 3,
          },
        }}
      >
        <Icon style={{ fontSize: 30, color: iconColor }} />
      </Box>
      <Typography variant="subtitle2" fontWeight="600" align="center">
        {title}
      </Typography>
    </Box>
  );
};

export default IconCircleWithTitle;
