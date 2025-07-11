import { Box, Typography } from "@mui/material";
import { ResponsiveFunnel } from "@nivo/funnel";
import { useTheme } from "@mui/material";

const value = Math.floor(Math.random() * 3000);

const testFunnel = [
  {
    id: "1",
    value: value * 4,
    label: "Fez Contato",
  },
  {
    id: "2",
    value: value * 3,
    label: "Pediu Orçamento",
  },
  {
    id: "3",
    value: value * 2,
    label: "Orçamento Aprovado",
  },
  {
    id: "4",
    value: value * 0.8,
    label: "Comprou",
  },
];

//Função responsável por adicionar uma camada contendo o nome da partição do Funil;
const CustomLayer = ({ parts }) => (
  <>
    {console.log(parts)}
    {parts.map((part, index) => (
      <text
        key={index}
        x={part.x}
        y={part.y - 25}
        textAnchor="middle"
        dominantBaseline="central"
        style={{ fill: "white", fontSize: 12, fontWeight: 700 }}
      >
        {part.data.label}
      </text>
    ))}
  </>
);

//Componente responsável por gerar um funil visual;
export default function Funnel() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <Box sx={{ height: "100%", width: { md: "250%", xs: "250%" } }}>
        <ResponsiveFunnel
          data={testFunnel}
          shapeBlending={0.2}
          spacing={5}
          currentPartSizeExtension={10}
          currentBorderWidth={40}
          valueFormat=" >-.4s"
          colors={{ scheme: "pink_yellowGreen" }}
          borderWidth={20}
          labelColor={"white"}
          layers={["parts", "labels", CustomLayer]}
        />
      </Box>
    </Box>
  );
}
