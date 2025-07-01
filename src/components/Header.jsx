import { AppBar, Toolbar, Typography, Box, Fab } from "@mui/material";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import UploadIcon from "@mui/icons-material/Upload";

const Header = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);
  const location = useLocation();
  const routeTitles = {
    "/about": "Active Alert",
    "/profile": "Profile",
    "/home": "Users",
    // add more as needed
  };
  const currentPath = location.pathname;
  const pageTitle = routeTitles[currentPath] || "M Dashboard";

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        left: 0,
        width: `calc(100% - 210px)`,
        ml: "210px",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h5">My Dashboard</Typography>
        <Typography variant="body2" color="inherit">
          {dateTime.toLocaleDateString("en-US", { weekday: "long" })},{" "}
          {dateTime.toLocaleDateString()} - {dateTime.toLocaleTimeString()}
        </Typography>
      </Toolbar>
      <Box display="flex" flexDirection="row" alignItems="center" mb={2} ml={3}>
        <Typography variant="h6">{pageTitle}</Typography>
      </Box>
    </AppBar>
  );
};

export default Header;
