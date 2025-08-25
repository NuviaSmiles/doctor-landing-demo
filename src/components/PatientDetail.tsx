'use client';

import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
} from '@mui/material';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-toastify';
import { Patient } from '@/data/mockData';

const commentSchema = z.object({
  comment: z.string().min(1, 'Comment is required'),
});

const categorizeSchema = z.object({
  category: z.enum(['CAT 1', 'CAT 2', 'CAT 3', 'CAT 4']),
  documents: z.array(z.string()).optional(),
});

const requestRecordsSchema = z.object({
  documentName: z.string().min(1, 'Document name is required'),
  reason: z.string().min(1, 'Reason is required'),
});

interface PatientDetailProps {
  patient: Patient;
  readOnly?: boolean;
}

export default function PatientDetail({ patient, readOnly = false }: PatientDetailProps) {
  const [commentDialogOpen, setCommentDialogOpen] = useState(false);
  const [categorizeDialogOpen, setCategorizeDialogOpen] = useState(false);
  const [clearDialogOpen, setClearDialogOpen] = useState(false);
  const [disqualifyDialogOpen, setDisqualifyDialogOpen] = useState(false);
  const [requestRecordsDialogOpen, setRequestRecordsDialogOpen] = useState(false);

  const commentForm = useForm({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      comment: '',
    },
  });

  const categorizeForm = useForm({
    resolver: zodResolver(categorizeSchema),
    defaultValues: {
      category: patient.category,
      documents: [],
    },
  });

  const requestRecordsForm = useForm({
    resolver: zodResolver(requestRecordsSchema),
    defaultValues: {
      documentName: '',
      reason: '',
    },
  });

  const handleCommentSubmit = (data: any) => {
    // In a real app, this would save to the backend
    toast.success('Comment added successfully');
    setCommentDialogOpen(false);
    commentForm.reset();
  };

  const handleCategorizeSubmit = (data: any) => {
    // In a real app, this would save to the backend
    toast.success('Patient categorized successfully');
    setCategorizeDialogOpen(false);
    categorizeForm.reset();
  };

  const handleClearPatient = () => {
    // In a real app, this would save to the backend
    toast.success('Patient cleared for surgery');
    setClearDialogOpen(false);
  };

  const handleDisqualifyPatient = () => {
    // In a real app, this would save to the backend
    toast.success('Patient disqualified');
    setDisqualifyDialogOpen(false);
  };

  const handleRequestRecords = (data: any) => {
    // In a real app, this would save to the backend
    toast.success('Records requested successfully');
    setRequestRecordsDialogOpen(false);
    requestRecordsForm.reset();
  };

  const getStatusColor = (status: Patient['status']) => {
    switch (status) {
      case 'Cleared':
        return 'success';
      case 'In Review':
        return 'warning';
      case 'Pending':
        return 'info';
      case 'Disqualified':
        return 'error';
      case 'Completed':
        return 'default';
      default:
        return 'default';
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* Header */}
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 600, color: '#071941', mb: 1 }}>
            {patient.name}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Chip
              label={patient.status}
              color={getStatusColor(patient.status)}
              variant="outlined"
            />
            <Chip
              label={patient.category}
              color="primary"
              variant="outlined"
            />
            <Typography variant="body2" color="text.secondary">
              Surgery Date: {new Date(patient.surgeryDate).toLocaleDateString()}
            </Typography>
          </Box>
        </Box>
        
        {!readOnly && (
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="outlined"
              onClick={() => setCommentDialogOpen(true)}
              disabled={readOnly}
            >
              Comment
            </Button>
            <Button
              variant="outlined"
              onClick={() => setCategorizeDialogOpen(true)}
              disabled={readOnly}
            >
              Categorize
            </Button>
            <Button
              variant="outlined"
              onClick={() => setRequestRecordsDialogOpen(true)}
              disabled={readOnly}
            >
              Request Records
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => setClearDialogOpen(true)}
              disabled={readOnly || patient.status === 'Disqualified'}
            >
              Clear Patient
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => setDisqualifyDialogOpen(true)}
              disabled={readOnly}
            >
              Disqualify
            </Button>
          </Box>
        )}
      </Box>

      <Grid container spacing={3}>
        {/* Basic Information */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Basic Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">Age</Typography>
                  <Typography variant="body1">{patient.age}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">Sex</Typography>
                  <Typography variant="body1">{patient.sex}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" color="text.secondary">Proposed Treatment</Typography>
                  <Typography variant="body1">{patient.proposedTreatment}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" color="text.secondary">Center</Typography>
                  <Typography variant="body1">{patient.center}</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Vitals */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Vitals (Date: {new Date(patient.vitals.date).toLocaleDateString()})
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">Height</Typography>
                  <Typography variant="body1">{patient.vitals.height} cm</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">Weight</Typography>
                  <Typography variant="body1">{patient.vitals.weight} kg</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">BMI</Typography>
                  <Typography variant="body1">{patient.vitals.bmi}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">Blood Pressure</Typography>
                  <Typography variant="body1">{patient.vitals.bp}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">Heart Rate</Typography>
                  <Typography variant="body1">{patient.vitals.hr} bpm</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">SPO2</Typography>
                  <Typography variant="body1">{patient.vitals.spo2}%</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* AI Analysis */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                AI Analysis
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                    AI Callouts
                  </Typography>
                  <List dense>
                    {patient.aiCallouts.map((callout, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemText primary={callout} />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                    AI Recommendations
                  </Typography>
                  <List dense>
                    {patient.aiRecommendations.map((rec, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemText 
                          primary={rec.recommendation}
                          secondary={rec.reason}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                    AI Scheduling Category
                  </Typography>
                  <Typography variant="body1">{patient.aiSchedulingCategory}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                    AI Summary
                  </Typography>
                  <Typography variant="body1">{patient.aiSummary}</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Comments */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Comments
              </Typography>
              <List>
                {patient.comments.map((comment) => (
                  <ListItem key={comment.id} sx={{ px: 0 }}>
                    <ListItemText
                      primary={comment.comment}
                      secondary={`${comment.commenter} - ${new Date(comment.dateTime).toLocaleString()}`}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Requested Documents */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Requested Documents
              </Typography>
              <List>
                {patient.requestedDocuments.map((doc) => (
                  <ListItem key={doc.id} sx={{ px: 0 }}>
                    <ListItemText
                      primary={doc.name}
                      secondary={
                        <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                          <Chip
                            label={doc.available ? 'Available' : 'Not Available'}
                            color={doc.available ? 'success' : 'error'}
                            size="small"
                          />
                          <Chip
                            label={doc.approved ? 'Approved' : 'Not Approved'}
                            color={doc.approved ? 'success' : 'warning'}
                            size="small"
                          />
                          <Chip
                            label={doc.cleared ? 'Cleared' : 'Not Cleared'}
                            color={doc.cleared ? 'success' : 'default'}
                            size="small"
                          />
                        </Box>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Assigned Providers */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Assigned Providers
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                    Surgeons
                  </Typography>
                  <List dense>
                    {patient.assignedSurgeons.map((surgeon, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemText primary={surgeon} />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                    CRNAs
                  </Typography>
                  <List dense>
                    {patient.assignedCRNAs.map((crna, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemText primary={crna} />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                    Travel Coordinators
                  </Typography>
                  <List dense>
                    {patient.assignedTravelCoordinators.map((coordinator, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemText primary={coordinator} />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Clearances and Disqualifications */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Clearances & Disqualifications
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                    Clearances
                  </Typography>
                  {patient.clearances.length > 0 ? (
                    <List dense>
                      {patient.clearances.map((clearance, index) => (
                        <ListItem key={index} sx={{ px: 0 }}>
                          <ListItemText
                            primary={`${clearance.providerName} (${clearance.providerType})`}
                            secondary={`${clearance.cleared ? 'Cleared' : 'Not Cleared'} - ${clearance.date}`}
                          />
                          <Chip
                            label={clearance.cleared ? 'Cleared' : 'Not Cleared'}
                            color={clearance.cleared ? 'success' : 'default'}
                            size="small"
                          />
                        </ListItem>
                      ))}
                    </List>
                  ) : (
                    <Typography variant="body2" color="text.secondary">
                      No clearances recorded
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                    Disqualifications
                  </Typography>
                  {patient.disqualifications.length > 0 ? (
                    <List dense>
                      {patient.disqualifications.map((dq, index) => (
                        <ListItem key={index} sx={{ px: 0 }}>
                          <ListItemText
                            primary={`${dq.providerName}`}
                            secondary={`${dq.reason} - ${dq.date}`}
                          />
                        </ListItem>
                      ))}
                    </List>
                  ) : (
                    <Typography variant="body2" color="text.secondary">
                      No disqualifications recorded
                    </Typography>
                  )}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Dialogs */}
      {/* Comment Dialog */}
      <Dialog open={commentDialogOpen} onClose={() => setCommentDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Add Comment</DialogTitle>
        <form onSubmit={commentForm.handleSubmit(handleCommentSubmit)}>
          <DialogContent>
            <Controller
              name="comment"
              control={commentForm.control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Comment"
                  multiline
                  rows={4}
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setCommentDialogOpen(false)}>Cancel</Button>
            <Button type="submit" variant="contained">Add Comment</Button>
          </DialogActions>
        </form>
      </Dialog>

      {/* Categorize Dialog */}
      <Dialog open={categorizeDialogOpen} onClose={() => setCategorizeDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Categorize Patient</DialogTitle>
        <form onSubmit={categorizeForm.handleSubmit(handleCategorizeSubmit)}>
          <DialogContent>
            <Controller
              name="category"
              control={categorizeForm.control}
              render={({ field, fieldState }) => (
                <FormControl fullWidth error={!!fieldState.error}>
                  <InputLabel>Category</InputLabel>
                  <Select {...field} label="Category">
                    <MenuItem value="CAT 1">CAT 1</MenuItem>
                    <MenuItem value="CAT 2">CAT 2</MenuItem>
                    <MenuItem value="CAT 3">CAT 3</MenuItem>
                    <MenuItem value="CAT 4">CAT 4</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setCategorizeDialogOpen(false)}>Cancel</Button>
            <Button type="submit" variant="contained">Categorize</Button>
          </DialogActions>
        </form>
      </Dialog>

      {/* Clear Patient Dialog */}
      <Dialog open={clearDialogOpen} onClose={() => setClearDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Clear Patient for Surgery</DialogTitle>
        <DialogContent>
          <Alert severity="info" sx={{ mb: 2 }}>
            This action will clear the patient for surgery. Please ensure all required clearances have been obtained.
          </Alert>
          <Typography>
            Are you sure you want to clear {patient.name} for surgery?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setClearDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleClearPatient} variant="contained" color="success">
            Clear Patient
          </Button>
        </DialogActions>
      </Dialog>

      {/* Disqualify Patient Dialog */}
      <Dialog open={disqualifyDialogOpen} onClose={() => setDisqualifyDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Disqualify Patient</DialogTitle>
        <DialogContent>
          <Alert severity="warning" sx={{ mb: 2 }}>
            This action will disqualify the patient from surgery. This action cannot be undone.
          </Alert>
          <Typography>
            Are you sure you want to disqualify {patient.name} from surgery?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDisqualifyDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleDisqualifyPatient} variant="contained" color="error">
            Disqualify Patient
          </Button>
        </DialogActions>
      </Dialog>

      {/* Request Records Dialog */}
      <Dialog open={requestRecordsDialogOpen} onClose={() => setRequestRecordsDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Request Additional Records</DialogTitle>
        <form onSubmit={requestRecordsForm.handleSubmit(handleRequestRecords)}>
          <DialogContent>
            <Controller
              name="documentName"
              control={requestRecordsForm.control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Document Name"
                  fullWidth
                  sx={{ mb: 2 }}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name="reason"
              control={requestRecordsForm.control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Reason for Request"
                  multiline
                  rows={3}
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setRequestRecordsDialogOpen(false)}>Cancel</Button>
            <Button type="submit" variant="contained">Request Records</Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
}
