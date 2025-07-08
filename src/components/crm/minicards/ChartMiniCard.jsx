import React from "react";
import { Box } from "@mui/material";

import { FaChartLine } from "react-icons/fa6";

import { useTheme } from "@emotion/react";

export default function ChartMiniCard() {
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
        <FaChartLine
          style={{
            fontSize: "20px",
            color: theme.palette.font.kanbanCardIcons,
          }}
        />
      </Box>
    </Box>
  );
}
