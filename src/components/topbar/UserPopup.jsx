import { Box, Typography, Divider, Button } from "@mui/material";
import { AccountPreview } from "@toolpad/core/Account";
import { useNavigate } from "react-router-dom";
import { useSession } from "@toolpad/core/useSession";
import { useTheme } from "@mui/material";
//Icons
import PersonIcon from "@mui/icons-material/Person";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function LogoutButton({ background, font }) {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Button
      variant="contained"
      sx={{
        width: "280px",
        height: "50px",
        textTransform: "none",
        backgroundColor: background,
        color: font,
      }}
      startIcon={<ExitToAppIcon />}
      onClick={handleLogout}
    >
      <Typography align="center">Sair</Typography>
    </Button>
  );
}

function CommonButton({ text, Icon, theme, local }) {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/" + local);
  };
  return (
    <Button
      variant="text"
      sx={{
        width: "280px",
        height: "50px",
        textTransform: "none",
        backgroundColor: theme.palette.background.popupCard,
      }}
      startIcon={Icon ? <Icon /> : null}
      onClick={handleRedirect}
    >
      <Typography sx={{ width: "200px" }}>{text}</Typography>
    </Button>
  );
}

export function UserPopup() {
  const theme = useTheme("light");
  const session = useSession();
  if (!session?.user) {
    return <Typography>No user session available</Typography>;
  }

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
        <CommonButton
          text="Modificar Perfil"
          Icon={PersonIcon}
          theme={theme}
          local={""}
        />
        <CommonButton
          text="Financeiro"
          Icon={AttachMoneyIcon}
          theme={theme}
          local={""}
        />
        <CommonButton
          text="Configurações"
          Icon={SettingsIcon}
          theme={theme}
          local={"settings"}
        />
        <LogoutButton
          background={theme.palette.background.blueCard}
          font={theme.palette.font.alternative}
        />
      </Box>
    </div>
  );
}
