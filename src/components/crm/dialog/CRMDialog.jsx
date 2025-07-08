import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Button,
  Typography,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useState } from "react";
import { useTheme } from "@emotion/react";

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
          },
        }}
      >
        <DialogContent>
          <Box
            sx={{
              height: "80vh",
              width: "100%",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "15px",
            }}
          >
            <Box
              sx={{
                borderRadius: "25px",
                backgroundColor: "white",
                display: "grid",
                gridTemplateRows: "1fr 5fr",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "blue",
                  padding: "7px 10px 5px 10px",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography fontWeight={700} sx={{ color: "white" }}>
                  UTM
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                borderRadius: "25px",
                backgroundColor: "white",
                display: "grid",
                gridTemplateRows: "1fr 5fr",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "blue",
                  padding: "7px 10px 5px 10px",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography fontWeight={700} sx={{ color: "white" }}>
                  JORNADA DE <br /> CONVERSÃO
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateRows: "1fr 1fr",
                gap: "15px",
              }}
            >
              <Box
                sx={{
                  borderRadius: "25px",
                  backgroundColor: "white",
                  display: "grid",
                  gridTemplateRows: "2fr 5fr",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "blue",
                    padding: "7px 10px 5px 10px",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography fontWeight={700} sx={{ color: "white" }}>
                    AGENDAMENTO
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  borderRadius: "25px",
                  backgroundColor: "white",
                  display: "grid",
                  gridTemplateRows: "2fr 5fr",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "blue",
                    padding: "7px 10px 5px 10px",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography fontWeight={700} sx={{ color: "white" }}>
                    FATURAMENTO
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
