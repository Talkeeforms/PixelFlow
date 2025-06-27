import { LineChart } from "@mui/x-charts/LineChart";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "./default.css";

import Banner from "../components/Banner";
import OriginContainer from "../components/OriginContainer";
import ChannelContainer from "../components/ChannelContainer";
import TermometerContainer from "../components/TermometerContainer";
import DevicesContainer from "../components/DevicesContainer";

import { Devices } from "@mui/icons-material";
import SellsContainer from "../components/SellsContainer";

export default function DashboardPage() {
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
        <Banner />
        <Box sx={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          <OriginContainer />
          <ChannelContainer />
          <TermometerContainer />
          <DevicesContainer />
          <SellsContainer />
        </Box>
      </div>
    </>
  );
}
