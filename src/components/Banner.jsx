import { Box, Typography } from "@mui/material";
import BannerIcon from "../styles/LOGO/BannerIcon.png";
import WavingHandOutlinedIcon from "@mui/icons-material/WavingHandOutlined";
import BannerBackground from "../styles/LOGO/Banner2.png";

const bannerStyles = {
  position: "relative",
  width: "100%",
  height: "40vh",
  backgroundImage: `url(${BannerBackground})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
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
      ></Box>
    </Box>
  );
}
