import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts";
import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function ExamplePage() {
  const theme = useTheme();
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
          gap: "20px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "30vh",
            backgroundColor: theme.palette.background.blueCard,
            borderRadius: "15px",
          }}
        ></Box>
        <div>
          <h4>Subtítulo</h4>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { md: "1fr 1fr 1fr 1fr", xs: "1fr" },
              gap: "15px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "15vh",
                backgroundColor: theme.palette.background.blueCard,
                borderRadius: "15px",
                marginTop: "20px",
              }}
            ></Box>
            <Box
              sx={{
                width: "100%",
                height: "15vh",
                backgroundColor: theme.palette.background.blueCard,
                borderRadius: "15px",
                marginTop: "20px",
              }}
            ></Box>
            <Box
              sx={{
                width: "100%",
                height: "15vh",
                backgroundColor: theme.palette.background.blueCard,
                borderRadius: "15px",
                marginTop: "20px",
              }}
            ></Box>
            <Box
              sx={{
                width: "100%",
                height: "15vh",
                backgroundColor: theme.palette.background.blueCard,
                borderRadius: "15px",
                marginTop: "20px",
              }}
            ></Box>
          </Box>
        </div>
        <div>
          <h4>Subtítulo</h4>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { md: "1fr 1fr 1fr", xs: "1fr" },
              marginLeft: { xs: "-45px" },
            }}
          >
            <Box>
              <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                  {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                  },
                ]}
                height={300}
              />
            </Box>
            <Box>
              <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 16] }]}
                series={[
                  {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                    valueFormatter: (value) =>
                      value == null ? "NaN" : value.toString(),
                  },
                  {
                    data: [null, null, null, null, 5.5, 2, 8.5, 1.5, 5],
                  },
                  {
                    data: [7, 8, 5, 4, null, null, 2, 5.5, 1],
                    valueFormatter: (value) =>
                      value == null ? "?" : value.toString(),
                  },
                ]}
                height={300}
                margin={{ bottom: 10 }}
              />
            </Box>
            <Box>
              <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                  {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                  },
                ]}
                height={300}
              />
            </Box>
          </Box>
        </div>
        <div>
          <h4>Subtítulo</h4>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { md: "1fr 1fr 1fr", xs: "1fr" },
              gap: "15px",
              backgroundColor: theme.palette.background.greyCard,
              padding: "30px",
              borderRadius: "15px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "15vh",
                backgroundColor: theme.palette.background.whiteCard,
                borderRadius: "15px",
                marginTop: "20px",
              }}
            ></Box>
            <Box
              sx={{
                width: "100%",
                height: "15vh",
                backgroundColor: theme.palette.background.whiteCard,
                borderRadius: "15px",
                marginTop: "20px",
              }}
            ></Box>
            <Box
              sx={{
                width: "100%",
                height: "15vh",
                backgroundColor: theme.palette.background.whiteCard,
                borderRadius: "15px",
                marginTop: "20px",
              }}
            ></Box>
          </Box>
        </div>
      </div>
    </>
  );
}
