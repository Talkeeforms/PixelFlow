import OriginCard from "./OriginCard";
import { Box, Typography } from "@mui/material";

export default function OriginContainer() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Typography variant="h7" fontWeight="800">
        Origem
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { md: "1fr 1fr 1fr 1fr", xs: "1fr 1fr" },
          gap: "15px",
        }}
      >
        <OriginCard variant={"facebook"} />
        <OriginCard variant={"whatsapp"} />
        <OriginCard variant={"google"} />
        <OriginCard variant={"outros"} />
      </Box>
    </Box>
  );
}
