import React from "react";
import { Paper } from "@mui/material";
import { Draggable } from "@hello-pangea/dnd";
import { useTheme } from "@mui/material";

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
            backgroundColor: snapshot.isDragging
              ? "lightgreen"
              : theme.palette.background.default,
            ...provided.draggableProps.style,
          }}
        >
          {task.content}
        </Paper>
      )}
    </Draggable>
  );
});

export default TaskCard;
