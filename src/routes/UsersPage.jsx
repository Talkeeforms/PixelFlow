import { Box } from "@mui/material";
import LoggedTable from "../components/users/LoggedTable";
import UnloggedTable from "../components/users/UnloggedTable copy";

export default function UsersPage() {
  return (
    <Box
      sx={{
        height: "80vh",
        display: "grid",
        gridTemplateRows: "1fr 1fr",
        gap: "50px",
      }}
    >
      <LoggedTable />
      <UnloggedTable />
    </Box>
  );
}
