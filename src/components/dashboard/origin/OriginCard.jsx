import { Box, Typography, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import facebookIcon from "@/styles/ICONS/Social/facebook.png";
import googleIcon from "@/styles/ICONS/Social/google.svg";
import whatsappIcon from "@/styles/ICONS/Social/whatsapp.svg";
import outrosIcon from "@/styles/ICONS/Social/outros.png";

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
  {
    name: "",
    icon: outrosIcon,
  },
];

const variantSelect = (variant) => {
  if (variant === "facebook") {
    return variants[0];
  } else if (variant === "google") {
    return variants[1];
  } else if (variant === "whatsapp") {
    return variants[2];
  } else if (variant === "outros") {
    return variants[3];
  } else {
    return null;
  }
};

export default function OriginCard({ variant }) {
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
            height: "auto",
            maxWidth:
              variant === "outros"
                ? { md: "90px", xs: "70px" }
                : { md: "40px", xs: "35px" },
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
          fontFamily="KumbhSans"
          sx={{
            typography: { md: "h3", xs: "h6" },
            color: theme.palette.font.socialCard,
            [theme.breakpoints.up("md")]: { fontWeight: 700, fontSize: "40px" },
            [theme.breakpoints.down("md")]: { fontWeight: 700 },
          }}
        >
          0
        </Typography>
      </Box>
    </Paper>
  );
}
