import { useState } from "react";
import { BottomNavigation, Box, Paper } from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useNavigate } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function BottomBar({ isMobile }) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: isMobile ? "flex" : "none",
        width: "100%",
        position: "fixed",
        bottom: 30,
        left: 0,
        justifyContent: "center",
      }}
    >
      <Paper
        sx={{
          borderRadius: "100px",
        }}
        elevation={5}
      >
        <BottomNavigation
          sx={{
            borderRadius: "100px",
          }}
          ele
        >
          <BottomNavigationAction
            onClick={() => navigate("/dashboard")}
            icon={<DashboardIcon />}
          />
          <BottomNavigationAction icon={<WhatsAppIcon />} />
          <BottomNavigationAction icon={<RssFeedIcon />} />
          <BottomNavigationAction
            icon={<MoreHorizIcon onClick={() => navigate("/crm")} />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
