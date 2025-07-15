import { Box } from "@mui/material";
import ConnectionCard from "../components/connections/ConnectionCard";

export default function ConnectionsPage() {
  return (
    <Box
      sx={{
        height: "100%",
        display: { md: "grid", xs: "flex" },
        flexDirection: { xs: "column" },
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "20px",
        marginBottom: { xs: "50px" },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <ConnectionCard />
        <ConnectionCard />
        <ConnectionCard />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <ConnectionCard />
        <ConnectionCard />
        <ConnectionCard />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <ConnectionCard />
        <ConnectionCard />
        <ConnectionCard />
      </Box>
    </Box>
  );
}
