export type Task = {
  descripton: string;
  status: string;
};

export interface TodoState {
  listedTasks: Task[];
  doneTasks: Task[];
}
