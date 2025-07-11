import { Box, Typography } from "@mui/material";
import { ResponsiveFunnel } from "@nivo/funnel";
import { useTheme } from "@mui/material";

const value = Math.floor(Math.random() * 3000);
const value2 = Math.floor(Math.random() * 520);
const value3 = Math.floor(Math.random() * 520);
const value4 = Math.floor(Math.random() * 520);
const value5 = Math.floor(Math.random() * 520);

const testFunnel = [
  {
    id: "1",
    value: value * 4 * value2,
    label: "Fez Contato",
  },
  {
    id: "2",
    value: value * 3 * value3,
    label: "Pediu Orçamento",
  },
  {
    id: "3",
    value: value * 2 * value4,
    label: "Orçamento Aprovado",
  },
  {
    id: "4",
    value: value * 1 * value5,
    label: "Comprou",
  },
];

export default function ExamplePage2() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "80vh",
        width: "100%",
      }}
    >
      <Box sx={{ height: "50vh", width: { md: "50%", xs: "100%" } }}>
        <ResponsiveFunnel
          data={testFunnel}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          shapeBlending={0.2}
          spacing={15}
          valueFormat=" >-.4s"
          colors={{ scheme: "pink_yellowGreen" }}
          borderWidth={20}
          labelColor={theme.palette.font.default}
        />
      </Box>
    </Box>
  );
}
