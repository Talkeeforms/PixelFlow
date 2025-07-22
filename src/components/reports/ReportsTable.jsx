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
  Divider,
} from "@mui/material";
import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
} from "@mui/icons-material";
import { useTheme } from "@mui/material";

import tableHeadBackground from "@/styles/REPORTS/BackgroundTableHead.png";

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
  createData(
    "Thiago Souza",
    "(38) 99999-9999",
    "WhatsApp",
    "Lead Quente",
    "Lead Agendado"
  ),
  createData(
    "Thiago Souza",
    "(38) 99999-9999",
    "WhatsApp",
    "Lead Quente",
    "Lead Agendado"
  ),
  createData(
    "Thiago Souza",
    "(38) 99999-9999",
    "WhatsApp",
    "Lead Quente",
    "Lead Agendado"
  ),
  createData(
    "Thiago Souza",
    "(38) 99999-9999",
    "WhatsApp",
    "Lead Quente",
    "Lead Agendado"
  ),
  createData(
    "Thiago Souza",
    "(38) 99999-9999",
    "WhatsApp",
    "Lead Quente",
    "Lead Agendado"
  ),
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
  const [selected, setSelected] = React.useState("Disparo do Pixel");
  const buttons = [
    "Contato",
    "UTM",
    "Disparo do Pixel",
    "Agendamento",
    "Compra",
  ];

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

        <TableCell align="center">{row.telefone}</TableCell>
        <TableCell align="center">{row.origem}</TableCell>
        <TableCell align="center">{row.termometro}</TableCell>
        <TableCell align="center">{row.etiqueta}</TableCell>
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
                {buttons.map((label) => (
                  <Button
                    key={label}
                    variant={selected === label ? "contained" : "outlined"}
                    onClick={() => setSelected(label)}
                  >
                    {label}
                  </Button>
                ))}
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

export default function ReportsTable() {
  const theme = useTheme();
  return (
    <TableContainer
      sx={{
        borderRadius: "8px",
        overflow: "hidden",
        overflowX: "auto",
        maxWidth: "100vw",
      }}
    >
      <Table aria-label="collapsible table">
        <TableHead
          sx={{
            backgroundImage: `url(${tableHeadBackground})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <TableRow>
            <TableCell />
            <TableCell
              sx={{
                color: theme.palette.font.alwaysWhite,
                borderRight: "1px solid #ccc",
                "&:last-of-type": {
                  borderRight: "none",
                },
              }}
            >
              Nome
            </TableCell>
            <TableCell
              sx={{
                color: theme.palette.font.alwaysWhite,
                borderRight: "1px solid #ccc",
                "&:last-of-type": {
                  borderRight: "none",
                },
              }}
              align="center"
            >
              Telefone
            </TableCell>
            <TableCell
              sx={{
                color: theme.palette.font.alwaysWhite,
                borderRight: "1px solid #ccc",
                "&:last-of-type": {
                  borderRight: "none",
                },
              }}
              align="center"
            >
              Origem
            </TableCell>
            <TableCell
              sx={{
                color: theme.palette.font.alwaysWhite,
                borderRight: "1px solid #ccc",
                "&:last-of-type": {
                  borderRight: "none",
                },
              }}
              align="center"
            >
              Termômetro
            </TableCell>
            <TableCell
              sx={{
                color: theme.palette.font.alwaysWhite,
                borderRight: "1px solid #ccc",
                "&:last-of-type": {
                  borderRight: "none",
                },
              }}
              align="center"
            >
              Etiqueta
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
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
  );
}
