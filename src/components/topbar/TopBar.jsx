import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";

import { Box, Chip } from "@mui/material";
import { Account } from "@toolpad/core";
import { ThemeSwitcher } from "@toolpad/core";
import { UserPopup } from "./UserPopup";

export default function TopBar() {
  const [currentTheme, setCurrentTheme] = useState(
    document.documentElement.getAttribute("data-toolpad-color-scheme")
  ); //Variável estado responsável por armazenar o tema atual da aplicação;

  const theme = useTheme(currentTheme || "light");
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: { xs: 56, md: 64 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: isMobile ? 2 : 3,
        py: 2,
        zIndex: theme.zIndex.appBar,
        margin: 0,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Box
        style={{
          display: "flex",
          justifyContent: isMobile ? "center" : "flex-start",
          alignItems: "center",
          gap: "10px",
          marginLeft: isMobile ? "1vw" : "5vw",
          marginRight: "0px",
          width: "100%",
          position: "relative",
        }}
      >
        <Box
          component="img"
          sx={{
            width: isMobile ? "120px" : "auto",
            height: "auto",
            maxHeight: "30px",
          }}
          src={theme.logo.topBar.default}
        />
        <Chip
          size="small"
          label="BETA"
          sx={{
            backgroundColor: theme.palette.background.channelCard,
            color: theme.palette.font.alternative,
            fontFamily: "KumbhSans",
            fontWeight: "700",
            fontSize: "12px",
            display: isMobile ? "none" : "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "20px",
          position: "fixed",
          right: 20,
        }}
      >
        <Box
          sx={{
            display: isMobile ? "none" : "flex",
          }}
        >
          <ThemeSwitcher />
        </Box>{" "}
        {/*Botão para troca de tema (Escuro, Claro);*/}
        <Account
          slots={{
            popoverContent: UserPopup,
          }}
        />
      </Box>
    </Box>
  );
}
