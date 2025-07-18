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

import React from "react";
import CustomSwitch from "./CustomSwitch";

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
  return (
    <React.Fragment>
      <TableRow>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="center">{row.date}</TableCell>
        <TableCell align="center">
          <CustomSwitch checked={true} />
        </TableCell>
        <TableCell align="right">
          <DisconnectButton />
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function LoggedTable() {
  const theme = useTheme();
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 3 }}>
        <Typography fontWeight="700">Usuários Logados</Typography>
      </Box>
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
                  <TableCell>
                    <Typography fontWeight="700">Nome</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography fontWeight="700">Data</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography fontWeight="700">Status</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography fontWeight="700">Ação</Typography>
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
