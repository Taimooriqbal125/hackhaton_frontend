import { Card, CardContent, Typography, Box } from '@mui/material';

const StatCard = ({ title, value, subtext, icon }) => (
  <Card elevation={3} sx={{ borderRadius: 3 }}>
    <CardContent>
      <Box display="flex" alignItems="center" gap={2}>
        {icon}
        <Box>
          <Typography variant="subtitle2" color="text.secondary">
            {title}
          </Typography>
          <Typography variant="h5">{value}</Typography>
          <Typography variant="caption" color="success.main">
            {subtext}
          </Typography>
        </Box>
      </Box>
    </CardContent>
  </Card>
);

export default StatCard;
