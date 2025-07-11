import { Box, Typography, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import hotIcon from "@/styles/ICONS/Termometer/hot.svg";
import warmIcon from "@/styles/ICONS/Termometer/warm.svg";
import coldIcon from "@/styles/ICONS/Termometer/cold.svg";
import talkIcon from "@/styles/ICONS/Termometer/chat.svg";

const variants = [
  {
    name: "Lead Quente",
    icon: hotIcon,
    color: "#E70B0B",
  },
  {
    name: "Lead Morno",
    icon: warmIcon,
    color: "#F49B15",
  },
  {
    name: "Lead Frio",
    icon: coldIcon,
    color: "#164BF7",
  },
  {
    name: "Conversa Iniciada",
    icon: talkIcon,
    color: "#25AF3E",
  },
];

const variantSelect = (variant) => {
  if (variant === "hot") {
    return variants[0];
  } else if (variant === "warm") {
    return variants[1];
  } else if (variant === "cold") {
    return variants[2];
  } else if (variant === "talk") {
    return variants[3];
  } else {
    return null;
  }
};

//Componente da linha de "Termômetro" da Dashboard;
export default function TermometerCard({ variant }) {
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
          backgroundColor: buttonVariant.color,
          borderRadius: "15px",
          display: "grid",
          gridTemplateColumns: "1fr 3fr 0.8fr",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "30px",
          paddingRight: "30px",
        }}
      >
        <Box
          component="img"
          sx={{
            height: "auto",
            maxWidth: { md: "35px", xs: "25px" },
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
          color="#FFFFFF"
          fontFamily="KumbhSans"
          sx={{
            typography: { md: "h3", xs: "h5" },
            [theme.breakpoints.up("md")]: { fontWeight: 700, fontSize: "40px" },
            [theme.breakpoints.down("md")]: { fontWeight: 700 },
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
