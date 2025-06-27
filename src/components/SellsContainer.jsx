import SellsCard from "./SellsCard";
import { Box, Typography } from "@mui/material";
import SellsChart from "./SellsChart";
import { useTheme } from "@mui/material/styles";

export default function SellsContainer() {
  const theme = useTheme("light");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        backgroundColor: theme.palette.background.socialCard,
        padding: "20px",
        borderRadius: "15px",
      }}
    >
      <Typography variant="h7" fontWeight="800">
        Vendas
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { md: "1fr 1fr", xs: "1fr" },
          gap: "15px",
        }}
      >
        <SellsCard variant={"sells"} />
        <SellsCard variant={"billing"} />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { md: "1fr 1fr", xs: "1fr" },
            gridTemplateRows: { md: "1fr", xs: "1fr" },
          }}
        >
          <SellsChart />
          <SellsChart />
        </Box>
      </Box>
    </Box>
  );
}
