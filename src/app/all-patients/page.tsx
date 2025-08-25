'use client';

import Layout from '@/components/Layout';
import PatientsTable from '@/components/PatientsTable';
import { mockPatients } from '@/data/mockData';

export default function AllPatientsPage() {
  return (
    <Layout title="All Patients - Nuvia Smiles Provider Portal">
      <PatientsTable 
        patients={mockPatients} 
        title="All Patients" 
        readOnly={true} 
      />
    </Layout>
  );
}
