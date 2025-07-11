import TermometerCard from "./TermometerCard";
import { Box, Typography } from "@mui/material";

//Componente responsável por agrupar os cards de "Termômetro" da Dashboard;
export default function TermometerContainer() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Typography variant="h7" fontWeight="800">
        Termômetro
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { md: "1fr 1fr 1fr 1fr", xs: "1fr" },
          gap: "15px",
        }}
      >
        <TermometerCard variant={"hot"} />
        <TermometerCard variant={"warm"} />
        <TermometerCard variant={"cold"} />
        <TermometerCard variant={"talk"} />
      </Box>
    </Box>
  );
}
