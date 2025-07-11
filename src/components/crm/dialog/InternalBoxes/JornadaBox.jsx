import { Box, Typography } from "@mui/material";
import Funnel from "./JornadaComponents/Funnel";

export default function JornadaBox() {
  return (
    <Box
      sx={{
        borderRadius: "25px",
        backgroundColor: "white",
        display: "grid",
        gridTemplateRows: "1fr 5fr",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "80vh",
      }}
    >
      <Box>
        <Box
          sx={{
            backgroundColor: "blue",
            padding: "7px 10px 5px 10px",
            borderRadius: "10px",
          }}
        >
          <Typography fontWeight={700} sx={{ color: "white" }}>
            JORNADA DE <br /> CONVERSÃO
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: "100%", height: "100%" }}>
        <Funnel />
      </Box>
    </Box>
  );
}
