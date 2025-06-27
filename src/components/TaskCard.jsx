import React from "react";
import { Paper } from "@mui/material";
import { Draggable } from "@hello-pangea/dnd";

const TaskCard = React.memo(({ task, index }) => {
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
            margin: "0 0 8px 0",
            backgroundColor: snapshot.isDragging ? "lightgreen" : "white",
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
