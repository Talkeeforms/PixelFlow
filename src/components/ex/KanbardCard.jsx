import { Paper } from "@mui/material";
import React, { forwardRef } from "react";

const KanbanCard = React.forwardRef(({ task, isDragging, ...props }, ref) => {
  return (
    <Paper
      ref={ref}
      {...props}
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        width: "100%",
        height: "6rem",
        padding: "20px",
        margin: "10px",
      }}
    >
      {task.content}
    </Paper>
  );
});

export default KanbanCard;
