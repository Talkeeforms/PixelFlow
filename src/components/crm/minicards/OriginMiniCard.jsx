import React from "react";

import { Box } from "@mui/material";

export default function OriginMiniCard({ cardData }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        height: "70%",
        borderRadius: "10px",
        backgroundColor: "white",
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
