import * as React from "react";
import {
  Box,
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  ButtonGroup,
  Button,
} from "@mui/material";
import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
} from "@mui/icons-material";

function createData(name, telefone, origem, termometro, etiqueta) {
  return {
    name,
    telefone,
    origem,
    termometro,
    etiqueta,
    info: [
      {
        date: "12/12/2025",
        status: "OK",
        etapa: "NULL",
        evento: "NULL",
        plataforma: "META",
      },
    ],
  };
}

const rows = [
  createData(
    "Thiago Souza",
    "(38) 99999-9999",
    "WhatsApp",
    "Lead Quente",
    "Lead Agendado"
  ),
];

function Row({ row }) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow hover>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>

        <TableCell align="right">{row.telefone}</TableCell>
        <TableCell align="right">{row.origem}</TableCell>
        <TableCell align="right">{row.termometro}</TableCell>
        <TableCell align="right">{row.etiqueta}</TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                mt: 2,
              }}
            >
              <ButtonGroup>
                <Button>Contato</Button>
                <Button>UTM</Button>
                <Button variant="contained">Disparo do Pixel</Button>
                <Button>Agendamento</Button>
                <Button>Compra</Button>
              </ButtonGroup>
            </Box>
            <Box margin={2}>
              <Typography variant="subtitle1" gutterBottom component="div">
                Disparo do Pixel
              </Typography>

              <Table size="small" aria-label="history">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Etapa</TableCell>
                    <TableCell>Evento</TableCell>
                    <TableCell>Plataforma</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {row.info.map((historyRow, idx) => (
                    <TableRow key={idx}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.status}</TableCell>
                      <TableCell>{historyRow.etapa}</TableCell>
                      <TableCell>{historyRow.evento}</TableCell>
                      <TableCell>{historyRow.plataforma}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

// -- The full table component
export default function ReportsTable() {
  return (
    <TableContainer sx={{ maxWidth: "100%" }}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Nome</TableCell>
            <TableCell align="right">Telefone</TableCell>
            <TableCell align="right">Origem</TableCell>
            <TableCell align="right">Termômetro</TableCell>
            <TableCell align="right">Etiqueta</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
