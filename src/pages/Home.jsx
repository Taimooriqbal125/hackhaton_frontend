import React from "react";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import { red } from "@mui/material/colors";

const disasters = [
  {
    title: "Top 5 Disaster-Prone States (USA)",
    date: "Based on last 10 years",
    description:
      "California, Texas, Florida, Oklahoma, and Louisiana have reported the highest number of natural disasters.",
  },
  {
    title: "Average Yearly Disasters in USA",
    date: "Historical Data",
    description:
      "On average, the United States experiences over 100 natural disasters annually, including wildfires, floods, and hurricanes.",
  },
  {
    title: "Most Frequent Disaster Type",
    date: "Reported from 2015–2025",
    description:
      "Severe storms and hurricanes are the most common disaster types, affecting both coastal and inland states.",
  },

];

const Home = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight="bold" mb={3} color={red[700]}>
        🔥Analyzing Natural Disasters Across the US
      </Typography>

      <Grid container spacing={3}>
        {disasters.map((disaster, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: red[100],
                borderLeft: `6px solid ${red[500]}`,
                boxShadow: 3,
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            >
              <CardContent>
                <Box display="flex" alignItems="center" mb={1}>
                  <WarningIcon sx={{ color: red[700], mr: 1 }} />
                  <Typography variant="h6" fontWeight="bold">
                    {disaster.title}
                  </Typography>
                </Box>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {disaster.date}
                </Typography>
                <Typography variant="body1">{disaster.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
