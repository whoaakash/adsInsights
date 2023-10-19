import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "group",
    headerName: "Group",
    flex: 1,
    editable: true,
  },
  {
    field: "clicks",
    headerName: "Clicks",
    type: "number",
    flex: 1,
    editable: true,
  },
  {
    field: "cost",
    headerName: "Cost",
    flex: 1,
    editable: true,
  },
  {
    field: "Coversion",
    headerName: "Coversions",
    type: "number",
    flex: 1,
    editable: true,
  },
  {
    field: "revenue",
    headerName: "Revenue",
    flex: 1,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    group: "Male",
    clicks: 40,
    cost: "USD 12,528",
    Coversion: 42,
    revenue: "USD 16,568",
  },
  {
    id: 2,
    group: "Female",
    clicks: 35,
    cost: "USD 24912",
    Coversion: 35,
    revenue: "USD 362,526",
  },
  {
    id: 3,
    group: "Unknown",
    clicks: 25,
    cost: "USD 3,943",
    Coversion: 3,
    revenue: "USD 266,800",
  },
  {
    id: 4,
    group: "Total",
    clicks: "100",
    cost: "USD 41,383",
    Coversion: 80,
    revenue: "USD 11,029",
  },
];

export default function ToggleTable() {
  return (
    <Box sx={{ height: 320, width: "100%" }}>
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
