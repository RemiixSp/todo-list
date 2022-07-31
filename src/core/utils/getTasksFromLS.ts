export const getListedTasksFromLS = () => {
  const data = localStorage.getItem('todos');
  return data ? JSON.parse(data)['listedTasks'] : [];
};

export const getDoneTasksFromLS = () => {
  const data = localStorage.getItem('todos');
  return data ? JSON.parse(data)['doneTasks'] : [];
};
