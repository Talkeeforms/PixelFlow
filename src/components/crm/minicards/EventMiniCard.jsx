import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

const variants = [
  {
    name: "ViewContent",
    background: "#E0C31E",
    color: "black",
  },
  {
    name: "InitiateCheckout",
    background: "#E08F1E",
    color: "white",
  },
  {
    name: "Search",
    background: "#1EA6E0",
    color: "white",
  },
];

const variantSelect = (variant) => {
  if (variant === "viewcontent") return variants[0];
  else if (variant === "initiate") return variants[1];
  else if (variant === "search") return variants[2];
  else return "NULL";
};

export default function EventMiniCard({ cardData }) {
  const theme = useTheme();
  const currentEvent = variantSelect(cardData.event);
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
          backgroundColor: currentEvent.background,
        }}
      >
        <Typography
          sx={{ color: currentEvent.color }}
          fontSize="16px"
          fontWeight={700}
        >
          {currentEvent.name}
        </Typography>
      </Box>
    </Box>
  );
}
