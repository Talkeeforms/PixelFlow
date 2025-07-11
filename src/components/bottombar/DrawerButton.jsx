import { Box, Paper, Button, Typography } from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TimelineIcon from "@mui/icons-material/Timeline";
import AssessmentIcon from "@mui/icons-material/Assessment";
import GroupIcon from "@mui/icons-material/Group";
import ChatIcon from "@mui/icons-material/Chat";

const variants = [
  {
    name: "Dashboard",
    icon: DashboardIcon,
  },
  {
    name: "Filas",
    icon: RssFeedIcon,
  },
  {
    name: "WhatsApp",
    icon: WhatsAppIcon,
  },
  {
    name: "CRM",
    icon: TimelineIcon,
  },
  {
    name: "Relatórios",
    icon: AssessmentIcon,
  },
  {
    name: "Usuários",
    icon: GroupIcon,
  },
  {
    name: "Atendimento",
    icon: ChatIcon,
  },
];

const variantSelect = (variant) => {
  if (variant === "dashboard") return variants[0];
  else if (variant === "queue") return variants[1];
  else if (variant === "whatsapp") return variants[2];
  else if (variant === "crm") return variants[3];
  else if (variant === "report") return variants[4];
  else if (variant === "user") return variants[5];
  else if (variant === "treatment") return variants[6];
  else return null;
};

//Componente responsável pelos botões do menu expandido da barra inferior Mobile.
export default function DrawerButton({ variant }) {
  const currentButton = variantSelect(variant);
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Button
        sx={{
          textTransform: "none",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 5fr",
        }}
      >
        <currentButton.icon sx={{ color: "#757575" }} />
        <Typography sx={{ justifySelf: "flex-start", color: "#757575" }}>
          {currentButton.name}
        </Typography>
      </Button>
    </Box>
  );
}
