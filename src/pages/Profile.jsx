// src/pages/Profile.jsx
import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Divider,
} from '@mui/material';

export default function Profile() {
  return (
    <Box
      sx={{
        p: 4,
        minHeight: '100vh',
        background: 'linear-gradient(to right, #ece9e6, #ffffff)',
      }}
    >
      {/* Profile Header Card */}
      <Card
        elevation={4}
        sx={{
          mb: 4,
          borderRadius: 4,
          p: 3,
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        }}
      >
        <Box display="flex" alignItems="center" gap={3}>
          <Avatar
            src="https://i.pravatar.cc/150?img=15"
            sx={{ width: 90, height: 90, border: '3px solid #1976d2' }}
          />
          <Box>
            <Typography variant="h5" fontWeight="bold">
              Taimoor Iqbal
            </Typography>
            <Typography variant="body2" color="text.secondary">
              taimoor_iqbal_21@gmail.com
            </Typography>
          </Box>
        </Box>
      </Card>

      {/* Info Form */}
      <Card
        elevation={3}
        sx={{
          borderRadius: 4,
          background: 'rgba(255,255,255,0.9)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <CardContent>
          <Typography variant="h6" fontWeight="medium" gutterBottom>
            ✍️ Edit Personal Info
          </Typography>
          <Divider sx={{ mb: 3 }} />

          <Grid container spacing={3}>
            <Grid xs={12} sm={6}>
              <TextField
                label="Full Name"
                fullWidth
                variant="outlined"
                defaultValue="Taimoor Iqbal"
              />
            </Grid>
            <Grid xs={12} sm={6}>
              <TextField
                label="Email"
                fullWidth
                variant="outlined"
                defaultValue="taimoor_iqbal_21@gmail.com"
              />
            </Grid>
            <Grid xs={12} sm={6}>
              <TextField
                label="Phone"
                fullWidth
                variant="outlined"
                defaultValue="+92 300 1234567"
              />
            </Grid>
            <Grid xs={12} sm={6}>
              <TextField
                label="City"
                fullWidth
                variant="outlined"
                defaultValue="Faisalabad"
              />
            </Grid>
          </Grid>

          <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ borderRadius: '8px', px: 4 }}
            >
              Save
            </Button>
            <Button
              variant="outlined"
              color="error"
              sx={{ borderRadius: '8px', px: 4 }}
            >
              Cancel
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
