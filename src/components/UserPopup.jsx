import { Box, Typography, Divider, Button } from "@mui/material";
import { AccountPreview } from "@toolpad/core/Account";
import { useNavigate } from "react-router-dom";
import { useSession } from "@toolpad/core/useSession";
import { useState } from "react";
//Icons
import PersonIcon from "@mui/icons-material/Person";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

function LogoutButton() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <Button
      variant="contained"
      sx={{ width: "280px", height: "50px", textTransform: "none" }}
      startIcon={<ExitToAppIcon />}
      onClick={handleLogout}
    >
      <Typography align="center">Sair</Typography>
    </Button>
  );
}

function CommonButton({ text, Icon }) {
  return (
    <Button
      variant="text"
      sx={{
        width: "280px",
        height: "50px",
        textTransform: "none",
        backgroundColor: "#E3EEFA",
      }}
      startIcon={Icon ? <Icon /> : null}
    >
      <Typography sx={{ width: "200px" }}>{text}</Typography>
    </Button>
  );
}

export function UserPopup() {
  const session = useSession();
  if (!session?.user) {
    return <Typography>No user session available</Typography>;
  }

  const [currentTheme, setCurrentTheme] = useState(
    document.documentElement.getAttribute("data-toolpad-color-scheme")
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "15px",
      }}
    >
      <AccountPreview variant="expanded"></AccountPreview>
      <Divider sx={{ width: "100%", margin: "10px" }} />
      <Box
        sx={{
          width: "300px",
          height: "240px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <CommonButton text="Modificar Perfil" Icon={PersonIcon} />
        <CommonButton text="Financeiro" Icon={AttachMoneyIcon} />
        <CommonButton text="Configurações" Icon={SettingsIcon} />
        <LogoutButton />
      </Box>
    </div>
  );
}
