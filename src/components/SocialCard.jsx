import { Box, Typography, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import facebookIcon from "../styles/ÍCONES/facebook.png";
import googleIcon from "../styles/ÍCONES/google.png";
import googleIcon2 from "../styles/ÍCONES/google2.png";
import whatsappIcon from "../styles/ÍCONES/whatsapp.png";
import whatsappIcon2 from "../styles/ÍCONES/whatsapp2.png";

const variants = [
  {
    name: "Facebook",
    icon: facebookIcon,
  },
  {
    name: "Google",
    icon: googleIcon,
  },
  {
    name: "Whatsapp",
    icon: whatsappIcon,
  },
];

const variantSelect = (variant) => {
  if (variant === "facebook") {
    return variants[0];
  } else if (variant === "google") {
    return variants[1];
  } else if (variant === "whatsapp") {
    return variants[2];
  } else {
    return null;
  }
};

export default function SocialCard({ variant }) {
  const theme = useTheme("light");
  const buttonVariant = variantSelect(variant);
  if (!buttonVariant) {
    return null;
  }
  return (
    <Paper
      sx={{
        borderRadius: "15px",
      }}
      elevation={0}
    >
      <Box
        sx={{
          width: "100%",
          height: { md: "12vh", xs: "8vh" },
          backgroundColor: theme.palette.background.socialCard,
          borderRadius: "15px",
          display: "grid",
          gridTemplateColumns: { md: "1fr 2fr 0.5fr", xs: "4fr 1fr" },
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: { md: "40px", xs: "20px" },
          paddingRight: { md: "30px", xs: "20px" },
        }}
      >
        <Box
          component="img"
          sx={{
            width: "100%",
            height: "auto",
            maxWidth: { md: "40px", xs: "35px" },
            display: "block",
          }}
          src={buttonVariant.icon}
          alt=""
        />
        <Typography
          fontWeight="500"
          fontFamily="Arial"
          sx={{
            typography: "h6",
            display: { md: "flex", xs: "none" },
          }}
        >
          {buttonVariant.name}
        </Typography>
        <Typography
          fontWeight="700"
          fontFamily="KumbhSans"
          sx={{
            typography: { md: "h3", xs: "h6" },
            color: theme.palette.font.socialCard,
          }}
        >
          0
        </Typography>
      </Box>
    </Paper>
  );
}
