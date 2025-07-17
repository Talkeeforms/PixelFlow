import { Box } from "@mui/material";
import ReportsTable from "../components/reports/ReportsTable";

export default function ReportsPage() {
  return (
    <Box sx={{ height: "100%", minHeight: "80vh" }}>
      <ReportsTable />
    </Box>
  );
}
