import { Box, Paper, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
    navigate: "/dashboard",
  },
  {
    name: "Filas",
    icon: RssFeedIcon,
    navigate: "",
  },
  {
    name: "WhatsApp",
    icon: WhatsAppIcon,
    navigate: "",
  },
  {
    name: "CRM",
    icon: TimelineIcon,
    navigate: "/crm",
  },
  {
    name: "Relatórios",
    icon: AssessmentIcon,
    navigate: "reports",
  },
  {
    name: "Usuários",
    icon: GroupIcon,
    navigate: "",
  },
  {
    name: "Atendimento",
    icon: ChatIcon,
    navigate: "",
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
  const navigate = useNavigate(); //Função responsável pela mudança de páginas
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
        onClick={() => navigate(currentButton.navigate)}
      >
        <currentButton.icon sx={{ color: "#757575" }} />
        <Typography sx={{ justifySelf: "flex-start", color: "#757575" }}>
          {currentButton.name}
        </Typography>
      </Button>
    </Box>
  );
}
