export const getTasksFromLS = () => {
  const data = localStorage.getItem('todos');
  const listedData = data ? JSON.parse(data)?.listedTasks : [];
  const doneData = data ? JSON.parse(data)?.doneTasks : [];
  return { listedData, doneData };
};
