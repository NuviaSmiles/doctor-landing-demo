'use client';

import Layout from '@/components/Layout';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Avatar,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  Button,
} from '@mui/material';
import {
  People,
  LocalHospital,
  Schedule,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  Warning,
  Error,
  Person,
  CalendarToday,
  Assessment,
} from '@mui/icons-material';
import { mockPatients } from '@/data/mockData';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  const totalPatients = mockPatients.length;
  const clearedPatients = mockPatients.filter(p => p.status === 'Cleared').length;
  const pendingPatients = mockPatients.filter(p => p.status === 'Pending').length;
  const inReviewPatients = mockPatients.filter(p => p.status === 'In Review').length;
  const disqualifiedPatients = mockPatients.filter(p => p.status === 'Disqualified').length;

  const recentPatients = mockPatients.slice(0, 5);
  const upcomingSurgeries = mockPatients
    .filter(p => p.status === 'Cleared')
    .sort((a, b) => new Date(a.surgeryDate).getTime() - new Date(b.surgeryDate).getTime())
    .slice(0, 3);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Cleared':
        return <CheckCircle sx={{ color: '#10b981' }} />;
      case 'In Review':
        return <Warning sx={{ color: '#f59e0b' }} />;
      case 'Pending':
        return <Schedule sx={{ color: '#3b82f6' }} />;
      case 'Disqualified':
        return <Error sx={{ color: '#ef4444' }} />;
      default:
        return <Person />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Cleared':
        return 'success';
      case 'In Review':
        return 'warning';
      case 'Pending':
        return 'info';
      case 'Disqualified':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Layout title="Dashboard - Nuvia Smiles Provider Portal">
      <Box sx={{ maxWidth: '100%' }}>
        {/* Welcome Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, color: '#1f2937', mb: 1 }}>
            Welcome back, Dr. Johnson
          </Typography>
          <Typography variant="body1" sx={{ color: '#6b7280' }}>
            Here's what's happening with your patients today
          </Typography>
        </Box>

        {/* Statistics Cards */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          gap: 3, 
          mb: 4, 
          width: '100%' 
        }}>
          <Card sx={{ 
            height: 160,
            width: '100%',
            background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
            color: 'white',
          }}>
            <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.2)', width: 48, height: 48 }}>
                  <People sx={{ fontSize: 24 }} />
                </Avatar>
                <TrendingUp sx={{ fontSize: 20, opacity: 0.8 }} />
              </Box>
              <Box>
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 0.5, color: 'white' }}>
                  {totalPatients}
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9, color: 'rgba(255,255,255,0.9)', lineHeight: 1.2 }}>
                  Total Patients
                </Typography>
              </Box>
            </CardContent>
          </Card>

          <Card sx={{ 
            height: 160,
            width: '100%',
            background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
            color: 'white',
          }}>
            <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.2)', width: 48, height: 48 }}>
                  <CheckCircle sx={{ fontSize: 24 }} />
                </Avatar>
                <TrendingUp sx={{ fontSize: 20, opacity: 0.8 }} />
              </Box>
              <Box>
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 0.5, color: 'white' }}>
                  {clearedPatients}
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9, color: 'rgba(255,255,255,0.9)', lineHeight: 1.2 }}>
                  Cleared for Surgery
                </Typography>
              </Box>
            </CardContent>
          </Card>

          <Card sx={{ 
            height: 160,
            width: '100%',
            background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
            color: 'white',
          }}>
            <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.2)', width: 48, height: 48 }}>
                  <Warning sx={{ fontSize: 24 }} />
                </Avatar>
                <TrendingDown sx={{ fontSize: 20, opacity: 0.8 }} />
              </Box>
              <Box>
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 0.5, color: 'white' }}>
                  {inReviewPatients}
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9, color: 'rgba(255,255,255,0.9)', lineHeight: 1.2 }}>
                  In Review
                </Typography>
              </Box>
            </CardContent>
          </Card>

          <Card sx={{ 
            height: 160,
            width: '100%',
            background: 'linear-gradient(135deg, #ef4444 0%, #f87171 100%)',
            color: 'white',
          }}>
            <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.2)', width: 48, height: 48 }}>
                  <Error sx={{ fontSize: 24 }} />
                </Avatar>
                <TrendingDown sx={{ fontSize: 20, opacity: 0.8 }} />
              </Box>
              <Box>
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 0.5, color: 'white' }}>
                  {disqualifiedPatients}
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9, color: 'rgba(255,255,255,0.9)', lineHeight: 1.2 }}>
                  Disqualified
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Progress Overview */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' },
          gap: 3, 
          mb: 4 
        }}>
          <Box>
            <Card sx={{ height: '100%', minHeight: 320 }}>
              <CardContent sx={{ p: 3, height: '100%' }}>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: '#1f2937' }}>
                  Patient Status Overview
                </Typography>
                <Box sx={{ mb: 4 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="body1" sx={{ fontWeight: 500, color: '#374151' }}>
                      Cleared for Surgery
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#6b7280', fontWeight: 500 }}>
                      {clearedPatients}/{totalPatients}
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={(clearedPatients / totalPatients) * 100}
                    sx={{ 
                      height: 12, 
                      borderRadius: 0,
                      backgroundColor: '#e5e7eb',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: '#10b981',
                        borderRadius: 0,
                      }
                    }}
                  />
                </Box>
                <Box sx={{ mb: 4 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="body1" sx={{ fontWeight: 500, color: '#374151' }}>
                      In Review
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#6b7280', fontWeight: 500 }}>
                      {inReviewPatients}/{totalPatients}
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={(inReviewPatients / totalPatients) * 100}
                    sx={{ 
                      height: 12, 
                      borderRadius: 0,
                      backgroundColor: '#e5e7eb',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: '#f59e0b',
                        borderRadius: 0,
                      }
                    }}
                  />
                </Box>
                <Box sx={{ mb: 4 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="body1" sx={{ fontWeight: 500, color: '#374151' }}>
                      Pending
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#6b7280', fontWeight: 500 }}>
                      {pendingPatients}/{totalPatients}
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={(pendingPatients / totalPatients) * 100}
                    sx={{ 
                      height: 12, 
                      borderRadius: 0,
                      backgroundColor: '#e5e7eb',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: '#3b82f6',
                        borderRadius: 0,
                      }
                    }}
                  />
                </Box>
                <Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="body1" sx={{ fontWeight: 500, color: '#374151' }}>
                      Disqualified
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#6b7280', fontWeight: 500 }}>
                      {disqualifiedPatients}/{totalPatients}
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={(disqualifiedPatients / totalPatients) * 100}
                    sx={{ 
                      height: 12, 
                      borderRadius: 0,
                      backgroundColor: '#e5e7eb',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: '#ef4444',
                        borderRadius: 0,
                      }
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Box>

          <Box>
            <Card sx={{ height: '100%', minHeight: 320 }}>
              <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: '#1f2937' }}>
                  Upcoming Surgeries
                </Typography>
                <Box sx={{ flex: 1 }}>
                  <List sx={{ p: 0 }}>
                    {upcomingSurgeries.map((patient, index) => (
                      <Box key={patient.id}>
                        <ListItem sx={{ px: 0, py: 2 }}>
                          <ListItemAvatar>
                            <Avatar sx={{ bgcolor: '#1e40af', width: 40, height: 40 }}>
                              <Person sx={{ fontSize: 20 }} />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              <Typography variant="body1" sx={{ fontWeight: 500, color: '#1f2937' }}>
                                {patient.name}
                              </Typography>
                            }
                            secondary={
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                                <CalendarToday sx={{ fontSize: 16, color: '#6b7280' }} />
                                <Typography variant="body2" sx={{ color: '#6b7280', fontWeight: 500 }}>
                                  {new Date(patient.surgeryDate).toLocaleDateString()}
                                </Typography>
                              </Box>
                            }
                          />
                          <Chip
                            label={patient.proposedTreatment}
                            size="small"
                            color="primary"
                            variant="outlined"
                            sx={{ fontSize: '0.75rem', fontWeight: 500 }}
                          />
                        </ListItem>
                        {index < upcomingSurgeries.length - 1 && (
                          <Divider sx={{ my: 1 }} />
                        )}
                      </Box>
                    ))}
                  </List>
                </Box>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{ mt: 3, py: 1.5 }}
                  startIcon={<Assessment />}
                >
                  View All Surgeries
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* Recent Patients */}
        <Card>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
              Recent Patients
            </Typography>
            <List sx={{ p: 0 }}>
              {recentPatients.map((patient, index) => (
                <Box key={patient.id}>
                  <ListItem sx={{ px: 0, py: 2 }}>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: '#1e40af', width: 40, height: 40 }}>
                        <Person sx={{ fontSize: 20 }} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Typography variant="body1" sx={{ fontWeight: 500 }}>
                            {patient.name}
                          </Typography>
                          <Chip
                            label={patient.age + ' years'}
                            size="small"
                            variant="outlined"
                            sx={{ fontSize: '0.7rem' }}
                          />
                          <Chip
                            label={patient.sex}
                            size="small"
                            variant="outlined"
                            sx={{ fontSize: '0.7rem' }}
                          />
                        </Box>
                      }
                      secondary={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            {getStatusIcon(patient.status)}
                            <Typography variant="body2" sx={{ color: '#6b7280' }}>
                              {patient.status}
                            </Typography>
                          </Box>
                          <Typography variant="body2" sx={{ color: '#6b7280' }}>
                            • {patient.proposedTreatment}
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#6b7280' }}>
                            • {patient.center}
                          </Typography>
                        </Box>
                      }
                    />
                    <Chip
                      label={patient.category}
                      color={getStatusColor(patient.category) as any}
                      size="small"
                      variant="outlined"
                      sx={{ fontSize: '0.7rem' }}
                    />
                  </ListItem>
                  {index < recentPatients.length - 1 && (
                    <Divider />
                  )}
                </Box>
              ))}
            </List>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<People />}
                onClick={() => router.push('/all-patients')}
                sx={{ textTransform: 'none' }}
              >
                View All Patients
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Layout>
  );
}
