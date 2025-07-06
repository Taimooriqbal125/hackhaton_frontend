import React from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
} from '@mui/material';
import { useUser } from '@clerk/clerk-react';

export default function Profile() {
  const { user } = useUser();

  if (!user) return null; // optional: or show loading

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
            src={user.imageUrl}
            sx={{ width: 90, height: 90, border: '3px solid rgb(54, 130, 206)' }}
          />
          <Box>
            <Typography variant="h5" fontWeight="bold">
              {user.fullName || 'No Name'}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.emailAddresses[0]?.emailAddress || 'No Email'}
            </Typography>
          </Box>
        </Box>
      </Card>

      {/* Static Info Card */}
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
            👤 Your Info
          </Typography>
          <Divider sx={{ mb: 2 }} />

          <Typography variant="body1" sx={{ mb: 1 }}>
            <strong>Full Name:</strong> {user.fullName || 'N/A'}
          </Typography>
          <Typography variant="body1">
            <strong>Email:</strong> {user.emailAddresses[0]?.emailAddress || 'N/A'}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
