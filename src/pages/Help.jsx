// src/pages/Help.jsx
import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
} from "@mui/material";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import WarningIcon from "@mui/icons-material/Warning";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

const emergencyData = [
  {
    title: "📞 General Emergency (911)",
    subtitle: "Police, Fire, Ambulance",
    icon: <PhoneInTalkIcon />,
    color: "#d32f2f",
  },
  {
    title: "👮 Police Department",
    subtitle: "Dial 911 or Local Non-Emergency: 311",
    icon: <LocalPoliceIcon />,
    color: "#1976d2",
  },
  {
    title: "🔥 Fire Department",
    subtitle: "Dial 911 for fire-related emergencies",
    icon: <LocalFireDepartmentIcon />,
    color: "#f57c00",
  },
  {
    title: "🏥 Medical Services",
    subtitle: "Call 911 or visit nearest ER",
    icon: <LocalHospitalIcon />,
    color: "#388e3c",
  },
  {
    title: "⚠️ FEMA (Disaster Support)",
    subtitle: "1-800-621-3362 (24/7)",
    icon: <WarningIcon />,
    color: "#6a1b9a",
  },
];

const Help = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
         US Emergency Contacts
      </Typography>

      <Grid container spacing={3}>
        {emergencyData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              elevation={4}
              sx={{
                borderRadius: 3,
                display: "flex",
                alignItems: "center",
                gap: 2,
                p: 2,
                backgroundColor: "#fff",
              }}
            >
              <Avatar
                sx={{
                  bgcolor: item.color,
                  width: 56,
                  height: 56,
                  boxShadow: 2,
                }}
              >
                {item.icon}
              </Avatar>
              <CardContent sx={{ p: 0 }}>
                <Typography variant="subtitle1" fontWeight="bold">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.subtitle}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Help;
