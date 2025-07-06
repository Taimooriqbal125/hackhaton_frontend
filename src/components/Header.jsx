import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { red } from "@mui/material/colors";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Header = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const location = useLocation();
  const routeTitles = {
    "/home": "Users",
    "/profile": "Profile",
    "/dashboard": "Active Alert",
  };

  const currentPath = location.pathname;
  const pageTitle = routeTitles[currentPath] || "";

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: red[500],
        zIndex: (theme) => theme.zIndex.drawer + 1,
        left: 0,
        width: `calc(100% - 210px)`,
        ml: "210px",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Box>
          <Typography variant="h5">My Dashboard</Typography>
          <Typography variant="body2" color="inherit">
            {dateTime.toLocaleDateString("en-US", { weekday: "long" })},{" "}
            {dateTime.toLocaleDateString()} - {dateTime.toLocaleTimeString()}
          </Typography>
        </Box>

        {/* ✅ Auth Buttons */}
        <Box>
          <SignedIn>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="outlined" sx={{ color: "#fff", borderColor: "#fff" }}>
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>
        </Box>
      </Toolbar>

      {/* Page Title */}
      <Box display="flex" flexDirection="row" alignItems="center" mb={2} ml={3}>
        <Typography variant="h6">{pageTitle}</Typography>
      </Box>
    </AppBar>
  );
};

export default Header;
