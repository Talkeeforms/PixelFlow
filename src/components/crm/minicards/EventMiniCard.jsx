import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function EventMiniCard({ cardData }) {
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
          backgroundColor: "#E0C31E",
        }}
      >
        <Typography sx={{ color: "black" }} fontSize="16px" fontWeight={700}>
          {cardData.event}
        </Typography>
      </Box>
    </Box>
  );
}
