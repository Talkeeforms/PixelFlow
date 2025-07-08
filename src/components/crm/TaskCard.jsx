import React from "react";
import { Paper, Box, Typography, Button, Chip } from "@mui/material";
import { Draggable } from "@hello-pangea/dnd";
import { useTheme } from "@mui/material";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import TurnRightIcon from "@mui/icons-material/TurnRight";

import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";

import metaIcon from "@/styles/ICONS/CRM/MiniCards/meta.webp";
import facebookIcon from "@/styles/ICONS/CRM/MiniCards/facebook.png";

import CRMDialog from "./dialog/CRMDialog";

//MiniCards
import OriginMiniCard from "./minicards/OriginMiniCard";
import SourceMiniCard from "./minicards/SourceMiniCard";
import StatusMiniCard from "./minicards/StatusMiniCard";
import EventMiniCard from "./minicards/EventMiniCard";
import ChatMiniCard from "./minicards/ChatMiniCard";
import ChartMiniCard from "./minicards/ChartMiniCard";

const modeloCard = {
  nome: "Pedro",
  data: "22/01/2025, 11:25:05",
  telefone: "(00) 0 0000-0000",
  app: "",
  lead: "red",
  origin: metaIcon,
  source: facebookIcon,
  currentStatus: "Conversa Iniciada",
  event: "ViewContent",
};

const TaskCard = React.memo(({ task, index }) => {
  const theme = useTheme();
  const open = false;

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
            margin: "0 0 15px 0",
            height: "350px",
            backgroundColor: snapshot.isDragging
              ? "lightgreen"
              : theme.palette.background.default,
            ...provided.draggableProps.style,
            borderRadius: "15px",
            borderTop: `7px solid ${modeloCard.lead}`,
            border: `1px solid ${theme.palette.border.kanbanCard}}`,
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateRows: "2fr 1fr 1fr 1fr 1fr",
              backgroundColor: theme.palette.background.kanbanCard,
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
                    gridTemplateColumns: "1fr 1fr",
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
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "2fr 1fr",
                    }}
                  >
                    <CRMDialog />

                    <Box sx={{ display: "flex" }}>
                      <Button sx={{ borderRadius: "100%" }}>
                        <TurnRightIcon
                          sx={{ fontSize: "25px", color: "blue" }}
                        />
                      </Button>
                    </Box>
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
                display: "grid",
                gridTemplateColumns: "2.5fr 1fr",
              }}
            >
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                    backgroundColor: "white",
                  }}
                >
                  <PhoneInTalkOutlinedIcon sx={{ color: "blue" }} />
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <OriginMiniCard cardData={modeloCard} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SourceMiniCard cardData={modeloCard} />
              </Box>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
              }}
            >
              <StatusMiniCard cardData={modeloCard} />
              <EventMiniCard cardData={modeloCard} />
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
              }}
            >
              <ChatMiniCard />
              <ChartMiniCard />
            </Box>
          </Box>
        </Paper>
      )}
    </Draggable>
  );
});

export default TaskCard;
