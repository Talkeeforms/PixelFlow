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
          height: "12vh",
          backgroundColor: theme.palette.background.socialCard,
          borderRadius: "15px",
          display: "grid",
          gridTemplateColumns: "1fr 2fr 0.5fr",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "40px",
          paddingRight: "30px",
        }}
      >
        <img src={buttonVariant.icon} alt="" />
        <Typography variant="h6" fontWeight="500" fontFamily="Arial">
          {buttonVariant.name}
        </Typography>
        <Typography
          variant="h3"
          fontWeight="500"
          color="#164BF7"
          fontFamily="Poppins"
        >
          X
        </Typography>
      </Box>
    </Paper>
  );
}
