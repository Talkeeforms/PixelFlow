import React from "react";
import { Box } from "@mui/material";

import { IoChatbubblesOutline } from "react-icons/io5";

export default function ChatMiniCard() {
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
          backgroundColor: "white",
        }}
      >
        <IoChatbubblesOutline style={{ fontSize: "25px", color: "blue" }} />
      </Box>
    </Box>
  );
}
