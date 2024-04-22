export interface Task {
    id?: string;
    text: string;
    isDone: boolean;
}

export interface TaskCreatePayload {
    id?: string;
    text: string;
    done: boolean;
}

export interface TaskUpdatePayload {
    title: string;
    done: boolean;
}