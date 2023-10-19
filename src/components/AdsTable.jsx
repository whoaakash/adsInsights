import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'campaign',
    headerName: 'Campaigns',
    flex: 1,
    editable: true,
  },
  {
    field: 'clicks',
    headerName: 'Clicks',
    type: 'number',
    flex: 1,
    editable: true,
  },
  {
    field: 'cost',
    headerName: 'Cost',
    flex: 1,
    editable: true,
  },
  {
    field: 'Coversion',
    headerName: 'Coversions',
    type: 'number',
    flex: 1,
    editable: true,
  },
  {
    field: 'revenue',
    headerName: 'Revenue',
    flex: 1,
    editable: true,
  },
];

const rows = [
  { id: 1, campaign: 'Cosmetics', clicks: 712, cost: "USD 29370", Coversion: 8, revenue: "USD 16,568" },
  { id: 2, campaign: 'Serums', clicks: "3,961", cost: "USD 29370", Coversion: 115, revenue: "USD 362,526" },
  { id: 3, campaign: 'Facewash', clicks: "9,462", cost: "USD 29370", Coversion: 123, revenue: "USD 266,800" },
  { id: 4, campaign: 'Shampoos', clicks: "439", cost: "USD 29370", Coversion: 5, revenue: "USD 11,029" },
  { id: 5, campaign: 'Conditioners', clicks: "1,680", cost: "USD 29370", Coversion: 49, revenue: "USD 175245" },
  { id: 6, campaign: 'Facewash 2', clicks: "4,978", cost: "USD 29370", Coversion: 189, revenue: "USD 623,106" },
];

export default function AdsInsightsTable() {
  return (
    <Box sx={{ height: 380, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        disableRowSelectionOnClick
      />
    </Box>
  );
}