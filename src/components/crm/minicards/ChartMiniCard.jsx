import React from "react";
import { Box } from "@mui/material";

import { FaChartLine } from "react-icons/fa6";

export default function ChartMiniCard() {
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
        <FaChartLine style={{ fontSize: "20px", color: "blue" }} />
      </Box>
    </Box>
  );
}
