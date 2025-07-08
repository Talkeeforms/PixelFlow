import React from "react";
import { Box, Typography } from "@mui/material";

export default function EventMiniCard({ cardData }) {
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
          backgroundColor: "#E0C31E",
        }}
      >
        <Typography fontSize="16px" fontWeight={700}>
          {cardData.event}
        </Typography>
      </Box>
    </Box>
  );
}
