import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "./default.css";

import Banner from "../components/dashboard/Banner";
import OriginContainer from "../components/dashboard/origin/OriginContainer";
import ChannelContainer from "../components/dashboard/channel/ChannelContainer";
import TermometerContainer from "../components/dashboard/termometer/TermometerContainer";
import DevicesContainer from "../components/dashboard/devices/DevicesContainer";

import SellsContainer from "../components/dashboard/sells/SellsContainer";

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
