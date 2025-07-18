import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  useTheme,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import React from "react";

const loggedExample = [
  {
    name: "Thiago Souza",
    date: "19/12/2025 09:53",
    status: "active",
  },
  {
    name: "Thiago Souza",
    date: "19/12/2025 09:53",
    status: "active",
  },
  {
    name: "Thiago Souza",
    date: "19/12/2025 09:53",
    status: "active",
  },
];

const DisconnectButton = () => (
  <Button
    sx={{ textTransform: "none", backgroundColor: "#005BCD", color: "white" }}
  >
    <Typography fontWeight="700">Desconectar</Typography>
  </Button>
);

function Row({ row }) {
  const theme = useTheme();
  return (
    <React.Fragment>
      <TableRow>
        <TableCell component="th" scope="row" align="center">
          {row.name}
        </TableCell>
        <TableCell align="center">{row.date}</TableCell>
        <TableCell align="center">AA</TableCell>
        <TableCell align="center">AA</TableCell>
        <TableCell align="center">
          <Box
            component="img"
            src={theme.logo.whatsapp.icon}
            sx={{ width: "25px" }}
          />
        </TableCell>
        <TableCell align="center">
          <Button sx={{ borderRadius: "100%" }}>
            <VisibilityIcon />
          </Button>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function WhatsappTable() {
  const theme = useTheme();
  return (
    <Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: 3 }}
      ></Box>
      <Box>
        <Paper sx={{ borderRadius: "10px" }} elevation={2}>
          <TableContainer
            sx={{
              maxWidth: "100%",
              borderRadius: "8px",
              overflow: "hidden",
              overflowX: "auto",
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center">
                    <Typography fontWeight="700">Nome</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography fontWeight="700">Telefone</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography fontWeight="700">App</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography fontWeight="700">Termômetro</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography fontWeight="700">Origem</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography fontWeight="700">Informações</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loggedExample.map((row) => (
                  <Row
                    key={row.name}
                    row={row}
                    sx={{
                      color: theme.palette.font.alwaysWhite,
                      borderRight: "1px solid black",
                      "&:last-of-type": {
                        borderRight: "none",
                      },
                    }}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Box>
  );
}
