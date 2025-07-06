// src/components/Sidebar.js
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors"; // already imported

import { useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PeopleIcon from "@mui/icons-material/People";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useClerk } from "@clerk/clerk-react";

const drawerWidth = 210;

const Sidebar = ({ open, onClose, isMobile }) => {
  const navigate = useNavigate();

  const { signOut } = useClerk(); // ✅ get signOut function

  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      open={isMobile ? open : true}
      onClose={onClose}
      anchor="left"
      sx={{
        width: isMobile ? 0 : drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: red[500], // ✅ updated
          padding: 0,
        },
      }}
    >
      <List style={{ marginTop: 70 }}>
        <ListItem
          button
          onClick={() => navigate("dashboard")}
          sx={{
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            "&:hover": {
              backgroundColor: "white",
            },
          }}
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>


        <ListItem
          button
          onClick={() => navigate("profile")}
          sx={{
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
            "&:hover": {
              backgroundColor: "white",
            },
          }}
        >
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>

        <ListItem
          button
          onClick={() => navigate("help")}
          sx={{
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            "&:hover": {
              backgroundColor: "white",
            },
          }}
        >
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Help" />
        </ListItem>


        <ListItem
          button
          onClick={() => signOut(() => (window.location.href = "/"))}
          sx={{
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            "&:hover": {
              backgroundColor: "white",
            },
          }}
        >
          <ListItemIcon>
            <LogoutOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>

      <Box sx={{ p: 2, color: "white", mt: 5 }}>
        <Typography variant="h6" gutterBottom>
          FMISC Help Desk
        </Typography>

        {/* Phone Numbers */}
        <Box
          sx={{
            backgroundColor: red[700], // ✅ changed from "primary.dark"
            borderRadius: 2,
            p: 1,
            mb: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="body1">📞 1800 3456 145</Typography>
          <Typography variant="body1">0612-2256999</Typography>
        </Box>

        {/* Emails */}
        <Box
          sx={{
            backgroundColor: red[700], // ✅ changed from "primary.dark"
            borderRadius: 2,
            p: 1,
            mb: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="body2">fmiscbihar@gmail.com</Typography>
          <Typography variant="body2">fmisc.pat-bih@gov.in</Typography>
        </Box>

        {/* Address */}
        <Typography
          variant="caption"
          sx={{ textAlign: "center", display: "block", mt: 2 }}
        >
          2nd Floor, Jai Sreedharan Bhawan, Anisabad, Patna (800002)
        </Typography>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
