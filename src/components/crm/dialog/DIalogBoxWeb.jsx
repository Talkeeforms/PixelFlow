import { Box, DialogContent, Typography } from "@mui/material";
import UTMBox from "./InternalBoxes/UTMBox";
import JornadaBox from "./InternalBoxes/JornadaBox";
import AgendamentoBox from "./InternalBoxes/AgendamentoBox";
import FaturamentoBox from "./InternalBoxes/FaturamentoBox";

export default function DialogBoxWeb() {
  return (
    <DialogContent>
      <Box
        sx={{
          height: "80vh",
          width: "100%",
          display: { md: "grid", xs: "flex" },
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "15px",
          flexDirection: "column",
        }}
      >
        <Box>
          <UTMBox />
        </Box>
        <Box>
          <JornadaBox />
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateRows: "1fr 1fr",
            gap: "15px",
          }}
        >
          <AgendamentoBox />
          <FaturamentoBox />
        </Box>
      </Box>
    </DialogContent>
  );
}
