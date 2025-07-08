import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";

import { IoChatbubblesOutline } from "react-icons/io5";

export default function ChatMiniCard() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          height: "70%",
          borderRadius: "10px",
          backgroundColor: theme.palette.background.kanbanMiniCard,
        }}
      >
        <IoChatbubblesOutline
          style={{
            fontSize: "25px",
            color: theme.palette.font.kanbanCardIcons,
          }}
        />
      </Box>
    </Box>
  );
}
