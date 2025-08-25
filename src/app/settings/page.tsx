'use client';

import Layout from '@/components/Layout';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Switch,
  FormControlLabel,
  TextField,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
} from '@mui/material';
import {
  Notifications,
  Security,
  Person,
  Email,
  Phone,
  LocationOn,
} from '@mui/icons-material';
import { useState } from 'react';

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true,
  });

  const [userInfo, setUserInfo] = useState({
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@nuviasmiles.com',
    phone: '(602) 555-0101',
    center: 'Phoenix Center',
  });

  const handleNotificationChange = (type: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  return (
    <Layout title="Settings - Nuvia Smiles Provider Portal">
      <Box sx={{ 
        backgroundColor: 'white',
        minHeight: '100vh',
        borderRadius: 0,
      }}>
        <Box sx={{ 
          p: 3,
          borderBottom: '1px solid #e5e7eb',
          backgroundColor: 'white',
        }}>
          <Typography variant="h4" sx={{ 
            fontWeight: 700, 
            color: '#1f2937',
            mb: 0.5,
          }}>
            Settings
          </Typography>
          <Typography variant="body2" sx={{ 
            color: '#6b7280',
            fontWeight: 500,
          }}>
            Manage your account preferences and system settings
          </Typography>
        </Box>

        <Box sx={{ 
          p: 3,
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          gap: 3,
          width: '100%',
          maxWidth: '100%',
        }}>
          {/* User Profile */}
          <Card sx={{ 
            borderRadius: 0,
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            border: '1px solid #e5e7eb',
            height: 'fit-content',
          }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Avatar sx={{ width: 64, height: 64, mr: 2, bgcolor: '#00346D' }}>
                  <Person sx={{ fontSize: 32 }} />
                </Avatar>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {userInfo.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Surgeon - Phoenix Center
                  </Typography>
                </Box>
              </Box>

              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Contact Information
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                  fullWidth
                  label="Full Name"
                  value={userInfo.name}
                  InputProps={{
                    startAdornment: <Person sx={{ mr: 1, color: 'text.secondary' }} />,
                  }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  value={userInfo.email}
                  InputProps={{
                    startAdornment: <Email sx={{ mr: 1, color: 'text.secondary' }} />,
                  }}
                />
                <TextField
                  fullWidth
                  label="Phone"
                  value={userInfo.phone}
                  InputProps={{
                    startAdornment: <Phone sx={{ mr: 1, color: 'text.secondary' }} />,
                  }}
                />
                <TextField
                  fullWidth
                  label="Center"
                  value={userInfo.center}
                  InputProps={{
                    startAdornment: <LocationOn sx={{ mr: 1, color: 'text.secondary' }} />,
                  }}
                />
              </Box>

              <Box sx={{ mt: 3 }}>
                <Button variant="contained" color="primary">
                  Update Profile
                </Button>
              </Box>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card sx={{ 
            borderRadius: 0,
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            border: '1px solid #e5e7eb',
            height: 'fit-content',
          }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Notifications sx={{ fontSize: 32, color: '#00346D', mr: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Notifications
                </Typography>
              </Box>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Configure how you receive notifications about patient updates and system alerts.
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={notifications.email}
                      onChange={() => handleNotificationChange('email')}
                      color="primary"
                    />
                  }
                  label="Email Notifications"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={notifications.push}
                      onChange={() => handleNotificationChange('push')}
                      color="primary"
                    />
                  }
                  label="Push Notifications"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={notifications.sms}
                      onChange={() => handleNotificationChange('sms')}
                      color="primary"
                    />
                  }
                  label="SMS Notifications"
                />
              </Box>
            </CardContent>
          </Card>

          {/* Security */}
          <Card sx={{ 
            borderRadius: 0,
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            border: '1px solid #e5e7eb',
            height: 'fit-content',
          }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Security sx={{ fontSize: 32, color: '#00346D', mr: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Security
                </Typography>
              </Box>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Manage your account security settings and authentication preferences.
              </Typography>

              <List>
                <ListItem>
                  <ListItemText
                    primary="Change Password"
                    secondary="Update your account password"
                  />
                  <Button variant="outlined" size="small">
                    Change
                  </Button>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Two-Factor Authentication"
                    secondary="Add an extra layer of security"
                  />
                  <Button variant="outlined" size="small">
                    Enable
                  </Button>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Session Management"
                    secondary="View and manage active sessions"
                  />
                  <Button variant="outlined" size="small">
                    Manage
                  </Button>
                </ListItem>
              </List>
            </CardContent>
          </Card>

          {/* Application Settings */}
          <Card sx={{ 
            borderRadius: 0,
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            border: '1px solid #e5e7eb',
            height: 'fit-content',
          }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Application Settings
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Customize your application experience and preferences.
              </Typography>

              <List>
                <ListItem>
                  <ListItemText
                    primary="Language"
                    secondary="English (US)"
                  />
                  <Button variant="outlined" size="small">
                    Change
                  </Button>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Time Zone"
                    secondary="Mountain Standard Time (MST)"
                  />
                  <Button variant="outlined" size="small">
                    Change
                  </Button>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Date Format"
                    secondary="MM/DD/YYYY"
                  />
                  <Button variant="outlined" size="small">
                    Change
                  </Button>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Theme"
                    secondary="Light"
                  />
                  <Button variant="outlined" size="small">
                    Change
                  </Button>
                </ListItem>
              </List>
            </CardContent>
          </Card>

          {/* System Information */}
          <Card sx={{ 
            borderRadius: 0,
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            border: '1px solid #e5e7eb',
            gridColumn: { xs: '1', md: '1 / -1' },
          }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                System Information
              </Typography>

              <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
                gap: 2,
              }}>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Application Version
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    v1.0.0
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Last Login
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {new Date().toLocaleDateString()}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Account Status
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500, color: 'success.main' }}>
                    Active
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Role
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Surgeon
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Layout>
  );
}
