export enum Status {
  LISTED = 'listed',
  PINNED = 'pinned',
  DONE = 'deleted',
}

export type Task = {
  description: string;
  status: Status;
};

export interface TodoState {
  listedTasks: Task[];
  doneTasks: Task[];
}
