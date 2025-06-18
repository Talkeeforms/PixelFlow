import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts";
import { Box, Grid } from "@mui/material";

export default function ExamplePage() {
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
            backgroundColor: "#429FD5",
            borderRadius: "15px",
          }}
        ></Box>
        <div>
          <h4>Subtítulo</h4>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gap: "15px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "15vh",
                backgroundColor: "#429FD5",
                borderRadius: "15px",
                marginTop: "20px",
              }}
            ></Box>
            <Box
              sx={{
                width: "100%",
                height: "15vh",
                backgroundColor: "#429FD5",
                borderRadius: "15px",
                marginTop: "20px",
              }}
            ></Box>
            <Box
              sx={{
                width: "100%",
                height: "15vh",
                backgroundColor: "#429FD5",
                borderRadius: "15px",
                marginTop: "20px",
              }}
            ></Box>
            <Box
              sx={{
                width: "100%",
                height: "15vh",
                backgroundColor: "#429FD5",
                borderRadius: "15px",
                marginTop: "20px",
              }}
            ></Box>
          </div>
        </div>
        <div>
          <h4>Subtítulo</h4>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
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
          </div>
        </div>
        <div>
          <h4>Subtítulo</h4>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "15px",
              backgroundColor: "#DFE3E8",
              padding: "30px",
              borderRadius: "15px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "15vh",
                backgroundColor: "white",
                borderRadius: "15px",
                marginTop: "20px",
              }}
            ></Box>
            <Box
              sx={{
                width: "100%",
                height: "15vh",
                backgroundColor: "white",
                borderRadius: "15px",
                marginTop: "20px",
              }}
            ></Box>
            <Box
              sx={{
                width: "100%",
                height: "15vh",
                backgroundColor: "white",
                borderRadius: "15px",
                marginTop: "20px",
              }}
            ></Box>
          </div>
        </div>
      </div>
    </>
  );
}
