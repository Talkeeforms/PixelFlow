import { Box, DialogContent, Typography } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import UTMBox from "./InternalBoxes/UTMBox";
import JornadaBox from "./InternalBoxes/JornadaBox";
import AgendamentoBox from "./InternalBoxes/AgendamentoBox";
import FaturamentoBox from "./InternalBoxes/FaturamentoBox";

export default function DialogBoxMobile() {
  const options = {
    pagination: false,
    perPage: 1,
    focus: "center",
    arrows: false,
    gap: "0px",
    trimspace: false,
  };
  return (
    <DialogContent>
      <Box
        sx={{
          height: "80vh",
          width: "100%",
          display: "flex",
          gap: "15px",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Splide options={options}>
          <SplideSlide>
            <UTMBox />
          </SplideSlide>
          <SplideSlide>
            <JornadaBox />
          </SplideSlide>
          <SplideSlide>
            <AgendamentoBox />
          </SplideSlide>
          <SplideSlide>
            <FaturamentoBox />
          </SplideSlide>
        </Splide>
      </Box>
    </DialogContent>
  );
}
