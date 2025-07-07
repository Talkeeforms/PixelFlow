import React from "react";
import { Paper, Box, Typography, Button } from "@mui/material";
import { Draggable } from "@hello-pangea/dnd";
import { useTheme } from "@mui/material";
import DragHandleIcon from "@mui/icons-material/DragHandle";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import TurnRightIcon from "@mui/icons-material/TurnRight";
import DrawIcon from "@mui/icons-material/Draw";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const modeloCard = {
  nome: "Pedro",
  data: "22/01/2025, 11:25:05",
  telefone: "(00) 0 0000-0000",
  app: "",
  lead: "red",
};

const TaskCard = React.memo(({ task, index }) => {
  const theme = useTheme();
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Paper
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          sx={{
            userSelect: "none",
            padding: 0.3,
            color: theme.palette.font.default,
            margin: "0 0 8px 0",
            height: "390px",
            backgroundColor: snapshot.isDragging
              ? "lightgreen"
              : theme.palette.background.default,
            ...provided.draggableProps.style,
            borderRadius: "15px",
            border: "1px solid #FFFFFF",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateRows: "1.3fr 1fr 1fr 1fr",
              backgroundColor: "#F1F1F1",
              width: "100%",
              height: "100%",
              borderRadius: "15px",
            }}
          >
            <Box
              sx={{
                gridRow: 1,
                display: "grid",
                gridTemplateColumns: "2fr 4fr",
                width: "100%",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#D9D9D7",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "100%",
                    padding: "5px",
                  }}
                >
                  <AccountCircleOutlinedIcon
                    sx={{ fontSize: "70px", color: "blue" }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateRows: "1fr 1fr",
                }}
              >
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-end",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        gap: "5px",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography fontWeight={700}>
                        {modeloCard.nome}
                      </Typography>
                      <FiberManualRecordIcon
                        sx={{ fontSize: "14px", color: modeloCard.lead }}
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button sx={{ borderRadius: "100%" }}>
                      <TurnRightIcon sx={{ fontSize: "30px", color: "blue" }} />
                    </Button>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    {modeloCard.data}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                gridRow: 2,
                display: "grid",
                gridTemplateRows: "1fr 1fr",
              }}
            >
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    height: "100%",
                    paddingLeft: 2,
                    gap: 1,
                  }}
                >
                  <Typography fontWeight={700}>Telefone:</Typography>
                  <Typography>{modeloCard.telefone}</Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                }}
              >
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      height: "100%",
                      paddingLeft: 2,
                      gap: 1,
                    }}
                  >
                    <Typography fontWeight={700}>App:</Typography>
                    <Typography></Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                      paddingLeft: 3,
                    }}
                  >
                    <Typography>Ação</Typography>
                    <DrawIcon />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                gridRow: 3,
                backgroundColor: "green",
                display: "grid",
                gridTemplateRows: "2fr 1fr",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#ACFC72",
                  display: "grid",

                  gridTemplateColumns: "2fr 1fr",
                }}
              >
                {" "}
                <Box sx={{ backgroundColor: "#FCEC72" }}></Box>
                <Box sx={{ backgroundColor: "#9DFF10" }}></Box>
              </Box>
              <Box sx={{ backgroundColor: "#72FCD0" }}></Box>
            </Box>
            <Box
              sx={{
                gridRow: 4,
                display: "grid",
                gridTemplateRows: "1fr 1fr",
              }}
            >
              <Box sx={{ backgroundColor: "#FCB972" }}></Box>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#FCCD72",
                  }}
                ></Box>
                <Box sx={{}}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <WhatsAppIcon sx={{ fontSize: "30px" }} />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Paper>
      )}
    </Draggable>
  );
});

export default TaskCard;
