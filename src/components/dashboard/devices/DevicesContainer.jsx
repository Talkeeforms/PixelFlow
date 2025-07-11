import DevicesCard from "./DevicesCard";
import { Box, Typography } from "@mui/material";

//Componente responsável por agrupar os cards de "Dispositivos" da Dashboard;
export default function DevicesContainer() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Typography variant="h7" fontWeight="800">
        Dispositivos
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { md: "1fr 1fr 1fr", xs: "1fr" },
          gap: "15px",
        }}
      >
        <DevicesCard variant={"android"} />
        <DevicesCard variant={"ios"} />
        <DevicesCard variant={"web"} />
      </Box>
    </Box>
  );
}
