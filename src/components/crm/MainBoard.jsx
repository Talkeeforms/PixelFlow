import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";
import { initialData } from "./initial-data";
import Column from "./Column";
import AddColumn from "./AddColumn";

export default function MainBoard() {
  const [boardData, setBoardData] = useState(initialData);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "COLUMN") {
      const newColumnOrder = Array.from(boardData.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...boardData,
        columnOrder: newColumnOrder,
      };

      setBoardData(newState);
      return;
    }

    const startColumn = boardData.columns[source.droppableId];
    const finishColumn = boardData.columns[destination.droppableId];

    if (startColumn === finishColumn) {
      const newTaskIds = Array.from(startColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...startColumn,
        taskIds: newTaskIds,
      };

      const newState = {
        ...boardData,
        columns: {
          ...boardData.columns,
          [newColumn.id]: newColumn,
        },
      };
      setBoardData(newState);
      return;
    }

    const startTaskIds = Array.from(startColumn.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStartColumn = {
      ...startColumn,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finishColumn.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinishColumn = {
      ...finishColumn,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...boardData,
      columns: {
        ...boardData.columns,
        [newStartColumn.id]: newStartColumn,
        [newFinishColumn.id]: newFinishColumn,
      },
    };
    setBoardData(newState);
  };

  const handleAddColumn = (title = "Nova Coluna") => {
    const newId = `column-${Date.now()}`;
    const newColumn = {
      id: newId,
      title,
      taskIds: [],
    };

    setBoardData((prev) => ({
      ...prev,
      columns: {
        ...prev.columns,
        [newId]: newColumn,
      },
      columnOrder: [...prev.columnOrder, newId],
    }));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable
        droppableId="all-columns"
        direction={isMobile ? "vertical" : "horizontal"}
        type="COLUMN"
      >
        {(provided) => (
          <Box>
            <Box
              {...provided.droppableProps}
              ref={provided.innerRef}
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: isMobile ? "center" : "flex-start",
                padding: 2,
                overflowX: isMobile ? "hidden" : "auto",
                overflowY: isMobile ? "auto" : "hidden",
              }}
            >
              {boardData.columnOrder.map((columnId, index) => {
                const column = boardData.columns[columnId];
                const tasks = column.taskIds.map(
                  (taskId) => boardData.tasks[taskId]
                );
                return (
                  <Column
                    key={column.id}
                    column={column}
                    tasks={tasks}
                    index={index}
                    isMobile={isMobile}
                  />
                );
              })}
              {provided.placeholder}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AddColumn onAddColumn={handleAddColumn} />
              </Box>
            </Box>
          </Box>
        )}
      </Droppable>
    </DragDropContext>
  );
}
