import React from "react";

import { Box } from "@mui/material";
import { useTheme } from "@mui/material";
export default function OriginMiniCard({ cardData }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        height: "70%",
        borderRadius: "10px",
        backgroundColor: theme.palette.background.kanbanMiniCard,
        padding: "10px",
      }}
    >
      <Box
        component="img"
        src={cardData.origin}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
          maxWidth: "70px",
        }}
      ></Box>
    </Box>
  );
}
