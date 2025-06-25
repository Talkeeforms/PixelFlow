import { Box, Typography, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import googleIcon from "../styles/ÍCONES/google2.png";
import whatsappIcon from "../styles/ÍCONES/whatsapp2.png";
import reportsIcon from "../styles/ÍCONES/forms.png";

const variants = [
  {
    name: "Google",
    icon: googleIcon,
  },
  {
    name: "WhatsApp",
    icon: whatsappIcon,
  },
  {
    name: "Relatórios",
    icon: reportsIcon,
  },
];

const variantSelect = (variant) => {
  if (variant === "google") {
    return variants[0];
  } else if (variant === "whatsapp") {
    return variants[1];
  } else if (variant === "reports") {
    return variants[2];
  } else {
    return null;
  }
};

export default function ChannelCard({ variant }) {
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
          backgroundColor: theme.palette.background.channelCard,
          borderRadius: "15px",
          display: "grid",
          gridTemplateColumns: "1fr 3fr 0.8fr",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "40px",
          paddingRight: "30px",
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
          fontFamily="KumbhSans"
          color="#FFFFFF"
          sx={{
            typography: { md: "h6", xs: "p" },
          }}
        >
          {buttonVariant.name}
        </Typography>
        <Typography
          fontWeight="500"
          color="#FFFFFF"
          fontFamily="KumbhSans"
          sx={{
            typography: { md: "h3", xs: "h5" },
            justifySelf: "end",
            alignSelf: "center",
          }}
        >
          0
        </Typography>
      </Box>
    </Paper>
  );
}
