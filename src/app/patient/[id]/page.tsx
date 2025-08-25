'use client';

import { useParams, useRouter } from 'next/navigation';
import Layout from '@/components/Layout';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  Button,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Alert,
  Paper,
  IconButton,
} from '@mui/material';
import {
  ArrowBack,
  Person,
  LocalHospital,
  Schedule,
  CheckCircle,
  Warning,
  Error,
  CalendarToday,
  LocationOn,
  Phone,
  Email,
  Edit,
  Print,
  Share,
  Assessment,
  TrendingUp,
  People,
  Description,
  Add,
} from '@mui/icons-material';
import { mockPatients } from '@/data/mockData';

export default function PatientDetailPage() {
  const params = useParams();
  const router = useRouter();
  const patientId = params.id as string;
  
  const patient = mockPatients.find(p => p.id === patientId);
  
  if (!patient) {
    return (
      <Layout title="Patient Not Found">
        <Alert severity="error">
          Patient not found. Please check the patient ID and try again.
        </Alert>
      </Layout>
    );
  }

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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'CAT 1':
        return 'success';
      case 'CAT 2':
        return 'warning';
      case 'CAT 3':
      case 'CAT 4':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Layout title={`${patient.name} - Patient Details`}>
      <Box sx={{ 
        maxWidth: '100%',
        backgroundColor: 'white',
        minHeight: '100vh',
        borderRadius: 0,
      }}>
        {/* Header */}
        <Box sx={{ 
          mb: 4,
          p: 3,
          borderBottom: '1px solid #e5e7eb',
          backgroundColor: 'white',
        }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            mb: 3,
            justifyContent: 'space-between',
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                onClick={() => router.back()}
                sx={{ 
                  mr: 3, 
                  backgroundColor: '#f3f4f6', 
                  borderRadius: 0,
                  '&:hover': { 
                    backgroundColor: '#e5e7eb',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  },
                  transition: 'all 0.2s ease-in-out',
                }}
              >
                <ArrowBack />
              </IconButton>
              <Box>
                <Typography variant="h4" sx={{ 
                  fontWeight: 700, 
                  color: '#1f2937',
                  mb: 0.5,
                }}>
                  Patient Details
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: '#6b7280',
                  fontWeight: 500,
                }}>
                  Comprehensive patient information and medical records
                </Typography>
              </Box>
            </Box>
          </Box>
          
          {/* Patient Header Card */}
          <Card sx={{ 
            mb: 4, 
            backgroundColor: 'white',
            borderRadius: 0,
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            border: '1px solid #e5e7eb',
          }}>
            <CardContent sx={{ p: 4 }}>
              <Grid container spacing={3} alignItems="center">
                <Grid item>
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      bgcolor: '#3b82f6',
                      fontSize: '2rem',
                      border: '2px solid #e5e7eb',
                    }}
                  >
                    <Person sx={{ fontSize: 40 }} />
                  </Avatar>
                </Grid>
                <Grid item xs>
                  <Typography variant="h4" sx={{ 
                    fontWeight: 700, 
                    mb: 2,
                    color: '#1f2937',
                  }}>
                    {patient.name}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, flexWrap: 'wrap' }}>
                    <Chip
                      label={patient.status}
                      color={getStatusColor(patient.status) as any}
                      variant="outlined"
                      sx={{ 
                        borderRadius: 0,
                        fontWeight: 600,
                        borderWidth: '2px',
                      }}
                    />
                    <Chip
                      label={patient.category}
                      color={getCategoryColor(patient.category) as any}
                      variant="outlined"
                      sx={{ 
                        borderRadius: 0,
                        fontWeight: 600,
                        borderWidth: '2px',
                      }}
                    />
                    <Typography variant="body1" sx={{ 
                      color: '#6b7280',
                      fontWeight: 500,
                      backgroundColor: '#f9fafb',
                      px: 2,
                      py: 0.5,
                      borderRadius: 0,
                      border: '1px solid #e5e7eb',
                    }}>
                      {patient.age} years old • {patient.sex}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 1,
                      backgroundColor: '#f9fafb',
                      px: 2,
                      py: 1,
                      borderRadius: 0,
                      border: '1px solid #e5e7eb',
                    }}>
                      <CalendarToday sx={{ fontSize: 18, color: '#6b7280' }} />
                      <Typography variant="body2" sx={{ color: '#374151', fontWeight: 500 }}>
                        Surgery: {new Date(patient.surgeryDate).toLocaleDateString()}
                      </Typography>
                    </Box>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 1,
                      backgroundColor: '#f9fafb',
                      px: 2,
                      py: 1,
                      borderRadius: 0,
                      border: '1px solid #e5e7eb',
                    }}>
                      <LocationOn sx={{ fontSize: 18, color: '#6b7280' }} />
                      <Typography variant="body2" sx={{ color: '#374151', fontWeight: 500 }}>
                        {patient.center}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item>
                  <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                    <Button
                      variant="outlined"
                      startIcon={<Edit />}
                      sx={{ 
                        borderRadius: 0,
                        fontWeight: 600,
                        borderWidth: '2px',
                        '&:hover': { 
                          backgroundColor: '#f3f4f6',
                        },
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<Print />}
                      sx={{ 
                        borderRadius: 0,
                        fontWeight: 600,
                        borderWidth: '2px',
                        '&:hover': { 
                          backgroundColor: '#f3f4f6',
                        },
                      }}
                    >
                      Print
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<Share />}
                      sx={{ 
                        borderRadius: 0,
                        fontWeight: 600,
                        borderWidth: '2px',
                        '&:hover': { 
                          backgroundColor: '#f3f4f6',
                        },
                      }}
                    >
                      Share
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>

        {/* Main Content */}
        <Box sx={{ p: 3 }}>
          <Grid container spacing={4}>
          {/* Left Column */}
          <Grid item xs={12} md={8}>
            {/* Treatment Information */}
            <Card sx={{ 
              mb: 4,
              borderRadius: 0,
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
              border: '1px solid #e5e7eb',
            }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ 
                  fontWeight: 700, 
                  mb: 4,
                  color: '#1f2937',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}>
                  <LocalHospital sx={{ color: '#3b82f6', fontSize: 28 }} />
                  Treatment Information
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" sx={{ color: '#6b7280', mb: 0.5 }}>
                      Proposed Treatment
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {patient.proposedTreatment}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" sx={{ color: '#6b7280', mb: 0.5 }}>
                      Surgery Date
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {new Date(patient.surgeryDate).toLocaleDateString()}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" sx={{ color: '#6b7280', mb: 0.5 }}>
                      Center
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {patient.center}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" sx={{ color: '#6b7280', mb: 0.5 }}>
                      Status
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      {getStatusIcon(patient.status)}
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {patient.status}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Vitals */}
            <Card sx={{ 
              mb: 4,
              borderRadius: 0,
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
              border: '1px solid #e5e7eb',
            }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ 
                  fontWeight: 700, 
                  mb: 4,
                  color: '#1f2937',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}>
                  <Assessment sx={{ color: '#10b981', fontSize: 28 }} />
                  Vital Signs
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm={4} md={2}>
                    <Box sx={{ 
                      p: 3, 
                      backgroundColor: '#f8fafc', 
                      borderRadius: 0,
                      border: '1px solid #e2e8f0',
                      textAlign: 'center',
                      '&:hover': {
                        backgroundColor: '#f1f5f9',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      },
                      transition: 'all 0.2s ease-in-out',
                    }}>
                      <Typography variant="body2" sx={{ color: '#6b7280', mb: 1, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.75rem' }}>
                        Height
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#1f2937', fontSize: '1.1rem' }}>
                        {patient.vitals.height} cm
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} sm={4} md={2}>
                    <Box sx={{ 
                      p: 3, 
                      backgroundColor: '#f8fafc', 
                      borderRadius: 0,
                      border: '1px solid #e2e8f0',
                      textAlign: 'center',
                      '&:hover': {
                        backgroundColor: '#f1f5f9',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      },
                      transition: 'all 0.2s ease-in-out',
                    }}>
                      <Typography variant="body2" sx={{ color: '#6b7280', mb: 1, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Weight
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#1f2937' }}>
                        {patient.vitals.weight} kg
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} sm={4} md={2}>
                    <Box sx={{ 
                      p: 3, 
                      backgroundColor: '#f8fafc', 
                      borderRadius: 0,
                      border: '1px solid #e2e8f0',
                      textAlign: 'center',
                      '&:hover': {
                        backgroundColor: '#f1f5f9',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      },
                      transition: 'all 0.2s ease-in-out',
                    }}>
                      <Typography variant="body2" sx={{ color: '#6b7280', mb: 1, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        BMI
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#1f2937' }}>
                        {patient.vitals.bmi}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <Box sx={{ 
                      p: 3, 
                      backgroundColor: '#f8fafc', 
                      borderRadius: 0,
                      border: '1px solid #e2e8f0',
                      textAlign: 'center',
                      '&:hover': {
                        backgroundColor: '#f1f5f9',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      },
                      transition: 'all 0.2s ease-in-out',
                    }}>
                      <Typography variant="body2" sx={{ color: '#6b7280', mb: 1, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Blood Pressure
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#1f2937' }}>
                        {patient.vitals.bp}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <Box sx={{ 
                      p: 3, 
                      backgroundColor: '#f8fafc', 
                      borderRadius: 0,
                      border: '1px solid #e2e8f0',
                      textAlign: 'center',
                      '&:hover': {
                        backgroundColor: '#f1f5f9',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      },
                      transition: 'all 0.2s ease-in-out',
                    }}>
                      <Typography variant="body2" sx={{ color: '#6b7280', mb: 1, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Heart Rate
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#1f2937' }}>
                        {patient.vitals.hr} bpm
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <Box sx={{ 
                      p: 3, 
                      backgroundColor: '#f8fafc', 
                      borderRadius: 0,
                      border: '1px solid #e2e8f0',
                      textAlign: 'center',
                      '&:hover': {
                        backgroundColor: '#f1f5f9',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      },
                      transition: 'all 0.2s ease-in-out',
                    }}>
                      <Typography variant="body2" sx={{ color: '#6b7280', mb: 1, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        SpO2
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#1f2937' }}>
                        {patient.vitals.spo2}%
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Typography variant="caption" sx={{ color: '#6b7280', mt: 2, display: 'block' }}>
                  Last updated: {new Date(patient.vitals.date).toLocaleDateString()}
                </Typography>
              </CardContent>
            </Card>

            {/* Requested Documents */}
            <Card sx={{ 
              mb: 4,
              borderRadius: 0,
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
              border: '1px solid #e5e7eb',
            }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ 
                  fontWeight: 700, 
                  mb: 4,
                  color: '#1f2937',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}>
                  <Description sx={{ color: '#8b5cf6', fontSize: 28 }} />
                  Requested Documents
                </Typography>
                
                <List sx={{ p: 0 }}>
                  {patient.requestedDocuments.map((document, index) => (
                    <Box key={document.id}>
                      <ListItem 
                        sx={{ 
                          px: 0, 
                          py: 2,
                          cursor: 'pointer',
                          '&:hover': {
                            backgroundColor: '#f9fafb',
                            borderRadius: 0,
                          },
                          transition: 'background-color 0.2s ease-in-out',
                        }}
                        onClick={() => router.push(`/patient/${patient.id}/document/${document.id}`)}
                      >
                        <ListItemAvatar>
                          <Avatar sx={{ 
                            width: 40, 
                            height: 40, 
                            bgcolor: document.cleared ? '#10b981' : document.approved ? '#f59e0b' : '#6b7280',
                            fontSize: '0.875rem',
                          }}>
                            <Description sx={{ fontSize: 20 }} />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                              <Typography variant="body1" sx={{ fontWeight: 600, color: '#1f2937' }}>
                                {document.name}
                              </Typography>
                              <Box sx={{ display: 'flex', gap: 1 }}>
                                <Chip
                                  label={document.available ? 'Available' : 'Not Available'}
                                  size="small"
                                  color={document.available ? 'success' : 'default'}
                                  variant="outlined"
                                  sx={{ borderRadius: 0, fontSize: '0.7rem', height: 20 }}
                                />
                                <Chip
                                  label={document.approved ? 'Approved' : 'Pending Approval'}
                                  size="small"
                                  color={document.approved ? 'success' : 'warning'}
                                  variant="outlined"
                                  sx={{ borderRadius: 0, fontSize: '0.7rem', height: 20 }}
                                />
                                <Chip
                                  label={document.cleared ? 'Cleared' : 'Not Cleared'}
                                  size="small"
                                  color={document.cleared ? 'success' : 'error'}
                                  variant="outlined"
                                  sx={{ borderRadius: 0, fontSize: '0.7rem', height: 20 }}
                                />
                              </Box>
                            </Box>
                          }
                          secondary={
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <Typography variant="body2" sx={{ color: '#6b7280' }}>
                                Click to view document details
                              </Typography>
                              <ArrowBack sx={{ fontSize: 16, color: '#6b7280', transform: 'rotate(180deg)' }} />
                            </Box>
                          }
                        />
                      </ListItem>
                      {index < patient.requestedDocuments.length - 1 && (
                        <Divider sx={{ my: 1 }} />
                      )}
                    </Box>
                  ))}
                </List>
                
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{ 
                    mt: 3,
                    borderRadius: 0,
                    borderWidth: '2px',
                    fontWeight: 600,
                  }}
                  startIcon={<Add />}
                >
                  Request New Document
                </Button>
              </CardContent>
            </Card>

            {/* AI Recommendations */}
            <Card sx={{ 
              mb: 4,
              borderRadius: 0,
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
              border: '1px solid #e5e7eb',
            }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ 
                  fontWeight: 700, 
                  mb: 4,
                  color: '#1f2937',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}>
                  <TrendingUp sx={{ color: '#f59e0b', fontSize: 28 }} />
                  AI Analysis & Recommendations
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body2" sx={{ color: '#6b7280', mb: 1 }}>
                    Summary
                  </Typography>
                  <Paper sx={{ p: 2, backgroundColor: '#f9fafb' }}>
                    <Typography variant="body1">
                      {patient.aiSummary}
                    </Typography>
                  </Paper>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="body2" sx={{ color: '#6b7280', mb: 1 }}>
                    Key Callouts
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {patient.aiCallouts.map((callout, index) => (
                      <Chip
                        key={index}
                        label={callout}
                        size="small"
                        variant="outlined"
                        color="warning"
                      />
                    ))}
                  </Box>
                </Box>

                <Box>
                  <Typography variant="body2" sx={{ color: '#6b7280', mb: 1 }}>
                    Recommendations
                  </Typography>
                  <List sx={{ p: 0 }}>
                    {patient.aiRecommendations.map((rec, index) => (
                      <ListItem key={index} sx={{ px: 0, py: 1 }}>
                        <ListItemAvatar>
                          <Avatar sx={{ width: 24, height: 24, bgcolor: '#1e40af', fontSize: '0.75rem' }}>
                            {index + 1}
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={rec.recommendation}
                          secondary={rec.reason}
                          primaryTypographyProps={{ fontWeight: 500 }}
                          secondaryTypographyProps={{ color: '#6b7280' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={4}>
            {/* Assigned Team */}
            <Card sx={{ 
              mb: 4,
              borderRadius: 0,
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
              border: '1px solid #e5e7eb',
            }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ 
                  fontWeight: 700, 
                  mb: 4,
                  color: '#1f2937',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}>
                  <People sx={{ color: '#8b5cf6', fontSize: 28 }} />
                  Assigned Team
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body2" sx={{ color: '#6b7280', mb: 1, fontWeight: 500 }}>
                    Surgeons
                  </Typography>
                  <List sx={{ p: 0 }}>
                    {patient.assignedSurgeons.map((surgeon, index) => (
                      <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                        <ListItemAvatar>
                          <Avatar sx={{ width: 32, height: 32, bgcolor: '#1e40af', fontSize: '0.875rem' }}>
                            <LocalHospital sx={{ fontSize: 16 }} />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={surgeon}
                          primaryTypographyProps={{ fontSize: '0.875rem', fontWeight: 500 }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="body2" sx={{ color: '#6b7280', mb: 1, fontWeight: 500 }}>
                    CRNAs
                  </Typography>
                  <List sx={{ p: 0 }}>
                    {patient.assignedCRNAs.map((crna, index) => (
                      <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                        <ListItemAvatar>
                          <Avatar sx={{ width: 32, height: 32, bgcolor: '#059669', fontSize: '0.875rem' }}>
                            <Person sx={{ fontSize: 16 }} />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={crna}
                          primaryTypographyProps={{ fontSize: '0.875rem', fontWeight: 500 }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>

                <Box>
                  <Typography variant="body2" sx={{ color: '#6b7280', mb: 1, fontWeight: 500 }}>
                    Travel Coordinators
                  </Typography>
                  <List sx={{ p: 0 }}>
                    {patient.assignedTravelCoordinators.map((coordinator, index) => (
                      <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                        <ListItemAvatar>
                          <Avatar sx={{ width: 32, height: 32, bgcolor: '#f59e0b', fontSize: '0.875rem' }}>
                            <Person sx={{ fontSize: 16 }} />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={coordinator}
                          primaryTypographyProps={{ fontSize: '0.875rem', fontWeight: 500 }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </CardContent>
            </Card>

            {/* Recent Comments */}
            <Card sx={{ 
              mb: 4,
              borderRadius: 0,
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
              border: '1px solid #e5e7eb',
            }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ 
                  fontWeight: 700, 
                  mb: 4,
                  color: '#1f2937',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}>
                  <Person sx={{ color: '#ef4444', fontSize: 28 }} />
                  Recent Comments
                </Typography>
                <List sx={{ p: 0 }}>
                  {patient.comments.map((comment, index) => (
                    <Box key={comment.id}>
                      <ListItem sx={{ px: 0, py: 1 }}>
                        <ListItemAvatar>
                          <Avatar sx={{ width: 32, height: 32, bgcolor: '#1e40af', fontSize: '0.75rem' }}>
                            {comment.commenter.charAt(0)}
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={comment.commenter}
                          secondary={
                            <Box>
                              <Typography variant="body2" sx={{ color: '#374151', mb: 0.5 }}>
                                {comment.comment}
                              </Typography>
                              <Typography variant="caption" sx={{ color: '#6b7280' }}>
                                {new Date(comment.dateTime).toLocaleString()}
                              </Typography>
                            </Box>
                          }
                          primaryTypographyProps={{ fontSize: '0.875rem', fontWeight: 500 }}
                        />
                      </ListItem>
                      {index < patient.comments.length - 1 && (
                        <Divider sx={{ my: 1 }} />
                      )}
                    </Box>
                  ))}
                </List>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Add Comment
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card sx={{ 
              borderRadius: 0,
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
              border: '1px solid #e5e7eb',
            }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ 
                  fontWeight: 700, 
                  mb: 4,
                  color: '#1f2937',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}>
                  <Schedule sx={{ color: '#06b6d4', fontSize: 28 }} />
                  Quick Actions
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Button
                    variant="contained"
                    color="success"
                    fullWidth
                    startIcon={<CheckCircle />}
                  >
                    Clear Patient
                  </Button>
                  <Button
                    variant="outlined"
                    color="warning"
                    fullWidth
                    startIcon={<Warning />}
                  >
                    Request Documents
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    fullWidth
                    startIcon={<Error />}
                  >
                    Disqualify Patient
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
}
