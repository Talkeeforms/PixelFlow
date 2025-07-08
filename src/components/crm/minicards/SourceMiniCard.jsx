import React from "react";

import { Box } from "@mui/material";

export default function SourceMiniCard({ cardData }) {
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
        src={cardData.source}
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
