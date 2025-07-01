// src/components/DashboardLayout.js
import { Box, IconButton, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const drawerWidth = 0;

const DashboardLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex', width: '100%', overflowX: 'hidden' , mt:'70px'}}>
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} isMobile={isMobile} />

      {/* Main Content Area */}
      <Box sx={{ flexGrow: 1, ml: { sm: `${drawerWidth}px` }, width: '100%' }}>
        {/* Hamburger Icon (Mobile Only) */}
        {isMobile && (
          <IconButton onClick={() => setSidebarOpen(true)} sx={{ m: 2 }}>
            <MenuIcon />
          </IconButton>
        )}

        {/* Header */}
        <Header />

        {/* Main Page Content */}
        <Box component="main" sx={{ p: 3 }}>
          <Outlet/>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
