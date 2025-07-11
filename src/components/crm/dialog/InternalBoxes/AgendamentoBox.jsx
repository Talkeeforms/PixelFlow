import { Box, Typography } from "@mui/material";

export default function AgendamentoBox() {
  return (
    <Box
      sx={{
        borderRadius: "25px",
        backgroundColor: "white",
        display: "grid",
        gridTemplateRows: { md: "2fr 5fr", xs: "1fr 5fr" },
        justifyContent: "center",
        alignItems: "center",
        height: { md: "100%", xs: "80vh" },
      }}
    >
      <Box
        sx={{
          backgroundColor: "blue",
          padding: "7px 10px 5px 10px",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography fontWeight={700} sx={{ color: "white" }}>
          AGENDAMENTO
        </Typography>
      </Box>
    </Box>
  );
}
