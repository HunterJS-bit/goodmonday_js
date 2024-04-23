export interface Task {
  id?: string;
  title: string;
  done: boolean;
}

export interface TaskCreatePayload {
  id?: string;
  title: string;
  done: boolean;
}

export interface TaskUpdatePayload {
  title: string;
  done: boolean;
}
