import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import TaskCard from "./TaskCard";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { useTheme } from "@mui/material";

//Função responsável pela lógica de coluna do CRM;
const Column = React.memo(({ column, tasks, index, isMobile }) => {
  const theme = useTheme();
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <Paper
          {...provided.draggableProps}
          ref={provided.innerRef}
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: 1.5,
            width: isMobile ? "90vw" : 0,
            minWidth: "20vw",
            height: isMobile ? "none" : "75vh",
            backgroundColor: theme.palette.background.kanban,
            borderRadius: "15px",
          }}
        >
          <Typography
            {...provided.dragHandleProps}
            sx={{
              p: 2,
              fontWeight: 700,
              display: "flex",
              justifyContent: "flex-start",
              gap: "10px",
            }}
          >
            <DragHandleIcon />
            {column.title}
          </Typography>
          <Droppable droppableId={column.id} type="TASK">
            {(provided, snapshot) => (
              <Box
                ref={provided.innerRef}
                {...provided.droppableProps}
                sx={{
                  flexGrow: 1,
                  minHeight: "100px",
                  padding: 1,
                  overflowY: isMobile ? "visible" : "auto",
                  backgroundColor: snapshot.isDraggingOver
                    ? "skyblue"
                    : "inherit",
                  transition: "background-color 0.2s ease",
                  borderRadius: "15px",
                }}
              >
                {tasks.map((task, taskIndex) => (
                  <TaskCard key={task.id} task={task} index={taskIndex} />
                ))}
                {provided.placeholder}
              </Box>
            )}
          </Droppable>
        </Paper>
      )}
    </Draggable>
  );
});

export default Column;
