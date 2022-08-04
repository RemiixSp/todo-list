export const getTasksFromLS = () => {
  const data = localStorage.getItem('todos');
  const listedTasks = data ? JSON.parse(data)?.listedTasks : [];
  const doneTasks = data ? JSON.parse(data)?.doneTasks : [];
  return { listedTasks, doneTasks };
};
