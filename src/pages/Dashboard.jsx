import {
  Grid,
  Box,
  Typography,
  Fab,
  AppBar,
  Toolbar,
  Button,
} from "@mui/material";
import StatCard from "../components/StatCard";
import { Upload } from "lucide-react";
import DashboardLayout from "../components/DashboardLayout";
import StarIcon from "@mui/icons-material/Star";
import UploadIcon from "@mui/icons-material/Upload";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useLocation } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import IconCircleWithTitle from "../components/IconCircleWithTitle";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import CarCrashIcon from "@mui/icons-material/CarCrash";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

import Map from "../components/Map";

const Dashboard = () => {
  const handleImageUpload = () => {
    document.getElementById("imageInput").click();
  };

  return (
    <Grid gridColumn="span 12">
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
        mt={5}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "red" }}>
          Upload an image to analyze and retrieve disaster-related information.
        </Typography>
        <Box>
          <input
            id="imageInput"
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                console.log("Selected image:", file.name);
              }
            }}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleImageUpload}
            startIcon={<AddIcon />}
            sx={{
              borderRadius: 2, // 0 = hard square, 2 = slightly rounded
              width: 180,
              height: 40,
              textTransform: "none", // keep "Upload Image" as-is
            }}
          >
            Upload Image
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", width: "100%", padding: 2 }}>
        {/* Left side - Map (80%) */}
        <Box sx={{ width: "80%", pr: 2 }}>
          <Map />
        </Box>

        {/* Right side - StatCards in column (20%) */}
        <Box
          sx={{
            width: "20%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <StatCard
            title="Online Requests"
            value="350+"
            subtext="+35 from last week"
            icon={<PersonOutlineIcon color="primary" fontSize="large" />}
          />
          <StatCard
            title="Positive Feedback"
            value="92%"
            subtext="Excellent sentiment"
            icon={<FavoriteBorderIcon color="error" fontSize="large" />}
          />
          <StatCard
            title="Overall Rating"
            value="4.0"
            subtext="+0.6 from last month"
            icon={<StarIcon color="warning" fontSize="large" />}
          />
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "row", gap: 6 ,mt:3 }}
      >
        <IconCircleWithTitle
          icon={LocalPoliceIcon}
          title="Police"
          bgColor="#1976d2" // optional
          iconColor="#fff" // optional
        />
        <IconCircleWithTitle
          icon={LocalHospitalIcon}
          title="Hospital"
          bgColor="#1976d2" // optional
          iconColor="#fff" // optional
        />
        <IconCircleWithTitle
          icon={LocalFireDepartmentIcon}
          title="Fire Birgade"
          bgColor="#1976d2" // optional
          iconColor="#fff"
        />
        <IconCircleWithTitle
          icon={PhoneInTalkIcon}
          title="Phone in Talk"
          bgColor="#1976d2" // optional
          iconColor="#fff" // optional
        />
                <IconCircleWithTitle
          icon={CarCrashIcon}
          title="Car Crash"
          bgColor="#1976d2" // optional
          iconColor="#fff" // optional
        />
                <IconCircleWithTitle
          icon={ReportProblemIcon}
          title="Report to Police"
          bgColor="#1976d2" // optional
          iconColor="#fff" // optional
        />
      </Box>
    </Grid>
  );
};

export default Dashboard;
