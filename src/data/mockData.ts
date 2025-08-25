export interface Patient {
  id: string;
  name: string;
  age: number;
  sex: 'Male' | 'Female';
  status: 'Pending' | 'In Review' | 'Cleared' | 'Disqualified' | 'Completed';
  category: 'CAT 1' | 'CAT 2' | 'CAT 3' | 'CAT 4' | 'Uncategorized';
  surgeryDate: string;
  proposedTreatment: 'Upper' | 'Lower' | 'Upper and Lower';
  center: string;
  assignedSurgeons: string[];
  assignedCRNAs: string[];
  assignedTravelCoordinators: string[];
  vitals: {
    height: number;
    weight: number;
    bmi: number;
    bp: string;
    hr: number;
    spo2: number;
    date: string;
  };
  aiCallouts: string[];
  aiRecommendations: Array<{
    recommendation: string;
    reason: string;
  }>;
  aiSchedulingCategory: string;
  aiSummary: string;
  comments: Array<{
    id: string;
    commenter: string;
    comment: string;
    dateTime: string;
  }>;
  requestedDocuments: Array<{
    id: string;
    name: string;
    available: boolean;
    approved: boolean;
    cleared: boolean;
  }>;
  clearances: Array<{
    providerId: string;
    providerName: string;
    providerType: 'Surgeon' | 'CRNA';
    cleared: boolean;
    date: string;
  }>;
  disqualifications: Array<{
    providerId: string;
    providerName: string;
    reason: string;
    date: string;
  }>;
}

export interface Provider {
  id: string;
  name: string;
  type: 'Surgeon' | 'CRNA' | 'Travel Coordinator';
  center: string;
  email: string;
  phone: string;
}

