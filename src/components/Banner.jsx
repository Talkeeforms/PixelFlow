import { Box, Typography } from "@mui/material";
import BannerIcon from "../styles/LOGO/BannerIcon.png";
import WavingHandOutlinedIcon from "@mui/icons-material/WavingHandOutlined";

const bannerStyles = {
  position: "relative",
  width: "100%",
  height: "35vh",
  background: "#000000",
  background:
    "linear-gradient(60deg,rgba(0, 0, 0, 1) 0%, rgba(0, 78, 146, 1) 30%, rgb(240, 240, 240) 62%, rgba(0, 178, 235, 1) 100%);",
  borderRadius: "15px",
  marginBottom: "3rem",
  color: "white",
  fontFamily: "'Segoe UI', sans-serif",
  display: { md: "grid", xs: "none" },
  gridTemplateColumns: "1fr 1fr",
  overflow: "hidden",
};

export default function Banner() {
  return (
    <Box sx={bannerStyles}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          marginLeft: "5rem",
          gap: "0.8rem",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          fontWeight="500"
          fontFamily="sans-serif"
        >
          Oi, admin! <WavingHandOutlinedIcon fontSize="large" />
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          fontWeight="400"
          fontFamily="sans-serif"
        >
          Empresa: Pixelflow
        </Typography>
        <Typography variant="h7">
          O sucesso é a soma de pequenos esforços divididos dia após dia.
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          component="img"
          src={BannerIcon}
          sx={{
            opacity: 0.45,
            maxWidth: "42rem",
            position: "absolute",
            marginLeft: "6rem",
          }}
        ></Box>
      </Box>
    </Box>
  );
}
