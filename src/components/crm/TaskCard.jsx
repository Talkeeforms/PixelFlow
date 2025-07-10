import React from "react";
import { Paper, Box, Typography, Button, Chip } from "@mui/material";
import { Draggable } from "@hello-pangea/dnd";
import { useTheme } from "@mui/material";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import TurnRightIcon from "@mui/icons-material/TurnRight";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";

import CRMDialog from "./dialog/CRMDialog";

//MiniCards
import OriginMiniCard from "./minicards/OriginMiniCard";
import SourceMiniCard from "./minicards/SourceMiniCard";
import StatusMiniCard from "./minicards/StatusMiniCard";
import EventMiniCard from "./minicards/EventMiniCard";
import ChatMiniCard from "./minicards/ChatMiniCard";
import ChartMiniCard from "./minicards/ChartMiniCard";

const TaskCard = React.memo(({ task, index }) => {
  const theme = useTheme();

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Paper
          elevation={2}
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
            borderTop: `7px solid ${task.lead}`,
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
                    backgroundColor: theme.palette.background.kanbanCardAccount,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "100%",
                    padding: "5px",
                  }}
                >
                  <AccountCircleOutlinedIcon
                    sx={{
                      fontSize: "70px",
                      color: theme.palette.font.kanbanCardUser,
                    }}
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
                    gridTemplateColumns: "4fr 2fr",
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
                      <Typography fontWeight={700}>{task.nome}</Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      justifyItems: "end",
                    }}
                  >
                    <CRMDialog />

                    <Box sx={{ display: "flex" }}>
                      <Button sx={{ borderRadius: "100%" }}>
                        <TurnRightIcon
                          sx={{
                            fontSize: "25px",
                            color: theme.palette.font.kanbanCardIcons,
                          }}
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
                    {task.data}
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
                <Typography>{task.telefone}</Typography>
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
                    backgroundColor: theme.palette.background.kanbanMiniCard,
                  }}
                >
                  <PhoneInTalkOutlinedIcon
                    sx={{ color: theme.palette.font.kanbanCardIcons }}
                  />
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
                <OriginMiniCard cardData={task} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SourceMiniCard cardData={task} />
              </Box>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
              }}
            >
              <StatusMiniCard cardData={task} />
              <EventMiniCard cardData={task} />
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
