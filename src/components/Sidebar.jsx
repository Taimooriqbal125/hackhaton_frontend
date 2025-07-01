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
import { useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PeopleIcon from "@mui/icons-material/People";
const drawerWidth = 210;

const Sidebar = ({ open, onClose, isMobile }) => {
  const navigate = useNavigate();

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
          backgroundColor: "primary.main",
          padding: 0,
        },
      }}
    >
      <List style={{ marginTop: 70 }}>
        <ListItem
          button
          onClick={() => navigate("about")}
          sx={{
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            borderTopRightRadius: 8, // smaller radius on right
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
           onClick={() => navigate("home")}
          sx={{
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            borderTopRightRadius: 8, // smaller radius on right
            borderBottomRightRadius: 8,
            "&:hover": {
              backgroundColor: "white",
            },
          }}
        >
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
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
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem
          button
          sx={{
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            borderTopRightRadius: 8, // smaller radius on right
            borderBottomRightRadius: 8,
            "&:hover": {
              backgroundColor: "white",
            },
          }}
        >
          <ListItemIcon>
            <LogoutOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
      </List>
      <Box sx={{ p: 2, color: "white", mt: 5 }}>
        <Typography variant="h6" gutterBottom>
          FMISC Help Desk
        </Typography>

        {/* Phone Numbers */}
        <Box
          sx={{
            backgroundColor: "primary.dark",
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
            backgroundColor: "primary.dark",
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
