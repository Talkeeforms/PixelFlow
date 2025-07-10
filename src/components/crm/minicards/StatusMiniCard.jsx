import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

const variants = [
  {
    name: "Conversa Iniciada",
    color: "#00BF50",
  },
  {
    name: "Conversa Parada",
    color: "#FF0048",
  },
  {
    name: "Iniciar Conversa",
    color: "#474747",
  },
];

const variantSelect = (variant) => {
  if (variant === "started") return variants[0];
  else if (variant === "stopped") return variants[1];
  else if (variant === "init") return variants[2];
  else return "NULL";
};

export default function StatusMiniCard({ cardData }) {
  const theme = useTheme();
  const currentStatus = variantSelect(cardData.currentStatus);

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
          backgroundColor: currentStatus.color,
          padding: "8px",
        }}
      >
        <Typography fontSize="16px" fontWeight={700} sx={{ color: "white" }}>
          {currentStatus.name}
        </Typography>
      </Box>
    </Box>
  );
}
