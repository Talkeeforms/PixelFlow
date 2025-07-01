import { Box, Typography, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import whatsappIcon from "@/styles/ÍCONES/Channel/whatsapp2.svg";
import reportsIcon from "@/styles/ÍCONES/Channel/forms.png";
import phoneIcon from "@/styles/ÍCONES/Channel/call.svg";
import scheduleIcon from "@/styles/ÍCONES/Channel/calendar.svg";

const variants = [
  {
    name: "WhatsApp",
    icon: whatsappIcon,
  },
  {
    name: "Relatórios",
    icon: reportsIcon,
  },
  {
    name: "Agendamentos",
    icon: scheduleIcon,
  },
  {
    name: "Ligações",
    icon: phoneIcon,
  },
];

const variantSelect = (variant) => {
  if (variant === "whatsapp") {
    return variants[0];
  } else if (variant === "reports") {
    return variants[1];
  } else if (variant === "schedule") {
    return variants[2];
  } else if (variant === "calls") {
    return variants[3];
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
          paddingLeft: "30px",
          paddingRight: "30px",
        }}
      >
        <Box
          component="img"
          sx={{
            width: "100%",
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
