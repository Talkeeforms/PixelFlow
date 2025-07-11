import { useState } from "react";
import {
  BottomNavigation,
  Box,
  Paper,
  Drawer,
  List,
  ListItem,
  Divider,
} from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useNavigate } from "react-router-dom";
import DrawerButton from "./DrawerButton";

import DashboardIcon from "@mui/icons-material/Dashboard";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MenuIcon from "@mui/icons-material/Menu";
import TimelineIcon from "@mui/icons-material/Timeline";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

//Componente responsável pela barra inferior do Mobile;
export default function BottomBar({ isMobile }) {
  const navigate = useNavigate(); //Função responsável pela mudança de páginas
  const [open, setOpen] = useState(false);

  const DrawerList = //Função responsável pela definição do menu expandido do Mobile.
    (
      <Box
        sx={{
          height: "50vh",
          borderRadius: "50px",
          display: "flex",
          justifyContent: "center",
          paddingTop: "30px",
        }}
      >
        <List
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <ListItem
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <DrawerButton variant={"dashboard"} />
            {/*O botão é definido pela variante passada aqui*/}
          </ListItem>
          <ListItem
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <DrawerButton variant={"queue"} />
          </ListItem>
          <ListItem
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <DrawerButton variant={"whatsapp"} />
          </ListItem>
          <ListItem
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <DrawerButton variant={"crm"} />
          </ListItem>
          <ListItem
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <DrawerButton variant={"report"} />
          </ListItem>
          <ListItem
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <DrawerButton variant={"user"} />
          </ListItem>
          <ListItem>
            <Divider sx={{ width: "100%" }} />
          </ListItem>
          <ListItem
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <DrawerButton variant={"treatment"} />
          </ListItem>
        </List>
      </Box>
    );

  const handleOpenLateralMenu = (newOpen) => {
    setOpen(newOpen);
  };

  return (
    <Box
      sx={{
        display: isMobile ? "flex" : "none",
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        justifyContent: "center",
      }}
    >
      <Paper
        sx={{
          borderRadius: "0px",
          width: "100%",
          paddingBottom: "20px",
        }}
        elevation={5}
      >
        <BottomNavigation
          sx={{
            borderRadius: "100px",
          }}
        >
          <BottomNavigationAction
            onClick={() => navigate("/dashboard")}
            icon={<DashboardIcon />}
          />
          <BottomNavigationAction icon={<WhatsAppIcon />} />
          <BottomNavigationAction icon={<RssFeedIcon />} />
          <BottomNavigationAction
            icon={<TimelineIcon onClick={() => navigate("/crm")} />}
          />
          <BottomNavigationAction
            icon={<MenuIcon onClick={() => handleOpenLateralMenu(true)} />}
          />
        </BottomNavigation>
      </Paper>
      <Drawer
        anchor={"bottom"}
        open={open}
        onClose={() => handleOpenLateralMenu(false)}
        sx={{
          "& .MuiPaper-root": {
            borderTopLeftRadius: "30px",
            borderTopRightRadius: "30px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <HorizontalRuleIcon sx={{ marginBottom: "-20px" }} />
        </Box>
        {DrawerList}
      </Drawer>
    </Box>
  );
}
