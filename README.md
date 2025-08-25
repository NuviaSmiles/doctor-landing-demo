# Nuvia Smiles Provider Portal

A professional enterprise application for Nuvia Smiles dental implants company, designed to help healthcare providers manage patient medical clearance processes efficiently.

## Features

### Core Functionality
- **Patient Management**: View and manage assigned patients with comprehensive medical information
- **Medical Clearance**: Complete medical clearance workflows with AI-powered recommendations
- **Patient Categorization**: Categorize patients into CAT 1-4 based on medical requirements
- **Document Management**: Track requested documents and their approval status
- **Provider Collaboration**: Manage assigned surgeons, CRNAs, and travel coordinators
- **Reporting & Analytics**: Comprehensive dashboard with patient statistics and trends

### Technical Features
- **Modern Tech Stack**: Next.js 15, TypeScript, Material-UI, Tailwind CSS
- **Professional UI/UX**: Enterprise-grade design with custom color palette
- **Form Validation**: React Hook Form with Zod schema validation
- **Data Tables**: Material React Table with advanced filtering and sorting
- **Responsive Design**: Mobile-friendly interface
- **Code Quality**: ESLint, Prettier, and Husky for code formatting and linting

## Color Palette

- **Primary**: #00346D (Deep Blue)
- **Secondary**: #0177FF (Bright Blue)
- **Tertiary**: #00A2FF (Light Blue)
- **White**: #FFFFFF
- **Text**: #071941 (Dark Blue)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd doctor-landing-demo
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with MUI theme
│   ├── page.tsx           # Home page (My Patients)
│   ├── patients/          # Patient management pages
│   ├── all-patients/      # All patients view
│   ├── patient/[id]/      # Individual patient detail
│   ├── reports/           # Analytics and reporting
│   └── settings/          # User settings
├── components/            # Reusable components
│   ├── Layout.tsx         # Main layout wrapper
│   ├── Sidebar.tsx        # Navigation sidebar
│   ├── PatientsTable.tsx  # Data table component
│   └── PatientDetail.tsx  # Patient detail view
├── data/                  # Mock data and types
│   └── mockData.ts        # Patient and provider data
├── theme/                 # MUI theme configuration
│   └── mui-theme.ts       # Custom theme with brand colors
└── globals.css            # Global styles
```

## Key Components

### PatientsTable
A configurable data table using Material React Table with:
- Advanced filtering and sorting
- Column customization
- Row click navigation
- Status and category indicators
- Professional styling

### PatientDetail
Comprehensive patient detail view with:
- Basic patient information
- Vitals and medical data
- AI analysis and recommendations
- Document tracking
- Provider assignments
- Clearance and disqualification tracking
- Action buttons for medical clearance workflows

### Layout & Sidebar
Professional navigation system with:
- Fixed sidebar navigation
- Responsive design
- Brand-consistent styling
- Breadcrumb navigation

## Data Models

### Patient
```typescript
interface Patient {
  id: string;
  name: string;
  age: number;
  sex: 'Male' | 'Female';
  status: 'Pending' | 'In Review' | 'Cleared' | 'Disqualified' | 'Completed';
  category: 'CAT 1' | 'CAT 2' | 'CAT 3' | 'CAT 4' | 'Uncategorized';
  surgeryDate: string;
  proposedTreatment: 'Upper' | 'Lower' | 'Upper and Lower';
  center: string;
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
  // ... additional fields
}
```

## Medical Clearance Workflow

1. **Patient Assignment**: Patients are assigned to providers
2. **Initial Review**: AI analyzes patient data and provides recommendations
3. **Document Requests**: Providers can request additional medical records
4. **Categorization**: Patients are categorized based on medical requirements
5. **Provider Clearance**: Surgeons and CRNAs provide clearance
6. **Final Approval**: Patient is cleared for surgery or disqualified

## Contributing

1. Follow the established code style (ESLint + Prettier)
2. Use TypeScript for all new code
3. Follow the component structure and naming conventions
4. Test your changes thoroughly
5. Update documentation as needed

## Code Quality

The project uses several tools to maintain code quality:

- **ESLint**: Code linting with custom rules
- **Prettier**: Code formatting
- **Husky**: Git hooks for pre-commit formatting
- **TypeScript**: Type safety and better developer experience

## Deployment

The application can be deployed to any platform that supports Next.js:

- Vercel (recommended)
- Netlify
- AWS Amplify
- Self-hosted

## Support

For technical support or questions about the application, please contact the development team.

## License

This project is proprietary software for Nuvia Smiles. All rights reserved.
