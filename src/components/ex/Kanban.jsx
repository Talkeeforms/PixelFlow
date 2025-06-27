import { useState } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import KanbanCard from "./KanbardCard";

const exampleTasks = [
  {
    id: "1",
    content: "test1",
  },
  {
    id: "2",
    content: "test2",
  },
  {
    id: "3",
    content: "test3",
  },
  {
    id: "4",
    content: "test4",
  },
];

export default function Kanban() {
  const [tasks, setTasks] = useState(exampleTasks);

  const handleOnDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(tasks);

    const [reorderedItem] = items.splice(result.source.index, 1);

    items.splice(result.destination.index, 0, reorderedItem);

    setTasks(items);
  };

  return (
    <Box>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="tasks">
          {(provided, snapshot) => (
            <Box
              {...provided.droppableProps}
              ref={provided.innerRef}
              sx={{
                background: snapshot.isDraggingOver ? "lightblue" : "lightgrey",
                padding: 2,
                width: 350,
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" sx={{ marginBottom: 2 }}>
                Teste Kanban
              </Typography>
              {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided, snapshot) => (
                    <KanbanCard
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      task={task}
                      isDragging={snapshot.isDragging}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  );
}
