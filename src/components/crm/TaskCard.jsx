import React from "react";
import { Paper, Box, Typography } from "@mui/material";
import { Draggable } from "@hello-pangea/dnd";
import { useTheme } from "@mui/material";
import DragHandleIcon from "@mui/icons-material/DragHandle";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import TurnRightIcon from "@mui/icons-material/TurnRight";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

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
            padding: 2,
            color: theme.palette.font.default,
            margin: "0 0 8px 0",
            height: "120px",
            backgroundColor: snapshot.isDragging
              ? "lightgreen"
              : theme.palette.background.default,
            ...provided.draggableProps.style,
            borderRadius: "15px",
            borderLeft: "8px solid #25AF3E",
          }}
        >
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
                justifyContent: "flex-start",
              }}
            >
              <Box>
                <AccountCircleIcon fontSize="large" sx={{ color: "#7B8BAA" }} />
              </Box>
              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
                <Box>
                  <VisibilityIcon sx={{ color: "#7B8BAA" }} />
                </Box>
                <Box>
                  <QuestionAnswerIcon sx={{ color: "#7B8BAA" }} />
                </Box>
                <Box>
                  <TurnRightIcon sx={{ color: "#7B8BAA" }} />
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "5fr 1fr",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box>
                  <Typography>Thiago</Typography>
                </Box>
                <Box>
                  <Typography>31/12/2024, 12:59:59</Typography>
                </Box>
              </Box>
              <Box sx={{ alignSelf: "end", gridColumn: "2" }}>
                <WhatsAppIcon sx={{ color: "#7B8BAA" }} />
              </Box>
            </Box>
          </Box>
        </Paper>
      )}
    </Draggable>
  );
});

export default TaskCard;
