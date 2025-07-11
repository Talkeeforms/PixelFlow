import { Dialog, DialogContent, Box, Button, Typography } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import DialogBoxWeb from "./DIalogBoxWeb";
import DialogBoxMobile from "./DialogBoxMobile";

export default function CRMDialog() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box
      sx={{
        display: "flex",
        gap: "",
      }}
    >
      <Button sx={{ borderRadius: "100%" }} onClick={handleOpen}>
        <VisibilityOutlinedIcon
          sx={{ fontSize: "25px", color: theme.palette.font.kanbanCardIcons }}
        />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="lg"
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "25px",
            backgroundColor: "#DBDBDB",
            width: { md: "60%", xs: "100%" },
            maxWidth: "100%",
            margin: 0,
            height: { xs: "100vh", md: "auto" },
            borderRadius: { xs: 0, md: "25px" },
          },
          "& .MuiDialog-container": {
            alignItems: { md: "center", xs: "stretch" },
            height: { xs: "100vh" },
          },
        }}
      >
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <DialogBoxWeb />
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <DialogBoxMobile />
        </Box>
        <Box
          sx={{
            display: { md: "none", xs: "flex" },
            position: "relative",

            bottom: 10,
            width: "100%",
          }}
        >
          <Box
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Button variant="contained" onClick={handleClose}>
              Fechar
            </Button>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
}
