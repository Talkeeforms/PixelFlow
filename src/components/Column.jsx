import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import TaskCard from "./TaskCard";
import DragHandleIcon from "@mui/icons-material/DragHandle";

const Column = React.memo(({ column, tasks, index, isMobile }) => {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <Paper
          {...provided.draggableProps}
          ref={provided.innerRef}
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: 1,
            width: isMobile ? "90vw" : 300,
            height: isMobile ? "none" : "75vh",
            backgroundColor: "#f4f5f7",
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
