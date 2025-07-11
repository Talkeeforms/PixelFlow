import {
  Box,
  Button,
  Typography,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { useTheme } from "@mui/material";
import { useState } from "react";

export default function AddColumn({ onAddColumn }) {
  const theme = useTheme();

  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setTitle("");
  };

  const handleSubmit = () => {
    if (!title.trim()) return;
    onAddColumn(title.trim());
    setTitle("");
    handleClose();
  };

  return (
    <Box>
      <Button
        variant="text"
        disableRipple
        onClick={handleClickOpen}
        sx={{
          width: "300px",
          textTransform: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",

          "&:hover": {
            backgroundColor: "inherit",
            boxShadow: "none",
          },
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "100px", color: "#CCCCCC" }}>
            +
          </Typography>
          <Typography sx={{ fontSize: "20px", color: "#CCCCCC" }}>
            Acrescentar coluna
          </Typography>
        </Box>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Teste Coluna</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: "30px" }}
        >
          <TextField
            size="small"
            label="Nome da Coluna"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button variant="contained" onClick={handleSubmit}>
            Adicionar
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
