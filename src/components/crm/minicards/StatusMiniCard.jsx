import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function StatusMiniCard({ cardData }) {
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
          backgroundColor: "#00BF50",
          padding: "8px",
        }}
      >
        <Typography fontSize="16px" fontWeight={700} sx={{ color: "white" }}>
          {cardData.currentStatus}
        </Typography>
      </Box>
    </Box>
  );
}
