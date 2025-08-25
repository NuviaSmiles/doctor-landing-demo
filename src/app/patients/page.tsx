'use client';

import Layout from '@/components/Layout';
import PatientsTable from '@/components/PatientsTable';
import { mockPatients } from '@/data/mockData';

export default function PatientsPage() {
  return (
    <Layout title="My Patients - Nuvia Smiles Provider Portal">
      <PatientsTable patients={mockPatients} title="My Assigned Patients" />
    </Layout>
  );
}
