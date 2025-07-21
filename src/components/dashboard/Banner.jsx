import { Box, Typography } from "@mui/material";
import handIcon from "@/styles/ICONS/Banner/hand.png";
import BannerBackground from "@/styles/LOGO/Banner2.png";
import { getTheme } from "../GetCurrentTheme";

const bannerStyles = {
  position: "relative",
  width: "100%",
  height: { md: "42vh", xs: "12vh" },
  backgroundImage: `url(${BannerBackground})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "15px",
  marginBottom: "3rem",
  marginTop: { xs: "-20px" },
  color: "white",
  fontFamily: "'Segoe UI', sans-serif",
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  overflow: "hidden",
};

//Componente de Banner da Dashboard;
export default function Banner({ user }) {
  const theme = getTheme("light");
  return (
    <Box sx={bannerStyles}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          marginLeft: { md: "5rem", xs: "1rem" },
          gap: { md: "0.8rem", xs: "0rem" },
        }}
      >
        <Typography
          component="h1"
          fontWeight="700"
          fontFamily="KumbhSans"
          sx={{
            typography: { md: "h3", xs: "h7" },
          }}
        >
          Oi, {`${user.name}`} {""}
          {console.log(user)}
          <Box
            component="img"
            sx={{
              width: "100%",
              height: "auto",
              maxWidth: { md: "45px", xs: "25px" },
            }}
            src={handIcon}
            alt=""
          />
        </Typography>
        <Typography
          fontWeight="200"
          sx={{
            typography: { md: "h5", xs: "p" },
            fontFamily: "KumbhSans",
          }}
        >
          Empresa: Pixelflow
        </Typography>
        <Typography
          variant="h7"
          sx={{
            display: { md: "grid", xs: "none" },
            fontFamily: "KumbhSans",
          }}
        >
          O sucesso é a soma de pequenos esforços divididos dia após dia.
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      ></Box>
    </Box>
  );
}
