import {
  Box,
  Paper,
  Typography,
  Chip,
  LinearProgress,
  Button,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material";
import whatsappIcon from "@/styles/ICONS/Social/whatsapp2.svg";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";
import CallIcon from "@mui/icons-material/Call";
import HistoryIcon from "@mui/icons-material/History";
import SignalCellularConnectedNoInternet0BarIcon from "@mui/icons-material/SignalCellularConnectedNoInternet0Bar";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const ConnectionModel = {
  type: "WhatsApp",
  id: "16",
  state: "Padrão",
  status: "Conectado",
  phone: "(38) 99999-9999",
  data: "31/12/1969 12:00",
};

export default function ConnectionCard() {
  const theme = useTheme();
  return (
    <Box>
      <Paper sx={{ height: "310px", borderRadius: "20px" }} elevation={5}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "grid",
            gridTemplateRows: "1.5fr 1fr 1fr",
            paddingLeft: "15px",
            paddingRight: "15px",
            paddingBottom: "10px",
            paddingTop: "10px",
            gap: "10px",
          }}
        >
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 4fr 1.2fr" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "10px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#7135d0",
                  borderRadius: "100%",
                  width: "55px",
                  height: "55px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src={whatsappIcon}
                  sx={{ width: "30px", height: "auto" }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "2px",
                paddingLeft: "10px",
              }}
            >
              <Typography fontWeight="700">{ConnectionModel.type}</Typography>
              <Typography fontWeight="500" color="gray">
                ID: {ConnectionModel.id}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Chip
                icon={<CheckCircleIcon sx={{ fontSize: "20px" }} />}
                label="Padrão"
                color="success"
                sx={{
                  marginRight: "0px",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "700",
                }}
              />
            </Box>
          </Box>
          <Divider sx={{ width: "100%" }} />
          <Box
            sx={{
              display: "grid",
              gridTemplateRows: "1fr 1fr 1fr",
              gap: "10px",
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "2fr 6fr",
              }}
            >
              <Box sx={{ marginLeft: "10px" }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <SignalCellular4BarIcon />
                  <Typography color="success" sx={{ marginLeft: "5px" }}>
                    {ConnectionModel.status}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LinearProgress
                  variant="determinate"
                  value={100}
                  sx={{
                    padding: "4px",
                    borderRadius: "20px",
                    backgroundColor: "#7135d0",
                    width: "90%",
                  }}
                  color="#7135d0"
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { md: "0.6fr 6fr", xs: "1fr 6fr" },
              }}
            >
              <Box sx={{ marginLeft: "10px" }}>
                <Box
                  sx={{ display: "flex", alignItems: "flex-end", gap: "10px" }}
                >
                  <CallIcon />
                </Box>
              </Box>
              <Box>
                <Typography>(38) 99999-9999</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { md: "0.6fr 6fr", xs: "1fr 6fr" },
              }}
            >
              <Box sx={{ marginLeft: "10px" }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <HistoryIcon />
                </Box>
              </Box>
              <Box>
                <Typography>31/12/1969 12:00</Typography>
              </Box>
            </Box>
          </Box>
          <Divider sx={{ width: "100%" }} />
          <Box
            sx={{ display: "grid", gridTemplateRows: "1.2fr 1fr", gap: "5px" }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                sx={{
                  width: "100%",
                  height: "90%",
                  borderRadius: "20px",
                  gap: "10px",
                  border: "0.1px solid red",
                  color: "red",
                }}
              >
                <SignalCellularConnectedNoInternet0BarIcon />
                Desconectar{" "}
              </Button>
            </Box>
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 4fr 1fr" }}>
              <Box>
                <Button sx={{ color: "#7135d0" }} startIcon={<EditIcon />}>
                  Editar
                </Button>
              </Box>
              <Box></Box>
              <Box>
                <Button sx={{ color: "red" }} startIcon={<DeleteIcon />}>
                  Excluir
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
