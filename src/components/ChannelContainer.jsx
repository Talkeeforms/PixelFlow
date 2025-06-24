import ChannelCard from "./ChannelCard";
import { Box, Typography } from "@mui/material";

export default function ChannelContainer() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Typography variant="h7" fontWeight="800">
        Canais
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { md: "1fr 1fr 1fr", xs: "1fr" },
          gap: "15px",
        }}
      >
        <ChannelCard variant={"facebook"} />
        <ChannelCard variant={"whatsapp"} />
        <ChannelCard variant={"google"} />
      </Box>
    </Box>
  );
}
