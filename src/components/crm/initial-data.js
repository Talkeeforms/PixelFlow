export const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Tarefa" },
    "task-2": { id: "task-2", content: "Tarefa" },
    "task-3": { id: "task-3", content: "Tarefa" },
    "task-4": { id: "task-4", content: "Tarefa" },
    "task-5": { id: "task-5", content: "Tarefa" },
    "task-6": { id: "task-6", content: "Tarefa" },
    "task-7": { id: "task-7", content: "Tarefa" },
    "task-8": { id: "task-8", content: "Tarefa" },
    "task-9": { id: "task-9", content: "Tarefa" },
    "task-10": { id: "task-10", content: "Tarefa" },
    "task-11": { id: "task-11", content: "Tarefa" },
    "task-12": { id: "task-12", content: "Tarefa" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Novos Leads",
      taskIds: ["task-1", "task-2", "task-3"],
    },
    "column-2": {
      id: "column-2",
      title: "Em Tratativa",
      taskIds: ["task-4"],
    },
    "column-3": {
      id: "column-3",
      title: "Leads Estagnados",
      taskIds: ["task-5"],
    },
    "column-4": {
      id: "column-4",
      title: "Agendados",
      taskIds: ["task-6"],
    },
    "column-5": {
      id: "column-5",
      title: "Compareceram",
      taskIds: ["task-7", "task-8", "task-9", "task-10", "task-11", "task-12"],
    },
    "column-6": {
      id: "column-6",
      title: "Não Compareceram",
      taskIds: [],
    },
  },
  // We use this to remember the order of the columns
  columnOrder: [
    "column-1",
    "column-2",
    "column-3",
    "column-4",
    "column-5",
    "column-6",
  ],
};