export const mockPatients: Patient[] = [
  {
    id: '1',
    name: 'John Smith',
    age: 45,
    sex: 'Male',
    status: 'In Review',
    category: 'CAT 2',
    surgeryDate: '2024-02-15',
    proposedTreatment: 'Upper and Lower',
    center: 'Phoenix Center',
    assignedSurgeons: ['Dr. Sarah Johnson', 'Dr. Michael Chen'],
    assignedCRNAs: ['CRNA Lisa Rodriguez'],
    assignedTravelCoordinators: ['Travel Coordinator Maria Garcia'],
    vitals: {
      height: 175,
      weight: 80,
      bmi: 26.1,
      bp: '120/80',
      hr: 72,
      spo2: 98,
      date: '2024-01-15',
    },
    aiCallouts: [
      'Elevated BMI - requires clearance',
      'History of hypertension noted',
      'Missing dental records',
    ],
    aiRecommendations: [
      {
        recommendation: 'Request cardiology clearance',
        reason: 'Patient has history of hypertension and elevated BMI',
      },
      {
        recommendation: 'Obtain dental records',
        reason: 'Missing comprehensive dental history',
      },
    ],
    aiSchedulingCategory: 'CAT 2 - Requires Additional Clearance',
    aiSummary: 'Patient presents with good overall health but requires cardiology clearance due to hypertension history and elevated BMI. Dental records are incomplete and need to be obtained.',
    comments: [
      {
        id: '1',
        commenter: 'Dr. Sarah Johnson',
        comment: 'Patient cleared for surgery pending cardiology clearance',
        dateTime: '2024-01-20T10:30:00Z',
      },
      {
        id: '2',
        commenter: 'CRNA Lisa Rodriguez',
        comment: 'Anesthesia clearance approved',
        dateTime: '2024-01-21T14:15:00Z',
      },
    ],
    requestedDocuments: [
      {
        id: '1',
        name: 'Cardiology Clearance',
        available: false,
        approved: false,
        cleared: false,
      },
      {
        id: '2',
        name: 'Dental Records',
        available: true,
        approved: true,
        cleared: true,
      },
    ],
    clearances: [
      {
        providerId: 'surgeon1',
        providerName: 'Dr. Sarah Johnson',
        providerType: 'Surgeon',
        cleared: true,
        date: '2024-01-20',
      },
      {
        providerId: 'crna1',
        providerName: 'CRNA Lisa Rodriguez',
        providerType: 'CRNA',
        cleared: true,
        date: '2024-01-21',
      },
    ],
    disqualifications: [],
  },
  {
    id: '2',
    name: 'Emily Davis',
    age: 38,
    sex: 'Female',
    status: 'Cleared',
    category: 'CAT 1',
    surgeryDate: '2024-02-10',
    proposedTreatment: 'Upper',
    center: 'Phoenix Center',
    assignedSurgeons: ['Dr. Michael Chen'],
    assignedCRNAs: ['CRNA David Wilson'],
    assignedTravelCoordinators: ['Travel Coordinator Maria Garcia'],
    vitals: {
      height: 165,
      weight: 60,
      bmi: 22.0,
      bp: '110/70',
      hr: 68,
      spo2: 99,
      date: '2024-01-10',
    },
    aiCallouts: [
      'All clearances obtained',
      'Patient ready for surgery',
    ],
    aiRecommendations: [
      {
        recommendation: 'Proceed with surgery as scheduled',
        reason: 'All clearances obtained and patient meets all criteria',
      },
    ],
    aiSchedulingCategory: 'CAT 1 - Ready for Surgery',
    aiSummary: 'Patient is in excellent health with no contraindications. All required documents have been obtained and approved.',
    comments: [
      {
        id: '3',
        commenter: 'Dr. Michael Chen',
        comment: 'Patient cleared for surgery',
        dateTime: '2024-01-12T09:00:00Z',
      },
      {
        id: '4',
        commenter: 'CRNA David Wilson',
        comment: 'Anesthesia clearance approved',
        dateTime: '2024-01-12T11:30:00Z',
      },
    ],
    requestedDocuments: [
      {
        id: '3',
        name: 'Medical History',
        available: true,
        approved: true,
        cleared: true,
      },
      {
        id: '4',
        name: 'Dental Records',
        available: true,
        approved: true,
        cleared: true,
      },
    ],
    clearances: [
      {
        providerId: 'surgeon2',
        providerName: 'Dr. Michael Chen',
        providerType: 'Surgeon',
        cleared: true,
        date: '2024-01-12',
      },
      {
        providerId: 'crna2',
        providerName: 'CRNA David Wilson',
        providerType: 'CRNA',
        cleared: true,
        date: '2024-01-12',
      },
    ],
    disqualifications: [],
  },
  {
    id: '3',
    name: 'Robert Wilson',
    age: 52,
    sex: 'Male',
    status: 'Disqualified',
    category: 'CAT 4',
    surgeryDate: '2024-02-20',
    proposedTreatment: 'Lower',
    center: 'Phoenix Center',
    assignedSurgeons: ['Dr. Sarah Johnson'],
    assignedCRNAs: ['CRNA Lisa Rodriguez'],
    assignedTravelCoordinators: ['Travel Coordinator Maria Garcia'],
    vitals: {
      height: 180,
      weight: 95,
      bmi: 29.3,
      bp: '140/90',
      hr: 85,
      spo2: 95,
      date: '2024-01-18',
    },
    aiCallouts: [
      'Severe hypertension',
      'High BMI',
      'Multiple comorbidities',
    ],
    aiRecommendations: [
      {
        recommendation: 'Disqualify patient for surgery',
        reason: 'Multiple uncontrolled comorbidities pose significant surgical risk',
      },
    ],
    aiSchedulingCategory: 'CAT 4 - High Risk',
    aiSummary: 'Patient has multiple uncontrolled comorbidities including severe hypertension and high BMI. Surgical risk is too high for safe procedure.',
    comments: [
      {
        id: '5',
        commenter: 'Dr. Sarah Johnson',
        comment: 'Patient disqualified due to uncontrolled hypertension and high surgical risk',
        dateTime: '2024-01-19T16:45:00Z',
      },
    ],
    requestedDocuments: [
      {
        id: '5',
        name: 'Cardiology Records',
        available: true,
        approved: false,
        cleared: false,
      },
    ],
    clearances: [],
    disqualifications: [
      {
        providerId: 'surgeon1',
        providerName: 'Dr. Sarah Johnson',
        reason: 'Uncontrolled hypertension and high surgical risk',
        date: '2024-01-19',
      },
    ],
  },
  {
    id: '4',
    name: 'Jennifer Martinez',
    age: 29,
    sex: 'Female',
    status: 'Pending',
    category: 'CAT 1',
    surgeryDate: '2024-03-05',
    proposedTreatment: 'Upper and Lower',
    center: 'Tucson Center',
    assignedSurgeons: ['Dr. Sarah Johnson'],
    assignedCRNAs: ['CRNA Lisa Rodriguez'],
    assignedTravelCoordinators: ['Travel Coordinator Maria Garcia'],
    vitals: {
      height: 160,
      weight: 55,
      bmi: 21.5,
      bp: '105/65',
      hr: 70,
      spo2: 99,
      date: '2024-01-25',
    },
    aiCallouts: [
      'Missing pre-operative blood work',
      'Dental clearance pending',
    ],
    aiRecommendations: [
      {
        recommendation: 'Obtain pre-operative blood work',
        reason: 'Required for surgical clearance',
      },
      {
        recommendation: 'Request dental clearance',
        reason: 'Pending dental evaluation',
      },
    ],
    aiSchedulingCategory: 'CAT 1 - Pending Documentation',
    aiSummary: 'Young patient in excellent health. Requires completion of pre-operative blood work and dental clearance before proceeding.',
    comments: [
      {
        id: '6',
        commenter: 'Dr. Sarah Johnson',
        comment: 'Patient evaluation completed, waiting for blood work results',
        dateTime: '2024-01-26T13:20:00Z',
      },
    ],
    requestedDocuments: [
      {
        id: '6',
        name: 'Pre-operative Blood Work',
        available: false,
        approved: false,
        cleared: false,
      },
      {
        id: '7',
        name: 'Dental Clearance',
        available: false,
        approved: false,
        cleared: false,
      },
    ],
    clearances: [],
    disqualifications: [],
  },
  {
    id: '5',
    name: 'Michael Thompson',
    age: 41,
    sex: 'Male',
    status: 'Cleared',
    category: 'CAT 2',
    surgeryDate: '2024-02-25',
    proposedTreatment: 'Lower',
    center: 'Scottsdale Center',
    assignedSurgeons: ['Dr. Michael Chen'],
    assignedCRNAs: ['CRNA David Wilson'],
    assignedTravelCoordinators: ['Travel Coordinator Maria Garcia'],
    vitals: {
      height: 178,
      weight: 85,
      bmi: 26.8,
      bp: '125/82',
      hr: 75,
      spo2: 97,
      date: '2024-01-22',
    },
    aiCallouts: [
      'Mild hypertension controlled with medication',
      'All clearances obtained',
    ],
    aiRecommendations: [
      {
        recommendation: 'Proceed with surgery as scheduled',
        reason: 'Hypertension well-controlled, all clearances obtained',
      },
    ],
    aiSchedulingCategory: 'CAT 2 - Cleared for Surgery',
    aiSummary: 'Patient has well-controlled hypertension and all required clearances have been obtained. Ready for scheduled surgery.',
    comments: [
      {
        id: '7',
        commenter: 'Dr. Michael Chen',
        comment: 'Patient cleared for surgery - hypertension well controlled',
        dateTime: '2024-01-23T10:15:00Z',
      },
      {
        id: '8',
        commenter: 'CRNA David Wilson',
        comment: 'Anesthesia clearance approved',
        dateTime: '2024-01-23T15:30:00Z',
      },
    ],
    requestedDocuments: [
      {
        id: '8',
        name: 'Cardiology Clearance',
        available: true,
        approved: true,
        cleared: true,
      },
      {
        id: '9',
        name: 'Medical History',
        available: true,
        approved: true,
        cleared: true,
      },
    ],
    clearances: [
      {
        providerId: 'surgeon2',
        providerName: 'Dr. Michael Chen',
        providerType: 'Surgeon',
        cleared: true,
        date: '2024-01-23',
      },
      {
        providerId: 'crna2',
        providerName: 'CRNA David Wilson',
        providerType: 'CRNA',
        cleared: true,
        date: '2024-01-23',
      },
    ],
    disqualifications: [],
  },
  {
    id: '6',
    name: 'Sarah Williams',
    age: 35,
    sex: 'Female',
    status: 'In Review',
    category: 'CAT 3',
    surgeryDate: '2024-03-10',
    proposedTreatment: 'Upper',
    center: 'Mesa Center',
    assignedSurgeons: ['Dr. Sarah Johnson'],
    assignedCRNAs: ['CRNA Lisa Rodriguez'],
    assignedTravelCoordinators: ['Travel Coordinator Maria Garcia'],
    vitals: {
      height: 168,
      weight: 72,
      bmi: 25.5,
      bp: '118/78',
      hr: 72,
      spo2: 98,
      date: '2024-01-28',
    },
    aiCallouts: [
      'History of sleep apnea',
      'Requires sleep study evaluation',
      'BMI borderline',
    ],
    aiRecommendations: [
      {
        recommendation: 'Obtain sleep study results',
        reason: 'History of sleep apnea requires evaluation',
      },
      {
        recommendation: 'Request pulmonology consultation',
        reason: 'Sleep apnea history may affect anesthesia',
      },
    ],
    aiSchedulingCategory: 'CAT 3 - Requires Specialized Clearance',
    aiSummary: 'Patient has history of sleep apnea requiring specialized evaluation. BMI is borderline and requires careful monitoring.',
    comments: [
      {
        id: '9',
        commenter: 'Dr. Sarah Johnson',
        comment: 'Patient evaluation in progress - sleep study results pending',
        dateTime: '2024-01-29T11:45:00Z',
      },
    ],
    requestedDocuments: [
      {
        id: '10',
        name: 'Sleep Study Results',
        available: false,
        approved: false,
        cleared: false,
      },
      {
        id: '11',
        name: 'Pulmonology Clearance',
        available: false,
        approved: false,
        cleared: false,
      },
    ],
    clearances: [],
    disqualifications: [],
  },
  {
    id: '7',
    name: 'David Rodriguez',
    age: 48,
    sex: 'Male',
    status: 'Completed',
    category: 'CAT 1',
    surgeryDate: '2024-01-20',
    proposedTreatment: 'Upper and Lower',
    center: 'Phoenix Center',
    assignedSurgeons: ['Dr. Michael Chen'],
    assignedCRNAs: ['CRNA David Wilson'],
    assignedTravelCoordinators: ['Travel Coordinator Maria Garcia'],
    vitals: {
      height: 175,
      weight: 78,
      bmi: 25.5,
      bp: '120/80',
      hr: 70,
      spo2: 98,
      date: '2024-01-15',
    },
    aiCallouts: [
      'Surgery completed successfully',
      'Patient recovering well',
    ],
    aiRecommendations: [
      {
        recommendation: 'Continue post-operative monitoring',
        reason: 'Surgery completed successfully',
      },
    ],
    aiSchedulingCategory: 'CAT 1 - Completed',
    aiSummary: 'Patient underwent successful surgery and is recovering well. All post-operative protocols are being followed.',
    comments: [
      {
        id: '10',
        commenter: 'Dr. Michael Chen',
        comment: 'Surgery completed successfully',
        dateTime: '2024-01-20T16:30:00Z',
      },
      {
        id: '11',
        commenter: 'CRNA David Wilson',
        comment: 'Anesthesia administered without complications',
        dateTime: '2024-01-20T17:00:00Z',
      },
    ],
    requestedDocuments: [
      {
        id: '12',
        name: 'Post-operative Report',
        available: true,
        approved: true,
        cleared: true,
      },
    ],
    clearances: [
      {
        providerId: 'surgeon2',
        providerName: 'Dr. Michael Chen',
        providerType: 'Surgeon',
        cleared: true,
        date: '2024-01-15',
      },
      {
        providerId: 'crna2',
        providerName: 'CRNA David Wilson',
        providerType: 'CRNA',
        cleared: true,
        date: '2024-01-15',
      },
    ],
    disqualifications: [],
  },
  {
    id: '8',
    name: 'Lisa Anderson',
    age: 31,
    sex: 'Female',
    status: 'Pending',
    category: 'CAT 2',
    surgeryDate: '2024-03-15',
    proposedTreatment: 'Lower',
    center: 'Tucson Center',
    assignedSurgeons: ['Dr. Sarah Johnson'],
    assignedCRNAs: ['CRNA Lisa Rodriguez'],
    assignedTravelCoordinators: ['Travel Coordinator Maria Garcia'],
    vitals: {
      height: 162,
      weight: 58,
      bmi: 22.1,
      bp: '112/74',
      hr: 68,
      spo2: 99,
      date: '2024-01-30',
    },
    aiCallouts: [
      'Missing insurance verification',
      'Travel arrangements pending',
    ],
    aiRecommendations: [
      {
        recommendation: 'Complete insurance verification',
        reason: 'Required for surgical approval',
      },
      {
        recommendation: 'Arrange travel accommodations',
        reason: 'Patient traveling from out of state',
      },
    ],
    aiSchedulingCategory: 'CAT 2 - Administrative Pending',
    aiSummary: 'Patient is medically cleared but requires completion of administrative tasks including insurance verification and travel arrangements.',
    comments: [
      {
        id: '12',
        commenter: 'Travel Coordinator Maria Garcia',
        comment: 'Working on travel arrangements and insurance verification',
        dateTime: '2024-01-31T09:15:00Z',
      },
    ],
    requestedDocuments: [
      {
        id: '13',
        name: 'Insurance Verification',
        available: false,
        approved: false,
        cleared: false,
      },
      {
        id: '14',
        name: 'Travel Confirmation',
        available: false,
        approved: false,
        cleared: false,
      },
    ],
    clearances: [
      {
        providerId: 'surgeon1',
        providerName: 'Dr. Sarah Johnson',
        providerType: 'Surgeon',
        cleared: true,
        date: '2024-01-30',
      },
    ],
    disqualifications: [],
  },
  {
    id: '9',
    name: 'James Brown',
    age: 56,
    sex: 'Male',
    status: 'Disqualified',
    category: 'CAT 4',
    surgeryDate: '2024-03-20',
    proposedTreatment: 'Upper and Lower',
    center: 'Scottsdale Center',
    assignedSurgeons: ['Dr. Michael Chen'],
    assignedCRNAs: ['CRNA David Wilson'],
    assignedTravelCoordinators: ['Travel Coordinator Maria Garcia'],
    vitals: {
      height: 182,
      weight: 110,
      bmi: 33.2,
      bp: '150/95',
      hr: 90,
      spo2: 92,
      date: '2024-02-01',
    },
    aiCallouts: [
      'Severe obesity',
      'Uncontrolled hypertension',
      'Low oxygen saturation',
      'Multiple cardiac risk factors',
    ],
    aiRecommendations: [
      {
        recommendation: 'Disqualify patient for surgery',
        reason: 'Multiple uncontrolled comorbidities and high surgical risk',
      },
    ],
    aiSchedulingCategory: 'CAT 4 - High Risk',
    aiSummary: 'Patient has severe obesity, uncontrolled hypertension, and low oxygen saturation. Multiple cardiac risk factors make surgery unsafe.',
    comments: [
      {
        id: '13',
        commenter: 'Dr. Michael Chen',
        comment: 'Patient disqualified due to multiple uncontrolled comorbidities',
        dateTime: '2024-02-02T14:20:00Z',
      },
    ],
    requestedDocuments: [
      {
        id: '15',
        name: 'Cardiology Evaluation',
        available: true,
        approved: false,
        cleared: false,
      },
    ],
    clearances: [],
    disqualifications: [
      {
        providerId: 'surgeon2',
        providerName: 'Dr. Michael Chen',
        reason: 'Multiple uncontrolled comorbidities and high surgical risk',
        date: '2024-02-02',
      },
    ],
  },
  {
    id: '10',
    name: 'Amanda Taylor',
    age: 27,
    sex: 'Female',
    status: 'Cleared',
    category: 'CAT 1',
    surgeryDate: '2024-02-28',
    proposedTreatment: 'Upper',
    center: 'Mesa Center',
    assignedSurgeons: ['Dr. Sarah Johnson'],
    assignedCRNAs: ['CRNA Lisa Rodriguez'],
    assignedTravelCoordinators: ['Travel Coordinator Maria Garcia'],
    vitals: {
      height: 165,
      weight: 52,
      bmi: 19.1,
      bp: '108/68',
      hr: 65,
      spo2: 99,
      date: '2024-02-03',
    },
    aiCallouts: [
      'Excellent health status',
      'All clearances obtained',
      'Ready for surgery',
    ],
    aiRecommendations: [
      {
        recommendation: 'Proceed with surgery as scheduled',
        reason: 'Patient in excellent health with all clearances obtained',
      },
    ],
    aiSchedulingCategory: 'CAT 1 - Ready for Surgery',
    aiSummary: 'Young patient in excellent health with no contraindications. All required documents and clearances have been obtained.',
    comments: [
      {
        id: '14',
        commenter: 'Dr. Sarah Johnson',
        comment: 'Patient cleared for surgery - excellent health status',
        dateTime: '2024-02-04T10:30:00Z',
      },
      {
        id: '15',
        commenter: 'CRNA Lisa Rodriguez',
        comment: 'Anesthesia clearance approved',
        dateTime: '2024-02-04T13:45:00Z',
      },
    ],
    requestedDocuments: [
      {
        id: '16',
        name: 'Medical History',
        available: true,
        approved: true,
        cleared: true,
      },
      {
        id: '17',
        name: 'Dental Records',
        available: true,
        approved: true,
        cleared: true,
      },
    ],
    clearances: [
      {
        providerId: 'surgeon1',
        providerName: 'Dr. Sarah Johnson',
        providerType: 'Surgeon',
        cleared: true,
        date: '2024-02-04',
      },
      {
        providerId: 'crna1',
        providerName: 'CRNA Lisa Rodriguez',
        providerType: 'CRNA',
        cleared: true,
        date: '2024-02-04',
      },
    ],
    disqualifications: [],
  },
];

