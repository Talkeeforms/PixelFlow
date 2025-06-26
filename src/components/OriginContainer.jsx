import SocialCard from "../components/SocialCard";
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
        <SocialCard variant={"facebook"} />
        <SocialCard variant={"whatsapp"} />
        <SocialCard variant={"google"} />
        <SocialCard variant={"outros"} />
      </Box>
    </Box>
  );
}
