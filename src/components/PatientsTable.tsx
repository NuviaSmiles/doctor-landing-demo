'use client';

import { useState, useMemo } from 'react';
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  type MRT_ColumnFiltersState,
  type MRT_SortingState,
} from 'material-react-table';
import { Box, Chip, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { Patient } from '@/data/mockData';

interface PatientsTableProps {
  patients: Patient[];
  title?: string;
  readOnly?: boolean;
}

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

const getCategoryColor = (category: Patient['category']) => {
  switch (category) {
    case 'CAT 1':
      return 'success';
    case 'CAT 2':
      return 'warning';
    case 'CAT 3':
      return 'error';
    case 'CAT 4':
      return 'error';
    case 'Uncategorized':
      return 'default';
    default:
      return 'default';
  }
};

export default function PatientsTable({ patients, title = 'Patients', readOnly = false }: PatientsTableProps) {
  const router = useRouter();
  const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState<MRT_SortingState>([]);

  const columns = useMemo<MRT_ColumnDef<Patient>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Patient Name',
        size: 200,
        Cell: ({ cell }) => (
          <Typography 
            variant="body2" 
            sx={{ 
              fontWeight: 500,
              wordWrap: 'break-word',
              whiteSpace: 'normal',
              lineHeight: 1.4,
            }}
          >
            {cell.getValue<string>()}
          </Typography>
        ),
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size: 150,
        Cell: ({ cell }) => (
          <Chip
            label={cell.getValue<string>()}
            color={getStatusColor(cell.getValue<Patient['status']>())}
            size="small"
            variant="outlined"
            sx={{ 
              wordWrap: 'break-word',
              whiteSpace: 'normal',
              maxWidth: '100%',
            }}
          />
        ),
        filterVariant: 'select',
        filterSelectOptions: ['Pending', 'In Review', 'Cleared', 'Disqualified', 'Completed'],
      },
      {
        accessorKey: 'category',
        header: 'Category',
        size: 200,
        Cell: ({ cell }) => (
          <Chip
            label={cell.getValue<string>()}
            color={getCategoryColor(cell.getValue<Patient['category']>())}
            size="small"
            variant="outlined"
            sx={{ 
              wordWrap: 'break-word',
              whiteSpace: 'normal',
              maxWidth: '100%',
            }}
          />
        ),
        filterVariant: 'select',
        filterSelectOptions: ['CAT 1', 'CAT 2', 'CAT 3', 'CAT 4', 'Uncategorized'],
      },
      {
        accessorKey: 'surgeryDate',
        header: 'Surgery Date',
        size: 200,
        Cell: ({ cell }) => (
          <Typography 
            variant="body2"
            sx={{
              wordWrap: 'break-word',
              whiteSpace: 'normal',
            }}
          >
            {new Date(cell.getValue<string>()).toLocaleDateString()}
          </Typography>
        ),
      },
      {
        accessorKey: 'age',
        header: 'Age',
        size: 120,
        enableColumnFilter: false,
        Cell: ({ cell }) => (
          <Typography 
            variant="body2"
            sx={{
              textAlign: 'center',
              wordWrap: 'break-word',
              whiteSpace: 'normal',
            }}
          >
            {cell.getValue<number>()}
          </Typography>
        ),
      },
      {
        accessorKey: 'sex',
        header: 'Sex',
        size: 150,
        filterVariant: 'select',
        filterSelectOptions: ['Male', 'Female'],
        Cell: ({ cell }) => (
          <Typography 
            variant="body2"
            sx={{
              textAlign: 'center',
              wordWrap: 'break-word',
              whiteSpace: 'normal',
            }}
          >
            {cell.getValue<string>()}
          </Typography>
        ),
      },
      {
        accessorKey: 'proposedTreatment',
        header: 'Treatment',
        size: 200,
        filterVariant: 'select',
        filterSelectOptions: ['Upper', 'Lower', 'Upper and Lower'],
        Cell: ({ cell }) => (
          <Typography 
            variant="body2"
            sx={{
              wordWrap: 'break-word',
              whiteSpace: 'normal',
              lineHeight: 1.4,
            }}
          >
            {cell.getValue<string>()}
          </Typography>
        ),
      },
      {
        accessorKey: 'center',
        header: 'Center',
        size: 200,
        filterVariant: 'select',
        filterSelectOptions: ['Phoenix Center', 'Tucson Center', 'Scottsdale Center', 'Mesa Center'],
        Cell: ({ cell }) => (
          <Typography 
            variant="body2"
            sx={{
              wordWrap: 'break-word',
              whiteSpace: 'normal',
              lineHeight: 1.4,
            }}
          >
            {cell.getValue<string>()}
          </Typography>
        ),
      },
    ],
    []
  );

  const handleRowClick = (row: any) => {
    const patientId = row.original.id;
    router.push(`/patient/${patientId}`);
  };

  return (
    <Box sx={{ 
      width: '100%', 
      maxWidth: '100%', 
      overflow: 'hidden',
      backgroundColor: 'white',
      borderRadius: 0,
      border: '1px solid #e5e7eb',
    }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexWrap: 'wrap', 
        gap: 2,
        p: 3,
        borderBottom: '1px solid #e5e7eb',
        backgroundColor: 'white',
      }}>
        <Typography variant="h4" sx={{ fontWeight: 700, color: '#1f2937' }}>
          {title}
        </Typography>

      </Box>

      <Box sx={{ 
        width: '100%', 
        overflow: 'auto',
        backgroundColor: 'white',
      }}>
        <MaterialReactTable
          columns={columns}
          data={patients}
          enableColumnFilterModes
          enableColumnResizing
          // enableColumnDragging
          enableDensityToggle
          enableGlobalFilter
          enablePagination
          enableRowSelection={false}
          enableSorting
          enableTopToolbar
          enableBottomToolbar
          muiTableProps={{
            sx: {
              tableLayout: 'fixed',
              backgroundColor: 'white',
              minWidth: 'auto',
            },
          }}
          muiTableHeadCellProps={{
            sx: {
              backgroundColor: '#f9fafb',
              fontWeight: 600,
              color: '#374151',
              fontSize: '0.875rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              borderBottom: '1px solid #e5e7eb',
              wordWrap: 'break-word',
              whiteSpace: 'normal',
              padding: '16px 12px',
            },
          }}
          muiTableBodyCellProps={{
            sx: {
              cursor: 'pointer',
              backgroundColor: 'white',
              borderBottom: '1px solid #f3f4f6',
              wordWrap: 'break-word',
              whiteSpace: 'normal',
              padding: '16px 12px',
              '&:hover': {
                backgroundColor: 'rgba(30, 64, 175, 0.04)',
              },
            },
          }}
          muiTableBodyRowProps={({ row }) => ({
            onClick: () => handleRowClick(row),
            sx: {
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: 'rgba(30, 64, 175, 0.04)',
              },
            },
          })}
          onColumnFiltersChange={setColumnFilters}
          onGlobalFilterChange={setGlobalFilter}
          onSortingChange={setSorting}
          state={{
            columnFilters,
            globalFilter,
            sorting,
          }}
          initialState={{
            density: 'compact',
            pagination: { pageSize: 5, pageIndex: 0 },
            sorting: [{ id: 'name', desc: false }],
          }}
          muiSearchTextFieldProps={{
            placeholder: 'Search patients...',
            sx: { minWidth: '200px', maxWidth: '300px' },
          }}
          muiPaginationProps={{
            rowsPerPageOptions: [5, 10, 25, 50],
            showFirstButton: true,
            showLastButton: true,
          }}
        />
      </Box>
    </Box>
  );
}
