import { LineChart } from "@mui/x-charts/LineChart";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "./default.css";

import Banner from "../components/Banner";
import OriginContainer from "../components/OriginContainer";
import ChannelContainer from "../components/ChannelContainer";

export default function ExamplePage() {
  const theme = useTheme("light");
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          width: "100%",
          height: "100%",
          padding: "10px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "30vh",
            backgroundColor: theme.palette.background.socialCard,
            borderRadius: "15px",
            marginBottom: "10rem",
            display: { xs: "none", md: "grid" },
          }}
        >
          <img
            src="src/styles/LOGO/Banner1.png"
            alt=""
            style={{ width: "100%", borderRadius: "15px" }}
          />
        </Box>
        <Banner />
        <Box sx={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          <OriginContainer />
          <ChannelContainer />
        </Box>
      </div>
    </>
  );
}