export const mockProviders: Provider[] = [
  {
    id: 'surgeon1',
    name: 'Dr. Sarah Johnson',
    type: 'Surgeon',
    center: 'Phoenix Center',
    email: 'sarah.johnson@nuviasmiles.com',
    phone: '(602) 555-0101',
  },
  {
    id: 'surgeon2',
    name: 'Dr. Michael Chen',
    type: 'Surgeon',
    center: 'Phoenix Center',
    email: 'michael.chen@nuviasmiles.com',
    phone: '(602) 555-0102',
  },
  {
    id: 'crna1',
    name: 'CRNA Lisa Rodriguez',
    type: 'CRNA',
    center: 'Phoenix Center',
    email: 'lisa.rodriguez@nuviasmiles.com',
    phone: '(602) 555-0103',
  },
  {
    id: 'crna2',
    name: 'CRNA David Wilson',
    type: 'CRNA',
    center: 'Phoenix Center',
    email: 'david.wilson@nuviasmiles.com',
    phone: '(602) 555-0104',
  },
  {
    id: 'travel1',
    name: 'Travel Coordinator Maria Garcia',
    type: 'Travel Coordinator',
    center: 'Phoenix Center',
    email: 'maria.garcia@nuviasmiles.com',
    phone: '(602) 555-0105',
  },
];

export const centers = [
  'Phoenix Center',
  'Tucson Center',
  'Scottsdale Center',
  'Mesa Center',
];
